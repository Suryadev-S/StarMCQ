'use client'

import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarTrigger } from "../ui/sidebar";
import { BoxIcon, CircleQuestionMarkIcon, FootprintsIcon, ListChecksIcon, PlayIcon, XIcon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import { setActiveQuestionIndex, setIsRunning } from "@/lib/redux/quiz/quiz-slice";
import { usePathname, useRouter } from "next/navigation";

const QuizSidebar = () => {
    const { activeQuestionIndex, test, isFinished, isRunning } = useSelector((state: RootState) => state.quizReducer);
    const pathName = usePathname();
    const dispatch = useDispatch();
    const router = useRouter();
    const handleNavigate = (i: number) => {
        if (isFinished) router.push('/quiz');
        dispatch(setActiveQuestionIndex(i));
    }
    const handleStart = () => {
        dispatch(setIsRunning(true));
        dispatch(setActiveQuestionIndex(0)); //set active index of the question to be 0th
    }
    return (
        <Sidebar collapsible={'icon'}>
            <SidebarHeader className="border-b h-12">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton>
                            <BoxIcon />
                            <span>Header</span>
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
                {
                    test != null ?
                        <SidebarGroup>
                            <SidebarGroupLabel>{test.meta.mode}</SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    {
                                        // The start button only shows when quiz/test is not finished and not running
                                        (!isFinished && !isRunning) &&
                                        <SidebarMenuItem onClick={() => handleStart()}>
                                            <SidebarMenuButton>
                                                <PlayIcon />
                                                <span>start</span>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    }
                                    {
                                        // The test questions are shown when quiz/test is running as well as when quiz is finished.
                                        (isFinished || isRunning) &&
                                        test.questions.map((q, i) => (
                                            <SidebarMenuItem key={i} onClick={() => handleNavigate(i)}>
                                                <SidebarMenuButton isActive={activeQuestionIndex === i}>
                                                    <CircleQuestionMarkIcon />
                                                    <span>{q.question}</span>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                        ))
                                    }
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                        :
                        <SidebarGroup>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton>
                                            <XIcon />
                                            <span>test schema is null</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                }
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
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