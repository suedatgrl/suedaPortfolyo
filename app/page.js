'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  // Gallery data
  const projects = [
    { id: 1, title: "Project One", description: "Creative design exploration" },
    { id: 2, title: "Project Two", description: "Interactive experience" },
    { id: 3, title: "Project Three", description: "Visual storytelling" },
    { id: 4, title: "Project Four", description: "Brand identity" },
    { id: 5, title: "Project Five", description: "Motion design" },
    { id: 6, title: "Project Six", description: "Digital art" },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <motion.h1 
            className="text-7xl md:text-9xl font-light tracking-tight mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            Portfolio of
          </motion.h1>
          <motion.h2 
            className="text-8xl md:text-[12rem] font-extralight tracking-tighter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
          >
            Sueda
          </motion.h2>
          <motion.p
            className="mt-8 text-lg md:text-xl text-gray-400 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.9 }}
          >
            Creative Designer & Developer
          </motion.p>
        </motion.div>
      </section>

      {/* Spacer for scroll effect */}
      <div className="h-screen" />

      {/* Gallery Section */}
      <section ref={containerRef} className="min-h-screen py-32 px-8">
        <motion.div
          style={{ opacity, scale }}
          className="max-w-7xl mx-auto"
        >
          <motion.h3 
            className="text-5xl md:text-7xl font-light mb-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Selected Works
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/5] bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden mb-4">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"
                    whileHover={{ opacity: 0.8 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-extralight text-gray-600 group-hover:text-gray-400 transition-colors duration-300">
                      {String(project.id).padStart(2, '0')}
                    </span>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-xl font-light mb-2">{project.title}</h4>
                  <p className="text-gray-500 text-sm">{project.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer spacer */}
      <div className="h-screen flex items-center justify-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="text-2xl font-light text-gray-600"
        >
          More coming soon...
        </motion.p>
      </div>
    </main>
  );
}
