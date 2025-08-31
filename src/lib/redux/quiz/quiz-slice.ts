import { IQuestion, ITest, QuizState } from "@/lib/types/quiz";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: QuizState = {
    test: null,
    activeQuestionIndex: null,
    score: 0,
    selectedOptions: {},
    isFinished: false,
    remainingTime: 0,
    isRunning: false,
}


export const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        setQuiz: (state, action: PayloadAction<ITest>) => {
            state.test = action.payload;
        },
        setRemTime: (state, action: PayloadAction<number>) => {
            state.remainingTime = action.payload;
        },
        setFinished: (state, action: PayloadAction<boolean>) => {
            state.isFinished = action.payload
        },
        setIsRunning: (state, action: PayloadAction<boolean>) => {
            state.isRunning = action.payload;
        },
        setActiveQuestionIndex: (state, action: PayloadAction<'next' | 'prev' | number | null>) => {
            if (state.test) {
                const length = state.test.questions.length;
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
        setScore: (state, action: PayloadAction<number>) => { //not in use
            state.score += action.payload
        },
        selectionEvent: (state, action: PayloadAction<{ q: IQuestion, oId: string | null }>) => {
            const { q: currQuestion, oId: userSelectedOption } = action.payload;
            const isPresent = state.selectedOptions[currQuestion.questionId];

            //add the current question to the response entry
            state.selectedOptions[currQuestion.questionId] = userSelectedOption;

            if (state.test && state.test.meta.mode == 'competitive') {
                if (!isPresent) {
                    if (currQuestion.correctOption == userSelectedOption) {
                        state.score += currQuestion.points;
                    }
                }
                // move to next question
                if (typeof state.activeQuestionIndex === 'number') {
                    state.activeQuestionIndex = (state.activeQuestionIndex + 1) % state.test.meta.totalQuestions;
                }

                // check if finished or not
                if (Object.keys(state.selectedOptions).length == state.test.meta.totalQuestions) {
                    state.isFinished = true;
                    state.activeQuestionIndex = null;
                    state.isRunning = false;
                }
            }
        },
        setSelectedOptions: (state, action: PayloadAction<Record<string, string>>) => { //not in uses
            state.selectedOptions = { ...state.selectedOptions, ...action.payload }
        },
    }
});

export const {
    setQuiz,
    setActiveQuestionIndex,
    setScore,
    setSelectedOptions,
    selectionEvent,
    setRemTime,
    setFinished,
    setIsRunning
} = quizSlice.actions;

export default quizSlice.reducer;