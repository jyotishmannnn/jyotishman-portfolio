import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "jyotishman.das2024@vitstudent.ac.in",
      href: "mailto:jyotishman.das2024@vitstudent.ac.in"
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      value: "jyotishmannnn",
      href: "https://github.com/jyotishmannnn"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/jyotishman-das-439858236/"
    }
  ];

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
            Contact Me
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Let's connect and discuss how we can work together
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="achievement-card flex items-center gap-4 cursor-pointer group"
            >
              <div className="p-4 rounded-full bg-gradient-to-r from-violet-500/20 to-sky-500/20 group-hover:from-violet-500/30 group-hover:to-sky-500/30 transition-all duration-300">
                {contact.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-violet-400 group-hover:text-sky-400 transition-colors duration-300">
                  {contact.title}
                </h3>
                <p className="text-gray-300">{contact.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;