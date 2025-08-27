'use client'

import { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setQuiz } from "../redux/quiz/quiz-slice";
import { quizzes } from "./quiz-store";

const QuizSetter = ({ children }: { children: ReactNode }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setQuiz(quizzes));
    }, [])
    return (
        <>
            {children}
        </>
    );
};

export default QuizSetter;