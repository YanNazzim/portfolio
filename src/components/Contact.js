import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import DOMPurify from 'dompurify'; // Import DOMPurify
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Sanitize form data before sending
    const sanitizedData = {
      name: DOMPurify.sanitize(formData.name),
      email: DOMPurify.sanitize(formData.email),
      message: DOMPurify.sanitize(formData.message),
    };

    const templateParams = {
      name: sanitizedData.name,
      email: sanitizedData.email,
      message: sanitizedData.message,
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message Sent!');
        },
        (error) => {
          console.log(error.text);
          alert('An error occurred, please try again.');
        }
      );

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    //... your form JSX
    <section id="contact" className="section">
      <h2 className="section-title">Contact Me</h2>
      <motion.form
        className="contact-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }} /* Revamped form transition */
      >
        <motion.input
          whileFocus={{ scale: 1.02 }} /* Snappier focus effect */
          transition={{ type: "spring", stiffness: 500, damping: 10 }} /* Very snappy spring transition */
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <motion.input
          whileFocus={{ scale: 1.02 }} /* Snappier focus effect */
          transition={{ type: "spring", stiffness: 500, damping: 10 }} /* Very snappy spring transition */
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <motion.textarea
          whileFocus={{ scale: 1.02 }} /* Snappier focus effect */
          transition={{ type: "spring", stiffness: 500, damping: 10 }} /* Very snappy spring transition */
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></motion.textarea>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit"
        transition={{ type: "spring", stiffness: 500, damping: 10 }}>
          {/* Snappy button transitions */}
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;