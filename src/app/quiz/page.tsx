'use client'
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { setActiveQuestionIndex, setScore, setSelectedOptions } from "@/lib/redux/quiz/quiz-slice";
import { RootState } from "@/lib/redux/store";
import { IQuiz } from "@/lib/types/quiz";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";


const NoActiveQuestionComponent = () => {
    return (
        <div>
            <p>Go ahead and select a question</p>
        </div>
    )
}

const ActiveQuestionComponent = ({ a_question }: { a_question: IQuiz }) => {
    const { selectedOptions } = useSelector((state: RootState) => state.quizReducer);
    const dispatch = useDispatch();
    return (
        <div className="flex justify-around items-center h-full">
            <div>
                <Button size={'icon'} onClick={() => dispatch(setActiveQuestionIndex('prev'))}>
                    <ArrowLeftIcon />
                </Button>
            </div>

            <div data-name="quiz-box" className="border border-secondary rounded-md px-6 py-8 w-140 min-h-120 max-h-160 overflow-auto text-sm leading-relaxed">
                <p>
                    {a_question.question}
                </p>
                <br />
                <br />
                <RadioGroup
                    value={selectedOptions[a_question.quizId] || null}
                    onValueChange={(val) => {
                        dispatch(setSelectedOptions({ [a_question.quizId]: val }));
                        if (val === a_question.correctOption) {
                            dispatch(setScore(1));
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
                <Button size={'icon'} onClick={() => dispatch(setActiveQuestionIndex('next'))}>
                    <ArrowRightIcon />
                </Button>
            </div>
        </div>
    )
}

const QuizPage = () => {
    const { quiz, activeQuestionIndex } = useSelector((state: RootState) => state.quizReducer)
    return (
        <>
            {
                activeQuestionIndex != null && quiz != null ?
                    <ActiveQuestionComponent a_question={quiz[activeQuestionIndex]} key={activeQuestionIndex} /> :
                    <NoActiveQuestionComponent />
            }
        </>
    );
};

export default QuizPage;