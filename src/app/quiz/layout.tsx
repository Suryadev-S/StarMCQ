import QuizScore from "@/components/quiz/Quiz-score";
import QuizSidebar from "@/components/quiz/Quiz-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { QuizContextProvider } from "@/lib/quiz/quiz-context";
import { ReactNode } from "react";


const QuizPageLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <SidebarProvider>
                <QuizContextProvider>
                    <div className="grid grid-cols-[auto_1fr] h-screen w-full">
                        <div>
                            <QuizSidebar />
                        </div>
                        <main className="grid grid-rows-[auto_1fr]">
                            <div className="bg-sidebar flex gap-2 items-center">
                                <SidebarTrigger />
                                <div>
                                    <QuizScore />
                                </div>
                            </div>
                            <div>
                                {children}
                            </div>
                        </main>
                    </div>
                </QuizContextProvider>
            </SidebarProvider>
        </>
    );
};

export default QuizPageLayout;