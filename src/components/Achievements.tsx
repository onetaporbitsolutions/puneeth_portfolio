import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { Award, ExternalLink, X } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { getUserCertificates } from "@/lib/certStore";

export const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  const achievements = [
    {
      title: "MACHINE LEARNING",
      company: "SKILL DZIRE",
      date: "5 May 2025 to 20 June 2025",
      description: "Comprehensive machine learning certification covering algorithms, models, and practical applications",
      skills: ["Machine Learning", "Data Science", "Algorithms", "AI"],
      credentialId: "SDST-25-13282",
      image: "/certs/Machine-Learning.jpg",
      prestigious: true,
    },
    {
      title: "Oracle Generative AI",
      company: "ORACLE",
      date: "28 Oct 2025",
      description: "Advanced certification in generative AI technologies and Oracle cloud AI services",
      skills: ["Generative AI", "Oracle Cloud", "AI/ML", "Cloud Computing"],
      image: "/certs/Oracle-Generative-AI.jpg",
      prestigious: true,
    },
    {
      title: "Campus Ambassador",
      company: "TALENT TRENK and AWS",
      date: "26 Jun 2025",
      description: "Campus ambassador program certification in collaboration with AWS",
      skills: ["Leadership", "AWS", "Community Engagement"],
      image: "/certs/Campus-Ambassador.jpg",
    },
    {
      title: "Basics of Python",
      company: "INFOSYS",
      date: "1 Aug 2024",
      description: "Fundamental Python programming concepts and best practices",
      skills: ["Python", "Programming", "Software Development"],
      image: "/certs/Basics-of-Python.jpg",
    },
    {
      title: "NASSCOM Digital Journey",
      company: "NASSCOM and FUTURE SKILLS PRIME",
      date: "26 Mar 2025",
      description: "Digital transformation and future skills certification program",
      skills: ["Digital Skills", "Technology", "Future Skills"],
      image: "/certs/Naascom-digital-journey.jpg",
    },
    {
      title: "Introduction to Data Science",
      company: "IBM, edX",
      date: "12 Jun 2024",
      description: "Foundational data science concepts and methodologies",
      skills: ["Data Science", "Analytics", "Statistics", "Python"],
      credentialId: "70630df40f944a1aa8297af4c61ae541",
      image: "/certs/Intoduction-to-Data-Science.jpg",
    },
    {
      title: "Introduction to Java Programming: Fundamental Data Structures and Algorithms",
      company: "IBM, edX",
      date: "11 Jun 2024",
      description: "Java programming fundamentals with focus on data structures and algorithms",
      skills: ["Java", "Data Structures", "Algorithms", "Programming"],
      credentialId: "1f181df997ed4fd993091d75e7794461",
      image: "/certs/Introduction-to-Java-Programming-Fundamental-Datastructures-and-Algorithms.jpg",
    },
    {
      title: "Soft Skills: Develop Interpersonal Skills",
      company: "IBM, edX",
      date: "12 Jun 2024",
      description: "Professional development focusing on interpersonal communication and collaboration",
      skills: ["Soft Skills", "Communication", "Teamwork", "Leadership"],
      credentialId: "1fa9c5aea3f146aa8099953236751bc56",
      image: "/certs/Soft-skills-develop-interpersonal-skills.jpg",
    },
    {
      title: "Soft Skills: Present with Purpose",
      company: "IBM, edX",
      date: "12 Jun 2024",
      description: "Effective presentation skills and public speaking techniques",
      skills: ["Presentation Skills", "Public Speaking", "Communication"],
      credentialId: "84458a7b8c9f447389b707165b742749",
      image: "/certs/Soft-skills-present-with-purpose.jpg",
    },
    {
      title: "Introduction to Python",
      company: "INFOSYS",
      date: "19 Sep 2024",
      description: "Introduction to Python programming language and its applications",
      skills: ["Python", "Programming Basics", "Software Development"],
      image: "/certs/Introduction-to-Python.jpg",
    },
  ];

  const userCerts = getUserCertificates();
  const allCerts = useMemo(() => [...userCerts, ...achievements], [userCerts]);

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden bg-muted/20">
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
            <span className="gradient-text">Achievements</span> & Certifications
          </h2>
          <p className="text-xl text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
            Recognition and professional certifications earned along the way
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCerts.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className={`rounded-3xl overflow-hidden h-full group cursor-pointer border bg-background/60 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all relative ${
                  (cert as any).prestigious
                    ? "border-red-500/50 shadow-red-500/20 hover:border-red-500 hover:shadow-red-500/40"
                    : "border-primary/10 hover:border-primary/30"
                }`}
                whileHover={{ y: -10, scale: 1.02, rotate: 0.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => setSelectedCert(index)}
              >
                {/* Red neon glow for prestigious certificates */}
                {(cert as any).prestigious && (
                  <motion.div
                    className="absolute -inset-1 rounded-3xl bg-red-500/30 blur-xl opacity-75"
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}
                <div className="relative aspect-[4/3] bg-secondary/20 flex items-center justify-center overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  {/* Badge ribbon */}
                  <div className="absolute top-0 left-0">
                    <div className={`px-4 py-2 rounded-br-xl flex items-center gap-2 shadow-md ${
                      (cert as any).prestigious
                        ? "bg-red-500 text-white"
                        : "bg-primary text-primary-foreground"
                    }`}>
                      <Award className="w-4 h-4" />
                      <span className="text-xs font-semibold tracking-wide">
                        {(cert as any).prestigious ? "Prestigious" : "Certificate"}
                      </span>
                    </div>
                  </div>
                  {/* Subtle vignette */}
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,transparent,rgba(0,0,0,0.25))]" />
                </div>

                <div className="p-6">
                  <h3
                    className={`text-xl font-bold mb-1 transition-colors ${
                      (cert as any).prestigious
                        ? "group-hover:text-red-400 group-hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]"
                        : "group-hover:text-primary"
                    }`}
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {cert.title}
                  </h3>
                  <p className="text-sm text-primary font-semibold mb-3">{cert.company}</p>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {cert.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{cert.date}</span>
                    <ExternalLink className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
          <div className="text-center mt-10">
            <Button asChild variant="secondary" className="rounded-full px-6">
              <a href="/achievements/manage">Manage Certificates</a>
            </Button>
        </div>
      </div>

      {/* Certificate Details Modal */}
      <Dialog open={selectedCert !== null} onOpenChange={() => setSelectedCert(null)}>
        <DialogContent className="max-w-4xl max-h-[92vh] overflow-y-auto">
          {selectedCert !== null && allCerts[selectedCert] && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold gradient-text" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {allCerts[selectedCert].title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6 mt-4">
                <div className="relative bg-secondary/20 rounded-xl p-3 flex items-center justify-center">
                <img
                    src={allCerts[selectedCert].image}
                    alt={allCerts[selectedCert].title}
                    className="max-h-[55vh] w-full object-contain rounded-md"
                />
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Issued by</p>
                    <p className="text-xl font-semibold text-primary">
                      {allCerts[selectedCert].company}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Date</p>
                    <p className="text-lg font-semibold">{allCerts[selectedCert].date}</p>
                  </div>

                  {allCerts[selectedCert].credentialId && (
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Credential ID</p>
                      <p className="text-lg font-mono">{allCerts[selectedCert].credentialId}</p>
                  </div>
                  )}

                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Description</p>
                    <p className="text-base leading-relaxed">
                      {allCerts[selectedCert].description}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-3">Skills Demonstrated</p>
                    <div className="flex flex-wrap gap-2">
                      {allCerts[selectedCert].skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 text-sm rounded-full bg-primary/10 text-primary font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    <Button variant="default" className="w-full" size="lg" asChild>
                      <a href={allCerts[selectedCert].image} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2" size={20} />
                        View Full Size
                      </a>
                    </Button>
                    <Button variant="secondary" className="w-full" size="lg" asChild>
                      <a href={allCerts[selectedCert].image} download>
                        Download
                      </a>
                    </Button>
                    {allCerts[selectedCert].verifyUrl ? (
                      <Button className="w-full" size="lg" asChild>
                        <a href={allCerts[selectedCert].verifyUrl} target="_blank" rel="noopener noreferrer">
                          Verify Certificate
                        </a>
                      </Button>
                    ) : (
                      <Button className="w-full" size="lg" disabled>
                    Verify Certificate
                  </Button>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
