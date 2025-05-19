import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export function rgbaToHex(rgba: string): string {
  const result = rgba.match(/\d+(\.\d+)?/g);
  if (!result || result.length < 3) return "#000000";

  const [r, g, b, a = "1"] = result;
  const toHex = (n: number) => n.toString(16).padStart(2, "0");

  const red = toHex(+r);
  const green = toHex(+g);
  const blue = toHex(+b);
  const alpha = toHex(Math.round(parseFloat(a) * 255));

  return `#${red}${green}${blue}${alpha}`;
}

const YogastHeader = ({
  logo,
  width,
  height,
  ButtonText,
  BackgroundColor,
  buttonBackgroundColor,
  textColor,
}: {
  logo: string;
  width: string;
  height: string;
  ButtonText: string;
  BackgroundColor: string;
  buttonBackgroundColor: string;
  textColor: string;
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  console.log(BackgroundColor);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <header
      className="w-full z-50"
      style={{ backgroundColor: BackgroundColor }}
    >
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/home" className="flex items-center space-x-2">
            <div className="font-bold flex items-center">
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
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <Link
            href="/home"
            style={
              {
                "--hover-color": buttonBackgroundColor,
                "--text-color": textColor,
              } as React.CSSProperties
            }
            className="hover:text-[var(--hover-color)] font-medium text-[var(--text-color)]"
          >
            Home
          </Link>
          <Link
            href="/about"
            style={
              {
                "--hover-color": buttonBackgroundColor,
                "--text-color": textColor,
              } as React.CSSProperties
            }
            className="hover:text-[var(--hover-color)] font-medium text-[var(--text-color)]"
          >
            About
          </Link>
          <Link
            href="/features"
            style={
              {
                "--hover-color": buttonBackgroundColor,
                "--text-color": textColor,
              } as React.CSSProperties
            }
            className="hover:text-[var(--hover-color)] font-medium text-[var(--text-color)]"
          >
            Features
          </Link>
          <Link
            href="/pricing"
            style={
              {
                "--hover-color": buttonBackgroundColor,
                "--text-color": textColor,
              } as React.CSSProperties
            }
            className="hover:text-[var(--hover-color)] font-medium text-[var(--text-color)]"
          >
            Pricing
          </Link>
        </nav>

        {/* Contact Button */}
        <div className="hidden md:block">
          <button
            className="text-white rounded-full px-6 py-2"
            style={{
              backgroundColor: buttonBackgroundColor,
              color: BackgroundColor,
            }}
          >
            {ButtonText}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-[#FF5E14] p-2">
            {mobileMenuOpen ? (
              <X size={24} color={buttonBackgroundColor} />
            ) : (
              <Menu size={24} color={buttonBackgroundColor} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white w-full py-4 px-4 shadow-lg">
          <nav
            className="flex flex-col space-y-4"
            style={
              { "--my-color": buttonBackgroundColor } as React.CSSProperties
            }
          >
            <Link
              href="/"
              className="text-black hover:[color:var(--my-color)] font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-black hover:[color:var(--my-color)] font-medium"
            >
              About
            </Link>
            <Link
              href="/features"
              className="text-black hover:[color:var(--my-color)] font-medium"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-black hover:[color:var(--my-color)] font-medium"
            >
              Pricing
            </Link>
            <button
              className=" text-white rounded-full px-6 py-2 w-full"
              style={{
                backgroundColor: buttonBackgroundColor,
                color: BackgroundColor,
              }}
            >
              {ButtonText}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default YogastHeader;
