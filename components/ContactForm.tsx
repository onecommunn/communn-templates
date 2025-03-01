"use client";
import * as React from "react";
import SendButton from "./SendButton";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    date: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <form
      className="flex flex-col px-8 py-9 w-full text-sm leading-7 rounded-3xl border border-black border-solid text-neutral-800 max-md:px-5 max-md:mt-10 max-md:max-w-full"
      onSubmit={handleSubmit}
    >
      <h2 className="self-start text-5xl text-zinc-800 max-md:text-4xl">
        Contact Us
      </h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="px-7 pt-5 pb-1.5 mt-5 whitespace-nowrap rounded-xl bg-stone-400 max-md:px-5 max-md:max-w-full"
        required
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className="px-7 pt-5 pb-1.5 mt-5 rounded-xl bg-stone-400 max-md:px-5 max-md:max-w-full"
        required
      />

      <input
        type="date"
        name="date"
        placeholder="Enter Date"
        value={formData.date}
        onChange={handleChange}
        className="px-7 pt-5 pb-1.5 mt-6 rounded-xl bg-stone-400 max-md:px-5 max-md:max-w-full"
        required
      />

      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        className="px-7 pt-6 pb-28 mt-5 whitespace-nowrap rounded-xl bg-stone-200 max-md:px-5 max-md:pb-28 max-md:max-w-full resize-none"
        required
      />

      <SendButton />
    </form>
  );
};

export default ContactForm;
