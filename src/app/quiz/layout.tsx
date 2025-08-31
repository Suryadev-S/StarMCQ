import QuizSidebar from "@/components/quiz/Quiz-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import QuizSetter from "@/lib/quiz/quiz-setter";
import { ReactNode } from "react";
import localFont from 'next/font/local'
import QuizTimer from "@/components/quiz/Quiz-timer";
import QuizQuitButton from "@/components/quiz/Quiz-quit-button";


const dseg = localFont({
    src: '../../../public/fonts/DSEG7Modern-Regular.woff2',
    variable: '--dseg'
})

const QuizPageLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <SidebarProvider>
                <QuizSetter> {/* client which fetches/sets the quiz, helped in preventing fetching in the layout and making the whole layout client component */}
                    <div className={`grid grid-cols-[auto_1fr] h-screen w-full ${dseg.variable}`}>
                        <div>
                            <QuizSidebar />
                        </div>
                        <main className="grid grid-rows-[auto_1fr]">
                            <header data-name="quiz-header" className="bg-sidebar flex gap-2 items-center py-2.5 px-4 border-b sticky top-0">
                                <SidebarTrigger />
                                {/* <div>
                                    <QuizTimer />
                                </div> */}
                                <div>
                                    <QuizQuitButton />
                                </div>
                            </header>
                            <div>
                                {children}
                            </div>
                        </main>
                    </div>
                </QuizSetter>
            </SidebarProvider>
        </>
    );
};

export default QuizPageLayout;