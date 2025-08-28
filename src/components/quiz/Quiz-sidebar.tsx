'use client'

import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { CircleQuestionMarkIcon, FootprintsIcon, ListChecksIcon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { setActiveQuestionIndex } from "@/lib/redux/quiz/quiz-slice";
import { usePathname, useRouter } from "next/navigation";

const QuizSidebar = () => {
    const { activeQuestionIndex, test, isFinished } = useSelector((state: RootState) => state.quizReducer);
    const pathName = usePathname();
    const dispatch = useDispatch();
    const router = useRouter();
    const handleNavigate = (i: number) => {
        if (isFinished) router.push('/quiz');
        dispatch(setActiveQuestionIndex(i));
    }
    return (
        <Sidebar collapsible={'icon'}>
            <SidebarHeader className="border-b">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                            Header
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                {
                    isFinished && <SidebarGroup>
                        <SidebarGroupLabel>Summary</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                <SidebarMenuItem onClick={() => {
                                    router.push('/quiz/results');
                                    dispatch(setActiveQuestionIndex(null));
                                }}>
                                    <SidebarMenuButton isActive={pathName === '/quiz/results'}>
                                        <ListChecksIcon />
                                        <span>Results</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                }
                <SidebarGroup>
                    <SidebarGroupLabel>Quiz</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {test?.questions.map((q, i) => (
                                <SidebarMenuItem key={i} onClick={() => handleNavigate(i)}>
                                    <SidebarMenuButton isActive={activeQuestionIndex === i}>
                                        <CircleQuestionMarkIcon />
                                        <span>{q.question}</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                            {/* {Array.from({ length: 20 }, (_, i) => (
                                <SidebarMenuItem key={i}>
                                    <SidebarMenuButton>
                                        <CircleQuestionMarkIcon />
                                        <span>sample</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))} */}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                            <FootprintsIcon />
                            <span>footer</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar >
    );
};

export default QuizSidebar;