export interface IQuiz {
    quizId: string;
    question: string;
    options: {
        optionId: string;
        optionContent: string;
    }[];
    correctOption: string;
}