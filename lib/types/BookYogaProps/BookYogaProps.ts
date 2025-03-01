export interface BookYogaProps {
  heading: string;
  description: string;
  contactInfo: {
    phone: string;
    email: string;
  };
  onEmailSubmit: (email: string) => void;
}
