'use client'

import { RootState } from "@/lib/redux/store";
import { useSelector } from "react-redux";

const ResultsPage = () => {
    const { score, test } = useSelector((state: RootState) => state.quizReducer)
    return (
        <div>
            Hi this is the results page
            <p>you Scored <span>{score}</span> by <span>{test?.meta.maximumMarks}</span></p>
        </div>
    );
};

export default ResultsPage;