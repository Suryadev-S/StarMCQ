'use client'

import { useQuiz } from "@/lib/quiz/quiz-context";
import { RootState } from "@/lib/redux/store";
import { useSelector } from "react-redux";

const QuizScore = () => {
    const { score } = useSelector((state: RootState) => state.quizReducer)
    return (
        <span>{score}</span>
    );
};

export default QuizScore;