import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import profilePhoto from "@/assets/profile-photo.jpg";

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader = ({ onComplete }: PreloaderProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Preloader shows for 2-3 seconds then fades out
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1000); // Wait for fade out animation
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) {
    return (
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
      />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
    >
      <div className="flex flex-col items-center gap-6">
        {/* Profile Picture Animation */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 0.2,
          }}
          className="relative"
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0px hsl(var(--primary) / 0.4)",
                "0 0 80px hsl(var(--primary) / 0.6)",
                "0 0 0px hsl(var(--primary) / 0.4)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="rounded-full overflow-hidden w-32 h-32 md:w-40 md:h-40 border-4 border-primary"
          >
            <img
              src={profilePhoto}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Name Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.6,
            duration: 0.8,
            ease: "easeOut",
          }}
          className="text-center"
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold gradient-text"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            GUNTAKA PUNEETH REDDY
          </motion.h1>
        </motion.div>

        {/* Role Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.9,
            duration: 0.8,
            ease: "easeOut",
          }}
          className="text-center"
        >
          <motion.p
            className="text-lg md:text-xl text-primary font-semibold"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Full Stack Developer | B.Tech in Computer Science
          </motion.p>
        </motion.div>

        {/* Loading Spinner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-4"
        >
          <motion.div
            className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

