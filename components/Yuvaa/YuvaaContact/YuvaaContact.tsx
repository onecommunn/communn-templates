import { Card, CardContent, CardHeader, CardTitle } from "@/components/Ui/Card";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import React, { CSSProperties, useState } from "react";

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
  address:string;
  contactNumbers:string;
  emailId:string;
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

    // Submit logic here
    console.log("Form submitted:", form);
  };

  return (
    <main className="flex-grow bg-white ">
      {/* Hero Section */}
      <section
        className="bg-[#20B2AA] text-white py-16 px-4 lg:px-20"
        style={{
          backgroundColor: primaryBackgroundColor,
          color: heroTextColor,
        }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">{description}</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4 lg:px-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle
                    className="text-2xl text-[#20B2AA]"
                    style={{ color: primaryBackgroundColor }}
                  >
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        className="block mb-1 font-medium text-black"
                        style={{ color: primaryTextColor }}
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        spellCheck={false}
                        data-ms-editor={true}
                        placeholder="Enter your full name"
                        style={
                          {
                            "--placeholderColor": secondaryTextColor,
                          } as React.CSSProperties
                        }
                        className="w-full outline-none p-2 border border-gray-300 rounded placeholder:text-[var(--placeholderColor)]"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        className="block mb-1 font-medium text-black"
                        style={{ color: primaryTextColor }}
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        spellCheck={false}
                        data-ms-editor={true}
                        placeholder="Enter your email"
                        style={
                          {
                            "--placeholderColor": secondaryTextColor,
                          } as React.CSSProperties
                        }
                        className="w-full outline-none p-2 border border-gray-300 rounded placeholder:text-[var(--placeholderColor)]"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        className="block mb-1 font-medium text-black"
                        style={{ color: primaryTextColor }}
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        spellCheck={false}
                        data-ms-editor={true}
                        placeholder="Enter message subject"
                        style={
                          {
                            "--placeholderColor": secondaryTextColor,
                          } as React.CSSProperties
                        }
                        className="w-full outline-none p-2 border border-gray-300 rounded placeholder:text-[var(--placeholderColor)]"
                      />
                      {errors.subject && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        className="block mb-1 font-medium text-black"
                        style={{ color: primaryTextColor }}
                      >
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
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
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#FF6347]  text-white py-2 px-4 rounded-md"
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
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2
                  className="text-3xl font-bold text-[#20B2AA] mb-6"
                  style={{ color: primaryBackgroundColor }}
                >
                  Get in Touch
                </h2>
                <p
                  className="text-gray-600 mb-8"
                  style={{ color: secondaryTextColor }}
                >
                  We'd love to hear from you. Whether you have questions about
                  our classes, want to book a session, or need more information
                  about our programs, we're here to help.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <Card
                  className="border-l-4 border-l-[#20B2AA]"
                  style={{ borderLeftColor: primaryBackgroundColor }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div
                        style={
                          {
                            "--bgColor": primaryBackgroundColor,
                          } as React.CSSProperties
                        }
                        className={`bg-[var(--bgColor)]/10 p-3 rounded-full`}
                      >
                        <MapPin className="w-6 h-6 text-[#20B2AA]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2 text-black" style={{ color: primaryTextColor }}>
                          Visit Our Studio
                        </h3>
                        <p className="text-gray-600" style={{ color: secondaryTextColor }}>
                          {address}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card
                  className="border-l-4 border-l-[#FF6347]"
                  style={{ borderLeftColor: secondaryBackgroundColor }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div
                        className="bg-[var(--bgColor)]/10 p-3 rounded-full"
                        style={
                          {
                            "--bgColor": secondaryBackgroundColor,
                          } as React.CSSProperties
                        }
                      >
                        <Phone className="w-6 h-6 text-[#FF6347]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2 text-black" style={{ color: primaryTextColor }}>
                          Call Us
                        </h3>
                        <p className="text-gray-600" style={{ color: secondaryTextColor }}>
                          {contactNumbers}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card
                  className="border-l-4 border-l-[#20B2AA]"
                  style={{ borderLeftColor: primaryBackgroundColor }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div
                        className="bg-[var(--bgColor)]/10 p-3 rounded-full"
                        style={
                          {
                            "--bgColor": primaryBackgroundColor,
                          } as React.CSSProperties
                        }
                      >
                        <Mail className="w-6 h-6 text-[#20B2AA]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2 text-black" style={{ color: primaryTextColor }}>
                          Email Us
                        </h3>
                        <p className="text-gray-600" style={{ color: secondaryTextColor }}>
                          {emailId}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* <Card
                  className="border-l-4 border-l-[#FF6347]"
                  style={{ borderLeftColor: secondaryBackgroundColor }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div
                        className="bg-[var(--bgColor)]/10 p-3 rounded-full"
                        style={
                          {
                            "--bgColor": secondaryBackgroundColor,
                          } as React.CSSProperties
                        }
                      >
                        <Clock className="w-6 h-6 text-[#FF6347]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2 text-black" style={{ color: primaryTextColor }}>
                          Studio Hours
                        </h3>
                        <p className="text-gray-600" style={{ color: secondaryTextColor }}>
                          Monday - Friday: 6:00 AM - 9:00 PM
                          <br />
                          Saturday - Sunday: 7:00 AM - 7:00 PM
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default YuvaaContact;
