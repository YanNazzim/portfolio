import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import './Projects.css';
import sargentLogo from '../assets/Sargent Logo.png';

const projects = [
  {
    title: 'Projects for Sargent Manufacturing',
    description: 'A collection of internal tools I developed to improve efficiency and support for the tech team, enhancing our ability to assist customers with all Sargent Product inquiries.',
    link: 'https://www.sargentlock.com/en',
    logo: sargentLogo,
    tools: [
      {
        name: 'Sargent Templates',
        description: 'The Sargent Templates Lookup Tool is a fast, easy-to-use web app that lets you quickly search and access mounting templates for Sargent Exit Devices, Mortise locks, Bored locks, and more—all in just a few clicks.',
        image: sargentLogo,
        link: 'https://sargent-templates.netlify.app/',
        wip: false,
      },
      {
        name: 'Sargent Parts',
        description: 'The Sargent Parts Lookup Tool is a streamlined web app for quickly finding and viewing part numbers, descriptions, and details for Sargent exit devices, locks, and related hardware.',
        image: sargentLogo,
        link: 'https://sargent-parts.netlify.app/',
        wip: false,
      },
      {
        name: 'Sargent Cylinders',
        description: 'The Sargent Cylinders Tool helps you identify the correct cylinder for any Sargent product and breaks down each cylinder type into its individual components—keys, pins, cores, and more—for easy reference and ordering.',
        image: sargentLogo,
        link: 'https://sargent-cylinders.netlify.app/',
        wip: true,
        wipMessage: "While there are working examples and the website is visitable, it's not 100% complete and doesn't reflect the final form of the project. Give it a try!"
      },
      {
        name: 'Sargent Thick Door Tool',
        description: 'The Sargent Thick Door Tool lets you visualize Sargent hardware on a door in 3D and provides a complete list of parts needed for your specific thick-door configuration.',
        image: sargentLogo,
        link: 'https://sargent-thickdoor.netlify.app/',
        wip: true,
        wipMessage: "While there are working examples and the website is visitable, it's not 100% complete and doesn't reflect the final form of the project. Give it a try!"
      },
    ],
  },
  {
    title: 'Personal Portfolio Website',
    description: 'A responsive, dark-mode portfolio built with React to showcase my skills in front-end development, project management, and UI/UX design principles.',
    link: 'https://github.com/YanNazzim/portfolio',
    image: 'https://via.placeholder.com/1200x600?text=Portfolio+Screenshot',
  },
];


const Projects = () => {
    const [selectedTool, setSelectedTool] = useState(null);

    const handleToolClick = (tool) => {
      setSelectedTool(selectedTool === tool ? null : tool);
    };
  
    return (
      <section id="projects" className="section">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -7, scale: 1.03 }} /* Slightly more pronounced hover effect */
              transition={{ type: "spring", stiffness: 200, damping: 15 }} /* Revamped transition */
            >
              <div className="project-info">
                {project.logo && <img src={project.logo} alt="Project Logo" className="project-logo" />}
                {project.image && !project.tools && <img src={project.image} alt={project.title} className="project-image" />}
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {!project.tools && project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="main-project-link">View on GitHub</a>}
              </div>

              {project.tools && (
                <div className="tools-section">
                  <div className="tools-grid">
                    {project.tools.map((tool, toolIndex) => (
                      <motion.div
                        key={toolIndex}
                        className={`tool-item ${tool.wip ? 'wip' : ''} ${selectedTool === tool ? 'selected' : ''}`}
                        onClick={() => handleToolClick(tool)}
                        whileHover={{ scale: 1.08 }} /* Snappier hover effect */
                        transition={{ type: "spring", stiffness: 500, damping: 12 }} /* Very snappy spring transition */
                      >
                        {tool.name}
                      </motion.div>
                    ))}
                  </div>
                  {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="main-project-link">Learn More About Sargent Manufacturing</a>}
                </div>
              )}
              
              <AnimatePresence>
                {selectedTool && project.tools?.includes(selectedTool) && (
                  <motion.div
                    layout
                    className="tool-details-container"
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: '2rem' }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }} /* Revamped spring transition */
                  >
                    <motion.img layout="position" src={selectedTool.image} alt={selectedTool.name} className="tool-details-image" />
                    <motion.div layout="position" className="tool-details-text">
                      <h2>{selectedTool.name}</h2>
                      <p>{selectedTool.description}</p>
                      {selectedTool.wip && (
                        <p className="wip-message">
                          <strong>Work in Progress:</strong> {selectedTool.wipMessage}
                        </p>
                      )}
                    </motion.div>
                    {selectedTool.link && (
                      <motion.a layout="position" href={selectedTool.link} className="tool-details-link" target="_blank" rel="noopener noreferrer">
                        View Live Tool
                      </motion.a>
                    )}
                    <motion.button layout="position" className="close-details-button" onClick={() => setSelectedTool(null)}>
                      <IoClose />
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;