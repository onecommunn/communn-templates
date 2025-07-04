import { Button } from "@/components/Ui/button";
import { Input } from "@/components/Ui/input";
import { Textarea } from "@/components/Ui/textarea";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const YogastContact = ({
  heroTitle,
  heroDescription,
  primaryBackground,
  primaryTextColor,
  secondaryBackground,
  secondaryTextColor,
  foreground,
}: {
  heroTitle: string;
  heroDescription: string;
  primaryBackground: string;
  secondaryBackground: string;
  primaryTextColor: string;
  secondaryTextColor: string;
  foreground: string;
}) => {
  return (
    <main className="flex-grow">
      <section
        className="bg-[#FF5E14] text-white py-16"
        style={{
          backgroundColor: primaryBackground,
          color: secondaryBackground,
        }}
      >
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {heroTitle}
          </h1>
          <p className="max-w-2xl mx-auto">{heroDescription}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div
              className="bg-[#FDF6EF] p-8 rounded-lg"
              style={{ backgroundColor: foreground }}
            >
              <h2
                className="text-2xl font-bold text-[#FF5E14] mb-6"
                style={{ color: primaryBackground }}
              >
                Send us a Message
              </h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input type="text" placeholder="First Name" />
                  <Input type="text" placeholder="Last Name" />
                </div>
                <Input type="email" placeholder="Email Address" />
                <Input type="tel" placeholder="Phone Number" />
                <Input type="text" placeholder="Subject" />
                <Textarea placeholder="Your Message" className="h-32" />
                <Button
                  className="bg-[#FF5E14] text-white rounded-full w-full"
                  style={{
                    backgroundColor: primaryBackground,
                    color: secondaryBackground,
                  }}
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2
                  className="text-2xl font-bold text-[#FF5E14] mb-6"
                  style={{ color: primaryBackground }}
                >
                  Get in Touch
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone
                      className="text-[#FF5E14] mt-1"
                      size={20}
                      color={primaryBackground}
                    />
                    <div>
                      <p
                        className="font-medium"
                        style={{ color: primaryTextColor }}
                      >
                        Phone
                      </p>
                      <p
                        className="text-gray-600"
                        style={{ color: secondaryTextColor }}
                      >
                        (555) 123-4567
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail
                      className="text-[#FF5E14] mt-1"
                      size={20}
                      color={primaryBackground}
                    />
                    <div>
                      <p
                        className="font-medium"
                        style={{ color: primaryTextColor }}
                      >
                        Email
                      </p>
                      <p
                        className="text-gray-600 "
                        style={{ color: secondaryTextColor }}
                      >
                        info@yogast.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin
                      className="text-[#FF5E14] mt-1"
                      size={20}
                      color={primaryBackground}
                    />
                    <div>
                      <p
                        className="font-medium"
                        style={{ color: primaryTextColor }}
                      >
                        Address
                      </p>
                      <p
                        className="text-gray-600"
                        style={{ color: secondaryTextColor }}
                      >
                        123 Wellness Street
                        <br />
                        Peaceful Valley, CA 90210
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div>
                <h3 className="text-xl font-bold text-[#FF5E14] mb-4">
                  Studio Hours
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <Clock className="text-[#FF5E14]" size={16} />
                    <div className="flex justify-between w-full">
                      <span>Monday - Friday</span>
                      <span className="text-gray-600">6:00 AM - 9:00 PM</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="text-[#FF5E14]" size={16} />
                    <div className="flex justify-between w-full">
                      <span>Saturday</span>
                      <span className="text-gray-600">7:00 AM - 7:00 PM</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="text-[#FF5E14]" size={16} />
                    <div className="flex justify-between w-full">
                      <span>Sunday</span>
                      <span className="text-gray-600">8:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                </div>
              </div> */}

              <div
                className="bg-[#FDF6EF] p-6 rounded-lg"
                style={{ backgroundColor: foreground }}
              >
                <h3
                  className="text-xl font-bold text-[#FF5E14] mb-2"
                  style={{ color: primaryBackground }}
                >
                  New to Yoga?
                </h3>
                <p
                  className="text-gray-700 mb-4"
                  style={{ color: secondaryTextColor }}
                >
                  We offer a complimentary consultation for first-time visitors
                  to help you find the perfect class for your needs.
                </p>
                <Button
                  className="bg-[#FF5E14] hover:bg-orange-600 text-white rounded-full"
                  style={{
                    backgroundColor: primaryBackground,
                    color: secondaryBackground,
                  }}
                >
                  Book Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default YogastContact;
