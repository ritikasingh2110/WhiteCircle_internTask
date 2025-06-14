import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react"; // using lucide icons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-[#F6F4F9] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Company Name */}
        <h1 className="text-3xl font-extrabold" style={{ fontFamily: '"Jost", sans-serif' }}>
          <span className="text-[#6222CC]">White</span>
          <span className="text-[#FBA504]">Circle</span>
          <span className="text-[#6222CC]">Group</span>
        </h1>

        {/* Hamburger Icon - Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#6222CC] focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6 text-[#6222CC] font-medium">
            {['home', 'services', 'tech-stack', 'contact'].map((section, index) => (
              <li key={index}>
                <Link
                  to={section}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer relative transition-colors hover:text-[#FBA504] 
                             after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] 
                             after:bg-[#FBA504] after:transition-all after:duration-300 hover:after:w-full"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' ')}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#F6F4F9] px-6 py-4 shadow-md">
          <ul className="flex flex-col space-y-4 text-[#6222CC] font-medium">
            {['home', 'services', 'tech-stack', 'contact'].map((section, index) => (
              <li key={index}>
                <Link
                  to={section}
                  smooth={true}
                  duration={500}
                  onClick={closeMenu}
                  className="cursor-pointer block transition-colors hover:text-[#FBA504]"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' ')}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
