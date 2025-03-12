import { HeaderLogo } from "@/lib/types/Header/HeaderLogo";
import { Heart, Search, ShoppingCart, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface MenuItem {
  itemtext: string;
  link: string;
}

const Nav = ({
  logo,
  menuList,
  scrollMenu,
  showScrollMenu,
}: {
  logo: HeaderLogo;
  menuList: MenuItem[];
  scrollMenu: MenuItem[];
  showScrollMenu: boolean;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 inset-x-0 z-[1001] group">
      <header className="relative bg-white border-b border-ui-border-base px-4 md:px-8 lg:px-16 py-4">
        <nav className="flex items-center justify-between">
          {/* Left: Logo and Desktop Menu */}
          <div className="flex items-center space-x-5">
             {/* Hamburger Icon (visible on mobile) */}
             <div className="md:hidden flex items-center justify-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <X size={24} color="black"/> : (<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="5em" fill="none" viewBox="0 0 20 20" className=" " stroke="none" style={{height:"22px",width:"22px"}}><g stroke="#292D35" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" clipPath="url(#icon_hamburger_svg__a)"><path d="M2.917 10.046h10.231M2.917 3.75h14.166M2.917 16.343h14.166"></path></g><defs><clipPath id="icon_hamburger_svg__a"><path fill="#fff" d="M0 0h20v20H0z"></path></clipPath></defs></svg>)}
              </button>
            </div>
            <Link href="/" data-testid="nav-store-link">
              <Image src={logo} alt="logo" width={150} height={140} />
            </Link>
            {/* Desktop Menu List - visible on md and above */}
            <div className="hidden md:flex items-center space-x-6 text-lg">
              {menuList.map((item, index) => (
                <Link
                  href={item.link}
                  key={index}
                  className="text-black uppercase flex pt-1"
                  data-testid="nav-store-link"
                >
                  {item.itemtext}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Search, Icons, and Hamburger */}
          <div className="flex items-center space-x-4">
            {/* Search Box (visible from sm screens and up) */}
            <div className="hidden sm:flex rounded-md bg-[#eaeaea] px-4 py-3 items-center gap-4 w-72">
              <Search size={18} color="#52525b" />
              <input
                type="search"
                placeholder="Search by products"
                className="w-full outline-none bg-transparent text-sm placeholder:text-[#9ca3af] text-black"
                spellCheck={false}
              />
            </div>

            {/* Account Icons (visible from sm screens and up) */}
            <div className="flex items-center space-x-5">
              <Link href="/login">
                <p className="text-black text-lg">Login</p>
              </Link>
              <Heart size={19} color="black" />
              <ShoppingCart color="black" />
            </div>

          </div>
        </nav>
      </header>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="bg-white shadow-md md:hidden">
          <ul className="flex flex-col p-4">
            {menuList.map((item, index) => (
              <Link href={item.link} key={index}>
                <li className="py-2 border-b border-gray-200 text-black uppercase">
                  {item.itemtext}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}

      {/* Optional Scrollable Menu */}
      {showScrollMenu && (
        <section className="hidden md:block sticky top-0 inset-x-0 z-30 bg-white px-4 py-4 shadow-sm">
          <div className="flex overflow-x-scroll hide-scroll-bar">
            <div className="flex flex-nowrap gap-10">
              {scrollMenu.map((item, index) => (
                <Link
                  href={item.link}
                  key={index}
                  className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase px-1 md:px-6 min-w-fit"
                >
                  <p className="text-lg text-black ">{item.itemtext}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Nav;
