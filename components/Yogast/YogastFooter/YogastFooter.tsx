import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

interface LinksListProps {
  Text: string;
  Link: string;
}

interface QuickLinksProps {
  Title: string;
  LinksList: LinksListProps[];
}

const YogastFooter = ({
  logo,
  width,
  height,
  Description,
  FacebookLink,
  InstagramLink,
  TwitterLink,
  CopyRightText,
  QuickLinks,
  Address,
  PhoneNumber,
  Email,
  Timmings,
  backgroundColor,
  titleTextColor,
  subTitleTextColor,
}: {
  logo: string;
  width: string;
  height: string;
  Description: string;
  FacebookLink: string;
  TwitterLink: string;
  InstagramLink: string;
  CopyRightText: string;
  QuickLinks: QuickLinksProps[];
  Address: string;
  PhoneNumber: string;
  Email: string;
  Timmings: string;
  backgroundColor: string;
  titleTextColor: string;
  subTitleTextColor: string;
}) => {
  return (
    <footer className="py-12" style={{ backgroundColor: backgroundColor }}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="inline-flex items-center mb-4">
              <div className="text-[#FF5E14] text-xl font-bold flex items-center">
                <img
                  src={
                    logo ||
                    "https://cdn.builder.io/api/v1/image/assets%2F228d3b2c4554432dbdd1f0f27ee6ba7c%2F1001e504713f4eb9b9a58b6d3276a910"
                  }
                  alt={"logo"}
                  width={width}
                  height={height}
                />
              </div>
            </Link>
            <p
              className="text-sm text-gray-600 mb-4"
              style={{ color: subTitleTextColor }}
            >
              {Description}
            </p>
            <div className="flex space-x-4">
              {FacebookLink && (
                <a
                  href={FacebookLink}
                  style={{
                    color: subTitleTextColor,
                  }}
                  className="hover:[color:var(--my-color)]"
                >
                  <Facebook size={20} />
                </a>
              )}
              {TwitterLink && (
                <a
                  href={TwitterLink}
                  style={{
                    color: subTitleTextColor,
                  }}
                  className="hover:[color:var(--my-color)]"
                >
                  <Twitter size={20} />
                </a>
              )}
              {InstagramLink && (
                <a
                  href={InstagramLink}
                  style={{
                    color: subTitleTextColor,
                  }}
                  className="hover:[color:var(--my-color)]"
                >
                  <Instagram size={20} />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
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
                      style={{
                        color: subTitleTextColor,
                      }}
                    >
                      {item.Text}
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

        <div
          className="border-t border-gray-200 mt-10 pt-6 text-center text-sm"
          style={{ color: subTitleTextColor }}
        >
          <p>&copy; {CopyRightText}</p>
        </div>
      </div>
    </footer>
  );
};

export default YogastFooter;
