import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, TrendingUp } from "lucide-react";

export const Internships = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const internships = [
    {
      role: "Full Stack Developer Intern",
      company: "Tech Startup Inc.",
      location: "Remote",
      period: "Jun 2023 - Aug 2023",
      type: "Full-time",
      description: "Developed and deployed full-stack web applications serving 10K+ users",
      achievements: [
        "Built RESTful APIs using Node.js and Express resulting in 40% faster response times",
        "Implemented responsive UI components with React and Tailwind CSS",
        "Collaborated with cross-functional team of 8 members using Agile methodology",
        "Reduced bug count by 30% through comprehensive testing and code reviews",
      ],
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker"],
    },
    {
      role: "Software Engineering Intern",
      company: "Enterprise Solutions Ltd.",
      location: "City, State",
      period: "Jan 2023 - May 2023",
      type: "Part-time",
      description: "Worked on enterprise-level applications and cloud infrastructure",
      achievements: [
        "Optimized database queries reducing load time by 50%",
        "Developed automated testing scripts improving code coverage to 85%",
        "Participated in system design discussions for microservices architecture",
        "Created technical documentation for API endpoints",
      ],
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Kubernetes", "Jenkins"],
    },
    {
      role: "Frontend Developer Intern",
      company: "Digital Agency Co.",
      location: "City, State",
      period: "Jun 2022 - Aug 2022",
      type: "Full-time",
      description: "Created engaging user interfaces for client projects",
      achievements: [
        "Developed 5+ client websites with modern design principles",
        "Improved website performance scores by 25% using optimization techniques",
        "Implemented pixel-perfect designs from Figma mockups",
        "Mentored 2 junior interns in React best practices",
      ],
      technologies: ["React", "TypeScript", "Sass", "Figma", "Git"],
    },
  ];

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
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
            <span className="gradient-text">Internships</span> & Experience
          </h2>
          <p className="text-xl text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
            Professional experience and hands-on learning opportunities
          </p>
        </motion.div>

        <div className="space-y-8">
          {internships.map((internship, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div
                className="glass-card p-8 rounded-2xl hover:border-primary/50 transition-all group"
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Left side - Icon and basic info */}
                  <div className="lg:w-1/3">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                        <Briefcase className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <h3
                          className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          {internship.role}
                        </h3>
                        <p className="text-xl font-semibold text-primary mb-3">
                          {internship.company}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar size={18} />
                        <span>{internship.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin size={18} />
                        <span>{internship.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <TrendingUp size={18} />
                        <span>{internship.type}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {internship.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right side - Description and achievements */}
                  <div className="lg:w-2/3">
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {internship.description}
                    </p>

                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-primary">
                        Key Achievements & Responsibilities
                      </h4>
                      <ul className="space-y-3">
                        {internship.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start gap-3 text-muted-foreground"
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.1 * i + index * 0.2 }}
                          >
                            <span className="text-primary mt-1 text-xl">→</span>
                            <span className="leading-relaxed">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
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
