import React from 'react';
import woman from '../assets/images/woman.png';

const Steps = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-[60px] px-6 sm:px-10 lg:px-[100px]">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-[150px] max-w-[1440px] w-full">
        {/* Image */}
        <div className="w-full lg:w-[45%] flex justify-center">
          <img src={woman} alt="Woman" className="w-full max-w-[400px] h-auto object-contain" />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-[55%] flex flex-col">
          <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] font-semibold leading-tight mb-4 text-gray-800">
            How to design your site footer like
            <span className="block text-green-500">we did</span>
          </h2>

          <p className="text-[#717171] text-[14px] leading-[20px] font-normal mb-6">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt
            molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at
            libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta
            nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt.
            Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est,
            finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
          </p>

          <a
            href="#"
            className="inline-block bg-[#4CAF4F] hover:bg-[#43a047] text-white px-6 py-3 rounded-md text-[16px] font-medium transition duration-300 md:mx-auto md:w-[140px]"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Steps;