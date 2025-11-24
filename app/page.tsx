'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <GallerySection />
    </main>
  );
}

function HeroSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <motion.section
      ref={targetRef}
      style={{ opacity, scale }}
      className="h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="text-center z-10 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent"
        >
          Sueda's Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
        >
          Discover my work through an immersive scroll experience
        </motion.p>
      </div>
      
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      </div>
    </motion.section>
  );
}

function GallerySection() {
  const projects = [
    {
      id: 1,
      title: 'Project Alpha',
      description: 'A beautiful web application with modern design',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 2,
      title: 'Project Beta',
      description: 'Mobile-first responsive platform',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 3,
      title: 'Project Gamma',
      description: 'Interactive data visualization dashboard',
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 4,
      title: 'Project Delta',
      description: 'E-commerce solution with cutting-edge tech',
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 5,
      title: 'Project Epsilon',
      description: 'Real-time collaboration tool',
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-center mb-20"
        >
          Featured Work
        </motion.h2>
        
        <div className="space-y-40">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  // Scale animation - grows as it enters viewport, shrinks as it leaves
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.8, 1.1, 1.1, 0.8]
  );

  // Rotation for depth effect
  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [15, 0, -15]
  );

  // Parallax effect - different items move at different speeds
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [index % 2 === 0 ? 100 : -100, index % 2 === 0 ? -100 : 100]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );

  return (
    <motion.div
      ref={targetRef}
      style={{
        scale,
        opacity,
        y,
        rotateX,
      }}
      className="relative"
    >
      <div
        className={`relative h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br ${project.color} p-1`}
      >
        <div className="h-full w-full bg-black/90 rounded-3xl p-8 md:p-12 flex flex-col justify-end backdrop-blur-sm">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {project.title}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-300"
          >
            {project.description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
