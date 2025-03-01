import { FAQItem } from "./FAQItem";

export interface QuestionnaireProps {
    title: string;
    description: string;
    question: FAQItem[];
    backgroundImage?: boolean; // 
}