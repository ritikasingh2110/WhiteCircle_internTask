import React from 'react';

const services = [
  'Keyword Optimization',
  'Product Ranking',
  'Paid Ads (Amazon/Flipkart)',
  'Listing Enhancement',
  'SEO & Branding for E-commerce Sellers',
];

const Service = () => {
  const firstRow = services.slice(0, 3);
  const secondRow = services.slice(3);

  return (
    <section
      className="bg-gradient-to-r from-[#E7DBFB] via-[#F6F4F9] to-[#DCD5F0] py-30 shadow-inner"
      id="services"
      name="services"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Section Title */}
        <h2
          className="text-3xl sm:text-4xl font-bold text-[#6222CC] mb-10"
          style={{ fontFamily: '"Jost", sans-serif' }}
        >
          Our Services
        </h2>

        {/* First Row: 3 Boxes */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-6">
          {firstRow.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-transparent shadow-md p-6 transition-all duration-500 transform hover:scale-105 hover:bg-[#6222CC] hover:text-white hover:border-[#FBA504] cursor-pointer group"
            >
              <p className="text-lg font-semibold transition-colors duration-500 group-hover:text-white">
                {service}
              </p>
              <div className="mt-2 h-1 w-0 group-hover:w-16 bg-[#FBA504] transition-all duration-300 mx-auto rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Second Row: 2 Boxes centered */}
        <div className="flex justify-center gap-6 flex-wrap">
          {secondRow.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-transparent shadow-md p-6 w-full sm:w-[280px] transition-all duration-500 transform hover:scale-105 hover:bg-[#6222CC] hover:text-white hover:border-[#FBA504] cursor-pointer group"
            >
              <p className="text-lg font-semibold transition-colors duration-500 group-hover:text-white">
                {service}
              </p>
              <div className="mt-2 h-1 w-0 group-hover:w-16 bg-[#FBA504] transition-all duration-300 mx-auto rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
