import React from 'react';

const Hero = () => {
  return (
    <section
      className="bg-gradient-to-r from-[#F6F4F9] via-[#E7DBFB] to-[#DCD5F0] py-50"
      id="home"
      name="home"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Tagline */}
        <h2 className="text-4xl sm:text-5xl font-bold text-[#04000B] mb-6" style={{ fontFamily: '"Jost", sans-serif' }}>
          Grow Your E-Commerce Sales by <span className="text-[#FBA504]" style={{ fontFamily: '"Jost", sans-serif' }}>10X</span>
        </h2>

        {/* Company Intro */}
        <p className="text-lg text-[#04000B] max-w-2xl mx-auto mb-8">
          Boosting e-commerce performance with result-focused campaigns, tech-enabled strategies, and deep expertise in scaling digital-first product businesses.
        </p>

        {/* CTA Button behaves like link until hover */}
        <button className="text-[#6222CC] underline text-lg font-medium transition-all duration-300 hover:no-underline hover:bg-[#6222CC] hover:text-white hover:px-6 hover:py-3 hover:rounded-full hover:scale-105">
          Book Free Growth Audit
        </button>
      </div>
    </section>
  );
};

export default Hero;
