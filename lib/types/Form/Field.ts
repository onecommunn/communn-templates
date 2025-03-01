export interface Field {
    name: string;
    type: "text" | "tel" | "date" | "textarea"; // Input types
    placeholder?: string;
    required?: boolean;
}