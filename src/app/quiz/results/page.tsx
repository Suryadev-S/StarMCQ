'use client'

import { ScoreRadialText } from "@/components/quiz/charts/Quiz-score-radial-text";
import { TimeAnalysis } from "@/components/quiz/charts/Quiz-time-analysis";
import { RootState } from "@/lib/redux/store";
import { useSelector } from "react-redux";

const ResultsPage = () => {
    const { score, test } = useSelector((state: RootState) => state.quizReducer);
    const { remainingTime } = useSelector((state: RootState) => state.quizReducer);
    const quizDuration = test ? test.meta.durationInSeconds : 0;
    const maxMarks = test ? test.meta.maximumMarks : 0;
    const timeTook = quizDuration - remainingTime;
    return (
        <div>
            Hi this is the results page
            <p>you Scored <span>{score}</span> by <span>{test?.meta.maximumMarks}</span></p>
            <p>
                Time took - {Math.floor(timeTook / 60)}:{(timeTook % 60).toString().padStart(2, '0')} sec
            </p>
            <header className="mb-6">
                <h1 className="text-balance text-2xl font-semibold">Results</h1>
                <p className="text-sm text-muted-foreground">A quick breakdown of your performance with visual analytics.</p>
            </header>
            <section>
                <ScoreRadialText score={score} maximumMarks={maxMarks} />
            </section>
            <section>
                <TimeAnalysis timeUsedSec={timeTook} totalDurationSec={quizDuration} />
            </section>
        </div>
    );
};

export default ResultsPage;