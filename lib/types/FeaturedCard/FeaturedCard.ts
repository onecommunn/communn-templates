import { SocialLink } from "../Footer/SocialLink";

export interface FeaturedCard{
    name: string;
    role: string;
    description: string;
    image: string;
    socialLinks: SocialLink[]
}