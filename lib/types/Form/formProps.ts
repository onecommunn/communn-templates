import { LocationCardProps } from "../LocationCard/LocationCardProps";
import { ContactFormProps } from "./ContactFormProps";
// Define the type for FormInput, which includes form fields and selectedLocation
export interface FormInput extends ContactFormProps {
    title: string;
    formDescription: string;
    selectedLocation?: LocationCardProps | null;
}
