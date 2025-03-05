import React, { useState } from "react";
import styles from "./header.module.css";
import { HeaderProps } from "../../../lib/types/type";
import Link from "next/link";


const Header: React.FC<HeaderProps> = ({ links, logo, buttons, backgroundColor, textColor }) => {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const handleDropdownClick = (label: string) => {
        setActiveDropdown(activeDropdown === label ? null : label);
    };

    const handleMouseEnter = (label: string) => {
        setActiveDropdown(label);
    };

    const handleMouseLeave = () => {
        setActiveDropdown(null);
    };

    return (
        <div className={styles.header} style={{ backgroundColor, color: textColor }} >
            <div className={styles.logo}>
                <Link href={"/"}>
                    <img
                        src={logo.src}
                        alt={logo.alt}
                        height={logo.height}
                        width={logo.width}
                    />
                </Link>
            </div>

            {/* Hamburger button for mobile/tablet */}
            <div
                className={`${styles.hamburger} ${isNavOpen ? styles.active : ""}`}
                onClick={toggleNav}
            >
                <div className={`${styles.hamburger} ${isNavOpen ? styles.active : ""}`} onClick={toggleNav}>
                    <span className={styles.hamburgerIcon}>
                        <svg width="30" height="21" viewBox="0 0 30 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0" y1="10.0122" x2="30" y2="10.0122" stroke="#27282C" />
                            <line x1="10.9756" y1="0.5" x2="30" y2="0.5" stroke="#27282C" />
                            <line x1="10.9756" y1="19.5244" x2="30" y2="19.5244" stroke="#27282C" />
                        </svg>
                    </span>
                </div>
            </div>

            {/* Full-screen navigation for mobile */}
            <div className={`${styles.mobileNav} ${isNavOpen ? styles.showMobileNav : ""}`}>
                <div className={styles.closeBtn} onClick={toggleNav}>✖️</div>
                {links.map((link) => {
                    const isDropdown = link.subLinks && link.subLinks.length > 0; // Check if there are subLinks

                    return isDropdown ? (
                        <div key={link.label} className={styles.dropdownContainer}>
                            <div className={styles.navLink} onClick={() => handleDropdownClick(link.label)}>
                                {link.label} <span className={styles.arrow}>↓</span>
                            </div>
                            {activeDropdown === link.label && (
                                <div className={styles.mobileDropdown}>
                                    {link.subLinks?.map((subLink) => (
                                        <Link
                                            key={subLink.label} // Ensuring unique key
                                            href={subLink.url || "#"}
                                            onClick={toggleNav}
                                        >
                                            {subLink.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link
                            key={link.label} // Ensuring unique key
                            href={link.url || "#"}
                            className={styles.navLink}
                            onClick={toggleNav}
                        >
                            {link.label}
                        </Link>
                    );
                })}
            </div>

            {/* Normal nav and actions for larger screens */}
            <div className={styles.nav}>
                {links.map((link) => {
                    const isDropdown = link.subLinks && link.subLinks.length > 0; // Check if there are subLinks

                    return isDropdown ? (
                        <div
                            key={link.label} // Ensuring unique key
                            className={styles.dropdownContainer}
                            onMouseEnter={() => handleMouseEnter(link.label)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className={styles.navLink} onClick={() => handleDropdownClick(link.label)}>
                                {link.label} <span className={styles.arrow}>↓</span>
                            </div>
                            {activeDropdown === link.label && (
                                <div className={styles.dropdown}>
                                    {link.subLinks?.map((subLink) => (
                                        <Link key={subLink.label} href={subLink.url || "#"}>
                                            {subLink.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link
                            key={link.label} // Ensuring unique key
                            href={link.url || "#"}
                            className={styles.navLink}
                        >
                            {link.label}
                        </Link>
                    );
                })}
            </div>

            <div className={styles.actions}>
                {buttons?.map((button) => (
                    <a key={button.label} href={button.url} className={styles.actionButton}>
                        {button.label}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Header;


