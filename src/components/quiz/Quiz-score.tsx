'use client'

import { useQuiz } from "@/lib/quiz/quiz-context";

const QuizScore = () => {
    const { score } = useQuiz()
    return (
        <span>{score}</span>
    );
};

export default QuizScore;