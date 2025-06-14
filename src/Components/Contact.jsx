import React from 'react';

const Contact = () => {
  return (
    <section
      className="bg-gradient-to-r from-[#F6F4F9] via-[#E7DBFB] to-[#DCD5F0] py-16 shadow-inner"
      id="contact"
      name="contact"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#6222CC] text-center mb-10" style={{ fontFamily: '"Jost", sans-serif' }}>
          Contact Us
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Form */}
          <form
            className="bg-white p-6 rounded-xl shadow-lg space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you! Your message has been received.');
            }}
          >
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FBA504] transition"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FBA504] transition"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              maxLength={10}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FBA504] transition"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FBA504] transition"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#6222CC] text-white py-3 rounded-md font-medium hover:bg-[#FBA504] transition duration-300"
            >
              Submit
            </button>
          </form>

          {/* Google Map Embed */}
          <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
            <iframe
              title="Whitecircle Group Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.470462323108!2d81.35306531494187!3d23.30218980922307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39858982f16d559d%3A0xc6076243ea373268!2sShahdol%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1718270140000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
