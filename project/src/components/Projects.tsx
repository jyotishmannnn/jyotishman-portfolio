import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Lightbulb, Notebook as Robot, Heart, Globe, Navigation, Cpu, Telescope, Brain, Hand, FileCode, FileSearch, Users } from 'lucide-react';

const projects = [
  {
    icon: <Cpu className="w-6 h-6 text-blue-500" />,
    title: "Transformer Monitoring System",
    description: "A real-time transformer monitoring system implemented under the Tamil Nadu electrical government. Designed to track performance, detect faults, and optimize maintenance schedules.",
    tech: ["IoT", "Embedded Systems", "Data Analytics"]
  },
  {
    icon: <Telescope className="w-6 h-6 text-purple-500" />,
    title: "Real-Time Galaxy Classification",
    description: "An AI-powered system that classifies galaxies from random images in real-time and uses a laser pointer to mark the corresponding celestial coordinates.",
    tech: ["Machine Learning", "Stellarium API", "Python", "Laser Control"]
  },
  {
    icon: <Brain className="w-6 h-6 text-red-500" />,
    title: "Stroke Detection System",
    description: "A wearable device that monitors vital signs and motion patterns using sensors to detect early signs of stroke. It integrates AI to analyze facial symmetry, motor functions, and heart rate fluctuations.",
    tech: ["IMU (MPU6050)", "MAX30102", "AD8232", "SEN-14588", "MLX90614", "MEMS Mic", "Machine Learning"]
  },
  {
    icon: <Hand className="w-6 h-6 text-green-500" />,
    title: "Multipurpose Gesture-Controlled Glove",
    description: "A flexible, wearable glove equipped with IMU and flex sensors to interpret hand gestures for multiple applications, including robotic control and virtual interactions.",
    tech: ["Arduino", "IMU (MPU6050)", "Flex Sensors", "Embedded Systems"]
  },
  {
    icon: <FileCode className="w-6 h-6 text-yellow-500" />,
    title: "File-Sharing-System",
    description: "A secure file-sharing system built with Node.js and SQLite, featuring random code generation for access control. Users can share files by generating unique codes, ensuring secure and efficient file management.",
    tech: ["Node.js", "SQLite", "HTML"],
    link: "https://github.com/jyotishmannnn/File-Sharing-System-Node.js-SQLite"
  },
  {
    icon: <FileSearch className="w-6 h-6 text-indigo-500" />,
    title: "AI-Resume-Extractor",
    description: "A Python-based tool designed to automatically extract key information from resumes (CVs) in various formats (PDF, DOCX, etc.). This tool uses natural language processing (NLP) techniques for data extraction.",
    tech: ["Python", "NLP", "PDF Processing"],
    link: "https://github.com/jyotishmannnn/AI-Resume-Extractor"
  },
  {
    icon: <Users className="w-6 h-6 text-sky-500" />,
    title: "LinkedIn Scraper",
    description: "A Python-based tool designed to scrape publicly available information from LinkedIn profiles. This scraper extracts key details such as personal information, job history, education, skills, and recommendations.",
    tech: ["Python", "Web Scraping", "Data Processing"],
    link: "https://github.com/jyotishmannnn/LinkedIn-Scraper"
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-yellow-500" />,
    title: "Smart Light",
    description: "An IoT-based smart lighting system that uses OpenCV to detect human presence and adjust lighting accordingly. This system enhances energy efficiency by automatically turning lights on or off based on movement detection.",
    tech: ["OpenCV", "IoT", "Python"]
  },
  {
    icon: <Robot className="w-6 h-6 text-blue-500" />,
    title: "WarBot",
    description: "A high-performance combat robot designed for Technoxian competitions. Built with advanced sensors and weaponry, WarBot is engineered for speed, agility, and strategic attack maneuvers in robotic battles.",
    tech: ["Arduino", "C++", "Robotics"]
  },
  {
    icon: <Heart className="w-6 h-6 text-red-500" />,
    title: "PetMe",
    description: "A mobile application designed to assist in animal rescue using geolocation services. Users can report lost or injured animals, connect with nearby shelters, and facilitate adoptions.",
    tech: ["React Native", "Node.js", "MongoDB"]
  },
  {
    icon: <Globe className="w-6 h-6 text-green-500" />,
    title: "Optifix Website",
    description: "A client onboarding platform designed to streamline the process of managing and assisting new customers. It integrates authentication, user dashboards, and automated workflows for seamless client interactions.",
    tech: ["React", "Tailwind", "Firebase"],
    link: "https://optifix.in/"
  },
  {
    icon: <Navigation className="w-6 h-6 text-purple-500" />,
    title: "Line Follower Robot",
    description: "An autonomous robot that follows a predefined path using a PID (Proportional-Integral-Derivative) control algorithm. This robot is optimized for speed and accuracy in navigating curves and obstacles.",
    tech: ["Arduino", "PID", "Electronics"]
  }
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-violet-500 via-sky-500 to-violet-500 text-transparent bg-clip-text glow">
            Projects
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Innovative solutions across robotics, IoT, and software development
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 0 20px rgba(96,165,250,0.5)"
              }}
              className="achievement-card backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-violet-500/20 to-sky-500/20">
                  {project.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-violet-400 mb-2">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-sky-400 transition-colors duration-300"
                  >
                    {project.title} ↗
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 text-sm rounded-full bg-gradient-to-r from-violet-500/10 to-sky-500/10 text-sky-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;