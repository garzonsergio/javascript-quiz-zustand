export interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    userSelectedAnswer?: number;
    isCorrectUserAnswer?: boolean;
}