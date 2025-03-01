// Define the type for the props
interface Card {
  id: number;
  content?: React.ReactNode; // Optional content like text, icons, etc.
  isCenterCard?: boolean; // Flag to identify the special center card
}

export interface InstagramFollowProps {
  cards: Card[]; // Array of cards to render
}