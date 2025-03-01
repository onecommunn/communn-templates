import { FeatureProps } from "./FeatureProps";

export interface AboutSectionProps {
    heading: string;
    subHeading: string;
    features: FeatureProps[];
    videoSrc?: string;
    buttonText: string;
}