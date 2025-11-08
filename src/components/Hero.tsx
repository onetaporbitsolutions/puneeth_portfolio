import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-50" />
              <img
                src={profilePhoto}
                alt="Profile"
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-primary/20 shadow-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Right side - Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <motion.h1
              className="text-6xl md:text-7xl font-bold mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="gradient-text">GUNTAKA PUNEETH REDDY</span>
            </motion.h1>

            <motion.p
              className="text-2xl md:text-3xl text-primary font-semibold mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Full Stack Developer | B.Tech in Computer Science
            </motion.p>

            <motion.p
              className="text-lg text-muted-foreground mb-6 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Passionate software developer with expertise in modern web technologies. 
              Specialized in creating scalable applications and solving complex problems. 
              Committed to writing clean code and delivering exceptional user experiences.
            </motion.p>

            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <Phone className="text-primary" size={20} />
              <a
                href="tel:+918309935755"
                className="text-lg font-semibold text-primary hover:text-primary/80 transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                (+91) 83099 35755
              </a>
            </motion.div>

            <motion.div
              className="flex gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 transition-transform"
              >
                <Github size={32} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 transition-transform"
              >
                <Linkedin size={32} />
              </a>
              <a
                href="mailto:puneethxdeveloper.oncode@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 transition-transform"
              >
                <Mail size={32} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
