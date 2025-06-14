import React from "react";
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="bg-[#F6F4F9] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Company Name */}
        <h1 className="text-3xl font-extrabold" style={{ fontFamily: '"Jost", sans-serif' }}>
          <span className="text-[#6222CC]">White</span>
          <span className="text-[#FBA504]">Circle</span>
          <span className="text-[#6222CC]">Group</span>
        </h1>

        {/* Navigation Menu */}
        <nav>
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
    </header>
  );
};

export default Header;
