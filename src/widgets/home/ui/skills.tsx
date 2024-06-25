import IconCloud from "@/shared/magicui/icon-cloud";
import {MagicCard} from "@/shared/magicui/magic-card";
import SparklesText from "@/shared/magicui/sparkles-text";
import {CardContent, CardHeader} from "@/shared/ui/card";
import {SkillCard} from "@/widgets/home/ui/skill-card";
import LinearGradient from "@/shared/magicui/linear-gradient";
import { skills } from "@/shared/data/skills";

const slugs = [
    "typescript",
    "javascript",
    "react",
    "html5",
    "css3",
    "express",
    "vuedotjs",
    "nuxtdotjs",
    "nextdotjs",
    "nest",
    "nodedotjs",
    "supabase",
    "mongodb",
    "prisma",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "figma",
];

export const Skills = async () => {

    return (
        <MagicCard className="overflow-visible z-[0] bg-opacity-80">
            <CardHeader>
                <SparklesText text="Мои скиллы" className="text-center z-10"/>
            </CardHeader>
            <div className="relative z-10">
                <CardContent className="mt-6 container mx-auto">
                    <h3 className="z-10 text-4xl font-bold">Их очень много, вот самое главное</h3>
                    <div className="z-10 grid md:grid-cols-3 sm:grid-cols-2 gap-4 mt-4">
                        {skills?.map((skill, index) =>
                            <SkillCard data={skill} key={index} />
                        )}
                    </div>
                </CardContent>
            </div>
            <div
                className="absolute z-1 top-0 left-0 flex h-full w-full items-center justify-center overflow-hidden rounded-lg">
                <LinearGradient />
                <IconCloud iconSlugs={slugs}/>
            </div>
        </MagicCard>
    );
};
