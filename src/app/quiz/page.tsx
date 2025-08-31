'use client'
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { selectionEvent, setActiveQuestionIndex, setScore, setSelectedOptions } from "@/lib/redux/quiz/quiz-slice";
import store, { RootState } from "@/lib/redux/store";
import { IQuestion, ITest, testMode } from "@/lib/types/quiz";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


const NoActiveQuestionComponent = () => {
    return (
        <div>
            <p>Go ahead and select a question</p>
            <p>Some general Instructions can be here as well</p>
        </div>
    )
}

const ActiveQuestionComponent = ({ a_question, mode }: { a_question: IQuestion, mode: testMode }) => {
    const { selectedOptions } = useSelector((state: RootState) => state.quizReducer);
    const router = useRouter();
    const dispatch = useDispatch();

    const modeDisableMap: Record<string, boolean> = {
        'competitive': selectedOptions[a_question.questionId] ? true : false,
    }
    return (
        <div className="flex justify-around items-center h-full">
            {
                mode != "competitive" &&
                <div>
                    <Button size={'icon'} onClick={() => dispatch(setActiveQuestionIndex('prev'))}>
                        <ArrowLeftIcon />
                    </Button>
                </div>
            }

            <div data-name="quiz-box" className="border border-secondary rounded-md px-6 py-8 w-140 min-h-120 max-h-160 overflow-auto text-sm leading-relaxed">
                <p>
                    {a_question.question}
                </p>
                <br />
                <br />
                <RadioGroup
                    value={selectedOptions[a_question.questionId] || null}
                    onValueChange={(val) => {
                        dispatch(selectionEvent({ q: a_question, oId: val }))
                        // check immediately
                        if (store.getState().quizReducer.isFinished) {
                            router.push("/quiz/results");
                        }
                    }}
                    disabled={modeDisableMap[mode]}
                >
                    {a_question.options.map((op, i) => (
                        <div className="flex items-center space-x-2" key={i}>
                            <RadioGroupItem value={op.optionId} id={op.optionId} />
                            <Label htmlFor={op.optionId}>{op.optionContent}</Label>
                        </div>
                    ))}
                </RadioGroup>
            </div>

            {
                mode == "competitive" &&
                <div>
                    <Button variant={'secondary'} size={'sm'} onClick={() => {
                        dispatch(selectionEvent({ q: a_question, oId: null }))
                        // check immediately
                        if (store.getState().quizReducer.isFinished) {
                            router.push("/quiz/results");
                        }
                    }}>
                        <span>skip</span>
                    </Button>
                </div>
            }
            
            {
                mode != 'competitive' &&
                <div>
                    <Button size={'icon'} onClick={() => dispatch(setActiveQuestionIndex('next'))}>
                        <ArrowRightIcon />
                    </Button>
                </div>
            }
        </div>
    )
}

const QuizPage = () => {
    const { test, activeQuestionIndex } = useSelector((state: RootState) => state.quizReducer);
    return (
        <>
            {
                activeQuestionIndex != null && test != null ?
                    <ActiveQuestionComponent
                        a_question={test.questions[activeQuestionIndex]}
                        key={activeQuestionIndex}
                        mode={test.meta.mode}
                    /> :
                    <NoActiveQuestionComponent />
            }
        </>
    );
};

export default QuizPage;