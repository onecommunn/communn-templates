"use client";
import * as React from "react";
import YogaPromoBanner from "./YogaPromoBanner";
import ContactForm from "./ContactForm";

function ContactUs() {
  return (
    <section className="rounded-none space-y-12">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[68%] max-md:ml-0 max-md:w-full">
          <YogaPromoBanner />
        </div>
        <div className="ml-5 w-[32%] max-md:ml-0 max-md:w-full">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
