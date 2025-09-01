import { ReactNode } from "react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";

const QuizExplanationElement = ({ children, content }: { children: ReactNode, content: string }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Explanation</DialogTitle>
                    <DialogDescription>
                        some desc
                    </DialogDescription>
                    <p className="leading-relaxed">
                        {content}
                    </p>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">close</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default QuizExplanationElement;