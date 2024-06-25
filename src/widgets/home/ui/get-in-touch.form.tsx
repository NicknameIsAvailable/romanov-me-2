"use client"

import { TOrderInputs } from "@/entities/orders"
import { Button } from "@/shared/ui/button"
import { CardContent, CardFooter } from "@/shared/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/shared/ui/form"
import { Input } from "@/shared/ui/input"
import { Textarea } from "@/shared/ui/textarea"
import { useForm } from "react-hook-form"

export const GetInTouchForm = () => {
    const form = useForm<TOrderInputs>()

    return (
        <Form {...form}>
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
                <Button className="w-full">Отправить</Button>
            </CardFooter>
        </Form>
    )
}