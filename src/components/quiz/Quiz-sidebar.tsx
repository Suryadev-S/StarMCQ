'use client'
import { quizzes } from "@/lib/quiz/quiz-store";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { CircleQuestionMarkIcon } from "lucide-react";
import { useQuiz } from "@/lib/quiz/quiz-context";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { setActiveQuestionIndex } from "@/lib/redux/quiz/quiz-slice";

const QuizSidebar = () => {
    const { activeQuestionIndex } = useSelector((state: RootState) => state.quizReducer);
    const dispatch = useDispatch();
    return (
        <Sidebar collapsible={'icon'}>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Quiz</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {quizzes.map((q, i) => (
                                <SidebarMenuItem key={i} onClick={() => dispatch(setActiveQuestionIndex(i))}>
                                    <SidebarMenuButton isActive={activeQuestionIndex === i}>
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