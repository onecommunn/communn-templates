import { SocialLink } from "./SocialLink";
import { FooterSection } from "./FooterSection";
import { HeaderLogo } from "../Header/HeaderLogo";
import { HeaderLink } from "../Header/HeaderLink";

export interface FooterProps {
  newsletterPlaceholder?: string;
  logo: HeaderLogo;
  contactInfo: {
    address: string;
    city: string;
    pinCode: number;
    phone: string;  
    email: string;
  };
  
  sections: FooterSection[];
  socialLinks: SocialLink[];
  legalLinks: HeaderLink[];
  copyrightText: string;

  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
}
