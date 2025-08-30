import React from 'react';
import Logo1 from '../assets/images/Logo1.png';
import Logo2 from '../assets/images/Logo2.png';
import Logo3 from '../assets/images/Logo3.png';
import Logo4 from '../assets/images/Logo4.png';
import Logo5 from '../assets/images/Logo5.png';
import Logo6 from '../assets/images/Logo6.png';
import Logo7 from '../assets/images/Logo7.png';
import member from '../assets/images/member.png';
import national from '../assets/images/national.png';
import club from '../assets/images/club.png';

const Client = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-800">Our Clients</h2>
        <p className="text-base text-[#717171] mt-2">
          We have been working with some Fortune 500+ clients
        </p>
      </div>

      {/* Logos */}
      
<div className="flex flex-wrap justify-center items-center gap-4 md:gap-12 lg:gap-30 mb-16">
  {[Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7].map((logo, index) => (
    <img
      key={index}
      src={logo}
      alt={`Client logo ${index + 1}`}
      className="w-5 h-auto md:w-9 lg:w-10 object-contain hover:scale-105 transition-transform duration-300 ease-in-out"
    />
  ))}
</div>

      {/* Community Section */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 max-w-2xl mx-auto">
          Manage your entire community in a single system
        </h2>
        <p className="text-base text-[#717171] mt-2">
          Who is Nextcent suitable for?
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-[1.02] text-center">
          <img src={member} alt="Membership Organisations" className="mx-auto mb-4 w-16 h-16" />
          <h3 className="text-xl font-bold mb-2">Membership Organisations</h3>
          <p className="text-sm text-[#717171]">
            Our membership management software provides full automation of membership renewals and payments.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-[1.02] text-center">
          <img src={national} alt="National Associations" className="mx-auto mb-4 w-16 h-16" />
          <h3 className="text-xl font-bold mb-2">National Associations</h3>
          <p className="text-sm text-[#717171]">
            Our membership management software provides full automation of membership renewals and payments.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#f5f7fa] p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-[1.02] text-center">
          <img src={club} alt="Clubs and Groups" className="mx-auto mb-4 w-16 h-16" />
          <h3 className="text-xl font-bold mb-2">Clubs and Groups</h3>
          <p className="text-sm text-[#717171]">
            Our membership management software provides full automation of membership renewals and payments.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Client;