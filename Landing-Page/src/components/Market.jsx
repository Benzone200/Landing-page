import React from 'react';
import Tesla from '../assets/images/Tesla.png';
import Logo1 from '../assets/images/Logo1.png';
import Logo2 from '../assets/images/Logo2.png';
import Logo3 from '../assets/images/Logo3.png';
import Logo4 from '../assets/images/Logo4.png';
import Logo5 from '../assets/images/Logo5.png';
import Logo6 from '../assets/images/Logo6.png';
import market1 from '../assets/images/market1.png';
import market2 from '../assets/images/market2.png';
import market3 from '../assets/images/market3.png';

const Market = () => {
  const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6];
  const cards = [
    {
      img: market1,
      title: 'Creating Streamlined Safeguarding Processes with OneRen',
    },
    {
      img: market2,
      title: 'What are your safeguarding responsibilities and how can you manage them?',
    },
    {
      img: market3,
      title: 'Revamping the Membership Model with Triathlon Australia',
    },
  ];

  return (
    <section className="bg-white py-16 px-6 sm:px-10 lg:px-24">
      {/* Testimonial Section */}
      <div className="bg-[#f5f7fa] p-8 rounded-lg flex flex-col lg:flex-row items-center lg:items-start gap-12 max-w-[1440px] mx-auto">
  {/* Image */}
  <img
    src={Tesla}
    alt="Tesla"
    className="w-full max-w-[400px] h-auto object-contain"
  />

  {/* Text + Logos + CTA */}
  <div className="flex flex-col gap-4 w-full max-w-[800px]">
    {/* Testimonial Text */}
    <p className="text-[16px] leading-[24px] text-[#333]">
      Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
    </p>

    {/* Author Info */}
    <div className="text-left">
      <p className="text-[#4caf4f] text-[20px] font-semibold">Tim Smith</p>
      <p className="text-[#89939E] text-[16px]">
        British Dragon Boat Racing Association
      </p>
    </div>

    {/* Logos + CTA (now inside the testimonial block) */}
    <div className="flex flex-wrap items-center gap-x-6 gap-y-4 mt-4 lg:mt-2">
      <div className="flex gap-5 flex-wrap">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            className="w-[24px] h-[19px]"
          />
        ))}
      </div>
      <p className="text-[#4caf4f] text-[20px] font-semibold cursor-pointer hover:underline">
        Meet all customers →
      </p>
    </div>
  </div>
</div>

      {/* Blog Cards Section */}
      <div className="mt-16 text-center max-w-[1200px] mx-auto">
        <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-semibold mb-4">
          Caring is the new marketing
        </h2>
        <p className="text-[#717171] text-[16px] leading-[24px] max-w-[800px] mx-auto mb-12">
          The Nexcent blog is the best place to read about the latest membership insights, trends and more. See how
          other organizations are solving problems, experimenting, and improving their membership income and a lot more.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center transform transition duration-300 hover:scale-[1.03] hover:shadow-xl"
            >
              <img
                src={card.img}
                alt={`Card ${index + 1}`}
                className="w-full h-[180px] object-cover mb-4 rounded-md"
              />
              <h3 className="text-[18px] font-semibold text-center mb-2">{card.title}</h3>
              <a href="#" className="text-[#4CAF4F] text-[16px] font-medium hover:underline">
                Read more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Market;