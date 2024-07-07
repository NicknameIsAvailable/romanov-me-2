import { ISkill } from "../types/skill";
import TypeScriptLogo from "@/shared/assets/icons/typescript.svg"
import ReactLogo from "@/shared/assets/icons/react.png"
import NextLogo from "@/shared/assets/icons/nextjs.svg"
import VueLogo from "@/shared/assets/icons/vue.png"
import ReduxLogo from "@/shared/assets/icons/redux.png"
import ZustandLogo from "@/shared/assets/icons/zustand.png"
import MobxLogo from "@/shared/assets/icons/mobx.png"
import NodeLogo from "@/shared/assets/icons/node.png"
import NestLogo from "@/shared/assets/icons/nest.png"

export const skills: ISkill[] = [
    {
        name: "TypeScript",
        description: "Великий и УЖАСНЫЙ JavaScript, но со статической типизацией",
        icon: TypeScriptLogo,
        url: "https://www.typescriptlang.org/"
    },
    {
        name: "React.js",
        description: "Моя любимая библиотека для JS",
        icon: ReactLogo,
        url: "https://react.dev/"
    },
    {
        name: "Next.js",
        description: "Лучший фреймворк для моей любимой библиотеки",
        icon: NextLogo,
        url: "https://nextjs.org/"
    },
    {
        name: "Vue.js",
        description: "Простой реактивный фреймворк для JS",
        icon: VueLogo,
        url: "https://vuejs.org/"
    },
    {
        name: "Redux",
        description: "Большой, неповоротливый, но надежный стейт-менеджер",
        icon: ReduxLogo,
        url: "https://redux.js.org/"
    },
    {
        name: "Zustand",
        description: "Удобный, легковесный стейт-менеджер, который я использую в большинстве своих проектов",
        icon: ZustandLogo,
        url: "https://zustand-demo.pmnd.rs/"
    },
    {
        name: "Mobx",
        description: "Стейт-менеджер, легкий, удобный, как Zustand, но постарше и с ООП",
        icon: MobxLogo,
        url: "https://mobx.js.org/"
    },
    {
        name: "Node.js",
        description: "JS, который работает на сервере",
        icon: NodeLogo,
        url: "https://nodejs.org"
    },
    {
        name: "Nest.js",
        description: "Большой и очень серьезный фреймворк для Node.js",
        icon: NestLogo,
        url: "https://nestjs.com/"
    },
]