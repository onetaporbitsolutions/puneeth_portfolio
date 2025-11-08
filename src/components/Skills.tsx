import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Database, Wrench, PenTool, Video, MessageCircle, Camera, FileCode, Terminal, GitBranch } from "lucide-react";

// Technology logo component with actual images
const TechIcon = ({ name }: { name: string }) => {
  const iconStyle = "w-5 h-5";
  const logoMap: Record<string, string> = {
    "C": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "Tailwind CSS": "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v10/icons/tailwindcss.svg",
    "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "NoSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  };
  
  const logoUrl = logoMap[name];
  if (logoUrl) {
    return <img src={logoUrl} alt={name} className={iconStyle} />;
  }
  return <FileCode className={`${iconStyle} text-primary`} />;
};

// Cube-based progress indicator
const CubeProgress = ({ level, color, isVisible }: { level: number; color: string; isVisible: boolean }) => {
  const totalCubes = 20;
  const filledCubes = Math.round((level / 100) * totalCubes);
  
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: totalCubes }).map((_, index) => (
        <motion.div
          key={index}
          className={`w-2 h-2 rounded-sm ${
            index < filledCubes ? color : "bg-secondary/40"
          }`}
          initial={{ scale: 0, opacity: 0 }}
          animate={isVisible ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.2, delay: 0.6 + index * 0.05 }}
        />
      ))}
    </div>
  );
};

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technicalSkills = {
    "Programming Languages": [
      { name: "C", level: 100, bgColor: "bg-blue-500", textColor: "text-blue-500" },
      { name: "C++", level: 90, bgColor: "bg-purple-500", textColor: "text-purple-500" },
      { name: "Python", level: 97, bgColor: "bg-yellow-500", textColor: "text-yellow-500" },
      { name: "Java", level: 93, bgColor: "bg-orange-500", textColor: "text-orange-500" },
    ],
    "Frontend": [
      { name: "JavaScript", level: 88, bgColor: "bg-yellow-400", textColor: "text-yellow-400" },
      { name: "HTML", level: 98, bgColor: "bg-orange-500", textColor: "text-orange-500" },
      { name: "Tailwind CSS", level: 95, bgColor: "bg-cyan-500", textColor: "text-cyan-500" },
      { name: "React", level: 89, bgColor: "bg-blue-400", textColor: "text-blue-400" },
      { name: "TypeScript", level: 85, bgColor: "bg-blue-600", textColor: "text-blue-600" },
    ],
    "Database": [
      { name: "NoSQL", level: 90, bgColor: "bg-green-500", textColor: "text-green-500" },
    ],
    "Tools": [
      { name: "Git", level: 89, bgColor: "bg-red-500", textColor: "text-red-500" },
      { name: "VS Code", level: 92, bgColor: "bg-blue-500", textColor: "text-blue-500" },
    ],
  };

  // Creative skills logo component
  const CreativeIcon = ({ name }: { name: string }) => {
    const iconStyle = "w-8 h-8";
    const logoMap: Record<string, string> = {
      "Canva Editing": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
      "Video Editing": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg",
      "Drawing": "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v10/icons/krita.svg",
      "Communication": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg",
      "Photography": "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons@v10/icons/adobelightroomclassic.svg",
    };
    
    const logoUrl = logoMap[name];
    if (logoUrl) {
      return <img src={logoUrl} alt={name} className={iconStyle} />;
    }
    // Fallback to lucide icons if logo not found
    const iconMap: Record<string, JSX.Element> = {
      "Canva Editing": <Palette className={iconStyle} />,
      "Video Editing": <Video className={iconStyle} />,
      "Drawing": <PenTool className={iconStyle} />,
      "Communication": <MessageCircle className={iconStyle} />,
      "Photography": <Camera className={iconStyle} />,
    };
    return iconMap[name] || <Palette className={iconStyle} />;
  };

  const nonTechnicalSkills = [
    { name: "Canva Editing" },
    { name: "Video Editing" },
    { name: "Drawing" },
    { name: "Communication" },
    { name: "Photography" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section ref={ref} className="py-32 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <span className="gradient-text">Mr.Puneeth Reddy's Skill Set</span>
          </h2>
          <p className="text-xl text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
            A comprehensive overview of my technical and creative capabilities
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Technical Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Code className="w-8 h-8 text-primary" />
              <h3
                className="text-3xl md:text-4xl font-bold"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Technical Skills
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {Object.entries(technicalSkills).map(([category, skills]) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="glass-card p-6 rounded-2xl"
                >
                  <h4
                    className="text-xl font-semibold mb-6 text-primary flex items-center gap-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {category === "Programming Languages" && <Code className="w-5 h-5" />}
                    {category === "Frontend" && <Palette className="w-5 h-5" />}
                    {category === "Database" && <Database className="w-5 h-5" />}
                    {category === "Tools" && <Wrench className="w-5 h-5" />}
                    {category}
                  </h4>
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
                    className="space-y-3"
        >
          {skills.map((skill) => (
                      <motion.div key={skill.name} variants={item} className="group">
                        <div className="flex items-center gap-3">
                          {/* Icon */}
                          <div className="flex-shrink-0">
                            <TechIcon name={skill.name} />
                          </div>
                          {/* Skill Name */}
                          <span
                            className={`font-semibold text-sm ${skill.textColor} min-w-[120px]`}
                            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                          >
                    {skill.name}
                  </span>
                          {/* Cube Progress */}
                          <CubeProgress level={skill.level} color={skill.bgColor} isVisible={isInView} />
              </div>
            </motion.div>
          ))}
        </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Non-Technical Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Palette className="w-8 h-8 text-primary" />
              <h3
                className="text-3xl md:text-4xl font-bold"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Creative & Soft Skills
              </h3>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
            >
              {nonTechnicalSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={item}
                  className="glass-card p-6 rounded-2xl text-center group hover:border-primary/50 transition-all cursor-pointer"
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <CreativeIcon name={skill.name} />
                  </div>
                  <h4
                    className="font-semibold text-sm"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {skill.name}
                  </h4>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
