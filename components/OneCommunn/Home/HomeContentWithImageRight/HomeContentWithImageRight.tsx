import { HeaderLogo } from "@/lib/types/Header/HeaderLogo";
import Image from "next/image";

const HomeContentWithImageRight = ({ image, title, description }:{
    image:HeaderLogo,title:string,description:string
}) => {
  return (
    <div className="flex items-center justify-center py-2">
      <div className="container mx-auto flex flex-wrap items-center justify-center gap-8 px-4 md:flex-row">
        {/* Image Content */}
        <div className="w-full md:w-5/12 flex justify-center">
          <Image
            src={image}
            alt=""
            width={500}
            height={500}
            className="object-cover rounded-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
          />
        </div>
        {/* Text Content */}
        <div className="w-full md:w-5/12 p-5 bg-white bg-opacity-90">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4" data-aos="fade-up" data-aos-duration="1000">
            {title}
          </h2>
          <p className="text-sm md:text-base text-gray-700 leading-7" data-aos="fade-up" data-aos-duration="1000">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeContentWithImageRight;
