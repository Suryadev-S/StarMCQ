import QuizSidebar from "@/components/quiz/Quiz-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ReactNode } from "react";


const QuizPageLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <SidebarProvider>
                <div className="grid grid-cols-[auto_1fr] h-screen">
                    <QuizSidebar />
                    <main>
                        <SidebarTrigger />
                        {children}
                    </main>
                </div>
            </SidebarProvider>
        </>
    );
};

export default QuizPageLayout;