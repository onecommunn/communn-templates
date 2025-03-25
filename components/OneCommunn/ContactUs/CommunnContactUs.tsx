"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import Image from "next/image";

const CommunnContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    comments: "",
  });

  const router = useRouter();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = () => {
    console.log("send");
  };

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 md:gap-20 min-h-screen bg-cover bg-center px-5 md:px-28 md:py-40 py-10"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <div className="text-black ">
        <div className="text-center md:text-left">
          <div className="py-6">
            <h1 className="font-bold text-4xl text-[#2952a2] py-6">Contact Us</h1>
            <p className=" leading-8 text-center md:text-left">
              Our AI-powered platform enhances community management with tools
              for user data management,,<br /> interaction, communication,
              subscription.
            </p>
          </div>
          <div className="py-6">
            <h3 className="font-bold text-md md:text-xl font-communn py-6">EMAIL</h3>
            <p>info@communn.io</p>
          </div>
          <div className="py-6">
            <h3 className="font-bold text-md md:text-xl font-communn py-6">PHONE NUMBER</h3>
            <p>+91 99457 53240</p>
          </div>
        </div>
        <div className="p-10 md:p-6">
            <Image src={'/Images/conatctus.png'} alt="constctus" width={400} height={400}/>
        </div>
      </div>
      <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg max-h-fit">
        <h2 className="text-4xl font-bold text-[#2952a2] text-center my-6">
          Get in Touch
        </h2>
        <form onSubmit={sendEmail} className="space-y-4">
          <label className="block">
            <span className="text-black font-bold text-xl">Name</span>
            <input
              type="text"
              name="fullName"
              placeholder="Name"
              value={formData.fullName}
              onChange={handleChange}
              spellCheck={false}
              data-ms-editor="true"
              className="w-full mt-3 p-3 border text-xl rounded-md focus:outline-none focus:ring focus:border-blue-300 placeholder:text-gray-400"
            />
          </label>
          <label className="block">
            <span className="text-black font-bold text-xl">Email</span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              spellCheck={false}
              data-ms-editor="true"
              onChange={handleChange}
              className="w-full mt-3 p-3 text-xl border rounded-md focus:outline-none focus:ring focus:border-blue-300 placeholder:text-gray-400"
            />
          </label>
          <label className="block">
            <span className="text-black font-bold text-xl">Mobile Number</span>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Mobile Number"
              value={formData.phoneNumber}
              spellCheck={false}
              data-ms-editor="true"
              onChange={handleChange}
              className="w-full mt-3 p-3 text-xl border rounded-md focus:outline-none focus:ring focus:border-blue-300 placeholder:text-gray-400"
            />
          </label>
          <label className="block">
            <span className="text-black font-bold text-xl">Message</span>
            <textarea
              name="comments"
              placeholder="Message"
              value={formData.comments}
              spellCheck={false}
              data-ms-editor="true"
              onChange={handleChange}
              rows={3}
              className="w-full mt-3 p-3 text-xl border rounded-md placeholder:text-gray-400 focus:outline-none focus:ring focus:border-blue-300"
            ></textarea>
          </label>
          <button
            type="submit"
            className="w-full bg-black text-white py-4 rounded-lg hover:bg-gray-800 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommunnContactUs;
