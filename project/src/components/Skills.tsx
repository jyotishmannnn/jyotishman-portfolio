import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Notebook as Robot, Shield, Code, Palette } from 'lucide-react';

const skills = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Machine Learning",
    description: "Deep Learning, Computer Vision, NLP"
  },
  {
    icon: <Robot className="w-6 h-6" />,
    title: "Robotics",
    description: "Arduino, ROS, Embedded Systems"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Ethical Hacking",
    description: "Penetration Testing, Network Security"
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Web Development",
    description: "Full Stack, React, Node.js"
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Graphic Design",
    description: "UI/UX, Adobe Creative Suite"
  }
];

const Skills = () => {
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
            Skills
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A diverse set of technical and creative abilities
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="skill-hexagon"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 rounded-full bg-gradient-to-r from-violet-500/20 to-sky-500/20">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-bold text-violet-400">{skill.title}</h3>
                <p className="text-sm text-gray-300">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;