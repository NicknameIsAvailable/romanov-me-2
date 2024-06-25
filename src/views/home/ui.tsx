import { AboutMe, Projects, Skills, Start } from "@/widgets/home"
import { GetInTouch } from "@/widgets/home/ui/get-in-touch"

export const HomePage = () => {
    return (
        <>
            <Start />
            <AboutMe />
            <Skills />
            {/* <Projects /> */}
            <GetInTouch />
        </>
    )
}