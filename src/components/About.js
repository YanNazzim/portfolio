import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import profilePic from '../assets/profile-pic.png'; // Make sure to add a profile picture here

const About = () => {
  return (
    <motion.section
      id="about"
      className="section about-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="about-content">
        <div className="about-text">
            <h1 className="about-headline">Yan Gonzalez</h1>
            <h2 className="about-subheadline">Self-taught Project Manager & Tech Enthusiast</h2>
            <p>
              Driven Tech Support Rep at Sargent Manufacturing with a passion for web and software development. My dream is to lead innovative projects in manufacturing, software development, or AI, and I specialize in creating tools and applications that improve technical processes and user experiences (UI/UX).
            </p>
        </div>
        <div className="about-image-container">
            <motion.img
              src={profilePic}
              alt="Yan Gonzalez"
              className="about-image"
              whileHover={{ scale: 1.05, transition: { duration: 0.2, ease: "easeInOut" } }}
              transition={{ duration: 0.3 }}
            />
        </div>
      </div>
    </motion.section>
  );
};

export default About;