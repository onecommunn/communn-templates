import Image from "next/image";
import React from "react";

const CommunnAboutUs = () => {
  return (
    <div className="bg-white">
      {/** Hero Section */}
      <div className="min-h-[70vh] md:min-h-[135vh] w-full bg-cover bg-center bg-[url('/Images/About/Aboutus.webp')] py-10 md:pt-28">
        <div className="container mx-auto  flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={"/Images/About/Aboutus1.png"}
              alt="about us 1"
              width={550}
              height={550}
              className="w-full h-auto max-w-[550px] mt-10 md:mt-0"
            />
          </div>
          <div className="bg-white p-10 md:p-10 rounded-l-3xl  w-[90%] self-end md:w-1/2">
            <h1 className="text-2xl md:text-3xl font-bold py-4 md:py-6 text-[#2a53a2]">
              About us
            </h1>
            <p className="text-black md:w-[90%] text-justify font-communn leading-6 md:leading-8 text-sm md:text-base pb-6 md:pb-10">
              Welcome to Communn, where communities flourish, connections
              thrive, and change becomes possible. We're more than just a
              platform; we're a revolution in community engagement, believing in
              the strength of unity and the power of genuine connections.
              Communn simplifies community management, ensuring 100% user
              engagement by resolving the challenges that often come with group
              management. But we don't stop there; our platform empowers you to
              unlock your earning potential, create a distinctive identity, and
              excel in branding and marketing. With recurring revenue streams
              and endless growth possibilities, Communn is more than a platform;
              it's a journey to a thriving and connected future. Whether you're
              an administrator, a member, or a visionary, Communn is your
              catalyst for a world where communities are transformed,
              connections are nurtured, and change is amplified.
            </p>
          </div>
        </div>
      </div>

      {/** Our Story Section */}
      <div className="min-h-screen w-full bg-cover bg-center bg-[url('/Images/About/Aboutsbg.webp')] relative md:mt-6 pt-10">
        <div className="container mx-auto ">
          <div className="bg-white rounded-tr-[100px] p-10 md:p-20 w-[90%] self-start md:w-[80%] relative md:absolute md:bottom-0">
            <h1 className="text-2xl md:text-3xl font-bold py-4 md:py-6 text-[#2a53a2]">
              Our Story
            </h1>
            <div className="space-y-6">
              <p className="text-black text-justify font-communn leading-6 md:leading-8 text-sm md:text-base">
                At Communn, we're not just a tech startup – we're a team of
                young innovators passionate about revolutionizing community
                management. Our journey began in January 2022 with a shared
                vision to simplify community engagement, foster genuine
                connections, and reshape the way businesses market themselves.
              </p>
              <p className="text-black text-justify font-communn leading-6 md:leading-8 text-sm md:text-base">
                At Communn, community isn't just a concept; it's our way of
                life. We've experienced firsthand the remarkable transformations
                that occur when people come together as a tight-knit, supportive
                community. In our workspace, every team member's voice is
                valued, and support is given. This approach has not only made us
                more productive but has also strengthened relationships,
                bringing joy to the work we do and resulting in the creation of
                beautiful, impactful products. We believe in the power of
                community not just within our team but as a universal concept.
                It's a principle we extend to the heart of Communn, where we
                enable businesses, homemakers, travel enthusiasts, like-minded
                groups, and many others to create their communities. With
                features like subscriptions and recurring revenue, Communn
                becomes a platform where people can not only be a part of a
                community but also carve out their own unique identities.
              </p>
              <p className="text-black text-justify font-communn leading-6 md:leading-8 text-sm md:text-base">
                Just as we've experienced the magic of unity in our workspace,
                we aim to help our users experience the same in their endeavors,
                making the world a better place, one community at a time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/** Vision & Mission Section */}
      <div className="bg-white w-full flex items-center justify-center flex-col py-12">
        <div className="w-full px-4 md:px-24">
          <Image
            src={"/Images/About/Aboutbg2.webp"}
            alt="about bg 2"
            width={1200}
            height={600}
            className="w-full h-auto"
          />
        </div>

        <div className="w-full px-4 md:px-24 mt-8 md:mt-12">
          <h1 className="text-2xl md:text-3xl font-bold py-4 md:py-6 text-[#2a53a2]">
            Our Vision
          </h1>
          <p className="text-black font-communn leading-6 md:leading-8 text-base md:text-xl">
            We envision a world where every connection adds value, every
            transaction yields happy money, and every individual finds
            fulfillment and prosperity through meaningful contributions.
          </p>
        </div>

        <div className="w-full px-4 md:px-24 mt-8 md:mt-12">
          <h1 className="text-2xl md:text-3xl font-bold py-4 md:py-6 text-[#2a53a2]">
            Our Mission
          </h1>
          <p className="text-black font-communn leading-6 md:leading-8 text-base md:text-xl">
            To revolutionize human interaction, fostering productivity and
            meaningful relationships for a better world.
          </p>
        </div>
      </div>

      {/** What Sets Us Apart Section */}
      <div className="bg-white w-full py-8 md:py-16">
        <div className="container mx-auto  flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
          <div className="w-full md:w-[35%] flex justify-center">
            <Image
              src={"/Images/About/Aboutus4.png"}
              alt="about us 3"
              width={600}
              height={600}
              className="w-full h-auto max-w-[600px]"
            />
          </div>

          <div className="bg-[#e6e8ec] md:p-30 rounded-l-3xl md:rounded-l-[4rem] w-[95%] self-end p-10 py-20 md:w-[65%]">
            <h1 className="text-2xl md:text-3xl font-bold py-4 md:py-6 text-[#2a53a2] text-center md:text-right">
              What Sets Us Apart
            </h1>
            <p className="text-black font-communn leading-6 md:leading-8 text-justify text-sm md:text-base float-end">
              Communn is a versatile platform that adapts to your unique needs.
              Whether you're an entrepreneur, an educator, an artist, or simply
              passionate about building communities, Communn is your toolkit for
              expanding horizons, nurturing relationships, and exploring new
              frontiers. What sets us apart is our commitment to providing
              everyone, regardless of their background or expertise, with the
              power to tap into recurring revenue streams. With our platform,
              anyone can harness the potential of a secure and vibrant community
              to generate steady income. We believe that the ability to create,
              engage, and profit from your community should be within reach for
              all, and that's exactly what Communn delivers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunnAboutUs;
