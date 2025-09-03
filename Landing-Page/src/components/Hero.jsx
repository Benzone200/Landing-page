import React from 'react';
import heroimg from '../assets/images/heroimg.png';

const Hero = () => {
  return (
    <header className=" bg-[#f5f7fa] animate-fade-in px-6 py-10 sm:px-10 lg:px-[150px]">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-[1440px] mx-auto">
        {/* Text Section */}
       <div className="w-full pt-6 lg:pt-[50px] flex justify-center ">
  <div className="text-center lg:w-[40%] lg:mr-auto">
    <h2 className="text-[32px] sm:text-[40px] lg:text-[50px] lg:w-[500px] font-semibold leading-tight text-gray-800">
      Lessons and insights
    </h2>
    <h2 className="text-[32px] sm:text-[40px] lg:text-[50px] font-semibold leading-tight text-green-500 mb-4">
      from 8 years
    </h2>

    <p className="text-[15px] sm:text-[16px] text-[#717171] max-w-md mx-auto mb-6">
      Where to grow your business as a photographer: site or social media?
    </p>

    <a
      href="#"
      className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md transition duration-300 mx-auto"
    >
      Register
    </a>
  </div>
</div>

        {/* Image Section */}
        <div className="w-full lg:w-[50%] mb-10 lg:mb-0 flex justify-center">
          <img
            src={heroimg}
            alt="Hero"
            className="h-[300px] sm:h-[350px] lg:h-[400px] object-contain"
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;