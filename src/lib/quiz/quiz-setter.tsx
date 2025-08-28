'use client'

import { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setQuiz } from "../redux/quiz/quiz-slice";
import test from '@/lib/quiz/quiz-store'

const QuizSetter = ({ children }: { children: ReactNode }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setQuiz(test));
    }, [])
    return (
        <>
            {children}
        </>
    );
};

export default QuizSetter;