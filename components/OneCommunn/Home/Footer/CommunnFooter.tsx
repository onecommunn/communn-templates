import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const CommunnFooter = () => {
  return (
    <div className="text-black font-communn flex flex-col items-center justify-center">
      <div className="text-center flex flex-col items-center">
        <h2 className="text-[#2a53a2] font-bold text-3xl my-2">
          Still have questions ?
        </h2>
        <p className="w-[70%] text-gray-500">
          If you cannot find answer to your question in our FAQ, you can always
          CONTACT US. We will answer to you shortly.
        </p>
        <button className="bg-black text-white px-16 my-6 py-2 rounded-3xl">
          Contact Us
        </button>
      </div>
      <div className="w-full md:px-20 px-10">
        <div
          className="rounded-2xl w-full px-8 md:px-14 py-4 md:py-8 flex items-center md:flex-row flex-col justify-between"
          style={{
            background:
              "linear-gradient(90deg, rgba(42, 83, 162, 0.4) 0%, rgba(79, 161, 202, 0.4) 17.19%, rgba(57, 155, 127, 0.4) 34.38%, rgba(34, 119, 39, 0.4) 51.04%, rgba(127, 196, 27, 0.4) 68.23%, rgba(254, 127, 6, 0.4) 83.85%, rgba(218, 2, 66, 0.4) 100%)",
          }}
        >
          <h4 className="font-bold text-2xl text-center">
            Empower Your Community, Elevate Your Experience
          </h4>
          <div className="flex items-center justify-between md:w-[40%] md:flex-row flex-col py-5 gap-3">
            <button className="bg-[#2a53a2] text-white px-16  py-2 rounded-full">
              Get Started
            </button>
            <button className="bg-white text-black shadow-md px-16 py-2 rounded-full">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 w-full mt-10 py-10 bg-[#f3f3f3] px-10 gap-5">
        {/* Image container */}
        <div className="flex flex-col items-center gap-4 sm:col-span-2 md:col-span-1 w-full sm:w-auto">
          <Image
            src={"/Images/Communn-new-logo.png"}
            width={200}
            height={200}
            alt="logo"
          />
          <Image
            src={"/Images/app-store-download-button.png"}
            width={140}
            height={140}
            alt="App Store"
            className="hidden md:block"
          />
          <Image
            src={"/Images/play-store-download-button.png"}
            width={140}
            height={140}
            alt="Play Store"
            className="hidden md:block"
          />
        </div>

        {/* Features */}
        <div >
          <h4 className="font-bold text-2xl pb-3">Features</h4>
          <ul className="text-gray-500">
            <li className="py-2 hover:text-black cursor-pointer">
              Member Management
            </li>
            <li className="py-2 hover:text-black cursor-pointer">
              Payment Management
            </li>
            <li className="py-2 hover:text-black cursor-pointer">
              Dashboard & Reports
            </li>
            <li className="py-2 hover:text-black cursor-pointer">
              Communities List
            </li>
            <li className="py-2 hover:text-black cursor-pointer">
              Subscription Management
            </li>
          </ul>
        </div>

        {/* Use Cases */}
        <div>
          <h4 className="font-bold text-2xl pb-3">Use Cases</h4>
          <ul className="text-gray-500">
            <li className="py-2 hover:text-black cursor-pointer">Fitness</li>
            <li className="py-2 hover:text-black cursor-pointer">Tuition</li>
            <li className="py-2 hover:text-black cursor-pointer">Wellness</li>
            <li className="py-2 hover:text-black cursor-pointer">
              Food Delivery
            </li>
          </ul>
        </div>

        {/* Company */}
        <div >
          <h4 className="font-bold text-2xl pb-3">Company</h4>
          <ul className="text-gray-500">
            <li className="py-2 hover:text-black cursor-pointer">
              Terms of Use
            </li>
            <li className="py-2 hover:text-black cursor-pointer">
              Privacy Policy
            </li>
            <li className="py-2 hover:text-black cursor-pointer">
              Refund Policy
            </li>
            <li className="py-2 hover:text-black cursor-pointer">About Us</li>
            <li className="py-2 hover:text-black cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Follow us */}
        <div>
          <h4 className="font-bold text-2xl pb-3">Follow us</h4>
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-full p-3">
              <FaInstagram size={18} />
            </div>
            <div className="bg-white rounded-full p-3">
              <BsLinkedin size={18} />
            </div>
            <div className="bg-white rounded-full p-3">
              <FaFacebook size={18} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunnFooter;
