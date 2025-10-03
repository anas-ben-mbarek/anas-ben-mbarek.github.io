import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          About Me
        </motion.h2>
        
        <div className="about-content">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="image-wrapper">
              <img src="https://via.placeholder.com/400" alt="Profile" />
              <div className="image-overlay"></div>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3>I'm a Full Stack Developer</h3>
            <p>
              With over 5 years of experience in web development, I specialize in creating 
              robust and scalable applications using modern technologies. My passion lies in 
              solving complex problems and turning ideas into reality through code.
            </p>
            <p>
              I have expertise in React, Node.js, Python, and various databases. I'm constantly 
              learning and staying up-to-date with the latest industry trends and best practices.
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">30+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat">
                <span className="stat-number">5+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
            
            <a href="#contact" className="btn-primary">Download CV</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;