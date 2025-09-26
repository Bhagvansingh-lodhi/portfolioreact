import React, { useState, useRef, useEffect } from "react";
import { 
  Code2, Activity, Cpu, Layers, Network, Binary, BookOpen, 
  GraduationCap, Users, Rocket, Target, Award, Clock, MapPin,
  ChevronLeft, ChevronRight, Play, Pause, Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  icon: Icon,
  status,
  skills = [],
  achievements = [],
  index,
  isActive,
  onHover,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const statusConfig = {
    current: { color: "from-green-500 to-emerald-500", text: "Current", icon: Rocket },
    project: { color: "from-blue-500 to-cyan-500", text: "Project", icon: Code2 },
    learning: { color: "from-purple-500 to-pink-500", text: "Learning", icon: BookOpen },
    achievement: { color: "from-yellow-500 to-orange-500", text: "Achievement", icon: Award }
  };

  const StatusIcon = statusConfig[status]?.icon || Award;

  return (
    <motion.div
      className={`group relative cursor-pointer transform perspective-1000 ${
        isActive ? 'z-20' : 'z-10'
      }`}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => {
        setIsHovered(true);
        onHover?.(index);
      }}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Animated Background Glow */}
      <div className={`absolute -inset-4 rounded-3xl bg-gradient-to-r ${statusConfig[status]?.color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 ${
        isActive ? 'opacity-30' : ''
      }`} />

      {/* Main Card */}
      <div className={`relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 h-full border-2 transition-all duration-500 transform-style-preserve-3d ${
        isHovered || isActive 
          ? 'border-white/20 scale-105 shadow-2xl rotate-y-5' 
          : 'border-white/10 shadow-xl'
      }`}>
        
        {/* Status Badge */}
        <div className={`absolute -top-3 left-6 px-4 py-2 rounded-full bg-gradient-to-r ${statusConfig[status]?.color} text-white text-xs font-bold flex items-center gap-2 shadow-lg`}>
          <StatusIcon className="w-3 h-3" />
          {statusConfig[status]?.text}
        </div>

        {/* Header Section */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className={`p-4 rounded-2xl bg-gradient-to-br ${statusConfig[status]?.color} shadow-lg relative overflow-hidden`}>
              <Icon className="w-8 h-8 text-white relative z-10" />
              <div className="absolute inset-0 bg-white/20 transform scale-0 group-hover:scale-100 transition-transform duration-300" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white leading-tight">
                {title}
              </h3>
              <p className="text-blue-400 font-semibold flex items-center gap-2 mt-1">
                <MapPin className="w-3 h-3" />
                {company}
              </p>
            </div>
          </div>
          
          {/* Period */}
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Clock className="w-4 h-4" />
            <span className="font-mono">{period}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed mb-6 border-l-4 border-blue-500/50 pl-4 py-2">
          {description}
        </p>

        {/* Skills */}
        {skills.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-semibold text-white">Skills & Technologies</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Achievements */}
        {achievements.length > 0 && (
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-semibold text-white">Highlights</span>
            </div>
            <div className="space-y-1">
              {achievements.map((achievement, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-gray-400">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  {achievement}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Hover Effect Elements */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  const experiences = [
    {
      icon: GraduationCap,
      title: "B.Tech Computer Science",
      company: "Oriental Institute of Science and Technology",
      period: "2023 - Present",
      description: "Pursuing Computer Science Engineering with strong academic performance (CGPA: 7.6/10). Focused on building solid foundation in computer science fundamentals and modern technologies.",
      status: "current",
      skills: ["Data Structures", "Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks"],
      achievements: ["CGPA: 7.6/10", "4th Semester Completed", "Active in Tech Clubs"]
    },
    {
      icon: Code2,
      title: "Frontend Developer Projects",
      company: "Personal Portfolio & Applications",
      period: "2023 - Present",
      description: "Developed multiple full-stack applications including React-based e-commerce platforms, weather applications, and interactive portfolio websites using modern web technologies.",
      status: "project",
      skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "REST APIs"],
      achievements: ["5+ Completed Projects", "Responsive Design", "Modern UI/UX"]
    },
    {
      icon: Users,
      title: "LeetCode Problem Solver",
      company: "Competitive Programming Platform",
      period: "2023 - Present",
      description: "Consistently solving algorithmic challenges to enhance problem-solving skills and prepare for technical interviews. Focused on data structures and algorithm optimization.",
      status: "achievement",
      skills: ["Problem Solving", "Algorithms", "Data Structures", "Time Complexity"],
      achievements: ["250+ Problems Solved", "Daily Practice", "Interview Preparation"]
    },
    {
      icon: BookOpen,
      title: "Full-Stack Development",
      company: "Continuous Learning Path",
      period: "2024 - Present",
      description: "Expanding expertise in full-stack development by learning backend technologies, databases, and system design to become a well-rounded software developer.",
      status: "learning",
      skills: ["Node.js", "MongoDB", "Express.js", "System Design", "API Development"],
      achievements: ["Backend Fundamentals", "Database Design", "System Architecture"]
    }
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveCard((prev) => (prev + 1) % experiences.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, experiences.length]);

  const handleMouseMove = (e) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100
      });
    }
  };

  const nextCard = () => setActiveCard((prev) => (prev + 1) % experiences.length);
  const prevCard = () => setActiveCard((prev) => (prev - 1 + experiences.length) % experiences.length);

  return (
    <section 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#04081A] via-[#0A0F2C] to-[#1A1F3C]"
    >
      {/* Dynamic Background Gradient */}
      <div 
        className="absolute inset-0 opacity-30 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(56, 189, 248, 0.1) 0%, transparent 50%)`
        }}
      />

      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black_40%,transparent_100%)]" />

      {/* Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/20 rounded-full"
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-4 py-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-medium text-gray-300">Professional Journey</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            My journey through education, projects, and continuous learning has shaped me into a passionate developer ready to tackle complex challenges.
          </p>
        </motion.div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-12">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              index={index}
              {...exp}
              isActive={activeCard === index}
              onHover={setActiveCard}
            />
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prevCard}
            className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            {isAutoPlaying ? "Pause" : "Play"} Auto-rotate
          </button>
          
          <button
            onClick={nextCard}
            className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/10 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {experiences.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveCard(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeCard === index 
                  ? 'bg-cyan-400 scale-125' 
                  : 'bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Large Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
    </section>
  );
};

export default ExperienceSection;