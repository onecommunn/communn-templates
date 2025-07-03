import { AuthContext } from "@/app/contexts/Auth.context";
import { logoutService } from "@/app/services/logoutService";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/Ui/alert-dialog";
import { AlertDialog, AlertDialogTrigger } from "@radix-ui/react-alert-dialog";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useContext, useState } from "react";

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
  buttonTextColor,
}: {
  logo: string;
  width: string;
  height: string;
  ButtonText: string;
  BackgroundColor: string;
  buttonBackgroundColor: string;
  textColor: string;
  buttonTextColor: string;
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const authContext = useContext(AuthContext);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLogout = async () => {
    const success = await logoutService();
    if (success) {
      localStorage.removeItem("access-token");
      localStorage.removeItem("refresh-token");
      window.location.reload();
    } else {
      console.error("Logout failed, unable to navigate to login.");
    }
  };

  return (
    <header
      className="w-full z-50"
      style={{ backgroundColor: BackgroundColor }}
    >
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
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
            href="/"
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
            href="/courses"
            style={
              {
                "--hover-color": buttonBackgroundColor,
                "--text-color": textColor,
              } as React.CSSProperties
            }
            className="hover:text-[var(--hover-color)] font-medium text-[var(--text-color)]"
          >
            Courses
          </Link>
          <Link
            href="/events"
            style={
              {
                "--hover-color": buttonBackgroundColor,
                "--text-color": textColor,
              } as React.CSSProperties
            }
            className="hover:text-[var(--hover-color)] font-medium text-[var(--text-color)]"
          >
            Events
          </Link>
          {/* <Link
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
          </Link> */}
          <Link
            href="/plans"
            style={
              {
                "--hover-color": buttonBackgroundColor,
                "--text-color": textColor,
              } as React.CSSProperties
            }
            className="hover:text-[var(--hover-color)] font-medium text-[var(--text-color)]"
          >
            Plans
          </Link>
          <Link
            href="/contact"
            style={
              {
                "--hover-color": buttonBackgroundColor,
                "--text-color": textColor,
              } as React.CSSProperties
            }
            className="hover:text-[var(--hover-color)] font-medium text-[var(--text-color)]"
          >
            Contact
          </Link>
        </nav>

        {/* Contact Button */}
        <div className="hidden md:flex">
          {authContext.isAuthenticated ? (
            <div className="flex items-center gap-4">
              <div className="text-center font-medium min-w-fit">
                Hi, {authContext.user?.firstName || authContext.user?.email}
              </div>
              {/* <button
                  onClick={() => {
                    const confirmLogout = window.confirm(
                      "Are you sure you want to logout?"
                    );
                    if (confirmLogout) {
                      handleLogout();
                      setMobileMenuOpen(false);
                    }
                  }}
                  className="bg-red-500 text-white px-6 py-2 w-full rounded-md hover:bg-red-600 cursor-pointer"
                  style={{
                    backgroundColor: buttonBackgroundColor,
                    color: buttonTextColor,
                  }}
                >
                  Logout
                </button> */}
              <AlertDialog>
                <AlertDialogTrigger
                  style={{
                    backgroundColor: buttonBackgroundColor,
                    color: buttonTextColor,
                  }}
                  className="bg-red-500 text-white px-6 py-2 w-full rounded-md hover:bg-red-600 cursor-pointer"
                >
                  Logout
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you sure you want to logout?
                    </AlertDialogTitle>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => {
                        handleLogout();
                        setMobileMenuOpen(false);
                      }}
                      style={{
                        backgroundColor: buttonBackgroundColor,
                      }}
                      className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 cursor-pointer"
                    >
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          ) : (
            <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
              <button
                style={{
                  backgroundColor: buttonBackgroundColor,
                  color: buttonTextColor,
                }}
                className="rounded-md px-6 py-2 w-full cursor-pointer"
              >
                {ButtonText}
              </button>
            </Link>
          )}
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
              href="/courses"
              className="text-black hover:[color:var(--my-color)] font-medium"
            >
              Courses
            </Link>
            <Link
              href="/events"
              className="text-black hover:[color:var(--my-color)] font-medium"
            >
              Events
            </Link>
            {/* <Link
              href="/features"
              className="text-black hover:[color:var(--my-color)] font-medium"
            >
              Features
            </Link> */}
            <Link
              href="/pricing"
              className="text-black hover:[color:var(--my-color)] font-medium"
            >
              Pricing
            </Link>
            {/* <button
              className=" text-white rounded-full px-6 py-2 w-full"
              style={{
                backgroundColor: buttonBackgroundColor,
                color: BackgroundColor,
              }}
            >
              {ButtonText}
            </button> */}
            <div className="pt-4 space-y-2">
              {authContext.isAuthenticated ? (
                <>
                  <div className="text-center font-medium">
                    Hi, {authContext.user?.firstName || authContext.user?.email}
                  </div>
                  <button
                    onClick={() => {
                      if (authContext.logout) {
                        authContext.logout();
                      }
                      setMobileMenuOpen(false);
                    }}
                    className="bg-red-500 text-white cursor-pointer px-6 py-2 w-full rounded-md hover:bg-red-600"
                    style={{
                      backgroundColor: buttonBackgroundColor,
                      color: buttonTextColor,
                    }}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                  <button
                    style={{
                      backgroundColor: buttonBackgroundColor,
                      color: buttonTextColor,
                    }}
                    className="rounded-md px-6 py-2 w-full cursor-pointer"
                  >
                    {ButtonText}
                  </button>
                </Link>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default YogastHeader;
