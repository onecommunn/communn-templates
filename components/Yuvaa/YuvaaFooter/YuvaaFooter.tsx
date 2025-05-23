import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

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
}

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
}: YuvaaFooterProps) => {
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
            <p className="text-sm opacity-80 mb-4 mt-4">
              "We always provide the best service for our users"
            </p>
            <div className="flex space-x-4">
              {FacebookLink && (
                <a
                  href={FacebookLink}
                  style={
                    {
                      "--hover-color": textHoverColor,
                      "--text-color": subTitleTextColor,
                    } as React.CSSProperties
                  }
                  className="w-8 h-8 bg-white/20 text-[var(--text-color)] hover:text-[var(--hover-color)] rounded-full flex items-center justify-center hover:bg-opacity-40 transition-all"
                >
                  <Facebook size={20} />
                </a>
              )}
              {TwitterLink && (
                <a
                  href={TwitterLink}
                  style={
                    {
                      "--hover-color": textHoverColor,
                      "--text-color": subTitleTextColor,
                    } as React.CSSProperties
                  }
                  className="w-8 h-8 bg-white/20 text-[var(--text-color)] hover:text-[var(--hover-color)] rounded-full flex items-center justify-center hover:bg-opacity-40 transition-all"
                >
                  <Twitter size={20} />
                </a>
              )}
              {InstagramLink && (
                <a
                  href={InstagramLink}
                  style={
                    {
                      "--hover-color": textHoverColor,
                      "--text-color": subTitleTextColor,
                    } as React.CSSProperties
                  }
                  className="w-8 h-8 bg-white/20 text-[var(--text-color)] hover:text-[var(--hover-color)] rounded-full flex items-center justify-center hover:bg-opacity-40 transition-all"
                >
                  <Instagram size={20} />
                </a>
              )}
            </div>
          </div>

          {QuickLinks?.map((each, index) => (
            <div key={index}>
              <h3
                className="text-lg font-bold mb-4"
                style={{ color: titleTextColor }}
              >
                {each.Title}
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {each?.LinksList?.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.Link}
                      style={
                        {
                          "--hover-color": textHoverColor,
                          "--text-color": subTitleTextColor,
                        } as React.CSSProperties
                      }
                      className="hover:text-[var(--hover-color)] text-[var(--text-color)]"
                    >
                      {item.Text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* Contact */}
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

        <div className="border-t border-white border-opacity-20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>Copyright 2022 made for Yoga. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default YuvaaFooter;
