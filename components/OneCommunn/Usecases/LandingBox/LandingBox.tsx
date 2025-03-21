'use client';

import Image from 'next/image';
import LandingForm from '../LandingForm/LandingForm';
import { HeaderLogo } from '@/lib/types/Header/HeaderLogo';


interface ILandingPage {
  title?: string;
  description1?: string;
  description2?: string;
  description3?: string;
  mobileDescription?: string;
  image?: HeaderLogo;
  sectionItems: {
    title: string;
    image: HeaderLogo;
  }[];
  title2?: string;
  description4?: string;
}

const LandingBox: React.FC<ILandingPage> = (props) => {
  return (
    <div className="p-6 md:p-24 bg-cover bg-center" >
      <div
        className="flex flex-col items-center justify-center bg-auto bg-center rounded-2xl px-4 py-6 md:py-12"
        style={{ backgroundImage: `url(${props.image})` }}
      >
        <h2 className="text-blue-700 text-lg md:text-4xl font-bold text-center w-full" data-aos="fade-up">
          {props?.title}
        </h2>
        <p
          className="hidden md:block text-gray-700 text-sm md:text-base text-center mt-2"
          data-aos="fade-up"
        >
          {props?.description1} <br /> {props?.description2} <br /> {props?.description3}
        </p>
        <p className="block md:hidden text-gray-700 text-base text-center mt-2" data-aos="fade-up">
          {props?.mobileDescription}
        </p>

        <div
          className="grid grid-cols-4 md:grid-cols-4 gap-4 justify-center items-center p-4 md:p-20 w-full"
          data-aos="fade-up"
        >
          {props?.sectionItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <Image src={item.image} alt={item.title} width={60} height={60} className="md:w-18 md:h-18 w-10 h-10" />
              <p className="text-blue-700 text-xs md:text-sm mt-2">{item?.title}</p>
            </div>
          ))}
        </div>

        <h2 className="text-blue-700 text-lg md:text-4xl font-bold text-center mt-6" data-aos="fade-up">
          {props?.title2}
        </h2>
        <p className="hidden md:block text-gray-700 text-sm md:text-base text-center mt-2" data-aos="fade-up">
          {props?.description4}
        </p>
        <p className="block md:hidden text-gray-700 text-sm text-center mt-2" data-aos="fade-up">
          {props?.description4}
        </p>

        <div className="mt-4" data-aos="fade-up">
          <LandingForm />
        </div>
      </div>
    </div>
  );
};

export default LandingBox;
