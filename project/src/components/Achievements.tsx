import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Award, Medal, Star, Crown, FileWarning as Running, Mic, Brain, Code } from 'lucide-react';

const achievements = [
  {
    icon: <Trophy className="w-6 h-6 text-amber-500" />,
    title: "Techtron! IIT Guwahati",
    description: "Bronze Medalist | Techniche | 2017",
    category: "Technical"
  },
  {
    icon: <Award className="w-6 h-6 text-blue-500" />,
    title: "JGU MUN",
    description: "Verbal Mention (COP-28 committee) | Represented Singapore | 2023",
    category: "Leadership"
  },
  {
    icon: <Medal className="w-6 h-6 text-purple-500" />,
    title: "Eureka! IIT Bombay",
    description: "Top 600/25,000+ | Asia's largest entrepreneurship competition | 2024",
    category: "Entrepreneurship"
  },
  {
    icon: <Star className="w-6 h-6 text-yellow-500" />,
    title: "Meshmerize! IIT Bombay",
    description: "Finalist | Asia's largest technology fest | 2024",
    category: "Technical"
  },
  {
    icon: <Crown className="w-6 h-6 text-emerald-500" />,
    title: "Voyage! VIT Chennai",
    description: "Top 100/1,500+ teams | Entrepreneurship Challenge | 2024",
    category: "Entrepreneurship"
  },
  {
    icon: <Star className="w-6 h-6 text-yellow-500" />,
    title: "Skill Titans! OLL",
    description: "Gold Medalist | Top 1% Startups Nationally | 2023",
    category: "Entrepreneurship"
  },
  {
    icon: <Code className="w-6 h-6 text-sky-500" />,
    title: "Hackhub VIT Chennai",
    description: "Finalist | Innovative solutions for real-world problems | 2025",
    category: "Technical"
  },
  {
    icon: <Code className="w-6 h-6 text-violet-500" />,
    title: "Hacknight VIT Chennai",
    description: "Finalist | 24-hour intensive hackathon | 2025",
    category: "Technical"
  },
  {
    icon: <Code className="w-6 h-6 text-green-500" />,
    title: "Dev'shouse Global Hackathon",
    description: "Top 7 | International competition at VIT Chennai | 2025",
    category: "Technical"
  },
  {
    icon: <Mic className="w-6 h-6 text-pink-500" />,
    title: "Best Actor",
    description: "Best Actor of the School | Modern English School Kahilipara | 2023",
    category: "Cultural"
  },
  {
    icon: <Running className="w-6 h-6 text-green-500" />,
    title: "Athletics",
    description: "Gold Medalist | School records (100m: 10.89s, Long Jump: 17.58ft) | 2023-2024",
    category: "Sports"
  },
  {
    icon: <Brain className="w-6 h-6 text-cyan-500" />,
    title: "Cultural Quiz",
    description: "1st runner up | District Level inter-college quiz | 2023",
    category: "Academic"
  },
  {
    icon: <Award className="w-6 h-6 text-violet-500" />,
    title: "Best Photography",
    description: "Northeast Pride Award | Luit Fashion Studio | 2023",
    category: "Creative"
  }
];

const extracurricular = [
  {
    title: "Team Genesis",
    role: "Team Captain",
    description: "Leading VIT Chennai's specialized humanoid robotics team, focusing on advanced robotics research and development"
  },
  {
    title: "HackClub VIT'C",
    role: "Hardware Lead",
    description: "Managing hardware infrastructure and mentoring students in electronics and embedded systems projects"
  },
  {
    title: "Technoxian",
    role: "Team Lead",
    description: "Led team in World Robotics Championship participation"
  },
  {
    title: "MUN Chair/Judge",
    role: "Committee Head",
    description: "Oversaw 100+ delegates at UNSC and ICJ committee for two consecutive years"
  },
  {
    title: "House Captain",
    role: "Leadership",
    description: "Led house activities in culture and sports. Coordinated with staff, managed conflicts, and promoted teamwork"
  }
];

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-16 px-4 bg-black/40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-violet-500 via-sky-500 to-violet-500 text-transparent bg-clip-text glow">
            Achievements
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A collection of milestones and recognition across various domains
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="achievement-card relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 px-3 py-1 text-xs font-semibold rounded-bl-lg bg-gradient-to-r from-violet-500/20 to-sky-500/20 text-sky-400">
                {achievement.category}
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-violet-500/20 to-sky-500/20">
                  {achievement.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-violet-400 mb-2">{achievement.title}</h3>
              <p className="text-gray-300">{achievement.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8 text-sky-400"
        >
          Leadership & Extracurricular
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {extracurricular.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="achievement-card"
            >
              <h4 className="text-xl font-bold text-violet-400 mb-2">{activity.title}</h4>
              <div className="text-sky-400 font-semibold mb-2">{activity.role}</div>
              <p className="text-gray-300">{activity.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;