import React from 'react';
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.jpg.avif";
import img3 from "../assets/img3.png";

const testimonials = [
  {
    name: "Anand Mehta",
    role: "Founder, ShopNinja",
    quote:
      "Whitecircle Group helped us scale from ₹1L/month to ₹10L+ within 6 months. Their paid ads and keyword strategy are unmatched!",
    image: img1,
  },
  {
    name: "Sneha Verma",
    role: "Marketing Lead, TrendyKart",
    quote:
      "Thanks to their detailed reporting and constant support, we now understand exactly where our growth is coming from. Highly recommended!",
    image: img2,
  },
  {
    name: "Rohit Singh",
    role: "CEO, FitKart India",
    quote:
      "We saw 3x growth in product visibility. Their team blends AI tools with human expertise for real impact.",
    image: img3,
  },
];

const Test = () => {
  return (
    <section className="bg-gradient-to-r from-[#F6F4F9] via-[#E7DBFB] to-[#DCD5F0] py-35" id="testimonials" >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-[#FBA504] mb-5 text-1xl" style={{ fontFamily: '"Jost", sans-serif' }}>-- - Testimonial - --</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#6222CC] mb-10" style={{ fontFamily: '"Jost", sans-serif' }}>
          What Our Clients Say
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-500 flex flex-col items-center text-center transform hover:scale-[1.02]"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-4 border-[#6222CC] mb-4 transition-transform duration-500 group-hover:scale-90"
              />
              <p className="text-[#04000B] italic mb-4 text-base transition-transform duration-500 group-hover:scale-105 group-hover:tracking-wide">
                “{t.quote}”
              </p>
              <p className="font-semibold text-[#FBA504]">{t.name}</p>
              <p className="text-sm text-[#6222CC]">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Test;
