import { TProjectType } from "@/shared/types";
import { TabsContent } from "@/shared/ui/tabs";
import { ProjectList } from "@/widgets/projects";

export const ProjectTypePage = () => {
    const types: TProjectType[] = [
        "commercial",
        "pet-project",
        "test-task",
    ]

    return types.map(type => 
        <TabsContent value={type} key={type}>
            <ProjectList type={type} />
        </TabsContent>
    );
}