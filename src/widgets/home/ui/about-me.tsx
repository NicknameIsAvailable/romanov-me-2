import { calculateYearsSince } from "@/shared/lib/utils"
import TextRevealByWord from "@/shared/magicui/text-reveal"

export const AboutMe = () => {
    const myBirthday = new Date(2005, 9, 31)
    const startCodingDate = new Date(2021, 5, 1)

    return (
        <section className="container mx-auto min-h-screen" id="about-me">
            <h1 className="text-primary text-5xl font-bold text-center">
                Обо мне
            </h1>
            <TextRevealByWord
                text={`Мне ${calculateYearsSince(myBirthday)} лет, пишу код за деньги уже ${calculateYearsSince(startCodingDate)} года`}
            />
            <TextRevealByWord
                text={`За это время я успел поработать джуном в банке, и шлепнуть кучу лендосов в аутсорсинге. Параллельно работал на фрилансе и совмещал это с учебой. (Я еще не выгорел)`}
            />
        </section>
    )
}