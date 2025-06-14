import React from 'react';
import loti from "../assets/loti.webp"

// const techStack = {
//   "Frontend Tools 🖥️": [
//     { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
//     { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
//     { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
//     { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
//     { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
//   ],
//   "UI/UX Tools 🎨": [
//     { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
//     { name: "Adobe XD", logo: "https://cdn.worldvectorlogo.com/logos/adobe-xd-2.svg" },
//   ],
//   "Animations ⚙️": [
//     { name: "LottieFiles", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7f/LottieFiles_logo.svg" },
//     { name: "Framer Motion", logo: "https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png" },
//   ],
// };
const techStack = {
  "Frontend Tools 🖥️": [
    { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tailwindcss.svg" },
    { name: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  ],
  "UI/UX Tools 🎨": [
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Adobe XD", logo: "https://cdn.worldvectorlogo.com/logos/adobe-xd-2.svg" },
  ],
  "Animations ⚙️": [
    { name: "LottieFiles", logo: loti },
    { name: "Framer Motion", logo: "https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png" },
  ],
  
};


const TechStack = () => {
  return (
    <section className="bg-gradient-to-r from-[#E7DBFB] via-[#F6F4F9] to-[#DCD5F0] py-30" id="tech-stack" name="tech-stack">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#6222CC] mb-10" style={{ fontFamily: '"Jost", sans-serif' }}>
          Technology Stack
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {Object.entries(techStack).map(([category, tools], index) => (
            <div
              key={index}
              className="group bg-white border border-[#E0DAF5] shadow-md p-6 rounded-xl transform transition-all duration-500 hover:scale-105 hover:bg-[#6222CC] hover:text-white"
            >
              <h3 className="text-xl font-semibold text-[#FBA504] mb-4 transition-colors duration-500 group-hover:text-white">
                {category}
              </h3>
              <ul className="space-y-3">
                {tools.map((tool, idx) => (
                  <li key={idx} className="flex items-center space-x-3 group-hover:text-[#F6F4F9]">
                    <img src={tool.logo} alt={tool.name} className="w-6 h-6" />
                    <span>{tool.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
