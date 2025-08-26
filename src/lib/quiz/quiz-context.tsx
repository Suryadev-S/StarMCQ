'use client'

interface IQuizContext {
    activeQuestion: IQuiz | null,
    setActiveQuestion: Dispatch<SetStateAction<IQuiz | null>>;
    score: number;
    setScore: Dispatch<SetStateAction<number>>;
    activeQuestionIndex: number | null;
    setActiveQuestionIndex: Dispatch<SetStateAction<number | null>>;
}

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import { IQuiz } from "../types/quiz";

const QuizContext = createContext<IQuizContext | null>(null);

const QuizContextProvider = ({ children }: { children: ReactNode }) => {
    const [activeQuestion, setActiveQuestion] = useState<IQuiz | null>(null);
    const [score, setScore] = useState<number>(0);
    const [activeQuestionIndex, setActiveQuestionIndex] = useState<number | null>(null)
    return (
        <QuizContext value={{
            activeQuestion,
            setActiveQuestion,
            score,
            setScore,
            activeQuestionIndex,
            setActiveQuestionIndex,
        }}>
            {children}
        </QuizContext>
    );
};

const useQuiz = () => {
    const ctx = useContext(QuizContext);
    if (!ctx) throw new Error('useQuiz must be used within QuizContextProvider');
    return ctx;
}

export {
    QuizContextProvider,
    useQuiz
}