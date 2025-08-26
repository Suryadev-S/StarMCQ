'use client'
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useQuiz } from "@/lib/quiz/quiz-context";
import { quizzes } from "@/lib/quiz/quiz-store";
import { IQuiz } from "@/lib/types/quiz";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";


const NoActiveQuestionComponent = () => {
    return (
        <div>
            <p>Go ahead and select a question</p>
        </div>
    )
}

const ActiveQuestionComponent = ({ a_question }: { a_question: IQuiz }) => {
    const { setActiveQuestionIndex, setScore } = useQuiz()
    return (
        <div className="flex justify-around items-center h-full">
            <div>
                <Button size={'icon'} onClick={() => {
                    setActiveQuestionIndex((prev) => (prev as number - 1 + quizzes.length) % quizzes.length)
                }}>
                    <ArrowLeftIcon />
                </Button>
            </div>

            <div data-name="quiz-box" className="border border-secondary rounded-md px-6 py-8 w-140 min-h-120 max-h-160 overflow-auto text-sm leading-relaxed">
                <p>
                    {a_question.question}
                </p>
                <br />
                <br />
                <RadioGroup onValueChange={(val) => {
                    if (val === a_question.correctOption) {
                        setScore((prev) => prev + 1);
                    }
                }}>
                    {a_question.options.map((op, i) => (
                        <div className="flex items-center space-x-2" key={i}>
                            <RadioGroupItem value={op.optionId} id={op.optionId} />
                            <Label htmlFor={op.optionId}>{op.optionContent}</Label>
                        </div>
                    ))}
                </RadioGroup>
            </div>

            <div>
                <Button size={'icon'} onClick={() => {
                    setActiveQuestionIndex((prev) => (prev as number + 1) % quizzes.length)
                }}>
                    <ArrowRightIcon />
                </Button>
            </div>
        </div>
    )
}

const QuizPage = () => {
    const { activeQuestionIndex } = useQuiz()
    return (
        <>
            {
                activeQuestionIndex != null ?
                    <ActiveQuestionComponent a_question={quizzes[activeQuestionIndex]} /> :
                    <NoActiveQuestionComponent />
            }
        </>
    );
};

export default QuizPage;