import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from './Modal';
import './Projects.css';
import sargentLogo from '../assets/Sargent Logo.png';
import ACRLogo from '../assets/ACRlogo.png';
import fidgetsImage from '../assets/fidgets.png';

const projects = [
  {
    title: 'Projects for Sargent Manufacturing',
    description: 'A collection of internal tools I developed to improve efficiency and support for the tech team, enhancing our ability to assist customers with all Sargent Product inquiries.',
    link: 'https://www.sargentlock.com/en',
    logo: sargentLogo,
    linkText: 'Learn More About Sargent Manufacturing',
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
    title: 'Behavioral Health Clinic Marketing Campaign',
    description: 'A project involving the design, prototyping, and mass manufacturing of pain stim fidget toys for a local behavioral health clinic, as well as a website revamp.',
    link: 'https://www.acrcounselingllc.com/',
    logo: ACRLogo,
    linkText: 'Learn More About ACR Counseling',
    tools: [
      {
        name: 'Fidget Toy Production',
        description: 'Designed, prototyped, and mass-manufactured branded pain stim fidget toys for a local behavioral health clinic.',
        image: fidgetsImage,
        link: fidgetsImage,
        imageAsLinkOnly: true,
        wip: false,
      },
      {
        name: 'Website Revamp',
        description: 'A complete overhaul of the clinic\'s existing website to improve user experience and modernize the design.',
        image: ACRLogo,
        link: 'https://acr-counseling.netlify.app',
        imageIsLink: false, // Image will not be a link
        wip: true,
        wipMessage: "The website revamp is currently in the design and development phase. Check back soon for updates!"
      },
    ],
  },
];

const Projects = () => {
    const [selectedTool, setSelectedTool] = useState(null);

    const openModal = (tool) => {
        setSelectedTool(tool);
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
                        whileHover={{ y: -7, scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    >
                        <div className="project-info">
                            {project.logo && <img src={project.logo} alt="Project Logo" className="project-logo" />}
                            {project.image && !project.tools && <img src={project.image} alt={project.title} className="project-image" />}
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            {!project.tools && project.link && (
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="main-project-link">
                                    View on GitHub
                                </a>
                            )}
                        </div>
                        {project.tools && (
                            <div className="tools-section">
                                <div className="tools-grid">
                                    {project.tools.map((tool, toolIndex) => (
                                        <motion.div
                                            key={toolIndex}
                                            className={`tool-item ${tool.wip ? 'wip' : ''}`}
                                            onClick={() => openModal(tool)}
                                            whileHover={{ scale: 1.08 }}
                                            transition={{ type: "spring", stiffness: 500, damping: 12 }}
                                        >
                                            {tool.name}
                                        </motion.div>
                                    ))}
                                </div>
                                {project.link && project.linkText && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="main-project-link">
                                        {project.linkText}
                                    </a>
                                )}
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