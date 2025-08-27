import { IQuiz } from "@/lib/types/quiz";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type QuizState = {
    quiz: IQuiz[] | null,
    activeQuestionIndex: number | null,
    score: number,
    selectedOptions: Record<string, string>,
}

const initialState: QuizState = {
    quiz: null,
    activeQuestionIndex: null,
    score: 0,
    selectedOptions: {},
}


export const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        setQuiz: (state, action: PayloadAction<IQuiz[]>) => {
            state.quiz = action.payload;
        },
        setActiveQuestionIndex: (state, action: PayloadAction<'next' | 'prev' | number | null>) => {
            if (state.quiz) {
                const length = state.quiz.length;
                if (typeof action.payload == 'number') {
                    state.activeQuestionIndex = action.payload
                }
                else if (action.payload == 'next') {
                    state.activeQuestionIndex = (state.activeQuestionIndex as number + 1) % length;
                }
                else if (action.payload == 'prev') {
                    state.activeQuestionIndex = (state.activeQuestionIndex as number - 1 + length) % length;
                }
                else {
                    state.activeQuestionIndex = action.payload;
                }
            }
        },
        setScore: (state, action: PayloadAction<number>) => {
            state.score += action.payload
        },
        setSelectedOptions: (state, action: PayloadAction<Record<string, string>>) => {
            state.selectedOptions = { ...state.selectedOptions, ...action.payload }
        },
    }
});

export const {
    setQuiz,
    setActiveQuestionIndex,
    setScore,
    setSelectedOptions,
} = quizSlice.actions;

export default quizSlice.reducer;