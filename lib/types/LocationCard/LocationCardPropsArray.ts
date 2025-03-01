import { LocationCardProps } from "./LocationCardProps";

export interface LocationCardPropsArray {
    contactInfo: LocationCardProps[];
    onLocationSelect: (location: LocationCardProps) => void; // Callback to parent
}