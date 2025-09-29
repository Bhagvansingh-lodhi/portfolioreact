import { motion } from "framer-motion";
import { useRef } from "react";
import { 
  Code2, Rocket, Target, GraduationCap, 
  Award, Users, Sparkles, Quote,
  Calendar, MapPin, BookOpen, Lightbulb
} from "lucide-react";
import HeroImg from "@/assets/images/hero.jpg";

export default function About() {
  const containerRef = useRef(null);

  const stats = [
    { icon: Code2, label: "Projects Completed", value: "10+" },
    { icon: Award, label: "LeetCode Problems", value: "300+" },
    { icon: GraduationCap, label: "Certifications", value: "3 Completed" }
{ icon: Calendar, label: "Experience", value: "1+ Years" }
  ];

  const interests = [
    { icon: Rocket, text: "Modern Web Technologies" },
    { icon: Target, text: "Problem Solving" },
    { icon: Users, text: "Collaborative Development" },
    { icon: Lightbulb, text: "Creative Solutions" }
  ];

  return (
    <>
      <section 
        id="about" 
        className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#04081A] via-[#0A0F2C] to-[#1A1F3C] py-20"
        ref={containerRef}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
          
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500" />
          
          {/* Floating Particles */}
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
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-medium text-gray-300">About Me</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Passionate Developer
              </span>
            </h2>
            
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Transforming ideas into innovative web solutions with modern technologies 
              and a focus on exceptional user experiences.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000" />
              
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative rounded-3xl overflow-hidden">
                  {/* Gradient Border */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Image */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900"
                  >
                    <img
                      src={HeroImg}
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                      alt="Bhagvan Singh Lodhi - Frontend Developer"
                      width={600}
                      height={600}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                  </motion.div>
                </div>

                {/* Floating Badges */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="absolute -bottom-4 -right-4"
                >
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-2xl shadow-2xl">
                    <div className="flex items-center gap-2">
                      <Code2 className="w-4 h-4" />
                      <span className="font-semibold">Frontend Developer</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute -top-4 -left-4"
                >
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-xl">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3" />
                      <span className="text-sm">Bhopal, India</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Introduction */}
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white">
                  Hello! I'm <span className="text-cyan-400">Bhagvan Singh Lodhi</span>
                </h3>
                
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p className="flex items-start gap-3">
                    <Rocket className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    A motivated third-year Computer Science student specializing in modern 
                    frontend development. Passionate about creating innovative web solutions 
                    and user-friendly interfaces using React and JavaScript.
                  </p>
                  
                  <p className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    Focused on building responsive, performant web applications that provide 
                    exceptional user experiences. I enjoy solving complex problems and have 
                    strengthened my skills through consistent practice.
                  </p>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300"
                  >
                    <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Quote Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-l-4 border-cyan-400 rounded-2xl p-6">
                  <Quote className="w-8 h-8 text-cyan-400 mb-4" />
                  <p className="text-gray-300 italic leading-relaxed">
                    I'm a dedicated learner currently expanding my skills into backend development 
                    with Node.js and MongoDB to grow as a full-stack developer. Seeking a remote 
                    frontend developer internship to contribute to collaborative teams while 
                    gaining professional experience.
                  </p>
                  
                  <div className="mt-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">Bhagvan Singh Lodhi</div>
                      <div className="text-sm text-gray-400">B.Tech Computer Science</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Interests */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {interests.map((interest, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-white/10 transition-all duration-300"
                  >
                    <interest.icon className="w-4 h-4" />
                    {interest.text}
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
