import React, { useRef } from 'react';
import "../styling/project.css";

import ipBridgeScreenshot from '../assets/project-pictures/ip-bridge-screenshot.png';
import flowTwinScreenshot from '../assets/project-pictures/flow-twin-screenshot.png';
import seedmap from '../assets/project-pictures/seedmap-screenshot.png';
import fixtureGeneratorScreenshot from '../assets/project-pictures/fixture-generator-screenshot.png';
import onlineVotingScreenshot from '../assets/project-pictures/online-voting-screenshot.png';
import gitHubIcon from '../assets/project-pictures/github-icon.png';

const projects = [
  {
    name: "IP-Bridge",
    description: "IP-Bridge is a tool that helps people understand legal information, in a simple way. It takes technical patent documents and removes all the extra legal language that is not needed.",
    tags: [
      { name: "react", color: "blue-text" },
      { name: "firebase", color: "orange-text" },
      { name: "gemini-ai", color: "green-text" },
    ],
    image: ipBridgeScreenshot,
    source_code_link: "https://github.com/trosten25/ip-bridge",
  },
  {
    name: "Online-Voting",
    description: "A secure, web-based digital voting platform designed with robust authentication protocols and real-time tabulation to ensure transparent, tamper-proof election management",
    tags: [
      { name: "react", color: "blue-text" },
      { name: "node", color: "yellow-text" },
      { name: "postgres", color: "blue-text" },
    ],
    image: onlineVotingScreenshot,
    source_code_link: "https://github.com/trosten25/voting-online",
  },
  {
    name: "Flow-twin",
    description: "Flow Twin is a tool that helps us track tasks and see how productive our employees are. It made use of React for the interface and Express and PostgreSQL for the system that stores our information.",
    tags: [
      { name: "javascript", color: "yellow-text" },
      { name: "css", color: "purple-text" },
      { name: "postgres", color: "blue-text" },
    ],
    image: flowTwinScreenshot,
    source_code_link: "https://github.com/trosten25/flow-twin",
  },
  {
    name: "Fixture-Generator",
    description: "A flexible, web-based tournament scheduling application built with HTML, CSS, and PHP. It allows users to dynamically generate complete match schedules for both League and Knockout formats.",
    tags: [
      { name: "html", color: "orange-text" },
      { name: "css", color: "purple-text" },
      { name: "php", color: "blue-text" },
    ],
    image: fixtureGeneratorScreenshot,
    source_code_link: "https://github.com/trosten25/fixture-generator",
  },
  {
    name: "SEEDMAP - Soil Classification",
    description: "A machine learning Flask application that classifies soil types from images and provides tailored crop recommendations.",
    tags: [
      { name: "python", color: "blue-text" },
      { name: "scikit-learn", color: "green-text" },
      { name: "flask", color: "pink-text" },
    ],
    image: seedmap,
    source_code_link: "https://github.com/trosten25/Seedmap-project",
  },
];

const Projects = () => {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    if (window.innerWidth > 768) {
      // PC Logic: Scroll vertically by the height of the 2 rows
      const scrollAmount = container.clientHeight;
      container.scrollTop += direction === 'next' ? scrollAmount : -scrollAmount;
    } else {
      // Mobile Logic: Scroll horizontally by roughly one card width
      const scrollAmount = container.clientWidth * 0.85;
      container.scrollLeft += direction === 'next' ? scrollAmount : -scrollAmount;
    }
  };

  return (
    <section className="projects-container">
      <div className="text-content">
        <p className="section-subtext">MY WORK</p>
        <h2 className="section-headtext">Projects.</h2>
        <p className="description-text">
          Following projects showcase my skills and experience through real-world 
          examples of my work. Each project is briefly described with links to 
          code repositories and live demos.
        </p>
      </div>

      <div className="projects-wrapper" ref={scrollRef}>
        {projects.map((project, index) => (
          <div key={`project-${index}`} className="project-card">
            <div className="image-container">
              <img src={project.image} alt={project.name} className="project-img" />
              <div className="github-link" onClick={() => window.open(project.source_code_link, "_blank")}>
                <img src={gitHubIcon} alt="source code" className="github-icon" />
              </div>
            </div>

            <div className="project-info">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
            </div>

            <div className="project-tags">
              {project.tags.map((tag) => (
                <p key={`${project.name}-${tag.name}`} className={`tag ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="projects-navigation">
        <button className="nav-arrow" onClick={() => handleScroll('prev')} aria-label="Previous items">
          &#8592;
        </button>
        <button className="nav-arrow" onClick={() => handleScroll('next')} aria-label="Next items">
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default Projects;