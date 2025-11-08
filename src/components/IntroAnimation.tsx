import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import profilePhoto from "@/assets/profile-photo.jpg";

interface IntroAnimationProps {
  onComplete: () => void;
}

export const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800);
    }, 3500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) {
    return (
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
      />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden"
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(circle at 50% 50%, hsl(var(--primary)) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: 0,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Photo animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: 0.2,
          }}
          className="relative"
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0px hsl(var(--primary) / 0.3)",
                "0 0 60px hsl(var(--primary) / 0.6)",
                "0 0 0px hsl(var(--primary) / 0.3)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="rounded-full overflow-hidden w-48 h-48 border-4 border-primary"
          >
            <img
              src={profilePhoto}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Name animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            duration: 0.8,
            ease: "easeOut",
          }}
          className="text-center"
        >
          <motion.h1
            className="text-6xl md:text-7xl font-bold gradient-text glow-effect"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            GUNTAKA PUNEETH REDDY
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-xl md:text-2xl text-primary font-semibold mt-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Full Stack Developer | B.Tech in Computer Science
          </motion.p>
        </motion.div>

        {/* Loading indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="flex gap-2 mt-8"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full bg-primary"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};
