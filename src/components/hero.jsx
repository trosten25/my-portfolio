import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial, Sphere } from '@react-three/drei';
import "../styling/hero.css";

const AnimatedSphere = () => {
  return (
    <Sphere args={[1, 100, 200]} scale={2.4}>
      <MeshDistortMaterial
        color="#3dffd2"
        attach="material"
        distort={0.5} // Amount of distortion
        speed={2} // Speed of animation
        roughness={0}
      />
    </Sphere>
  );
};

const Hero = () => {
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const container = containerRef.current;
    if (!container) return;

    // Get cursor coordinates relative to the bounding box of the hero section
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Set the CSS variables dynamically
    container.style.setProperty('--mouse-x', `${x}px`);
    container.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div 
      className="hero-container" 
      ref={containerRef} 
      onMouseMove={handleMouseMove}
    >
      {/* Background Interactive Glow Layer */}
      <div className="interactive-glow"></div>

      <div className="hero-content">
        {/* Left Side: Text */}
        <div className="text-section">
          <h1>Full Stack<br /> Web <br /> Developer</h1>
          <p>
            Hi... I'm Trosten Dsouza a student and a full stack web developer 
            specialized in UI/UX and Artificial Intelligence and Machine Learning.
            I strive to solve real world problems with great enthusiasm. Feel free to get in 
            touch  
          </p>
          <a href="#contact">
            <button className="btn-primary">Contact ME &rarr;</button>
          </a>
        </div>

        {/* Right Side: 3D Element */}
        <div className="canvas-container">
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <AnimatedSphere />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Hero;