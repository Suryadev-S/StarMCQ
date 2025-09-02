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
            explanation: "Paris is the capital and most populous city of France, known as the 'City of Light'."
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
            explanation: "JavaScript is the standard scripting language for web browsers, allowing interactive web pages."
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
            explanation: "Albert Einstein developed the theory of relativity, which revolutionized our understanding of space and time."
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
            explanation: "The Pacific Ocean is the largest, covering more area than all landmasses combined."
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
            explanation: "Mars is called the Red Planet due to the iron oxide (rust) on its surface, which gives it a reddish appearance."
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
            explanation: "HTML stands for HyperText Markup Language, the standard language for creating web pages."
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
            explanation: "Japan is called the 'Land of the Rising Sun' because it lies to the east of Asia, where the sun rises."
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
            explanation: "Plants absorb carbon dioxide from the air and use it along with sunlight to produce energy in photosynthesis."
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
            explanation: "Python is widely used in data science due to its simplicity and powerful libraries like NumPy, Pandas, and scikit-learn."
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
            explanation: "The smallest prime number is 2, as it is only divisible by 1 and itself."
        },
    ]
}


export default testSchema;