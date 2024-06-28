"use client"

import { OrderAPI, TOrderInputs } from "@/entities/orders"
import { Button } from "@/shared/ui/button"
import { CardContent, CardFooter } from "@/shared/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/shared/ui/form"
import { Input } from "@/shared/ui/input"
import { Textarea } from "@/shared/ui/textarea"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { z } from "zod"

export const GetInTouchForm = () => {
    const formSchema = z.object({
        from_email: z.string({
            message: "Укажите почту"
        }).email({
            message: "Это не похоже на почту"
        }),
        from_telegram_url: z.string({
            message: "Укажите ссылку на телегу"
        }).url({
            message: "Это не похоже на ссылку"
        }),
        text: z.string({
            message: "Напишите, что-нибудь"
        }).min(1).max(1000, {
            message: "Максимальная длина 1000 символов"
        })
    })
    const form = useForm<TOrderInputs>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            from_email: "",
            from_telegram_url: "",
            text: ""
        }
    })

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const onSubmit = form.handleSubmit(async (data: TOrderInputs) => {
        setIsLoading(true);
        const response = await OrderAPI.createOrder(data);
        if (response) {
            toast("Заявка отправлена")
        } else {
            toast("Не удалось отправить заявку")
        }
        setIsLoading(false);
    })

    return (
        <Form {...form}>
            <form onSubmit={onSubmit}>
                <CardContent className="flex flex-col gap-4">
                    <FormField
                        control={form.control}
                        name="from_email"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Почта</FormLabel>
                            <FormControl>
                                <Input placeholder="mail@domain.com" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="from_telegram_url"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Ссылка на вашу телегу</FormLabel>
                            <FormControl>
                                <Input placeholder="https://t.me/NicknameIsAvailable" {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="text"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel>Текст</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Есть проектик..." {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                    />
                </CardContent>
                <CardFooter>
                    <Button disabled={isLoading} className="w-full">{isLoading ? "Отправляется..." : "Отправить"}</Button>
                </CardFooter>
            </form>
        </Form>
    )
}