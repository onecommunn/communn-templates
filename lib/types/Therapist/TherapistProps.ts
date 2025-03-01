import { Therapist } from "./TherapistTypes";

export interface TherapistProps {
    Therapist: Therapist[]
    onSelectTherapist?: (therapist: Therapist) => void;  // Function is now optional
    backgroundColor?: string; // New prop added
};