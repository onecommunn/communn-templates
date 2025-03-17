import Image from "next/image";
import { HeaderLogo } from "@/lib/types/Header/HeaderLogo";

const HomeContentWithImage = ({
  image,
  title,
  description,
}: {
  image: HeaderLogo;
  title: string;
  description: string;
}) => {
  return (
    <div
      className="flex items-center justify-center bg-cover bg-center bg-no-repeat py-2 w-full font-communn max-h-[10vh]"
      style={{
        backgroundImage: `url(/Images/Home/bg1.webp)`,
        minHeight: "85vh",
      }}
    >
      <div className="flex md:flex-row flex-col items-center justify-between">
        <div className="w-full md:w-5/12 p-5 bg-white bg-opacity-90 md:pl-40">
          <h2
            className="text-2xl md:text-3xl font-bold text-blue-800 mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {title}
          </h2>
          <p
            className="text-sm md:text-base text-gray-700 leading-7"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {description}
          </p>
        </div>
        <div>
          <Image src={image} width={600} height={600} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeContentWithImage;
