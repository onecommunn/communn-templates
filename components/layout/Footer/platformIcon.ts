import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IconType } from 'react-icons';

type PlatformKeys = 'facebook' | 'twitter' | 'instagram' | 'linkedin'; // Add other platforms as needed


export const platformIcons: Record<PlatformKeys, IconType> = {
    facebook: FaFacebook,
    twitter: FaTwitter,
    instagram: FaInstagram,
    linkedin: FaLinkedin,
    // Add other icons as needed
};
