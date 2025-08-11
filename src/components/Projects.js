import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from './Modal';
import './Projects.css';
import sargentLogo from '../assets/Sargent Logo.png';

const projects = [
  {
    title: 'Projects for Sargent Manufacturing',
    description: 'A collection of internal tools I developed to improve efficiency and support for the tech team, enhancing our ability to assist customers with exit device inquiries.',
    link: 'https://www.sargentlock.com/en/products/exit-devices/',
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
        wipMessage: "While there are working examples and the website is visitable, it's not 100% complete and doesn't reflect the final form of the project."
      },
      {
        name: 'Sargent Thick Door Tool',
        description: 'The Sargent Thick Door Tool lets you visualize Sargent hardware on a door in 3D and provides a complete list of parts needed for your specific thick-door configuration.',
        image: sargentLogo,
        link: 'https://sargent-thickdoor.netlify.app/',
        wip: true,
        wipMessage: "While there are working examples and the website is visitable, it's not 100% complete and doesn't reflect the final form of the project."
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
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeInOut" }}
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
                        className={`tool-item ${tool.wip ? 'wip' : ''}`}
                        onClick={() => setSelectedTool(tool)}
                        whileHover={{ backgroundColor: 'var(--primary-color)', color: 'var(--background-color)' }}
                      >
                        {tool.name}
                        {tool.wip && <span className="wip-label">In Progress</span>}
                      </motion.div>
                    ))}
                  </div>
                  {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="main-project-link">Learn More About Sargent Manufacturing</a>}
                </div>
              )}
            </motion.div>
          ))}
        </div>
        {selectedTool && <Modal selectedTool={selectedTool} setSelectedTool={setSelectedTool} />}
      </section>
    );
  };

  export default Projects;