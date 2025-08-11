import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import './Modal.css';

const Modal = ({ selectedTool, setSelectedTool }) => {
  if (!selectedTool) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="modal-backdrop"
        onClick={() => setSelectedTool(null)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="modal-content"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <button className="close-button" onClick={() => setSelectedTool(null)}>
            <IoClose />
          </button>
          <img src={selectedTool.image} alt={selectedTool.name} className="modal-image" />
          <div className="modal-text">
            <h2>{selectedTool.name}</h2>
            <p>{selectedTool.description}</p>
            {selectedTool.wip && (
              <p className="wip-message">
                <strong>Work in Progress:</strong> {selectedTool.wipMessage}
              </p>
            )}
          </div>
          {selectedTool.link && (
            <a href={selectedTool.link} className="modal-link" target="_blank" rel="noopener noreferrer">
              View Live Tool
            </a>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;