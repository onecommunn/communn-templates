import { Slide } from "../Slide/SlideProps";

// HomeHero.types.ts
export interface HomeHeroProps {
  slides: Slide[];
  autoSlide?: boolean;
  slideInterval?: number; // Optional interval duration (in ms)
  backgroundColor?: string; // Dynamic background color
}
  