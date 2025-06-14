import React from 'react';

const techStack = {
  "Frontend Tools 🖥️": ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "React.js"],
  "UI/UX Tools 🎨": ["Figma", "Adobe XD (optional)"],
  "Animations ⚙️": ["LottieFiles", "Framer Motion"],
};

const TechStack = () => {
  return (
    <section className="bg-gradient-to-r from-[#E7DBFB] via-[#F6F4F9] to-[#DCD5F0] py-30" id="tech-stack" name="tech-stack">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#6222CC] mb-10" style={{ fontFamily: '"Jost", sans-serif' }}>
          Technology Stack
        </h2>

        {/* Tech Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {Object.entries(techStack).map(([category, tools], index) => (
            <div
              key={index}
              className="group bg-white border border-[#E0DAF5] shadow-md p-6 rounded-xl transform transition-all duration-500 hover:scale-105 hover:bg-[#6222CC] hover:text-white"
            >
              <h3 className="text-xl font-semibold text-[#FBA504] mb-4 transition-colors duration-500 group-hover:text-white">
                {category}
              </h3>
              <ul className="space-y-2 list-disc list-inside">
                {tools.map((tool, idx) => (
                  <li
                    key={idx}
                    className="transition-colors duration-300 group-hover:text-[#F6F4F9]"
                  >
                    {tool}
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
