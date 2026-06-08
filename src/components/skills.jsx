import React from 'react';
import '../styling/skills.css';

// You can replace these strings with real SVG files, FontAwesome classes, or Lucide-react icons later.
// For now, I've used placeholder icons or acronyms that render cleanly in the UI.
const skillsData = [
  { name: "HTML", icon: "🌐", colorClass: "orange-accent" },
  { name: "CSS", icon: "🎨", colorClass: "blue-accent" },
  { name: "JavaScript", icon: "JS", colorClass: "yellow-accent" },
  { name: "Python", icon: "🐍", colorClass: "blue-yellow-accent" },
  { name: "React", icon: "⚛️", colorClass: "cyan-accent" },
  { name: "Node.js", icon: "⬢", colorClass: "green-accent" },
  { name: "Express.js", icon: "ex", colorClass: "gray-accent" },
  { name: "RESTful APIs", icon: "⚙️", colorClass: "red-orange-accent" },
  { name: "PostgreSQL", icon: "🐘", colorClass: "blue-accent" },
  { name: "AI", icon: "🤖", colorClass: "purple-accent" },
  { name: "n8n", icon: "n8n", colorClass: "red-accent" },
  { name: "Flask", icon: "⚗️", colorClass: "light-gray-accent" },
  { name: "Django", icon: "dj", colorClass: "dark-green-accent" },
  { name: "Tailwind CSS", icon: "🌊", colorClass: "cyan-accent" },
  { name: "Bootstrap", icon: "B", colorClass: "purple-accent" },
  { name: "Firebase", icon: "🔥", colorClass: "orange-accent" },
  { name: "OpenCV", icon: "👁️", colorClass: "rgb-accent" },
  { name: "C/C++", icon: "++", colorClass: "blue-accent" },
  { name: "Java", icon: "☕", colorClass: "red-orange-accent" }
];

const Skills = () => {
  return (
    <section className="skills-container">
      <div className="skills-header">
        
        <h2 className="skills-headtext">What I work with</h2>
      </div>

      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={`skill-${index}`} className={`skill-card ${skill.colorClass}`}>
            <div className="skill-icon-wrapper">
              <span className="skill-icon">{skill.icon}</span>
            </div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;