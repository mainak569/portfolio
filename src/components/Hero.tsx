import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useState, useRef } from 'react';
import * as THREE from 'three';
import myImage from '../assets/your-image.jpeg';

const Hero3DText = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  console.log('Hero3DText component rendering');
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });
  
  try {
    return (
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <boxGeometry args={[2, 0.5, 0.1]} />
        <meshPhongMaterial 
          color="#3b82f6" 
          transparent 
          opacity={0.8}
        />
      </mesh>
    );
  } catch (error) {
    console.error('Error in Hero3DText:', error);
    return null;
  }
};

export const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/mainak569',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/mainak-das-93b787287',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:mainak.lnmiit@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.8} />
          <Hero3DText />
        </Canvas>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-primary font-medium text-lg"
              >
                Hello, I'm
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl lg:text-7xl font-bold bg-gradient-hero bg-clip-text text-transparent"
              >
                Mainak Das
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl lg:text-3xl text-muted-foreground"
              >
                Full Stack Developer & AI Enthusiast
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-muted-foreground max-w-xl"
              >
                Computer Engineering student at LNMIIT, passionate about building innovative 
                AI-powered applications and solving complex problems with modern web technologies.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                View My Work
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              
              <Button
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-primary/20 hover:border-primary hover:bg-primary/5"
              >
                Get In Touch
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex space-x-6"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-card hover:bg-primary/10 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <link.icon className="h-5 w-5 text-primary" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 animate-glow" />
              <div className="absolute inset-4 bg-gradient-secondary rounded-full backdrop-blur-sm border border-primary/20" />
              <div className="absolute inset-8 bg-primary/5 rounded-full animate-float" />
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/your-image.jpeg"   // replace with your image path
                  alt="Profile"
                  className="w-40 h-40 rounded-full object-cover border-4 border-primary/30 shadow-lg"
                />
              </div>
            </div> */}
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 animate-glow" />
              <div className="absolute inset-4 bg-gradient-secondary rounded-full backdrop-blur-sm border border-primary/20" />
              <div className="absolute inset-8 bg-primary/5 rounded-full animate-float" />

              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={myImage}
                  alt="MD"
                  className="w-64 h-64 rounded-full object-cover border-4 border-primary/40 shadow-xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};