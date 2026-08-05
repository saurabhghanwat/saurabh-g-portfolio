import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaPython,
  FaDatabase,
  FaChartLine,
  FaChartBar,
  FaAward,
  FaGraduationCap,
  FaBriefcase,
  FaRocket,
  FaJava
} from 'react-icons/fa';
import { 
  SiTensorflow, 
  SiPytorch, 
  SiScikitlearn, 
  SiTableau, 
  SiGooglecloud,
  SiAmazonwebservices,
  SiApachespark,
  SiR,
  SiLeetcode,
  SiSpringboot,
  SiSplunk,
  SiKibana,
  SiSonarqube,
  SiPostman,
  SiOracle,
  SiGithub,
  SiDocker,
  SiApachemaven,
  SiRedis,
  SiElasticsearch,
  SiApachekafka,
  SiRabbitmq,
  SiKubernetes,
  SiJenkins,
  SiOpenai,
  SiDatadog,
  SiApachejmeter,
  SiHibernate
} from 'react-icons/si';
import starAward from './assets/Star.jpg';
import excellenceAward2 from './assets/Excellence2.jpg';
import excellenceAward from './assets/Excellence.jpg';
import patAward1 from './assets/PatQ1.jpg';
import patAward2 from './assets/PatQ2.jpg';
import aobAward1 from './assets/AOB.png';
import aobAward2 from './assets/AOB2.png';
import { GoCopilot } from 'react-icons/go';
import { DiDocker, DiIntellij, DiJenkins, DiMongodb, DiMysql, DiPostgresql } from 'react-icons/di';

// Geometric Shapes Component
const GeometricShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="geometric-circle top-20 left-10 animate-float"></div>
      <div className="geometric-x top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>×</div>
      <div className="geometric-plus bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>+</div>
      <div className="geometric-circle bottom-20 right-10 animate-float" style={{ animationDelay: '0.5s' }}></div>
      <div className="geometric-x top-60 left-1/4 animate-float" style={{ animationDelay: '1.5s' }}>×</div>
      <div className="geometric-plus top-1/3 right-1/3 animate-float" style={{ animationDelay: '0.8s' }}>+</div>
    </div>
  );
};

// Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'recognitions', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Recognitions', 'Contact'];

  const handleNavClick = (item) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-dark-card/95 backdrop-blur-sm shadow-soft py-3' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <motion.div
            className="cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h1 className="text-2xl font-bold text-white">Saurabh</h1>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden w-8 h-8 flex flex-col justify-center items-center space-y-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </motion.button>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`block py-2 px-4 text-gray-300 hover:text-primary transition-colors duration-300 ${
                  activeSection === item.toLowerCase() ? 'text-primary border-l-2 border-primary' : ''
                }`}
                onClick={() => handleNavClick(item)}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

// Hero Section
const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Sr. Software Engineer | Backend";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-dark relative overflow-hidden">
      <GeometricShapes />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center lg:text-left"
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hello Everyone!<br />
              I'm <span className="gradient-text">Saurabh</span>
            </motion.h1>
            
            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {text}
              <span className="animate-pulse">|</span>
            </motion.h2>
            
            <motion.p
              className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition  ={{ duration: 0.8, delay: 0.6 }}
            >
            Backend Engineer with 6.8+ years of experience building scalable systems using Java, Spring Boot, and Microservices. Skilled in REST APIs, databases, CI/CD, message queues, and cloud platforms. Proficient with GitHub Copilot, ChatGPT, Claude and IntelliJ AI Assistant to accelerate development, debugging, testing, and documentation.
            </motion.p>
            
            <motion.div
              className="flex items-center justify-center lg:justify-start space-x-2 text-base sm:text-lg text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <FaMapMarkerAlt className="text-primary" />
              <span>Pune, India</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="space-y-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
               <button
                type="button"
                className="btn-primary w-full sm:w-auto"
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact
              </button>
              
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/saurabhghanwat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link text-2xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/saurabh-ghanwat-121873157/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link text-2xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end mt-8 lg:mt-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary rounded-full transform rotate-12 scale-110 opacity-20 animate-glow"></div>
              <img
                src={`${process.env.PUBLIC_URL}/work_experience/Profile4.jpg`}
                alt="Saurabh Ghanwat"
                className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full object-cover shadow-large border-4 border-primary/30"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// About Section
const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="about" className="py-20 bg-dark-card" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Passionate about building scalable, reliable backend systems that power real-world applications.</p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 order-2 lg:order-1"
          >
            <div className="card card-hover p-6 sm:p-8">
              <div className="flex items-center mb-4">
                <FaGraduationCap className="text-primary text-xl sm:text-2xl mr-3" />
                <h3 className="text-xl sm:text-2xl font-semibold text-white">Education</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Bachelor’s in Computer Engineering from Savitribai Phule Pune University (2015 – 2019) with First Class.
Focused on backend application development, database management, operating systems, computer networks, data structures, and software engineering principles.
              </p>
            </div>
            
            <div className="card card-hover p-6 sm:p-8">
              <div className="flex items-center mb-4">
                <FaBriefcase className="text-primary text-xl sm:text-2xl mr-3" />
                <h3 className="text-xl sm:text-2xl font-semibold text-white">Experience</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                6.8+ years of hands-on experience in building backend applications using Java, Spring Boot, and microservices. 
                Experienced in both startups and large companies like L&T Infotech, and currently contributing to banking domain at HSBC. 
              </p>
            </div>
            
            <div className="card card-hover p-6 sm:p-8">
              <div className="flex items-center mb-4">
                <FaRocket className="text-primary text-xl sm:text-2xl mr-3" />
                <h3 className="text-xl sm:text-2xl font-semibold text-white">Passion</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Passionate about Clouds, Pipelines,   Natural Language Processing (NLP), 
                and Generative AI systems. Always exploring the latest developments in AI technology.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative order-1 lg:order-2"
          >
            <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full opacity-20 animate-glow"></div>
              <div className="absolute inset-4 bg-dark-card rounded-full flex items-center justify-center shadow-large border border-primary/30">
                <div className="text-center">
                  <div className="text-4xl sm:text-6xl mb-4">👨‍💻</div>
                  <p className="text-lg sm:text-xl font-semibold gradient-text">Sr. Software Engineer</p>
                  <p className="text-gray-300 text-sm sm:text-base">Backend Developer</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Skills Section
const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      title: "Backend Development",
      color: "primary",
      skills: [
        { name: "Java 17/21", icon: FaJava, level: 90 },
        { name: "Spring boot", icon: SiSpringboot, level: 90 },
        { name: "Spring MVC", icon: SiSpringboot, level: 88 },
        { name: "Spring Data JPA", icon: SiSpringboot, level: 85 },
        { name: "Spring Security", icon: SiSpringboot, level: 90 },
        { name: "Hibernate", icon: SiHibernate, level: 90 },
        { name: "JWT", icon: SiSpringboot, level: 90 },
        { name: "Restful APIs", icon: SiSpringboot, level: 90 },
      ]
    },
    {
      title: "Databases & Messaging",
      color: "primary",
      skills: [
        { name: "MySQL", icon: DiMysql, level: 88 },
        { name: "PostgreSQL", icon: DiPostgresql, level: 90 },
        { name: "OracleDB", icon: SiOracle, level: 87 },
        { name: "MongoDB", icon: DiMongodb, level: 85 },
        { name: "Redis", icon: SiRedis, level: 85 },
        { name: "Elasticsearch", icon: SiElasticsearch, level: 85 },
        { name: "Apache Kafka", icon: SiApachekafka, level: 85 },
        { name: "RabbitMQ", icon: SiRabbitmq, level: 85 },
      ]
    },
    {
      title: "DevOps & Cloud",
      color: "primary",
      skills: [
        { name: "Google Cloud", icon: SiGooglecloud, level: 85 },
        { name: "Docker", icon: SiDocker, level: 85 },
        { name: "Kubernetes", icon: SiKubernetes, level: 90 },
        { name: "Jenkins", icon: SiJenkins, level: 87 },
        { name: "Git", icon: SiGithub, level: 87 },
        { name: "Maven", icon: SiApachemaven, level: 87 },
        { name: "AppDynamics", icon: SiApachespark, level: 87 },
        { name: "SonarQube", icon: SiSonarqube, level: 87 },
      ]
    },
    {
      title: "APIs, Monitoring & AI ",
      color: "primary",
      skills: [
        { name: "Github Copilot", icon: GoCopilot, level: 95 },
        { name: "ChatGPT", icon: SiOpenai, level: 90 },
        { name: "Cloude", icon: FaRocket, level: 90 },
        { name: "Postman/Insomnia", icon: SiPostman, level: 87 },
        { name: "Splunk", icon: SiSplunk, level: 80 },
        { name: "Kibana", icon: SiKibana, level: 85 },
        { name: "Datadog", icon: SiDatadog, level: 85 },
        { name: "JMeter", icon: SiApachejmeter, level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-dark-bg" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">Technical expertise across data science and AI</p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="card card-hover p-4 sm:p-6"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-primary">
                {category.title}
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <skill.icon className="text-primary text-base sm:text-lg" />
                      <span className="text-xs sm:text-sm font-medium text-gray-300">{skill.name}</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Project Modal Component
const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-2 sm:p-4" onClick={onClose}>
      <div className="relative w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          className="relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute -top-2 -right-2 z-10 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
          >
            ×
          </button>
          <div className="card p-4 sm:p-6 lg:p-8">
            {/* Project Header */}
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center mb-4">
                <div className="text-2xl sm:text-3xl mr-3">{project.emoji}</div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">{project.title}</h3>
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-4">
                <span className="text-primary font-semibold text-sm sm:text-base">{project.date}</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-300 text-xs sm:text-sm">{project.technologies}</span>
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">{project.description}</p>
              {project.deployedLink && (
                <div className="mb-4 sm:mb-6">
                  <a
                    href={project.deployedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition-colors duration-300 text-sm sm:text-base"
                  >
                    <span>🌐</span>
                    <span>View Live Demo</span>
                  </a>
                </div>
              )}
            </div>

            {/* Project Image */}
            <div className="mb-6 sm:mb-8">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-medium"
              />
            </div>

            {/* What I Built */}
            <div className="mb-6 sm:mb-8">
              <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-4 sm:mb-6">🏗️ What I Built</h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-dark-bg p-4 sm:p-6 rounded-lg border border-gray-700"
                  >
                    <h5 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">{feature.title}</h5>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance & Optimization */}
            <div className="mb-6 sm:mb-8">
              <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-3 sm:mb-4">⚙️ Performance & Optimization</h4>
              <ul className="space-y-2">
                {project.optimizations.map((opt, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-xs sm:text-sm text-gray-300">{opt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Impact */}
            <div className="border-t border-gray-700 pt-4 sm:pt-6">
              <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-3 sm:mb-4">🎯 Impact</h4>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{project.impact}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Projects Section
const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "HSBCNet Banking",
      technologies: "Java, Sprinboot, MuleSoft, PostgreSQL, OracleDB, MongoDB, Google Cloud, Jenkins",
      date: "On going",
      description: "HSBCNet is HSBC’s secure online banking platform designed for corporate and institutional customers. It enables businesses to manage accounts, payments, liquidity, trade, and reporting through a single, centralized interface.",
      features: [
        {
          title: "1. AI Powered Chatbot Agent",
          description: "Built AI Powered chatbot for customer support using Copilot Studio. It was responsible for handling basic customer queries and redirect to Human Agent power specific area queries."
        },
        {
          title: "2. Amplify HSBC Content", 
          description: "Designed and developed a Python automation utility leveraging AI-assisted development tools. Deployed the solution for global use across HSBC to streamline operational workflows. Eliminated repetitive manual tasks, saving **133+ hours** of human effort while improving productivity and accuracy."
        },
        {
          title: "3. Request For Information Feature", 
          description: "Developed the RFI (Request for Information) feature enabling seamless communication between the bank's back office and customers during payment processing, improving query resolution and operational efficiency."
        },
        {
          title: "4. Replay Mechanism",
          description: "Built a robust replay mechanism using batch jobs to reprocess failed asynchronous thirdparty calls, significantly enhancing system resilience and error recovery. "
        },
        {
          title: "5. MuleSoft To Springboot Migration",
          description: "Migrated 3 enterprise APIs from MuleSoft to Spring Boot, optimizing backend integration and improving system performance and reliability."
        },
        {
          title: "6. Click To Call Feature",
          description: "Developed backend APIs for the Click-to-Call feature to support customers in France. Enabled users to connect with French-speaking support agents instead of the previous English-only support."
        }
      ],
      optimizations: [
        "Reduced response time for customer queries by offloading repetitive requests to the chatbot and minimizing manual handling",
        "Improved payment processing throughput by simplifying RFI flows and cutting back-and-forth delays between systems",
        "Increased system stability and recovery speed through automated replay of failed async calls",
        "Boosted API performance and reduced latency by migrating integrations from MuleSoft to lightweight Spring Boot services"
      ],
      impact: "Improved customer experience by automating common queries and ensuring smooth handoff to human agents. Streamlined payment-related communication and strengthened system reliability through efficient error recovery and replay mechanisms. Reduced integration overhead and improved performance by migrating enterprise APIs from MuleSoft to Spring Boot.",
      image: `${process.env.PUBLIC_URL}/work_experience/HSBC.jpg`,
      emoji: "💵",
      deployedLink: "https://www.hsbcnet.com/"
    },
    {
      id: 2,
      title: "Aayushmaan Bharat Digital Mission",
      technologies: "Java, Springboot, MySQL, MongoDB, Kafka, RabbitMQ",
      date: "Feb 2024",
      description: "The Aayushman Bharat Digital Mission (ABDM) aims to develop the backbone necessary to support the integrated digital health infrastructure of the country. It will bridge the existing gap amongst different stakeholders of Healthcare ecosystem through digital highways.",
      features: [
        {
          title: "1. National Medical Council (NMC) – Doctor Onboarding",
          description: "Built a secure onboarding system for doctors with a 3-step verification flow covering educational credentials, State Medical Council (SMC), and National Medical Council (NMC). Integrated multiple registries and validation services to ensure accurate and compliant doctor registration."
        },
        {
          title: "2. Notification Manager (ABDM-wide)", 
          description: "Designed and developed a centralized notification system to handle SMS and email notifications across ABDM services. Used Kafka and RabbitMQ for event-driven notification processing."
        },
        {
          title: "3. ABHA Card Generation (Real-time)",
          description: "Implemented real-time ABHA card generation by mapping live user data into dynamic SVG templates. Generated downloadable ABHA cards instantly upon successful registration."
        },
        {
          title: "4. Fuzzy Match Algorithms",
          description: "Implemented a fuzzy string matching solution using the Levenshtein distance algorithm to identify and match similar records."
        }
      ],
      optimizations: [
        "Smoothen the doctor's onboarding process with proper managed flow",
        "Improved throughput by processing notifications asynchronously via message queues.",
        "Optimized SVG rendering to generate cards in real time with minimal latency.",
        "Improved overall matching performance for large datasets."
      ],
      impact: "Delivered multiple core ABDM systems that improved data accuracy, reliability, and user experience across the platform. Enabled secure and compliant onboarding of verified doctors while ensuring real-time generation of digital health identities. Strengthened system communication through scalable, event-driven notifications. Improved data consistency and reduced duplication using efficient fuzzy matching. Overall, increased platform stability, performance, and trust at national scale.",
      image: `${process.env.PUBLIC_URL}/work_experience/ABDM.jpeg`,
      emoji: "🩺",
      deployedLink: "https://abdm.gov.in/"
    },
    {
      id: 3,
      title: "Washmart Solutions",
      technologies: "Java, Springboot, MySQL, Spring Security, Spring JPA, JWT",
      date: "Mar 2021",
      description: "Washmart is an end-to-end laundry management system that digitizes order tracking, customer communication, and business analytics, helping laundry owners run their operations efficiently and at scale.",
      features: [
        {
          title: "1. Order & Tag Management",
          description: "This module handles order intake and generates a unique tag number for each laundry order, which is printed and attached to the clothes. It ensures every item is uniquely identified from pickup to delivery. This eliminates mix-ups and enables reliable tracking across all processing stages."
        },
        {
          title: "2. Laundry Processing & Status Tracking", 
          description: "Tracks the complete lifecycle of an order, including washing, ironing, and readiness for delivery. Status updates are maintained in real time, giving clear visibility into ongoing work. This helps prevent delays and improves overall process flow."
        },
        {
          title: "3. Customer Notification System",
          description: "Automatically notifies customers when their clothes are ready or when order status changes. It removes the need for manual calls and repeated follow-ups. This improves customer experience and keeps communication consistent and timely."
        },
        {
          title: "4. Owner Dashboard & Business Management",
          description: "Provides laundry owners with a consolidated view of all customers, including ratings, dues, and total business value. Dashboards offer insights with date and time filters and allow exporting reports. This helps owners track performance and manage finances efficiently."
        }
      ],
      optimizations: [
        "Eliminated manual registers and guesswork in order tracking",
        "Reduced dependency on phone calls and in-person follow-ups using automated notifications", 
        "Simplified customer and payment management through centralized dashboards. Saved time on daily reconciliation with ready-to-export reports."
      ],
      impact: "Streamlined end-to-end laundry operations from order intake to delivery. Reduced manual tracking errors and improved order visibility through tagging and status tracking. Enhanced customer satisfaction with timely notifications and faster turnaround. Enabled laundry owners to clearly understand customer value and business performance. Improved operational control and decision-making through dashboards and reports.",
      image: `${process.env.PUBLIC_URL}/work_experience/Washmart.jpeg`,
      emoji: "👕"
    },
    {
      id: 4,
      title: "Civicgen- Social Platform",
      technologies: "Java, Springboot, MySQL, Spring Security, Spring JPA, JWT",
      date: "March 2020",
      description: "Civicgen is a civic engagement platform connecting citizens and political leaders through posts, polls, surveys, and discussion threads. It enables transparent communication, public issue reporting, and structured political discussions in a single system.",
      features: [
        {
          title: "User & Leader Profile Management",
          description: "This module allows users to register either as citizens or verified political leaders. Political leaders can build public profiles showcasing their work, initiatives, and public communication. Citizens can follow leaders and interact with their content on the platform."
        },
        {
          title: "Posts, Polls, and Surveys",
          description: "Enables both leaders and citizens to create posts, polls, and surveys to express opinions and gather feedback. This supports structured engagement beyond simple posts. Poll and survey results provide leaders with direct insight into public sentiment."
        },
        {
          title: "Public Issues & Politician Tagging",
          description: "Citizens can post public issues and tag relevant political leaders directly. This creates accountability and improves visibility of real-world problems. Leaders can respond or acknowledge issues in a transparent manner."
        },
        {
          title: "Topics & Discussion Threads",
          description: "Introduced a Topic-based discussion system where any user can start a discussion thread. Others can contribute by adding comments and sub-discussions. This enables focused, long-running conversations instead of scattered posts."
        }
      ],
      optimizations: [
        "Reduced dependency on fragmented social media platforms for civic communication",
        "Organized discussions into structured topics instead of unstructured comment chains",
        "Enabled leaders to receive real-time public feedback through polls and surveys. Improved issue tracking by directly linking public problems with responsible leaders"
      ],
      impact: "Improved direct communication between citizens and political leaders on a single platform. Increased transparency by allowing public issues and responses to be visible to all. Encouraged structured civic discussions through polls, surveys, and topic-based threads. Strengthened citizen engagement and participation in governance-related conversations.",
      image: `${process.env.PUBLIC_URL}/work_experience/civicgen.jpeg`,
      emoji: "🏛️"
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-dark-card" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">My Top Projects</h2>
          <p className="section-subtitle">Showcasing my technical expertise and problem-solving skills</p>
        </motion.div>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows - Hidden on mobile */}
          <div className="hidden md:flex justify-between items-center mb-8">
            <motion.button
              className="w-12 h-12 bg-dark-card border border-gray-700 rounded-full flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                const container = document.getElementById('projects-scroll');
                if (container) {
                  container.scrollLeft -= 400;
                }
              }}
            >
              ←
            </motion.button>
            <motion.button
              className="w-12 h-12 bg-dark-card border border-gray-700 rounded-full flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                const container = document.getElementById('projects-scroll');
                if (container) {
                  container.scrollLeft += 400;
                }
              }}
            >
              →
            </motion.button>
          </div>
          
          {/* Scrollable Projects Container */}
          <div 
            id="projects-scroll"
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4 px-4 sm:px-0"
            style={{ scrollBehavior: 'smooth' }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card project-card-hover p-4 sm:p-6 cursor-pointer border border-gray-700 flex-shrink-0 w-72 sm:w-80 bg-dark-card"
                onClick={() => openModal(project)}
              >
                {/* Project Image */}
                <div className="relative mb-4">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 sm:h-48 object-cover shadow-medium transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-full flex items-center justify-center text-white text-sm sm:text-lg border-2 border-dark-card shadow-glow transition-all duration-300 hover:scale-110 hover:shadow-glow">
                    {project.emoji}
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-white transition-colors duration-300 hover:text-primary line-clamp-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-primary font-semibold text-xs sm:text-sm">{project.date}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-300 text-xs font-medium line-clamp-1">{project.technologies}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-xs sm:text-sm line-clamp-3">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center space-x-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-primary bg-opacity-10 rounded-full border border-primary transition-all duration-300 hover:bg-primary hover:text-white group">
                      <span className="text-primary font-semibold text-xs sm:text-sm group-hover:text-white transition-colors">Click to explore</span>
                      <span className="text-primary group-hover:text-white transition-colors group-hover:translate-x-1">→</span>
                    </div>
                    {project.deployedLink && (
                      <div className="inline-flex items-center space-x-1 px-2 py-1 bg-green-500 bg-opacity-20 rounded-full border border-green-500">
                        <span className="text-green-400 text-xs">🌐</span>
                        <span className="text-green-400 text-xs font-medium">Live</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <ProjectModal 
          isOpen={isModalOpen}
          onClose={closeModal}
          project={selectedProject}
        />
      </div>
    </section>
  );
};

// Certificate Modal Component
const CertificateModal = ({ isOpen, onClose, certificate }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-2 sm:p-4" onClick={onClose}>
      <div className="relative w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] p-2 sm:p-4">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          className="relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute -top-2 -right-2 z-10 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
          >
            ×
          </button>
          <div className="card p-3 sm:p-4">
            {certificate?.image ? (
              <img
                src={certificate.image}
                alt={`${certificate.title} Certificate`}
                className="w-full h-auto rounded-lg shadow-medium"
              />
            ) : (
              <div className="w-full h-64 sm:h-96 bg-dark-bg rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <certificate.icon className="text-4xl sm:text-6xl text-primary mx-auto mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">{certificate.title}</h3>
                  <p className="text-primary text-base sm:text-lg font-semibold mb-4">{certificate.issuer}</p>
                  <p className="text-gray-400 text-sm sm:text-base">Certificate image will be displayed here</p>
                </div>
              </div>
            )}
            <div className="mt-4 text-center">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{certificate.title}</h3>
              <p className="text-primary font-semibold text-sm sm:text-base">{certificate.issuer}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Award Modal Component
const AwardModal = ({ isOpen, onClose, award }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-2 sm:p-4" onClick={onClose}>
      <div className="relative w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] p-2 sm:p-4">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          className="relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute -top-2 -right-2 z-10 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center hover:bg-secondary transition-colors"
          >
            ×
          </button>
          <div className="card p-3 sm:p-4">
            {award?.image ? (
              <img
                src={award.image}
                alt={`${award.awardName} Award`}
                className="w-full h-auto rounded-lg shadow-medium"
              />
            ) : (
              <div className="w-full h-64 sm:h-96 bg-dark-bg rounded-lg flex items-center justify-center border border-gray-700">
                <div className="text-center">
                  <FaAward className="text-4xl sm:text-6xl text-primary mx-auto mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">{award.awardName}</h3>
                  <p className="text-gray-400 text-sm sm:text-base">Award image will be displayed here</p>
                </div>
              </div>
            )}
            <div className="mt-4 text-center">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{award.awardName}</h3>
              <p className="text-gray-300 text-sm sm:text-base">{award.text}{award.afterText}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Experience Section
const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedAward, setSelectedAward] = useState(null);
  const [isAwardModalOpen, setIsAwardModalOpen] = useState(false);

  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "HSBC Technology India (HTI) ",
      location: "Pune, India",
      duration: "Apr 2024 – Present",
      description: "Development of various microsevices in HSBCNet Application.",
      color: "primary",
      image: `${process.env.PUBLIC_URL}/work_experience/DePaul.jpeg`,
      project: "HSBCNet Application",
      details: [
        "Built AI Powered chatbot for customer support using Copilot Studio. It was responsible for handling basic customer queries and redirect to Human Agent power specific area queries.",
        "Developed an AI-assisted Python automation utility adopted globally across HSBC. Automated manual workflows, saving 133+ hours of human effort and improving operational efficiency.",
        "Created and managed Jenkins pipelines for CI/CD automation, deployed applications on Kubernetes clusters and Google Cloud Platform (GCP. Created Change Request, performed production deployments and provided support during production releases. Monitored application health and performance using Splunk, Kibana logs, and AppDynamics. ",
        "Built a robust replay mechanism using batch jobs to reprocess failed asynchronous third party calls, significantly enhancing system resilience and error recovery.",
        "Developed the RFI (Request for Information) feature enabling seamless communication between the bank's back office and customers during payment processing, improving query resolution and operational efficiency. ",
        "Migrated 3 enterprise APIs from MuleSoft to Spring Boot, optimizing backend integration and improving system performance and reliability.",
      ],
      achievements: [
        {
          text: "Recognized with the ",
          awardName: "Star Performer Q2 2026",
          afterText: " award for driving innovation in HSBCNet and delivering impactful solutions",
          image: starAward,
          hasImage: true
        },
        {
          text: "Recognized with the ",
          awardName: "Circle Of Excellence Q1 2026",
          afterText: " award for driving innovation in HSBCNet and delivering impactful solutions",
          image: excellenceAward2,
          hasImage: true
        },
        {
          text: "Recognized with the ",
          awardName: "Circle Of Excellence Q3 2025",
          afterText: " award for driving innovation in HSBCNet and delivering impactful solutions",
          image: excellenceAward,
          hasImage: true
        },
        {
          text: "Received ",
          awardName: "Pat On The Back",
          afterText: " in Q1 for exceptional client collaboration and technical excellence",
          image: patAward1,
          hasImage: true
        },
        {
          text: "Received ",
          awardName: "Pat On The Back",
          afterText: " in Q3 for exceptional client collaboration and technical excellence",
          image: patAward2,
          hasImage: true
        },
        {
          text: "Received ",
          awardName: "AOB Recognition",
          afterText: " from leadership for excellent work",
          image: aobAward2,
          hasImage: true
        },
        {
          text: "Received ",
          awardName: "AOB Recognition",
          afterText: " from leadership for excellent work",
          image: aobAward1,
          hasImage: true
        },
      ]
    },
    {
      title: "Product Engineer",
      company: "L & T Infotech(LTI-Mindtree)",
      location: "Pune, India",
      duration: "Sept 2021 – Apr 2024",
      description: "Developed various APIs under Aayushmaan Bharat Project and contributed in VMware and EY projects.",
      color: "primary",
      image: `${process.env.PUBLIC_URL}/work_experience/MRO.jpg`,
      project: "Aayushmaan Bharat (Central Government), VMware & EY",
      details: [
        "Leveraged the power of Apache Kafka to develop a message queue that ensured reliable and efficient delivery of notifications, while also storing all transactions in a database for easy tracking. ",
        "Led the development of a sophisticated multilevel role-based workflow system for verifying medical and educational profile data of doctors on the medical council platform, enhancing the efficiency and accuracy of the verification process.",
        "Improved code quality by analyzing, debugging, and fixing bugs, and maintained code quality through unit and integration testing.",
        "Built robust ETL pipelines on Google Cloud Platform (GCP) using BigQuery and Cloud Storage, enabling scalable ingestion and processing of multi-gigabyte healthcare datasets.",
        "Engineered search functionality using Elastic-Search, improving public access to critical information on health professionals and drugs.",
      ]
    },
    {
      title: "Software Developer",
      company: "Biencaps Systems Pvt. Ltd.",
      location: "Pune, India",
      duration: "July 2019 – May 2021",
      description: "Worked as a backend and frontend developer on various producs and projects.",
      color: "primary",
      image: `${process.env.PUBLIC_URL}/work_experience/MRO.jpg`,
      project: "Washmart India",
      details: [
        "Designed and developed REST APIs using Spring boot for critical enterprise applications, ensuring optimal performance and scalability.",
        "Created and maintained documentation using Java-Doc and Swagger documents, ensuring clear and effective communication among team members",
        "Designed and developed REST APIs application using Spring boot for a political social media platform that enables users to create posts, polls, surveys, and messages."
      ]
    }
  ];

  const openAwardModal = (award) => {
    setSelectedAward(award);
    setIsAwardModalOpen(true);
  };

  const closeAwardModal = () => {
    setIsAwardModalOpen(false);
    setSelectedAward(null);
  };

  return (
    <section id="experience" className="py-20 bg-dark-bg" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">Professional journey and achievements</p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent"></div>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative pl-12 sm:pl-20 pb-8 sm:pb-12"
              >
                <div className="absolute left-2 sm:left-6 w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full border-2 sm:border-4 border-white shadow-medium"></div>
                
                <div className="card card-hover p-4 sm:p-6 lg:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-primary">{exp.title}</h3>
                      <p className="text-lg sm:text-xl text-gray-300">{exp.company}</p>
                      <p className="text-gray-400 flex items-center mt-2 text-sm sm:text-base">
                        <FaMapMarkerAlt className="mr-2" />
                        {exp.location}
                      </p>
                    </div>
                    <div className="text-primary font-semibold mt-2 md:mt-0 text-sm sm:text-base">
                      {exp.duration}
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">{exp.description}</p>
                  
                  {exp.project && (
                    <div className="mb-4">
                      <h4 className="text-base sm:text-lg font-semibold text-primary mb-2">📚 {exp.project}</h4>
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    {exp.details?.slice(0, 5).map((detail, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 leading-relaxed text-xs sm:text-sm">{detail}</p>
                      </div>
                    ))}
                  </div>
                  
                  {exp.achievements && (
                    <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-dark-bg rounded-lg border border-gray-700">
                      <h4 className="text-base sm:text-lg font-semibold text-primary mb-3">🏆 Key Achievements</h4>
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-300 text-xs sm:text-sm">
                              {achievement.text}
                              {achievement.hasImage ? (
                                <span 
                                  className="cursor-pointer hover:text-primary transition-colors underline decoration-primary/50 hover:decoration-primary font-semibold"
                                  onClick={() => openAwardModal(achievement)}
                                >
                                  "{achievement.awardName}"
                                </span>
                              ) : (
                                <span className="font-semibold text-primary">
                                  {achievement.awardName}
                                </span>
                              )}
                              {achievement.afterText}
                              {achievement.hasImage && (
                                <span className="ml-2 text-primary">🏆</span>
                              )}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <AwardModal 
          isOpen={isAwardModalOpen} 
          onClose={closeAwardModal} 
          award={selectedAward} 
        />
      </div>
    </section>
  );
};

// Recognitions Section
const Recognitions = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const recognitions = [
    {
      title: "Star Performer",
      issuer: "HSBC",
      icon: SiSpringboot,
      color: "primary",
      image: `${process.env.PUBLIC_URL}/certificates/Star.jpg`
    },
    {
      title: "Circle Of Excellence",
      issuer: "HSBC",
      icon: SiSpringboot,
      color: "primary",
      image: `${process.env.PUBLIC_URL}/certificates/Excellence2.jpg`
    },
    {
      title: "Circle Of Excellence",
      issuer: "HSBC",
      icon: SiSpringboot,
      color: "primary",
      image: `${process.env.PUBLIC_URL}/certificates/Excellence.jpg`
    },
    {
      title: "Pat On The Back",
      issuer: "HSBC",
      icon: SiSpringboot,
      color: "primary",
      image: `${process.env.PUBLIC_URL}/certificates/PatQ1.jpg`
    },
    {
      title: "Pat On The Back",
      issuer: "HSBC",
      icon: SiSpringboot,
      color: "primary",
      image: `${process.env.PUBLIC_URL}/certificates/PatQ2.jpg`
    },
       {
      title: "AOB Recognition",
      issuer: "HSBC",
      icon: SiSpringboot,
      color: "primary",
      image: `${process.env.PUBLIC_URL}/certificates/AOB2.png`
    },
    {
      title: "AOB Recognition",
      issuer: "HSBC",
      icon: SiSpringboot,
      color: "primary",
      image: `${process.env.PUBLIC_URL}/certificates/AOB.png`
    }
  ];

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  return (
    <section id="recognitions" className="py-20 bg-dark-card" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Recognitions</h2>
          <p className="section-subtitle">Professional recognitions and achievements</p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {recognitions.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="card card-hover p-6 sm:p-8 text-center cursor-pointer"
              onClick={() => openModal(cert)}
            >
              <cert.icon className="text-4xl sm:text-6xl text-primary mx-auto mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">{cert.title}</h3>
              <p className="text-primary text-base sm:text-lg font-semibold mb-4">{cert.issuer}</p>
              <FaAward className="text-primary text-xl sm:text-2xl mx-auto mb-2" />
              <p className="text-xs sm:text-sm text-gray-400 mt-2">Click to view certificate</p>
            </motion.div>
          ))}
        </div>
        
        <CertificateModal 
          isOpen={isModalOpen}
          onClose={closeModal}
          certificate={selectedCertificate}
        />
      </div>
    </section>
  );
};

// Contact Section
const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  emailjs.send(
    'service_gcicuoj',
    'template_goi27b7',
    {
      name: formData.name,
      email: formData.email,
      message: formData.message
    },
    'kOEz4Bl3vNj79LgDj'
  )
  .then(
    () => {
      alert("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: '', email: '', message: '' });
    },
    (error) => {
      console.error('Email failed:', error);
      alert('Something went wrong. Please try again later.');
    }
  );
};


  return (
    <section id="contact" className="py-20 bg-dark-bg" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's discuss opportunities and collaborations</p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 lg:space-y-8 order-2 lg:order-1"
          >
            <div className="card card-hover p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">Let's Connect</h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <FaEnvelope className="text-primary text-xl sm:text-2xl" />
                  <div>
                    <p className="text-gray-400 text-sm sm:text-base">Email</p>
                    <p className="text-base sm:text-lg text-white break-all">saurabhghanwat007@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <FaPhone className="text-primary text-xl sm:text-2xl" />
                  <div>
                    <p className="text-gray-400 text-sm sm:text-base">Phone</p>
                    <p className="text-base sm:text-lg text-white">+919011259077</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <FaMapMarkerAlt className="text-primary text-xl sm:text-2xl" />
                  <div>
                    <p className="text-gray-400 text-sm sm:text-base">Location</p>
                    <p className="text-base sm:text-lg text-white">Pune, India</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card card-hover p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">Social Links</h3>
              <div className="flex space-x-4 sm:space-x-6">
                <motion.a
                  href="https://github.com/saurabhghanwat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link text-xl sm:text-2xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/saurabh-ghanwat-121873157/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link text-xl sm:text-2xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin />
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2"
          >
            <form onSubmit={handleSubmit} className="card card-hover p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-white">Send Message</h3>
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="form-textarea"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="btn-primary w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="py-8 bg-dark-card border-t border-gray-700">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-gray-300">
            © 2026 Saurabh Ghanwat. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Built with React, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Recognitions />
      <Contact />
      <Footer />
    </div>
  );
}

export default App; 