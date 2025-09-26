import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import ecommerceImg from "../../assets/images/ecommerce.jpg";
import weatherImg from "../../assets/images/weather.jpg";
import portfolioImg from "../../assets/images/portfolio.jpg";


import PropTypes from "prop-types";
import { 
  ExternalLink, Github, ArrowRight, Play, 
  Code2, Smartphone, Globe, Zap,
  Sparkles, Target, Clock, Users
} from "lucide-react";

const projects = [
  {
    title: "React E-Commerce Frontend",
    description: "A fully responsive single-page application (SPA) built with React. Implemented state management for shopping cart using Context API and Hooks. Styled components with pure CSS for mobile-friendly user interface.",
      link: ecommerceImg,
  
    color: "#5196fd",
    githubLink: "https://github.com/Bhagvansingh-lodhi/shopiixaaa",
    liveLink: "https://shopixa.vercel.app/",
    technologies: ["React", "Context API", "React Hooks", "CSS3", "JavaScript"],
    category: "Frontend",
    status: "Completed",
    features: ["Shopping Cart", "Product Filtering", "Responsive Design", "State Management"],
    duration: "2 months",
    complexity: "Intermediate"
  },
  {
    title: "Weather Application",
    description: "Interactive weather app fetching real-time data from public API. Built dynamic UI components to render weather data and 5-day forecast. Utilized native JavaScript fetch API for asynchronous data retrieval.",
    
    link:weatherImg,
    color: "#8f89ff",
    githubLink: "https://github.com/Bhagvansingh-lodhi/weatherapp",
    liveLink: "https://jalvaayu.netlify.app/",
    technologies: ["JavaScript", "HTML5", "CSS3", "RESTful APIs"],
    category: "Frontend",
    status: "Completed",
    features: ["Real-time Data", "5-Day Forecast", "Location Search", "Dynamic UI"],
    duration: "1 month",
    complexity: "Beginner"
  },
  {
    title: "Portfolio Website",
    description: "Designed and built responsive portfolio from scratch using HTML, CSS, JavaScript. Implemented interactive elements and smooth animations for user engagement.",
link: portfolioImg,
    color: "#0d9488",
    githubLink: "https://github.com/Bhagvansingh-lodhi/portfolio",
    liveLink: "https://bhagvansinghlodhi.netlify.app/",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    category: "Frontend",
    status: "Completed",
    features: ["Responsive Design", "Smooth Animations", "Modern UI", "Performance Optimized"],
    duration: "3 weeks",
    complexity: "Beginner"
  }
];

export default function Projects() {
  const container = useRef(null);
  const [activeProject, setActiveProject] = useState(0);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }
      
      @keyframes glow {
        0%, 100% { opacity: 0.5; }
        50% { opacity: 1; }
      }

      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `;
    document.head.appendChild(style);

    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty("--project-scale", "0.85");
        document.documentElement.style.setProperty("--project-margin", "-5vh");
      } else {
        document.documentElement.style.setProperty("--project-scale", "1");
        document.documentElement.style.setProperty("--project-margin", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
    <ReactLenis root>
      <main className="bg-gradient-to-br from-[#04081A] via-[#0A0F2C] to-[#1A1F3C] min-h-screen" ref={container}>
        {/* Animated Background */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        {/* Header Section */}
        <section className="relative z-10 pt-32 pb-20 px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium text-gray-300">Featured Projects</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                My Projects
              </span>
            </h1>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              A collection of projects showcasing my skills in frontend development, 
              responsive design, and modern web technologies.
            </p>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section className="text-white w-full relative z-10">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
                technologies={project.technologies}
                category={project.category}
                status={project.status}
                features={project.features}
                duration={project.duration}
                complexity={project.complexity}
                isActive={activeProject === i}
                onHover={() => setActiveProject(i)}
              />
            );
          })}
        </section>

        {/* Project Navigation Dots */}
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-20 hidden lg:flex flex-col gap-4">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const element = document.getElementById(`project-${i}`);
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeProject === i 
                  ? 'bg-cyan-400 scale-125 shadow-lg shadow-cyan-400/50' 
                  : 'bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
  technologies = [],
  category,
  status,
  features = [],
  duration,
  complexity,
  isActive,
  onHover
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div
      ref={container}
      id={`project-${i}`}
      className="h-screen flex items-center justify-center sticky top-0 project-container"
      onMouseEnter={onHover}
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card"
        whileHover={{
          y: -15,
          transition: { duration: 0.4, type: "spring" },
        }}
      >
        {/* Enhanced card design with glass morphism */}
        <div className="w-full flex flex-col lg:flex-row bg-gray-900/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border-2 border-white/10 hover:border-white/20 transition-all duration-500">
          
          {/* Image section with enhanced effects */}
          <div className="w-full lg:w-[55%] h-[300px] lg:h-[500px] relative overflow-hidden group">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isImageLoaded ? 1 : 0 }}
              transition={{ duration: 0.6 }}
              className="w-full h-full relative"
            >
              <motion.img
                src={url}
                alt={title}
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                onLoad={() => setIsImageLoaded(true)}
              />
              
              {/* Gradient overlay */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"
                style={{ mixBlendMode: "multiply" }}
              />
              
              {/* Project badge */}
              <div className="absolute top-6 left-6 flex gap-2">
                <span className="px-3 py-1 bg-black/50 backdrop-blur-md text-white rounded-full text-xs font-medium capitalize">
                  {category}
                </span>
                <span className="px-3 py-1 bg-green-500/20 backdrop-blur-md text-green-400 rounded-full text-xs font-medium">
                  {status}
                </span>
              </div>

              {/* Hover effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Loading skeleton */}
            {!isImageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse" />
            )}
          </div>

          {/* Content section with enhanced layout */}
          <div className="w-full lg:w-[45%] p-8 lg:p-10 flex flex-col justify-between">
            <div>
              {/* Project header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
                  <span className="text-sm text-gray-400">Project {i + 1}</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-400 block">{duration}</span>
                  <span className="text-xs text-cyan-400 capitalize">{complexity}</span>
                </div>
              </div>

              {/* Title and description */}
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                {title}
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                {description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-semibold text-white">Key Features</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-xs text-gray-400">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 text-xs bg-white/5 border border-white/10 text-gray-300 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="border-t border-white/10 pt-6">
              <div className="flex items-center gap-4">
                <motion.a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-all duration-300 group flex-1 justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm font-medium">Code</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <motion.a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 rounded-xl text-white transition-all duration-300 group flex-1 justify-center"
                  style={{ 
                    background: `linear-gradient(135deg, ${color}20, ${color}40)`,
                    border: `1px solid ${color}30`
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-4 h-4" />
                  <span className="text-sm font-medium">Live Demo</span>
                  <ExternalLink className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
  technologies: PropTypes.array,
  category: PropTypes.string,
  status: PropTypes.string,
  features: PropTypes.array,
  duration: PropTypes.string,
  complexity: PropTypes.string,
  isActive: PropTypes.bool,
  onHover: PropTypes.func,
};