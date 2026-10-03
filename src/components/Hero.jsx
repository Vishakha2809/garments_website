import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="hero-title">Banke Bihari Garments</h1>
          <p className="hero-lead">
            Garments made in Indore and sold wholesale to retailers across Madhya Pradesh. GST-invoiced, packed to order, dispatched on time.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-gold">Ask for wholesale rates</a>
            <a href="#range" className="btn btn-outline">See the range</a>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <motion.div 
            className="swatch-card hover-zoom-wrapper" 
            style={{ overflow: 'visible' }}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="swatch-pattern" style={{
              backgroundImage: 'url(/hero_premium.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)'
            }}></div>
            <div className="swatch-tag">
              Premium Ethnic Wear & Wholesale, Indore
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
