import React from 'react';

const reasons = [
  {
    title: 'AI-Driven Strategy',
    description: 'We use intelligent algorithms to drive campaign decisions and maximize ROI.',
    emoji: '🧠',
  },
  {
    title: 'Experienced Team',
    description: 'Our team has years of hands-on experience in scaling e-commerce brands.',
    emoji: '🚀',
  },
  {
    title: 'Proven Results',
    description: 'Our clients consistently see measurable sales growth and improved visibility.',
    emoji: '📈',
  },
  {
    title: 'Transparent Reporting',
    description: 'Get clear, regular updates with performance insights and strategic actions.',
    emoji: '📊',
  },
];

const Why = () => {
  return (
    <section className="bg-gradient-to-r from-[#E7DBFB] via-[#F6F4F9] to-[#DCD5F0] py-35" id="why-us">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#6222CC] mb-12" style={{ fontFamily: '"Jost", sans-serif' }}>
          Why Choose Us
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center transition-transform duration-300"
            >
              <div className="text-5xl mb-4 drop-shadow-md group-hover:drop-shadow-[0_4px_20px_rgba(98,34,204,0.7)] group-hover:animate-bounce transition duration-300">
                {item.emoji}
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-[#FBA504] mb-2 transition-transform duration-300 group-hover:scale-105">
                {item.title}
              </h3>

              <p className="text-[#04000B] text-sm leading-relaxed max-w-xs transition-transform duration-300 group-hover:scale-[1.03]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
