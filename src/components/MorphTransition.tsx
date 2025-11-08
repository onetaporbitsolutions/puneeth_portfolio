import { motion } from "framer-motion";

interface MorphTransitionProps {
  onComplete: () => void;
  originXPercent?: number; // 0-100, where the glow starts horizontally
  originYPercent?: number; // 0-100, where the glow starts vertically
}

export const MorphTransition = ({ onComplete, originXPercent = 50, originYPercent = 50 }: MorphTransitionProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-40 pointer-events-none"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      {/* Expanding glow that fills the screen, then fades out to reveal Hero glow */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0.95 }}
        animate={{ opacity: [0.95, 0.95, 0] }}
        transition={{ duration: 1.6, times: [0, 0.65, 1], ease: "easeInOut" }}
        onAnimationComplete={onComplete}
      >
        <motion.div
          initial={{ scale: 0.2, filter: "blur(20px)" }}
          animate={{ scale: [0.2, 1.6, 1.6], filter: ["blur(20px)", "blur(30px)", "blur(30px)"] }}
          transition={{ duration: 1.6, times: [0, 0.65, 1], ease: "easeInOut" }}
          style={{
            position: "absolute",
            left: `${originXPercent}%`,
            top: `${originYPercent}%`,
            transform: "translate(-50%, -50%)",
            width: "80vmin",
            height: "80vmin",
            borderRadius: "9999px",
            background:
              "radial-gradient(circle at 50% 50%, hsl(var(--primary)) 0%, hsl(var(--primary)/0.7) 30%, hsl(var(--accent)/0.5) 55%, transparent 70%)",
          }}
        />
      </motion.div>
    </motion.div>
  );
};


