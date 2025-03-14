"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { HeaderLogo } from "@/lib/types/Header/HeaderLogo";
import MobileSidebar from "./MobileSidebar";

interface Page {
  label: string;
  value: string;
  dropdown: boolean;
  submenu?: {
    label: string;
    value: string;
    navigate: string;
  }[];
  navigate: string;
}

const pages: Page[] = [
  { label: "Home", value: "Home", dropdown: false, navigate: "/home" },
  {
    label: "I Can",
    value: "I Can",
    dropdown: true,
    submenu: [
      { label: "Manage Dashboard", value: "Dashboard", navigate: "/dashboard" },
      {
        label: "Manage Communities",
        value: "Community",
        navigate: "/communities",
      },
      {
        label: "Manage Subscriptions",
        value: "Subscriptions",
        navigate: "/subscriptions",
      },
      { label: "Manage Payments", value: "Payments", navigate: "/payments" },
      { label: "Manage Members", value: "Members", navigate: "/members" },
      { label: "Manage Posts", value: "Posts", navigate: "/posts" },
    ],
    navigate: "/features1",
  },
  {
    label: "Usecases",
    value: "Usecases",
    dropdown: true,
    submenu: [
      { label: "A Wellness", value: "A Wellness", navigate: "/gym" },
      { label: "A Teacher", value: "A Teacher", navigate: "/tuition" },
      { label: "A Yoga", value: "A Yoga", navigate: "/yoga" },
      {
        label: "A Food Delivery",
        value: "A Food Delivery",
        navigate: "/food-delivery",
      },
    ],
    navigate: "",
  },
  {
    label: "About Us",
    value: "About Us",
    dropdown: false,
    navigate: "/about-us",
  },
  {
    label: "Contact Us",
    value: "Contact Us",
    dropdown: false,
    navigate: "/contact-us",
  },
];

const OneCommunnHeader = ({ logo }: { logo: HeaderLogo }) => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredPage, setHoveredPage] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed font-communn top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo */}
          <Link href="/">
            <Image
              src={logo}
              alt="Logo"
              width={150}
              height={50}
              className="hidden md:block"
            />
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12">
            {pages.map((page) => (
              <div key={page.value} className="relative group">
                <Link
                  href={page.navigate}
                  className="text-[#3C3C3C] font-semibold text-sm uppercase flex items-center"
                >
                  {page.label}
                  {page.dropdown && (
                    <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                  )}
                </Link>

                {/* Submenu */}
                {page.dropdown && page.submenu && (
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300">
                    {page.submenu.map((submenuItem) => (
                      <Link
                        key={submenuItem.value}
                        href={submenuItem.navigate}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm"
                      >
                        {submenuItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Call-to-Action Button */}
          <a
            href="https://admin.onecommunn.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold transition"
          >
            Get Started for Free
          </a>
        </div>
      </header>
      {/* Mobile Sidebar (if needed) */}
      <div className="md:hidden">
        {/* You can add a mobile sidebar or menu toggle button here */}
        <MobileSidebar logo={logo} />
      </div>
    </>
  );
};

export default OneCommunnHeader;
