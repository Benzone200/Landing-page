import React from 'react';
import user from '../assets/images/user.png';
import hands from '../assets/images/hands.png';
import icon from '../assets/images/icon.png';
import wallet from '../assets/images/wallet.png';

const Stats = () => {
  return (
    <section className="bg-[#f5f7fa] py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between items-start gap-8 md:gap-12">
        
        {/* Left Text Block */}
        <div className="max-w-md md:max-w-xl md:mx-auto md:text-center">
          <h3 className="text-[32px] md:text-[34px] font-semibold leading-tight text-[#333] mb-4">
            Helping a local <span className="text-[#4caf4f]">business reinvent itself</span>
          </h3>
          <p className="text-[16px] md:text-[17px] leading-[24px] text-[#555]">
            We reached here with our hard work and dedication
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 md:gap-x-8 gap-y-8 md:gap-y-10 w-full md:mt-8">
          {[
            { img: user, value: '2,245,341', label: 'Members' },
            { img: hands, value: '46,328', label: 'Clubs' },
            { img: icon, value: '828,867', label: 'Event Bookings' },
            { img: wallet, value: '1,926,436', label: 'Payments' },
          ].map((stat, index) => (
            <div
              key={index}
              className="flex items-center gap-3 w-full max-w-[160px] mx-auto text-center hover:scale-[1.02] transition-transform duration-300"
            >
              <img src={stat.img} alt={stat.label} className="w-8 h-8 object-contain" />
              <div className="flex flex-col items-start">
                <h2 className="text-[20px] md:text-[21px] font-bold text-[#4d4d4d] break-words">
                  {stat.value}
                </h2>
                <p className="text-[14px] md:text-[15px] leading-[20px] text-[#18191F]">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;