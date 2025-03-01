export interface TherapistCardProps{
    name: string;
    title: string;
    image: string;
    isFeatured?: boolean;
    onClick: () => void;
};