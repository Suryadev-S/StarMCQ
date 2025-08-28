export interface IQuestion {
    questionId: string;
    question: string;
    options: {
        optionId: string;
        optionContent: string;
    }[];
    correctOption: string;
    points: number
}

export type QuizState = {
    test: ITest | null,
    activeQuestionIndex: number | null,
    score: number,
    selectedOptions: Record<string, string>,
    isFinished: boolean,
    remainingTime: number,
}

export type testMode = 'competitive' | 'exam' | 'playground';

export interface ITest {
    id: string,
    meta: {
        mode: testMode,
        title: string,
        durationInSeconds: number,
        totalQuestions: number,
        maximumMarks: number,
    },
    questions: IQuestion[]
}