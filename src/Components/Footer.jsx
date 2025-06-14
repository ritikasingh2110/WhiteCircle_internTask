import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#04000B] text-[#F6F4F9] py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-6">
        
        {/* Social Icons */}
        <div className="flex space-x-6 text-xl">
          <a
            href="#"
            className="hover:text-[#6222CC] focus:outline-none focus:ring-2 focus:ring-[#FBA504] rounded transition"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="hover:text-[#FBA504] focus:outline-none focus:ring-2 focus:ring-[#FBA504] rounded transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="hover:text-[#6222CC] focus:outline-none focus:ring-2 focus:ring-[#FBA504] rounded transition"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            className="hover:text-[#FBA504] focus:outline-none focus:ring-2 focus:ring-[#FBA504] rounded transition"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-[#F6F4F9] text-center sm:text-left">
          © {new Date().getFullYear()} Whitecircle Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
