'use client'

import { RootState } from "@/lib/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog";
import { setActiveQuestionIndex, setFinished, setIsRunning } from "@/lib/redux/quiz/quiz-slice";
import { useRouter } from "next/navigation";

const QuizQuitButton = () => {
    const { isRunning } = useSelector((state: RootState) => state.quizReducer);
    const dispatch = useDispatch();
    const router = useRouter();

    // Quit button is to be shown only when quiz is running otherwise
    // show nothing
    if (!isRunning) return null;

    const handleQuit = () => {
        dispatch(setFinished(true));
        dispatch(setIsRunning(false));
        dispatch(setActiveQuestionIndex(null));
        router.push('/quiz/results');
    }
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button size={'sm'} className="rounded-sm"><span>quit</span></Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => handleQuit()}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default QuizQuitButton;