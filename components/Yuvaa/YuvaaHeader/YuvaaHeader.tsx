import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const YuvaaHeader = ({
  logoUrl,
  logoWidth,
  logoHight,
  backgroundColor,
  textColor,
  buttonBackgroundColor,
  buttonTextColor,
  buttonText
}: {
  logoUrl: string;
  logoWidth: number;
  logoHight: number;
  backgroundColor: string;
  textColor: string;
  buttonBackgroundColor: string;
  buttonTextColor: string;
  buttonText:string
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  
  return (
    <header
      className="py-4 px-4 lg:px-20 md:px-8 bg-white sticky top-0 z-50 shadow-sm text-black"
      style={{ backgroundColor: backgroundColor, color: textColor }}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              style={
                {
                  "--hover-underline": buttonBackgroundColor,
                } as React.CSSProperties
              }
              className="relative font-medium text-black transition-colors duration-300
             after:content-[''] after:absolute after:left-0 after:-bottom-1
             after:h-[2px] after:w-0 hover:after:w-full
             after:transition-all after:duration-300
             after:bg-[var(--hover-underline)]
             hover:text-[var(--hover-underline)]"
            >
              Home
            </Link>
            <Link
              href="/about"
              style={
                {
                  "--hover-underline": buttonBackgroundColor,
                } as React.CSSProperties
              }
              className="relative font-medium text-black transition-colors duration-300
             after:content-[''] after:absolute after:left-0 after:-bottom-1
             after:h-[2px] after:w-0 hover:after:w-full
             after:transition-all after:duration-300
             after:bg-[var(--hover-underline)]
             hover:text-[var(--hover-underline)]"
            >
              About
            </Link>
            <Link
              href="/features"
              style={
                {
                  "--hover-underline": buttonBackgroundColor,
                } as React.CSSProperties
              }
              className="relative font-medium text-black transition-colors duration-300
             after:content-[''] after:absolute after:left-0 after:-bottom-1
             after:h-[2px] after:w-0 hover:after:w-full
             after:transition-all after:duration-300
             after:bg-[var(--hover-underline)]
             hover:text-[var(--hover-underline)]"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              style={
                {
                  "--hover-underline": buttonBackgroundColor,
                } as React.CSSProperties
              }
              className="relative font-medium text-black transition-colors duration-300
             after:content-[''] after:absolute after:left-0 after:-bottom-1
             after:h-[2px] after:w-0 hover:after:w-full
             after:transition-all after:duration-300
             after:bg-[var(--hover-underline)]
             hover:text-[var(--hover-underline)]"
            >
              Pricing
            </Link>
          </nav>

          {/* Auth Button */}
          <div className="hidden md:flex">
            <Link href="/">
              <button className="bg-[#FF6347] hover:bg-[#FF6347]-dark text-white rounded-md px-6 py-2">
                {buttonText}
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/features"
                className="font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <div className="pt-4">
                <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                  <button
                    style={{
                      backgroundColor: buttonBackgroundColor,
                      color: buttonTextColor,
                    }}
                    className="rounded-md px-6 py-2 w-full"
                  >
                    {buttonText}
                  </button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default YuvaaHeader;
