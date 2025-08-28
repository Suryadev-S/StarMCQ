import { ITest } from "../types/quiz";

const testSchema: ITest = {
    id: 'quiz123',
    meta: {
        mode: 'competitive',
        title: 'Come lets test your knowledge',
        durationInSeconds: 80,
        totalQuestions: 10,
        maximumMarks: 100,
    },
    questions: [
        {
            questionId: "q1",
            question: "What is the capital of France?",
            options: [
                { optionId: "o1", optionContent: "Berlin" },
                { optionId: "o2", optionContent: "Madrid" },
                { optionId: "o3", optionContent: "Paris" },
                { optionId: "o4", optionContent: "Rome" },
            ],
            correctOption: "o3",
            points: 10,
        },
        {
            questionId: "q2",
            question: "Which language runs in a web browser?",
            options: [
                { optionId: "o1", optionContent: "Java" },
                { optionId: "o2", optionContent: "C" },
                { optionId: "o3", optionContent: "Python" },
                { optionId: "o4", optionContent: "JavaScript" },
            ],
            correctOption: "o4",
            points: 10,
        },
        {
            questionId: "q3",
            question: "Who developed the theory of relativity?",
            options: [
                { optionId: "o1", optionContent: "Isaac Newton" },
                { optionId: "o2", optionContent: "Albert Einstein" },
                { optionId: "o3", optionContent: "Nikola Tesla" },
                { optionId: "o4", optionContent: "Galileo Galilei" },
            ],
            correctOption: "o2",
            points: 10,
        },
        {
            questionId: "q4",
            question: "Which is the largest ocean on Earth?",
            options: [
                { optionId: "o1", optionContent: "Atlantic Ocean" },
                { optionId: "o2", optionContent: "Indian Ocean" },
                { optionId: "o3", optionContent: "Arctic Ocean" },
                { optionId: "o4", optionContent: "Pacific Ocean" },
            ],
            correctOption: "o4",
            points: 10,
        },
        {
            questionId: "q5",
            question: "Which planet is known as the Red Planet?",
            options: [
                { optionId: "o1", optionContent: "Earth" },
                { optionId: "o2", optionContent: "Mars" },
                { optionId: "o3", optionContent: "Jupiter" },
                { optionId: "o4", optionContent: "Venus" },
            ],
            correctOption: "o2",
            points: 10,
        },
        {
            questionId: "q6",
            question: "What does HTML stand for?",
            options: [
                { optionId: "o1", optionContent: "Hyper Text Markup Language" },
                { optionId: "o2", optionContent: "High Transfer Machine Language" },
                { optionId: "o3", optionContent: "Hyper Tool Multi Language" },
                { optionId: "o4", optionContent: "Home Text Making Logic" },
            ],
            correctOption: "o1",
            points: 10,
        },
        {
            questionId: "q7",
            question: "Which country is known as the Land of the Rising Sun?",
            options: [
                { optionId: "o1", optionContent: "China" },
                { optionId: "o2", optionContent: "Japan" },
                { optionId: "o3", optionContent: "Thailand" },
                { optionId: "o4", optionContent: "India" },
            ],
            correctOption: "o2",
            points: 10,
        },
        {
            questionId: "q8",
            question: "Which gas do plants primarily absorb for photosynthesis?",
            options: [
                { optionId: "o1", optionContent: "Oxygen" },
                { optionId: "o2", optionContent: "Carbon Dioxide" },
                { optionId: "o3", optionContent: "Nitrogen" },
                { optionId: "o4", optionContent: "Hydrogen" },
            ],
            correctOption: "o2",
            points: 10,
        },
        {
            questionId: "q9",
            question: "Which programming language is strongly associated with data science?",
            options: [
                { optionId: "o1", optionContent: "C#" },
                { optionId: "o2", optionContent: "Python" },
                { optionId: "o3", optionContent: "PHP" },
                { optionId: "o4", optionContent: "Swift" },
            ],
            correctOption: "o2",
            points: 10,
        },
        {
            questionId: "q10",
            question: "What is the smallest prime number?",
            options: [
                { optionId: "o1", optionContent: "0" },
                { optionId: "o2", optionContent: "1" },
                { optionId: "o3", optionContent: "2" },
                { optionId: "o4", optionContent: "3" },
            ],
            correctOption: "o3",
            points: 10,
        },
    ]
}

export default testSchema;