import { useCommunity } from "@/app/hooks/useCommunity";
import { SocialLink } from "@/app/models/community.model";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube
} from "lucide-react";
import Link from "next/link";
import React, { JSX, useEffect, useState } from "react";

interface LinksListProps {
  Text: string;
  Link: string;
}

interface QuickLinksProps {
  Title: string;
  LinksList: LinksListProps[];
}

interface YuvaaFooterProps {
  logoUrl: string;
  logoWidth: number;
  logoHight: number;
  QuickLinks: QuickLinksProps[];
  titleTextColor: string;
  subTitleTextColor: string;
  textHoverColor: string;
  FacebookLink: string;
  TwitterLink: string;
  InstagramLink: string;
  Address: string;
  PhoneNumber: string;
  Email: string;
  Timmings: string;
  CopyRightText: string;
  tagLine: string;
}

const iconMap: Record<string, JSX.Element> = {
  facebook: <Facebook size={20} />,
  twitter: <Twitter size={20} />,
  instagram: <Instagram size={20} />,
  linkedin: <Linkedin size={20} />,
  youtube: <Youtube size={20} />,
};

const YuvaaFooter = ({
  logoHight,
  logoUrl,
  logoWidth,
  QuickLinks,
  titleTextColor,
  subTitleTextColor,
  textHoverColor,
  FacebookLink,
  TwitterLink,
  InstagramLink,
  Address,
  PhoneNumber,
  Email,
  Timmings,
  CopyRightText,
  tagLine,
}: YuvaaFooterProps) => {
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);

  const { getSocialLinks } = useCommunity();

  useEffect(() => {
    const fetchSocialLinks = async () => {
      const links = await getSocialLinks(window.location.hostname);
      setSocialLinks(links || []);
    };

    fetchSocialLinks();
  }, []);

  return (
    <footer className="bg-[#20B2AA] text-white py-12 px-4 lg:px-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Info */}
          <div>
            <Link href="/home" className="flex items-center space-x-2">
              <div className="font-bold flex items-center">
                <img
                  src={logoUrl}
                  alt={"logo"}
                  width={logoWidth}
                  height={logoHight}
                />
              </div>
            </Link>
            <p className="text-sm opacity-80 mb-4 mt-4">{tagLine}</p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                link.value && iconMap[link.type.toLowerCase()] && (
                  <a
                    key={link._id}
                    href={link.value}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={
                      {
                        "--hover-color": textHoverColor,
                        "--text-color": subTitleTextColor,
                      } as React.CSSProperties
                    }
                    className="w-8 h-8 bg-white/20 text-[var(--text-color)] hover:text-[var(--hover-color)] rounded-full flex items-center justify-center hover:bg-opacity-40 transition-all"
                  >
                    {iconMap[link.type.toLowerCase()]}
                  </a>
                )
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {QuickLinks?.map((each, index) => (
            <div key={index}>
              <h3
                className="text-lg font-bold mb-4"
                style={{ color: titleTextColor }}
              >
                {each?.Title}
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {each?.LinksList?.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item?.Link}
                      style={
                        {
                          "--hover-color": textHoverColor,
                          "--text-color": subTitleTextColor,
                        } as React.CSSProperties
                      }
                      className="hover:text-[var(--hover-color)] text-[var(--text-color)]"
                    >
                      {item?.Text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h3
              className="text-lg font-bold mb-4"
              style={{ color: titleTextColor }}
            >
              Contact Info
            </h3>
            <ul
              className="space-y-2 text-sm"
              style={{ color: subTitleTextColor }}
            >
              <li>{Address}</li>
              <li>{PhoneNumber}</li>
              <li>{Email}</li>
              <li>{Timmings}</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white border-opacity-20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>{CopyRightText}</p>
        </div>
      </div>
    </footer>
  );
};

export default YuvaaFooter;
