import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';

const VideoSection = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-16 px-8 sm:px-6 lg:px-8 bg-[#F5F5F5]"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-[#000000] mb-8 text-center">Our Impact</h2>
        <div className="relative aspect-w-16 aspect-h-9 h-96 rounded-lg overflow-hidden shadow-lg">
          {!isPlaying ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsPlaying(true)}
                className="bg-[#C62828] bg-opacity-80 text-white rounded-full p-4"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </motion.button>
              <LazyLoadComponent
                threshold={200}
                style={{ width: '100%', height: '100%' }}
              >
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Video thumbnail"
                  className="w-full h-full object-cover"
                />
              </LazyLoadComponent>
            </div>
          ) : (
            <iframe className="w-full h-full"
              src="https://www.youtube.com/embed/JefX20LhCPQ?si=OEUoKktB8gIP9J5v"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          )}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-[#424242] mt-6 max-w-2xl mx-auto"
        >
          Watch how your donations are making a real difference in people's lives every day.
        </motion.p>
        <div className="flex justify-center w-full">
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#8E0000' }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#C62828] text-white mt-6 px-6 py-2 rounded-md font-medium"
            onClick={() => navigate('/recipients')}
          >
            Donate Now
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default VideoSection;
