import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import profilePic from '../assets/profile-pic.png';

const About = () => {
  return (
    <motion.section
      id="about"
      className="section about-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }} /* Revamped transition */
    >
      <div className="about-content">
        <div className="about-text">
            <h1 className="about-headline">Yan Gonzalez</h1>
            <h2 className="about-subheadline">Self-taught Project Manager & Tech Enthusiast</h2>
            <p>
              I am a passionate <span>software and web developer</span> dedicated to solving problems and creating tools that enhance technical processes and user experiences. My goal is to lead innovative projects in manufacturing, software development, or AI, using my skills to turn ideas into impactful solutions.
            </p>
        </div>
        <div className="about-image-container">
            <motion.img
              src={profilePic}
              alt="Yan Gonzalez"
              className="about-image"
              whileHover={{ scale: 1.1 }} /* Slight increase in scale for hover */
              transition={{ type: "spring", stiffness: 300, damping: 10 }} /* Snappier spring transition */
            />
        </div>
      </div>
    </motion.section>
  );
};

export default About;