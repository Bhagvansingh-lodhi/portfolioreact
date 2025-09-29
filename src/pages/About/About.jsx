import { motion } from "framer-motion";
import { useRef } from "react";
import { 
  Code2, Rocket, Target, GraduationCap, 
  Award, Users, Sparkles, 
  Calendar, MapPin, Heart, Zap,
  Eye, Layers, Search, Globe
} from "lucide-react";
import HeroImg from "@/assets/images/hero.jpg";

export default function About() {
  const containerRef = useRef(null);

  const stats = [
    { icon: Code2, label: "Projects Completed", value: "10+" },
    { icon: Award, label: "LeetCode Problems", value: "300+" },
    { icon: Award, label: "Certifications", value: "5+" },
    { icon: Calendar, label: "Experience", value: "1+ Years" }
  ];

  const interests = [
    { icon: Rocket, text: "Modern Web Technologies" },
    { icon: Target, text: "Problem Solving" },
    { icon: Users, text: "Collaborative Development" },
    { icon: Zap, text: "Creative Solutions" }
  ];

  const philosophyPrinciples = [
    {
      icon: Heart,
      title: "User-First Design",
      description: "Build experiences that delight users while solving real problems",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/20"
    },
    {
      icon: Code2,
      title: "Clean Code Philosophy",
      description: "Write maintainable, readable code that others can understand and build upon",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      icon: Zap,
      title: "Performance Matters",
      description: "Fast, efficient applications provide better user experiences",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/20"
    },
    {
      icon: Layers,
      title: "Progressive Enhancement",
      description: "Build core functionality first, then enhance with modern features",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20"
    },
    {
      icon: Search,
      title: "Problem-Solving Focus",
      description: "Understand the 'why' before diving into the 'how'",
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20"
    },
    {
      icon: Globe,
      title: "Accessibility for All",
      description: "Create inclusive experiences that everyone can use",
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-500/10",
      borderColor: "border-teal-500/20"
    }
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

              {/* Developer Philosophy Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full" />
                  <h4 className="text-xl font-bold text-white">Development Philosophy</h4>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {philosophyPrinciples.map((principle, index) => (
                    <motion.div
                      key={principle.title}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 0.8 + index * 0.1,
                        type: "spring",
                        stiffness: 300
                      }}
                      viewport={{ once: true }}
                      className={`relative p-4 rounded-xl border backdrop-blur-sm ${principle.bgColor} ${principle.borderColor} group cursor-pointer overflow-hidden`}
                    >
                      {/* Animated Background Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${principle.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                      
                      {/* Floating Icon */}
                      <motion.div
                        className={`mb-3 p-2 rounded-lg bg-gradient-to-r ${principle.color} w-10 h-10 flex items-center justify-center`}
                        whileHover={{ rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <principle.icon className="w-5 h-5 text-white" />
                      </motion.div>
                      
                      {/* Content */}
                      <h5 className="font-semibold text-white mb-2 text-sm">
                        {principle.title}
                      </h5>
                      <p className="text-xs text-gray-300 leading-relaxed">
                        {principle.description}
                      </p>
                      
                      {/* Hover Border Effect */}
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${principle.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                    </motion.div>
                  ))}
                </div>

                {/* Philosophy Summary */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  viewport={{ once: true }}
                  className="text-center pt-4"
                >
                  <p className="text-sm text-gray-400 italic">
                    "Building with purpose, designing with empathy, and coding with clarity"
                  </p>
                </motion.div>
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
