import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Lightbulb, Award, Trophy, Briefcase, Medal, GraduationCap } from 'lucide-react';
import JyotishmanImage from './Images/jyotish.jpg';

const Timeline = () => {
  const events = [
    {
      year: '2015',
      title: 'Robotics Introduction',
      description: 'First introduced to the fascinating world of robotics through an aeromodeling and robotics workshop, sparking a lifelong passion for innovation.',
      icon: Lightbulb,
      highlight: 'First Steps in Robotics'
    },
    {
      year: '2017',
      title: 'First Major Achievement',
      description: 'Worked on multiple robotics projects and won my first medal at the prestigious IIT Guwahati competition, marking the beginning of a successful journey.',
      icon: Award,
      highlight: 'First Medal at IIT Guwahati'
    },
    {
      year: '2021',
      title: 'International Recognition',
      description: 'Led a team to the World Robotics Championship (Technoxian), showcasing projects on a global stage. Also set impressive records in athletics during school.',
      icon: Trophy,
      highlight: 'World Robotics Championship Participant'
    },
    {
      year: '2022',
      title: 'Entrepreneurial Venture',
      description: 'Founded my first startup, Optifix.in, turning innovative ideas into business reality. Received verbal mention at JGU Model United Nations representing Singapore.',
      icon: Briefcase,
      highlight: 'Founded Optifix.in'
    },
    {
      year: '2023',
      title: 'Gold Medal Achievement',
      description: 'Won the zonals at OLL Skill Titans, securing a prestigious gold medal and demonstrating excellence in technical skills and innovation.',
      icon: Medal,
      highlight: 'Zonals Champion at OLL Skill Titans'
    },
    {
      year: '2024',
      title: 'Persistence Through Challenges',
      description: 'Joined B.Tech Mechatronics and Automation at VIT Chennai. Despite participating in multiple hackathons and hardware competitions without victories, persistence led to greater opportunities by year end.',
      icon: GraduationCap,
      milestones: [
        'Founded Team Genesis as Captain, focusing on humanoid robotics',
        'Promoted to Hardware Lead at Hack Club VIT Chennai',
        'Launched SentrixRobotics, my second startup venture'
      ],
      highlight: 'Got Optifix recognized among top 600 startups across Asia'
    }
  ];

  return (
    <div className="relative mt-12">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-violet-500 to-sky-500" />
      {events.map((event, index) => {
        const [ref, inView] = useInView({
          triggerOnce: true,
          threshold: 0.1
        });

        const Icon = event.icon;

        return (
          <motion.div
            key={index}
            ref={ref}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : (index % 2 === 0 ? -50 : 50) }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`relative flex ${index % 2 === 0 ? 'justify-end pr-8' : 'justify-start pl-8'} mb-12`}
          >
            <div className="achievement-card max-w-md">
              <div className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-violet-500 to-sky-500 
                            shadow-[0_0_10px_rgba(96,165,250,0.5)] z-10"
                style={{ [index % 2 === 0 ? 'right' : 'left']: '-1.5rem' }} />
              
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-violet-500/20 to-sky-500/20">
                  <Icon className="w-6 h-6 text-sky-400" />
                </div>
                <h3 className="text-xl font-bold text-violet-400">{event.year}</h3>
              </div>
              
              <h4 className="text-lg font-semibold text-sky-400 mb-2">{event.title}</h4>
              {event.highlight && (
                <div className="inline-block px-3 py-1 mb-3 text-sm font-semibold rounded-full bg-gradient-to-r from-violet-500/20 to-sky-500/20 text-sky-400">
                  {event.highlight}
                </div>
              )}
              <p className="text-gray-300 mb-3">{event.description}</p>
              
              {event.milestones && (
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {event.milestones.map((milestone, idx) => (
                    <li key={idx} className="text-sm">{milestone}</li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src={JyotishmanImage}
                alt="Jyotishman Das"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/20 to-transparent rounded-2xl" />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6 glow">About Me</h2>
            <p className="text-lg text-gray-300 mb-6">
            I'm Jyotishman Das, a Mechatronics and Automation undergrad at VIT Chennai with a deep passion for robotics, 
            hardware, and innovation. As the founder of OptifiX and SentrixRobotics, and the Hardware Lead at HackClub VIT Chennai, 
            I’ve led teams at global challenges, built award-winning tech, and launched ventures recognized among the top in Asia. Now heading Team GENESIS, I’m focused on advancing humanoid robotics—combining engineering, creativity, and real-world impact.
            </p>
            <p className="text-lg text-gray-300 mb-6">
            Now heading Team GENESIS, I’m focused on advancing humanoid robotics - combining engineering, creativity, and real-world impact.
            </p>
          </div>
        </motion.div>

        <Timeline />
      </div>
    </section>
  );
};

export default About;