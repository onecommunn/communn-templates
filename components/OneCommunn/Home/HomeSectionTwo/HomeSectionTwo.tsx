const HomeSectionTwo = () => {
    return (
      <>
        <div className="mt-[-4rem] md:mt-[-8rem]">
          <img
            src={"/Images/Home/Vector26.png"}
            alt=""
            className="w-full"
          />
        </div>
        <div className="flex items-center justify-center h-fit md:h-[85vh] md:mx-24 mx-10">
          <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8">
            {/* Image Section */}
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="w-full md:w-1/2"
            >
              <img
                src={"/Images/Home/1.webp"}
                alt=""
                className="w-full"
              />
            </div>
            {/* Text Section */}
            <div className="w-full md:w-1/2 bg-white rounded-l-[15px] p-6 md:p-10">
              <h2
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-[#2A53A2] text-[20px] md:text-[30px] font-bold font-montserrat pb-2"
              >
                Its for Anyone
              </h2>
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                className="text-[#1A2D4C] text-[13px] md:text-[15px] leading-[30px] font-montserrat"
              >
                Eager to tap into community building potential? Communn is the
                platform for you, whether you have a community or not. Share
                expertise, create connections, earn revenue, and manage payments
                seamlessly. Ready to start something great? Join Communn.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default HomeSectionTwo;
  