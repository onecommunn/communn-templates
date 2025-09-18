"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/Ui/CustomCard";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import React, { CSSProperties, useState } from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const YuvaaContact = ({
  title,
  description,
  primaryBackgroundColor,
  secondaryBackgroundColor,
  primaryTextColor,
  secondaryTextColor,
  heroTextColor,
  address,
  contactNumbers,
  emailId,
}: {
  title: string;
  description: string;
  primaryBackgroundColor: string;
  secondaryBackgroundColor: string;
  primaryTextColor: string;
  secondaryTextColor: string;
  heroTextColor: string;
  address: string;
  contactNumbers: string;
  emailId: string;
}) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors: typeof errors = {
      name: form.name ? "" : "Name is required",
      email: form.email ? "" : "Email is required",
      subject: form.subject ? "" : "Subject is required",
      message: form.message ? "" : "Message is required",
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((err) => err === "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    console.log("Form submitted:", form);
  };

  return (
    <main className="flex-grow bg-white">
      {/* Hero Section */}
      <motion.section
        className="py-16 px-4 lg:px-20"
        style={{
          backgroundColor: primaryBackgroundColor,
          color: heroTextColor,
        }}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">{description}</p>
        </div>
      </motion.section>

      {/* Contact Content */}
      <section className="py-16 px-4 lg:px-20">
        <motion.div
          className="container mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}

            <Card>
              <CardHeader>
                <CardTitle
                  className="text-2xl"
                  style={{ color: primaryBackgroundColor }}
                >
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {["name", "email", "subject", "message"].map((field, i) => (
                    <div key={field}>
                      <label
                        className="block mb-1 font-medium"
                        style={{ color: primaryTextColor }}
                      >
                        {field === "name"
                          ? "Full Name"
                          : field === "email"
                            ? "Email Address"
                            : field === "subject"
                              ? "Subject"
                              : "Message"}
                      </label>
                      {field === "message" ? (
                        <textarea
                          name={field}
                          value={form[field as keyof typeof form]}
                          onChange={handleChange}
                          placeholder="Tell us how we can help you..."
                          spellCheck={false}
                          data-ms-editor={true}
                          style={
                            {
                              "--placeholderColor": secondaryTextColor,
                            } as React.CSSProperties
                          }
                          className="w-full outline-none p-2 border border-gray-300 rounded placeholder:text-[var(--placeholderColor)]"
                        />
                      ) : (
                        <input
                          type={field === "email" ? "email" : "text"}
                          name={field}
                          value={form[field as keyof typeof form]}
                          onChange={handleChange}
                          placeholder={`Enter your ${field === "name"
                            ? "full name"
                            : field === "email"
                              ? "email"
                              : "message " + field
                            }`}
                          spellCheck={false}
                          data-ms-editor={true}
                          style={
                            {
                              "--placeholderColor": secondaryTextColor,
                            } as React.CSSProperties
                          }
                          className="w-full outline-none p-2 border border-gray-300 rounded placeholder:text-[var(--placeholderColor)]"
                        />
                      )}
                      {errors[field as keyof typeof errors] && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors[field as keyof typeof errors]}
                        </p>
                      )}
                    </div>
                  ))}
                  <button
                    type="submit"
                    className="w-full py-2 px-4 rounded-md"
                    style={
                      {
                        backgroundColor: secondaryBackgroundColor,
                        color: heroTextColor,
                      } as CSSProperties
                    }
                  >
                    Send Message
                  </button>
                </form>
              </CardContent>
            </Card>
            <motion.div
              className="rounded-md overflow-hidden shadow-md mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=..."
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>


            {/* Contact Info Section */}
            <motion.div
              className="space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >

              <h2
                className="text-3xl font-bold mb-6"
                style={{ color: primaryBackgroundColor }}
              >
                Get in Touch
              </h2>
              <p style={{ color: secondaryTextColor }}>
                We'd love to hear from you. Whether you have questions about
                our classes, want to book a session, or need more info, we're
                here to help.
              </p>


              {[{ icon: <MapPin />, title: "Visit Our Studio", value: address, color: primaryBackgroundColor },
              { icon: <Phone />, title: "Call Us", value: contactNumbers, color: secondaryBackgroundColor },
              { icon: <Mail />, title: "Email Us", value: emailId, color: primaryBackgroundColor },
              ].map((item, i) => (

                <Card
                  className="border-l-4"
                  style={{ borderLeftColor: item.color }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div
                        className="p-3 rounded-full bg-[var(--bgColor)]/10"
                        style={
                          {
                            "--bgColor": item.color,
                          } as React.CSSProperties
                        }
                      >
                        {React.cloneElement(item.icon, {
                          className: "w-6 h-6",
                          color: item.color,
                        })}
                      </div>
                      <div>
                        <h3
                          className="font-semibold text-lg mb-2"
                          style={{ color: primaryTextColor }}
                        >
                          {item.title}
                        </h3>
                        <p style={{ color: secondaryTextColor }}>
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default YuvaaContact;
