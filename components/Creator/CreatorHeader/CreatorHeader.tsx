"use client";
import { Button } from "@/components/Ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface ICreatorHeader {
  logoUrl: string;
  logoWidth: number;
  logoHight: number;
}

const CreatorHeader = ({ logoHight, logoUrl, logoWidth }: ICreatorHeader) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src={logoUrl || 'https://cdn.builder.io/api/v1/image/assets%2F228d3b2c4554432dbdd1f0f27ee6ba7c%2F062e0f3cd667449793b24103817a0704'}
              alt={"logo"}
              width={logoWidth || 180}
              height={logoHight}
            />
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href={"/"} className="text-black hover:underline font-inter">
              Home
            </Link>
            <Link href={"/about-us"} className="text-black hover:underline font-inter">
              About us
            </Link>
            <Link href={"/events"} className="text-black hover:underline font-inter">
              Events
            </Link>
            {/* <Link href={"/courses"} className="text-black hover:underline font-inter">
              Courses
            </Link> */}
            <Link href={"/plans"} className="text-black hover:underline font-inter">
              Plans
            </Link>
            {/* <Link href={"/"} className="text-black hover:underline font-inter">
              Blog
            </Link> */}
            <Link href={"/contact"} className="text-black hover:underline font-inter">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex md:items-center">
            <Button className="rounded-[12px] text-sm pr-[20px] pl-[20px] w-fit">
              Book Us{" "}
              <span>
                <ArrowRight />
              </span>
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link
                href={"/"}
                className="text-black hover:underline font-inter"
              >
                Home
              </Link>
              <Link
                href={"/about-us"}
                className="text-black hover:underline font-inter"
              >
                About us
              </Link>
              <Link
                href={"/events"}
                className="text-black hover:underline font-inter"
              >
                Events
              </Link>
              {/* <Link
                href={"/courses"}
                className="text-black hover:underline font-inter"
              >
                Courses
              </Link> */}
              <Link
                href={"/plans"}
                className="text-black hover:underline font-inter"
              >
                Plans
              </Link>
              {/* <Link
                href={"/"}
                className="text-black hover:underline font-inter"
              >
                Blog
              </Link> */}
              <Link
                href={"/contact"}
                className="text-black hover:underline font-inter"
              >
                Contact
              </Link>
              <Button className="rounded-[12px] text-sm pr-[20px] pl-[20px] w-fit">
                Book Us{" "}
                <span>
                  <ArrowRight />
                </span>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default CreatorHeader;
