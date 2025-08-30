import React from 'react';
import pix from '../assets/images/pix.png';

const Pix = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 max-w-[1440px] mx-auto">
        
        {/* Image */}
        <div className="w-full md:w-1/2 animate-slide-in">
          <img src={pix} alt="Pixelgrade" className="w-full h-auto max-h-[400px] object-contain" />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left animate-fade-in">
          <h2 className="text-[28px] md:text-[36px] font-semibold leading-[44px] text-gray-800 mb-4">
            The unseen of spending three years at Pixelgrade
          </h2>
          <p className="text-[14px] md:text-[16px] leading-[24px] text-[#717171] mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
          </p>
          <a
            href="#"
            className="inline-block bg-[#4CAF4F] hover:bg-[#43a047] text-white px-6 py-3 rounded-md text-[16px] font-medium transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pix;