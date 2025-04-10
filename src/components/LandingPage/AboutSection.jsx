import { motion } from 'framer-motion';
import React from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

const AboutSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-16 px-8 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-[#000000] mb-8 text-center">About Us</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.p 
              className="text-[#424242] mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              We are a non-profit organization dedicated to making a difference in people's lives through donations and support.
            </motion.p>
            <motion.p 
              className="text-[#424242]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Our mission is to connect those who can help with those who need help, creating meaningful impact in communities worldwide.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            <LazyLoadComponent
              threshold={200}
              style={{ width: '100%', height: 'auto' }}
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Our team"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </LazyLoadComponent>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
