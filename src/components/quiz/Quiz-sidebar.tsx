import { quizzes } from "@/lib/quiz/quiz-store";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { CircleQuestionMarkIcon } from "lucide-react";

const QuizSidebar = () => {
    return (
        <Sidebar collapsible={'icon'}>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Quiz</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {quizzes.map((q, i) => (
                                <SidebarMenuItem key={i}>
                                    <SidebarMenuButton>
                                        <CircleQuestionMarkIcon />
                                        <span>{q.question}</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
};

export default QuizSidebar;