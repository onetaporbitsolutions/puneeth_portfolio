import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "ONETAP ORBIT SOLUTIONS",
      description: "A professional business website built collaboratively, showcasing modern web development practices and responsive design.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
      gradient: "from-blue-500 to-cyan-500",
      demoUrl: "https://onetaporbit.vercel.app/",
      githubUrl: null,
    },
    {
      title: "MOTHER:001 – AI-Powered Women Safety Companion",
      description: "Comprehensive women safety app with AI sentiment analysis, real-time cluster heatmap, proactive alerts, conversational AI assistant, and emergency SOS features. Includes voice input, anomaly detection, and gamification.",
      tech: ["AI/ML", "NLP", "React Native", "Maps API", "Voice Recognition"],
      gradient: "from-purple-500 to-pink-500",
      demoUrl: null,
      githubUrl: null,
      features: [
        "Microjournal with AI Sentiment Analysis",
        "Real-time Cluster Heatmap",
        "GutFeel Proactive Alerts",
        "MOTHER:001 AI Assistant",
        "SOS Emergency Button",
      ],
    },
    {
      title: "CREW INDIA: Smart Waste Management",
      description: "Comprehensive waste management platform that trains government workers and civilians, provides reward points for reporting waste, tracks ULB operations, and allows point redemption for compost kits, dustbins, and more.",
      tech: ["React", "Node.js", "MongoDB", "Maps API", "Gamification"],
      gradient: "from-green-500 to-emerald-500",
      demoUrl: null,
      githubUrl: null,
      features: [
        "Training Modules for Workers & Civilians",
        "Waste Reporting System",
        "ULB Tracking",
        "Reward Points & Redemption",
        "Gamification System",
      ],
    },
  ];

  return (
    <section id="projects" ref={ref} className="py-32 px-6 bg-muted/20">
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
            Projects & <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
            Showcasing real-world applications and technical expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div
                className="glass-card rounded-2xl overflow-hidden h-full group cursor-pointer"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <motion.div
                    className="absolute inset-0 bg-background/20"
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                
                <div className="p-6">
                  <h3
                    className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.features && (
                    <div className="mb-4">
                      <p className="text-sm font-semibold mb-2 text-primary">Key Features:</p>
                      <ul className="space-y-1">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex gap-3">
                    {project.githubUrl ? (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-primary/50 hover:bg-primary/10"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-primary/50 hover:bg-primary/10"
                        disabled
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    )}
                    {project.demoUrl ? (
                      <Button
                        size="sm"
                        className="flex-1 bg-primary hover:bg-primary/90"
                        asChild
                      >
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Live
                        </a>
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        className="flex-1 bg-primary hover:bg-primary/90"
                        disabled
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
