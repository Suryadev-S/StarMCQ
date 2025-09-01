'use client'

import { setActiveQuestionIndex, setFinished, setIsRunning, setRemTime } from "@/lib/redux/quiz/quiz-slice";
import { RootState } from "@/lib/redux/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface QTProps {
    rem_Time: number;
    onTimeOut?: () => void;
}

// missing isRunning flag as of now

const Timer = ({ rem_Time, onTimeOut }: QTProps) => {
    const dispatch = useDispatch();
    const [time, setTime] = useState(rem_Time);
    const { isFinished, isRunning } = useSelector((store: RootState) => store.quizReducer);

    useEffect(() => {
        let intervalId: NodeJS.Timeout;
        if (isRunning && !isFinished) {
            intervalId = setInterval(() => {
                setTime((prev) => Math.max(prev - 1, 0));  // Safer decrement
            }, 1000);
        } else {
            dispatch(setRemTime(time));
        }

        return () => clearInterval(intervalId);
    }, [isFinished, isRunning]);

    useEffect(() => {
        if (time === 0 && !isFinished) {
            if (onTimeOut) onTimeOut();
        }
    }, [time, isFinished, onTimeOut]);

    return (
        <div data-name="timer" className="font-dseg">
            {Math.floor(time / 60)}:{(time % 60).toString().padStart(2, '0')}
        </div>
    );
};

const QuizTimer = () => {
    const dispatch = useDispatch();
    const router = useRouter()
    const { test } = useSelector((state: RootState) => state.quizReducer);
    const handleTimeOut = () => {
        dispatch(setFinished(true));
        dispatch(setIsRunning(false));
        dispatch(setActiveQuestionIndex(null));
        router.push('/quiz/results');
    }
    return (
        <>
            {test &&
                (test.meta.mode == 'competitive' || test.meta.mode == 'exam') &&
                <Timer rem_Time={test.meta.durationInSeconds} onTimeOut={handleTimeOut} />}
        </>
    )
}

export default QuizTimer;