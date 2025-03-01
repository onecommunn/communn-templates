import { HeaderLink } from "./HeaderLink";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderButton } from "./HeaderButton";

// Define the props that the Navbar will receive
export interface HeaderProps {
    links: HeaderLink[]; // Array of navigation links
    logo: HeaderLogo; // Add logoUrl property 
    buttons?: HeaderButton[];

    backgroundColor?: string;
    textColor?: string;
  }

  