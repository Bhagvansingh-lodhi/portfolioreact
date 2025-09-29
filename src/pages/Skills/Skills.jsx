import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, Database, Cpu, Layout, Rocket, Zap, 
  Star, Target, TrendingUp, Sparkles, Circle,
  GitBranch, Server, Palette, Smartphone
} from "lucide-react";
import { FaReact, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { 
  SiJavascript, SiHtml5, SiCss3, SiTailwindcss, 
  SiMongodb, SiExpress, SiVite, SiVercel,
  SiNextdotjs, SiTypescript, SiPython, SiJest
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

const SkillBadge = ({ skill, index, isHovered, categoryColor }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3, delay: index * 0.05 }}
    whileHover={{ 
      scale: 1.1, 
      y: -5,
      transition: { duration: 0.2 }
    }}
    className="relative group"
  >
    <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${categoryColor} opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-300`} />
    
    <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-3 flex items-center gap-3 group-hover:border-gray-500/50 transition-all duration-300">
      <div className="text-2xl transform group-hover:scale-110 transition-transform duration-300">
        {skill.icon}
      </div>
      <div className="flex-1 min-w-0">
        <span className="text-white font-medium text-sm block truncate">
          {skill.name}
        </span>
        <div className="w-full bg-gray-700/50 rounded-full h-1.5 mt-2">
          <motion.div 
            className={`h-full rounded-full bg-gradient-to-r ${categoryColor.split(' ')[0]} ${categoryColor.split(' ')[1]}`}
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
          />
        </div>
      </div>
      <div className="text-xs text-gray-400 font-mono">
        {skill.level}%
      </div>
    </div>
  </motion.div>
);

const SkillCategory = ({ 
  category, 
  index, 
  isExpanded, 
  onToggle,
  mousePosition 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ scale: 1.02 }}
      className="relative group cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onToggle}
    >
      {/* Animated Background Glow */}
      <div 
        className={`absolute -inset-4 rounded-3xl bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 ${
          isExpanded ? 'opacity-30' : ''
        }`}
        style={{
          background: isHovered ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(100,100,255,0.1), transparent 50%)` : ''
        }}
      />

      <div className={`relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border-2 transition-all duration-500 overflow-hidden ${
        isExpanded ? 'border-white/30' : 'border-white/10 group-hover:border-white/20'
      }`}>
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className={`p-4 rounded-2xl bg-gradient-to-br ${category.gradient} shadow-lg relative overflow-hidden`}>
              <category.icon className="w-8 h-8 text-white relative z-10" />
              <div className="absolute inset-0 bg-white/20 transform scale-0 group-hover:scale-100 transition-transform duration-300" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">
                {category.title}
              </h3>
              <p className="text-gray-400 text-sm mt-1">{category.subtitle}</p>
            </div>
          </div>
          
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="p-2 rounded-full bg-white/5 border border-white/10"
          >
            <Zap className="w-5 h-5 text-gray-400" />
          </motion.div>
        </div>

        {/* Skills Grid */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6"
            >
              {category.skills.map((skill, skillIndex) => (
                <SkillBadge
                  key={skillIndex}
                  skill={skill}
                  index={skillIndex}
                  isHovered={isHovered}
                  categoryColor={category.gradient}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Progress Summary */}
        {!isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-4 mt-6"
          >
            <div className="flex-1 bg-gray-700/50 rounded-full h-2">
              <motion.div 
                className={`h-full rounded-full bg-gradient-to-r ${category.gradient}`}
                initial={{ width: 0 }}
                animate={{ width: `${category.averageLevel}%` }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
            <span className="text-sm text-gray-400 font-mono">
              {category.averageLevel}% avg
            </span>
          </motion.div>
        )}

        {/* Floating Elements */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
        </div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const [expandedCategory, setExpandedCategory] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      subtitle: "Core languages & fundamentals",
      gradient: "from-blue-500 to-cyan-500",
      averageLevel: 85,
      skills: [
        { name: "JavaScript (ES6+)", icon: <SiJavascript className="text-[#F7DF1E]" />, level: 90 },
     
        { name: "Java", icon: <Code2 className="text-[#007396]" />, level: 80 },
        { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" />, level: 95 },
        { name: "CSS3", icon: <SiCss3 className="text-[#1572B6]" />, level: 90 },
      ],
    },
    {
      icon: Layout,
      title: "Frontend Development",
      subtitle: "Modern frameworks & libraries",
      gradient: "from-green-500 to-emerald-500",
      averageLevel: 88,
      skills: [
        { name: "React.js", icon: <FaReact className="text-[#61DAFB]" />, level: 92 },
      
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" />, level: 95 },
        { name: "Vite", icon: <SiVite className="text-[#646CFF]" />, level: 85 },
        { name: "Responsive Design", icon: <Smartphone className="text-[#38B2AC]" />, level: 90 },
       
      ],
    },
    {
      icon: Server,
      title: "Backend & Databases",
      subtitle: "Server-side technologies",
      gradient: "from-purple-500 to-pink-500",
      averageLevel: 78,
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" />, level: 85 },
        { name: "Express.js", icon: <SiExpress className="text-white" />, level: 80 },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" />, level: 75 },
        { name: "RESTful APIs", icon: <Code2 className="text-[#FF6C37]" />, level: 85 },
     
        
      ],
    },
    {
      icon: Cpu,
      title: "Tools & Concepts",
      subtitle: "Development ecosystem",
      gradient: "from-orange-500 to-red-500",
      averageLevel: 82,
      skills: [
        { name: "Git & GitHub", icon: <FaGitAlt className="text-[#F05032]" />, level: 90 },
        { name: "VS Code", icon: <TbBrandVscode className="text-[#007ACC]" />, level: 95 },
        { name: "Vercel", icon: <SiVercel className="text-white" />, level: 80 },
        { name: "Data Structures", icon: <Cpu className="text-[#9CA3AF]" />, level: 85 },
        { name: "Algorithms", icon: <Cpu className="text-[#F59E0B]" />, level: 80 },
        { name: "OOP & Design Patterns", icon: <Cpu className="text-[#7C4DFF]" />, level: 75 },
      ],
    },
  ];

  const handleMouseMove = (e) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  return (
    <section 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#04081A] via-[#0A0F2C] to-[#1A1F3C] py-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-medium text-gray-300">Technical Expertise</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills, ranging from frontend development to backend technologies and development tools.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              category={category}
              index={index}
              isExpanded={expandedCategory === index}
              onToggle={() => setExpandedCategory(expandedCategory === index ? null : index)}
              mousePosition={mousePosition}
            />
          ))}
        </div>

        {/* Stats Footer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-grid grid-cols-2 md:grid-cols-4 gap-8 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
            {[
              { label: "Technologies", value: "15+", icon: Rocket },
              { label: "Projects", value: "10+", icon: Target },
              { label: "LeetCode", value: "300+", icon: TrendingUp },
              { label: "Experience", value: "1+ Years", icon: Star },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
