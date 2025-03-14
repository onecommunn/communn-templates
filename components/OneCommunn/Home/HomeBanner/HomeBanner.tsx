'use client';

import Image from 'next/image';
import { useTypewriter } from 'react-simple-typewriter';

const HomeBanner = () => {
  const [text] = useTypewriter({
    words: [
      'Interaction',
      'Communication',
      'Subscriptions',
      'Payments',
      'CMS',
      'Advanced Analytics',
    ],
    loop: 100,
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  return (
    <div
      className="relative flex items-center justify-center h-[110vh] md:h-[100vh] bg-cover bg-center pt-24 pb-10 -mt-12"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <div className="container mx-auto px-24">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-[#2952A2] font-bold text-xl md:text-3xl capitalize font-montserrat" data-aos="fade-up">
              "Automate Community Management with AI-Powered <br />
              <span className="text-[#3B9B7F] text-lg md:text-2xl font-bold font-montserrat capitalize">{text}</span>
              &nbsp;Effortlessly"
            </h1>
            <p className="text-[#1A2D4C] text-sm md:text-base leading-7 mt-4 hidden md:block" data-aos="fade-up">
              Our AI-powered platform enhances community management with tools for user data
              management, interaction, communication, subscription and payment processing, content
              management, and advanced analytics.
            </p>
            <div className="flex flex-col md:flex-row items-center mt-6" data-aos="fade-up">
              <a
                href="https://play.google.com/store/apps/details?id=com.communn_mobile_app"
                className="w-36 md:w-40 mr-4"
              >
                <Image
                  src="/Playstore.png"
                  alt="Playstore"
                  width={200}
                  height={100}
                  className="w-full"
                />
              </a>
              <a href="https://apps.apple.com/us/app/onecommunn/id6499468652" className="w-36 md:w-40">
                <Image
                  src="/Appstore.png"
                  alt="Appstore"
                  width={200}
                  height={100}
                  className="w-full"
                />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2" data-aos="fade-up">
            <Image
              src="/HomeMobile.png"
              alt="Mobile View"
              width={600}
              height={600}
              
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;