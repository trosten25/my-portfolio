import React from 'react';
import "../styling/about.css";

const services = [
  { title: "Frontend Developer", icon: "🌐" },
  { title: "Backend Engineer", icon: "⚙️" },
  { title: "UI/UX Designer", icon: "🎨" },
  { title: "AI/ML Enthusiast", icon: "🤖" },
];

const About = () => {
  return (
    <section className="overview-container">
      <div className="text-content">
        <p className="section-subtext">INTRODUCTION</p>
        <h2 className="section-headtext">About</h2>
        <p className="description-text">
          I am a versatile software developer and Engineering student with a solid 
          foundation in HTML, CSS, and JavaScript, alongside expertise in building 
          full-stack applications with React and Node.js. My technical toolkit extends 
          to C/C++, Java, and Python, allowing me to bridge the gap between high-level 
          web development and low-level system logic. I am particularly interested in 
          the intersection of web tech and AI/ML, leveraging tools like Scikit-learn 
          to build intelligent solutions.
        </p>
      </div>

      <div className="cards-wrapper">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="card-inner">
              <span className="card-icon">{service.icon}</span>
              <h3 className="card-title">{service.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;