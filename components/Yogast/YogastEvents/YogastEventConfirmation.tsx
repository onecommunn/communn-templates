
import { Button } from "@/components/Ui/button";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

const YogastEventConfirmation = () => {

  return (
    <main className="flex-grow">
      <section className="py-16 bg-[#FDF6EF]">
        <div className="container mx-auto px-4 md:px-20">
          <div className="mx-auto">
            {/* Success Message */}
            <div className="text-center mb-8">
              <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
              <h1 className="text-3xl md:text-4xl font-bold text-[#FF5E14] mb-2">
                Registration Confirmed!
              </h1>
              <p className="text-gray-600 text-lg">
                Thank you for registering. We'll contact you soon with payment
                details.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="text-center mt-8 space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Link href="/events">
                <Button
                  variant="outline"
                  className="border-[#FF5E14] text-[#FF5E14] hover:bg-[#FF5E14] hover:text-white rounded-full"
                >
                  <ArrowLeft size={16} className="mr-2" />
                  Browse More Events
                </Button>
              </Link>

              <Link href="/contact">
                <Button className="bg-[#FF5E14] hover:bg-orange-600 text-white rounded-full">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default YogastEventConfirmation;
