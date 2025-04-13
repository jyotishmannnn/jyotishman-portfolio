import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Brain, Code, Cpu, ChevronDown } from 'lucide-react';

const typewriterText = ["Technologist.", "Artist.", "Entrepreneur."];

const Hero = () => {
  const [text, setText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typeWriter = setInterval(() => {
      if (charIndex < typewriterText[textIndex].length) {
        setText(prev => prev + typewriterText[textIndex][charIndex]);
        setCharIndex(prev => prev + 1);
      } else {
        setTimeout(() => {
          setText('');
          setCharIndex(0);
          setTextIndex((prev) => (prev + 1) % typewriterText.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeWriter);
  }, [charIndex, textIndex]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <div className="absolute inset-0 grid-background opacity-20" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10 max-w-4xl px-4"
      >
        <motion.h1 
          className="text-hero font-hero mb-6 text-white"
          style={{
            textShadow: '0 0 30px rgba(30, 144, 255, 0.8), 0 0 50px rgba(30, 144, 255, 0.6), 0 0 70px rgba(30, 144, 255, 0.4)'
          }}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I'm Jyotishman Das
        </motion.h1>
        
        <div className="flex justify-center gap-6 mb-8">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="p-4 rounded-full bg-[#1E90FF]/20 neon-border"
          >
            <Brain className="w-8 h-8 text-white" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="p-4 rounded-full bg-[#8A2BE2]/20 neon-border"
          >
            <Code className="w-8 h-8 text-white" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="p-4 rounded-full bg-[#20B2AA]/20 neon-border"
          >
            <Cpu className="w-8 h-8 text-white" />
          </motion.div>
        </div>

        <h2 className="text-4xl font-light mb-12 min-h-[60px]">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E90FF] via-[#8A2BE2] to-[#20B2AA]">
            {text}
          </span>
          <span className="animate-blink">|</span>
        </h2>

        <div className="flex justify-center gap-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="neon-button"
          >
            About Me
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="neon-button"
          >
            Projects
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="neon-button"
          >
            Contact
          </motion.button>
        </div>
      </motion.div>

      <motion.div 
        className="absolute bottom-8 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <ChevronDown className="w-8 h-8 text-[#1E90FF]" />
      </motion.div>
    </div>
  );
};

export default Hero;