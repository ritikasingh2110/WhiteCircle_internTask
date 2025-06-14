import React, { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  { label: 'Sellers Helped', value: 250, suffix: '+' },
  { label: 'Average Sales Growth', value: 150, suffix: '%' },
  { label: 'Total Revenue Generated', value: 12, prefix: '₹', suffix: ' Cr+' },
];

const Stats = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="bg-gradient-to-r from-[#E7DBFB] via-[#F6F4F9] to-[#DCD5F0] py-30" id="stats" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#6222CC] mb-10" style={{ fontFamily: '"Jost", sans-serif' }}>
          Our Impact in Numbers
        </h2>

        <div className="grid sm:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-transform duration-500 transform hover:scale-105 overflow-hidden"
            >
              {hoveredIndex === index && (
                <div className="absolute top-2 right-3 text-2xl animate-bounce drop-shadow-lg">
                  🎉
                </div>
              )}

              <p className="text-4xl font-extrabold text-[#FBA504] mb-2">
                {inView ? (
                  <CountUp
                    start={1}
                    end={stat.value}
                    duration={2}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                ) : (
                  '0'
                )}
              </p>
              <p className="text-lg font-medium text-[#04000B]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
