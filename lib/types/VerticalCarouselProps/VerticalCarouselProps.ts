import { SlidesBanners } from "./SlidesBanners";

export interface VerticalCarouselProps {
  banners: SlidesBanners[];
  interval?: number; // in milliseconds (default 3 seconds)
  showControls?: boolean; // Option to show/hide control buttons
  autoSlide?: boolean; // Option to enable/disable auto-slide
}