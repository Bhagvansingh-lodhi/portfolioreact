import React, { useState } from "react";
import {
  Star,
  Award,
  Calendar,
  BookOpen,
  GraduationCap,
  Trophy,
  MapPin,
  Users,
  Target,
  Rocket,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeCard, setActiveCard] = useState(0);

  const educationData = [
    {
      degree: "Class 10th (CBSE)",
      school: "Little Flower High School",
      mascot: "📘",
      year: "2020",
      achievements: ["Percentage: 86%", "CBSE Board", "Academic Excellence"],
      skills: ["Mathematics", "Science", "English", "Social Studies"],
      description:
        "Completed secondary education with strong foundation in core subjects and excellent academic performance.",
      location: "Bhopal, MP",
      duration: "4 Years",
      highlights: [
        "School Topper in Mathematics",
        "Active in Science Club",
        "Excellent Academic Record",
      ],
      icon: BookOpen,
      gradient: "from-green-500 to-emerald-600",
      glow: "green",
    },
    {
      degree: "Class 12th (CBSE)",
      school: "Olympus School",
      mascot: "📗",
      year: "2022",
      achievements: ["Percentage: 80%", "Stream: Mathematics", "Science Excellence"],
      skills: ["Mathematics", "Physics", "Chemistry", "English", "Computer Science"],
      description:
        "Pursued Mathematics stream with focus on analytical thinking and problem-solving skills, preparing for engineering education.",
      location: "Bhopal, MP",
      duration: "2 Years",
      highlights: [
        "Mathematics Specialist",
        "Computer Science Fundamentals",
        "Competitive Exam Preparation",
      ],
      icon: GraduationCap,
      gradient: "from-blue-500 to-cyan-600",
      glow: "blue",
    },
    {
      degree: "B.Tech Computer Science",
      school: "Oriental Institute of Science and Technology",
      mascot: "🎓",
      year: "2023 - Present",
      achievements: ["CGPA: 7.6/10", "4th Semester Completed", "Tech Enthusiast"],
      skills: ["Data Structures", "Algorithms", "OOP", "DBMS", "Operating Systems", "Web Development"],
      description:
        "Currently pursuing Computer Science Engineering with focus on modern technologies and software development principles.",
      location: "Bhopal, MP",
      duration: "Ongoing",
      highlights: ["Active in Coding Competitions", "Web Development Projects", "DSA Problem Solver"],
      icon: Rocket,
      gradient: "from-purple-500 to-pink-600",
      glow: "purple",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 100, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const glowColors = {
    green: "rgba(34, 197, 94, 0.3)",
    blue: "rgba(59, 130, 246, 0.3)",
    purple: "rgba(168, 85, 247, 0.3)",
  };

  return (
    <section className="min-h-screen relative overflow-hidden py-20 bg-gradient-to-br from-[#04081A] via-[#0A0F2C] to-[#1A1F3C]">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500" />

        {/* Animated Particles */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-medium text-gray-300">Academic Journey</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Education
            </span>
            <span className="block text-2xl md:text-3xl text-gray-400 mt-4">From Foundation to Future</span>
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            My academic path has been a journey of continuous learning and growth, 
            building a strong foundation for innovation in technology and software development.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-500 via-blue-500 to-purple-500 opacity-20 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className={`relative group cursor-pointer ${index === 1 ? "md:mt-12" : ""}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setActiveCard(index)}
              >
                {/* Card Glow Effect */}
                <div
                  className={`absolute -inset-2 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  style={{ backgroundColor: glowColors[edu.glow] }}
                />

                <div
                  className={`relative bg-gray-900/50 backdrop-blur-xl border-2 rounded-2xl p-8 transition-all duration-500 h-full
                    ${hoveredIndex === index
                      ? `scale-105 shadow-2xl border-${edu.glow.split("-")[1]}-500`
                      : "border-white/10 hover:border-white/20"
                    }`}
                >
                  {/* Header Section */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${edu.gradient} shadow-lg`}>
                        <edu.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white leading-tight">{edu.degree}</h3>
                        <p className="text-gray-400 text-sm flex items-center gap-1 mt-1">
                          <MapPin className="w-3 h-3" />
                          {edu.location}
                        </p>
                      </div>
                    </div>

                    {/* Year Badge */}
                    <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                      <span className="text-xs font-semibold text-gray-300">{edu.year}</span>
                    </div>
                  </div>

                  {/* School Info */}
                  <div className="flex items-center gap-2 text-gray-300 mb-4">
                    <BookOpen className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-medium">{edu.school}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 border-l-2 border-teal-500 pl-3">
                    {edu.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm font-semibold text-white">Key Achievements</span>
                    </div>
                    <div className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Award className="w-3 h-3 text-teal-400" />
                          <span className="text-xs text-gray-300">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills Tags */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Target className="w-4 h-4 text-purple-400" />
                      <span className="text-sm font-semibold text-white">Skills Developed</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <Calendar className="w-3 h-3" />
                      <span>{edu.duration}</span>
                    </div>

                    {index === 2 && (
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="text-xs text-green-400">In Progress</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Connection Dot */}
                <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-[#04081A] hidden md:flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Floating Action Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <Users className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-gray-300">
              Continuous learner with <span className="text-white font-semibold">250+</span> LeetCode problems solved
            </span>
          </div>
        </motion.div>
      </div>

      {/* Custom Styles for Floating Animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default EducationSection;
