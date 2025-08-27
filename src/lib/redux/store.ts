import { configureStore } from '@reduxjs/toolkit'
import quizReducer from './quiz/quiz-slice'

const store = configureStore({
    reducer: {
        quizReducer
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;