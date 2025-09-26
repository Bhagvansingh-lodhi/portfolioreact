import React, { useState, useRef, useEffect } from "react";
import { Send, Phone, MapPin, Mail, Github, Linkedin, Twitter, Download } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeField, setActiveField] = useState(null);
  
  const formRef = useRef(null);
  const particlesRef = useRef(null);

  // Floating particles effect
  useEffect(() => {
    const createParticle = () => {
      if (!particlesRef.current) return;
      
      const particle = document.createElement('div');
      particle.className = 'absolute w-1 h-1 bg-blue-400/30 rounded-full';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = '100%';
      particle.style.animation = `floatUp ${3 + Math.random() * 4}s linear forwards`;
      
      particlesRef.current.appendChild(particle);
      
      setTimeout(() => {
        if (particlesRef.current?.contains(particle)) {
          particlesRef.current.removeChild(particle);
        }
      }, 7000);
    };

    // Add CSS animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes floatUp {
        0% { transform: translateY(0) scale(1); opacity: 0.7; }
        100% { transform: translateY(-100vh) scale(0.3); opacity: 0; }
      }
      @keyframes glow {
        0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
        50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
      }
      @keyframes slideIn {
        from { transform: translateY(30px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
    `;
    document.head.appendChild(style);

    const interval = setInterval(createParticle, 300);
    
    return () => {
      clearInterval(interval);
      document.head.removeChild(style);
    };
  }, []);

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!validateForm()) {
      setStatus("Please fill in all required fields correctly.");
      setIsSubmitting(false);
      return;
    }

    // Simulate API call with animation
    await new Promise(resolve => setTimeout(resolve, 2000));

    try {
      const form = new FormData();
      form.append("access_key", "83953395-2d7d-4072-b7a3-536020af2f91");
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("subject", formData.subject);
      form.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("🎉 Message sent successfully! I'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});
        
        // Success animation
        if (formRef.current) {
          formRef.current.style.animation = 'glow 2s ease-in-out';
          setTimeout(() => {
            if (formRef.current) formRef.current.style.animation = '';
          }, 2000);
        }
      } else {
        setStatus("❌ " + (result.message || "There was an error sending your message."));
      }
    } catch (error) {
      setStatus("❌ An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadResume = () => {
    const resumeUrl = '/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Bhagvan_Singh_Lodhi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/Bhagvansingh-lodhi", color: "hover:text-purple-400" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/bhagvan-singh-lodhi-0ba7a7313/", color: "hover:text-blue-400" },
    { icon: Twitter, href: "https://twitter.com", color: "hover:text-sky-400" },
    { icon: Mail, href: "mailto:bhagvansinghhere@email.com", color: "hover:text-red-400" },
  ];

  return (
    <main className="pt-20 lg:pt-0 bg-gradient-to-br from-[#04081A] via-[#0A0F2C] to-[#1A1F3C] min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
        <div ref={particlesRef} className="absolute inset-0 pointer-events-none"></div>
      </div>

      <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="container mx-auto max-w-6xl">
          {/* Header Section */}
          <div className="text-center mb-16 animate-slideIn">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let's discuss how we can create something amazing together. 
              I'm always open to new opportunities and collaborations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info - Enhanced */}
            <div className="space-y-8 relative">
              {/* Animated Cards */}
              <div className="space-y-6">
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                  <div className="relative bg-gray-900/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
                      Get In Touch
                    </h3>
                    
                    <div className="space-y-6">
                      {[
                        { icon: Mail, label: "Email", value: "bhagvansinghhere@email.com", color: "text-purple-400" },
                        { icon: Phone, label: "Phone", value: "+91-6265731633", color: "text-blue-400" },
                        { icon: MapPin, label: "Location", value: "Bhopal, Madhya Pradesh", color: "text-pink-400" },
                      ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-4 group/item">
                          <div className={`p-3 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 group-hover/item:scale-110 transition-transform duration-300`}>
                            <item.icon className={`w-6 h-6 ${item.color}`} />
                          </div>
                          <div>
                            <p className="text-gray-400 text-sm">{item.label}</p>
                            <p className="text-white font-medium">{item.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Social Links */}
                    <div className="mt-8 pt-6 border-t border-gray-700/50">
                      <p className="text-gray-400 mb-4">Follow me on</p>
                      <div className="flex space-x-4">
                        {socialLinks.map((social, index) => (
                          <a
                            key={index}
                            href={social.href}
                            className={`p-3 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 ${social.color} transition-all duration-300 hover:scale-110 hover:border-current/30`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <social.icon className="w-5 h-5" />
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Download Resume Button */}
                    <button
                      onClick={handleDownloadResume}
                      className="w-full mt-6 group relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-400 p-0.5 rounded-xl transition-all duration-300 hover:scale-105"
                    >
                      <div className="bg-gray-900 rounded-xl p-3 transition-all duration-300 group-hover:bg-transparent">
                        <span className="flex items-center justify-center gap-2 text-white font-semibold">
                          <Download className="w-4 h-4" />
                          Download Resume
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Enhanced */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-300 animate-glow"></div>
              <div 
                ref={formRef}
                className="relative bg-gray-900/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6">
                    {[
                      { name: 'name', type: 'text', placeholder: 'Your Full Name' },
                      { name: 'email', type: 'email', placeholder: 'Your Email Address' },
                      { name: 'subject', type: 'text', placeholder: 'Project Topic' },
                    ].map((field, index) => (
                      <div key={field.name} className="relative">
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          className={`w-full px-4 py-4 rounded-xl bg-gray-800/50 border-2 ${
                            errors[field.name] 
                              ? 'border-red-500/50' 
                              : activeField === field.name 
                                ? 'border-blue-500/50' 
                                : 'border-gray-700/50'
                          } focus:border-blue-500 focus:outline-none transition-all duration-300 text-white placeholder-gray-400`}
                          value={formData[field.name]}
                          onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                          onFocus={() => setActiveField(field.name)}
                          onBlur={() => setActiveField(null)}
                        />
                        {errors[field.name] && (
                          <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                            ⚠️ {errors[field.name]}
                          </p>
                        )}
                      </div>
                    ))}

                    <div className="relative">
                      <textarea
                        placeholder="Tell me about your project..."
                        rows="5"
                        className={`w-full px-4 py-4 rounded-xl bg-gray-800/50 border-2 ${
                          errors.message 
                            ? 'border-red-500/50' 
                            : activeField === 'message' 
                              ? 'border-blue-500/50' 
                              : 'border-gray-700/50'
                        } focus:border-blue-500 focus:outline-none transition-all duration-300 text-white placeholder-gray-400 resize-none`}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        onFocus={() => setActiveField('message')}
                        onBlur={() => setActiveField(null)}
                      ></textarea>
                      {errors.message && (
                        <p className="text-red-400 text-sm mt-2 flex items-center gap-1">
                          ⚠️ {errors.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-xl font-semibold flex items-center justify-center space-x-3 transition-all duration-300 ${
                      isSubmitting
                        ? 'bg-gray-600 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 hover:scale-105'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>

                {/* Status Message */}
                {status && (
                  <div className={`mt-4 p-4 rounded-xl text-center transition-all duration-300 ${
                    status.includes("🎉") 
                      ? "bg-green-500/10 border border-green-500/30 text-green-400" 
                      : "bg-red-500/10 border border-red-500/30 text-red-400"
                  }`}>
                    <p className="flex items-center justify-center gap-2">
                      {status}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute bottom-10 left-10 w-20 h-20 bg-blue-400/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-20 right-10 w-32 h-32 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-cyan-400/10 rounded-full blur-xl animate-pulse delay-500"></div>
        </div>
      </section>
    </main>
  );
}