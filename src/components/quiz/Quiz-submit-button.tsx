'use client'
import { ReactNode } from "react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";
import axios from 'axios';
import { useRouter } from "next/navigation";

const QuizSubmitButton = ({ children }: { children: ReactNode }) => {
    const { selectedOptions, test } = useSelector((state: RootState) => state.quizReducer);
    const router = useRouter();
    const handleSubmit = async () => {
        try {
            const response = await axios.post('/api/exam', selectedOptions);
            if (response.status != 200) {
                throw new Error('Error in exam api');
            }

            router.push('/quiz/results');
        } catch (error) {
            console.error('There was an error in sending or in exam api')
            console.error(error);
        }
    }
    // only show submit button for exam mode
    if (test == null || test.meta.mode != 'exam') {
        return null
    }
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        You are going to submit the exam
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => handleSubmit()}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default QuizSubmitButton;