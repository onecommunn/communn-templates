import React from 'react';
import UseCaseSlider from './UseCaseSlider';

const HomeUseCases = () => {
  return (
    <>
      <div className="flex flex-col items-center mb-5">
        <h2 
          data-aos="fade-up" 
          data-aos-duration="1000"
          className="text-[#2A53A2] text-xl md:text-3xl font-bold text-left md:text-center ml-3 md:ml-0"
        >
          Use Cases
        </h2>
      </div>
      <div 
        data-aos="fade-up" 
        data-aos-duration="1000"
        className="bg-[#FBFBFB] rounded-2xl py-10 px-2 md:px-15 mx-0 md:mx-5"
      >
        <UseCaseSlider />
      </div>
    </>
  );
};

export default HomeUseCases;