import React from 'react';
import Logo from '../assets/images/Logo.png';
import insta from '../assets/images/insta.png';
import ball from '../assets/images/ball.png';
import twitter from '../assets/images/twitter.png';
import youtube from '../assets/images/youtube.png';

const Footer = () => {
  return (
    <section className="bg-[#F5F7FA] px-6 md:px-12 lg:px-24 py-16 flex flex-col items-center">
      {/* CTA Section */}
      <div className="text-center mb-16 w-[600px]">
        <h2 className="text-[32px] md:text-[48px] leading-[40px] md:leading-[56px] font-semibold text-[#4D4D4D] mb-6">
          Pellentesque suscipit <br /> fringilla libero eu.
        </h2>
        <button className="bg-[#4CAF4F] hover:bg-[#43a047] text-white px-6 py-3 rounded-md text-[16px] font-medium transition duration-300">
          Get a Demo →
        </button>
      </div>

      {/* Footer Content */}
      <footer className="w-full bg-[#263238] text-white px-6 py-10">
  <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
    {/* Logo + Social */}
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <img src={Logo} alt="Nexcent Logo" className="w-[40px] h-[30px]" />
        <p className="text-[24px] font-semibold">Nexcent</p>
      </div>
      <p className="text-[#F5F7FA] text-[14px]">Copyright © 2020 Nexcent Ltd.</p>
      <p className="text-[#F5F7FA] text-[14px]">All rights reserved</p>
      <div className="flex gap-4 mt-4">
        {[insta, ball, twitter, youtube].map((icon, index) => (
          <img
            key={index}
            src={icon}
            alt={`Social ${index}`}
            className="w-[20px] h-[20px] hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
        ))}
      </div>
    </div>

    {/* Company Links */}
    <div className="flex flex-col gap-2">
      <h4 className="text-[20px] font-semibold mb-2">Company</h4>
      {['About us', 'Blog', 'Contact us', 'Pricing', 'Testimonials'].map((item, index) => (
        <a
          key={index}
          href="#"
          className="text-[#F5F7FA] text-[14px] hover:underline transition duration-200"
        >
          {item}
        </a>
      ))}
    </div>

    {/* Support Links */}
    <div className="flex flex-col gap-2">
      <h4 className="text-[20px] font-semibold mb-2">Support</h4>
      {['Help center', 'Terms of service', 'Legal', 'Privacy policy'].map((item, index) => (
        <a
          key={index}
          href="#"
          className="text-[#F5F7FA] text-[14px] hover:underline transition duration-200"
        >
          {item}
        </a>
      ))}
    </div>

    {/* Newsletter */}
    <div className="flex flex-col gap-4">
      <h4 className="text-[20px] font-semibold">Stay up to date</h4>
      <input
        type="email"
        placeholder="Your email address"
        className="bg-[#F5F7FA] text-[#4D4D4D] px-4 py-2 rounded-md text-[14px] w-full focus:outline-none focus:ring-2 focus:ring-[#4CAF4F]"
      />
    </div>
  </div>
</footer>
    </section>
  );
};

export default Footer;