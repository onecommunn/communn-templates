"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react"; // Importing icons
import { HeaderLogo } from "@/lib/types/Header/HeaderLogo";
import Image from "next/image";

const MobileSideBar = ({ logo }: { logo: HeaderLogo }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<{ [key: string]: boolean }>(
    {}
  ); // Track which submenu is open

  // Toggle submenu items
  const toggleSubmenu = (value: string) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [value]: !prev[value],
    }));
  };

  // Sample menu items (Replace with your actual menu data)
  const menuItems = [
    { label: "Home", value: "Home", dropdown: false, navigate: "/home" },
    {
      label: "I Can",
      value: "I Can",
      dropdown: true,
      submenu: [
        {
          label: "Navigate Dashboard",
          value: " Dashboard",
          navigate: "/dashboard",
        },
        { label: "Manage Members", value: "Members", navigate: "/members" },
        { label: "Manage Posts", value: "Posts", navigate: "/post" },
        { label: "Manage Payments", value: "Payments", navigate: "/payments" },
        {
          label: "Manage Subscriptions",
          value: "Subscriptions",
          navigate: "/subscription",
        },
        {
          label: "Manage Communities",
          value: "Community",
          navigate: "/communities",
        },
      ],
      navigate: "/features1",
    },
    {
      label: "I am",
      value: "I am",
      dropdown: true,
      submenu: [
        // {
        //   label: "An Entrepreneur",
        //   value: "An Entrepreneur",
        //   navigate: "/business",
        // },
        // { label: "A Homemaker", value: "A Homemaker", navigate: "/home-maker" },
        // { label: "A Teacher", value: "A Teacher", navigate: "/brand" },
        // {
        //   label: "A Wellness",
        //   value: "A Wellness",
        //   navigate: "/wellness",
        // },
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
      label: "Pricing",
      value: "Pricing",
      dropdown: false,
      navigate: "/pricing",
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
    <div
      className={`fixed font-communn top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Menu Button */}
      <div className="flex w-full items-center justify-between p-2 px-4">
        <Link href="/home">
          <Image src={logo} alt="Logo" width={200} height={100} />
        </Link>
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 bg-white rounded-full border border-gray-500"
        >
          <Menu className="h-6 w-6 text-gray-500" />
        </button>
      </div>

      {/* Sidebar Container */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className={`fixed inset-0 bg-black/35 bg-opacity-30 transition-all duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Sidebar Drawer */}
        <div
          className={`fixed left-0 top-0 h-full w-72 bg-white shadow-xl transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b border-gray-200">
            <Link href="/home">
              <Image src={logo} alt="Logo" width={120} height={80} />
            </Link>
            <button onClick={() => setIsOpen(false)} className="p-2">
              <X className="h-6 w-6 text-gray-500" />
            </button>
          </div>

          {/* Menu Items */}
          <ul className="mt-4 px-4">
            {menuItems.map((page) => (
              <li key={page.value} className="mb-2">
                {/* Parent Link */}
                {page.dropdown ? (
                  <button
                    onClick={() => toggleSubmenu(page.value)}
                    className="w-full flex justify-between items-center p-2 text-gray-700 hover:bg-gray-100 rounded"
                  >
                    {page.label}
                    {openSubmenus[page.value] ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </button>
                ) : (
                  <Link
                    href={page.navigate}
                    className="block p-2 text-gray-700 hover:bg-gray-100 rounded"
                  >
                    {page.label}
                  </Link>
                )}

                {/* Submenu */}
                {page.dropdown && openSubmenus[page.value] && (
                  <div className="ml-4 border-l-2 border-gray-300 pl-3 mt-1">
                    {page.submenu?.map((submenuItem) => (
                      <Link
                        key={submenuItem.value}
                        href={submenuItem.navigate}
                        className="block p-2 text-gray-600 hover:bg-gray-200 rounded"
                      >
                        {submenuItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileSideBar;
