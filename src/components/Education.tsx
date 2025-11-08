import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

export const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  type EducationItem = {
    degree: string;
    institution: string;
    location: string;
    period: string;
    grade: string;
    percentage?: number | null; // For visual rings when applicable
    logo?: string; // Optional institution logo path (public or imported)
    highlights: string[];
  };

  const education: EducationItem[] = [
    {
      degree: "Bachelor of Technology (CSE)",
      institution: "VISAKHA INSTITUTE OF ENGINEERING AND TECHNOLOGY",
      location: "Visakhapatnam",
      period: "2023 - 2027",
      grade: "CGPA: Not yet completed",
      percentage: null,
      logo: "/viet.png",
      highlights: [
        "Pursuing Computer Science and Engineering",
        "Building strong foundations in software engineering and systems",
      ],
    },
    {
      degree: "Higher Secondary Education (MPC)",
      institution: "NARAYANA JUNIOR COLLEGE",
      location: "Gudivada",
      period: "2021 - 2023",
      grade: "Percentage: 92.7% (927/1000)",
      percentage: 92.7,
      logo: "/narayana.png",
      highlights: [
        "Focused on Mathematics, Physics, and Chemistry",
      ],
    },
    {
      degree: "Secondary Education (CBSE)",
      institution: "DR.K.K.R's GOWTHAM CONCEPT SCHOOL",
      location: "Gudivada",
      period: "2020 - 2021",
      grade: "Percentage: 88.8% (444/500)",
      percentage: 88.8,
      logo: "/kkr-gowtham.png",
      highlights: [
        "Completed under CBSE board curriculum",
      ],
    },
  ];

  return (
    <section ref={ref} className="py-32 lg:py-40 px-6 relative overflow-hidden lg:min-h-[720px] xl:min-h-[780px]">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            color: "hsl(var(--primary))",
          }}
        />
        {/* Gradient blobs */}
        <motion.div
          className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, hsl(var(--primary)/0.25), transparent 60%)" }}
          animate={{ opacity: [0.2, 0.35, 0.2], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-15%] right-[-10%] w-[45vw] h-[45vw] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, hsl(var(--accent)/0.25), transparent 60%)" }}
          animate={{ opacity: [0.15, 0.3, 0.15], scale: [1.05, 0.95, 1.05] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

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
            <span className="gradient-text">Education Qualification</span>
          </h2>
          <p className="text-xl text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
            My academic journey and qualifications
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line for small/medium screens */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary lg:hidden" />
          {/* Horizontal line for large screens */}
          <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-primary via-accent to-primary" />

          <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-24 xl:gap-28 2xl:gap-32">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative lg:h-[480px]"
              >
                {/* Timeline dot removed per request to avoid overlap with cards */}

                <div className={`w-full pl-20 md:pl-0 lg:pl-0 ${index % 2 === 0 ? "lg:absolute lg:top-0" : "lg:absolute lg:bottom-0"}`}>
                  <motion.div
                    className="p-8 xl:p-6 2xl:p-5 rounded-3xl transition-all group border border-primary/10 bg-background/60 backdrop-blur-md shadow-xl hover:shadow-2xl hover:border-primary/30"
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="h-1.5 w-20 rounded-full bg-gradient-to-r from-primary to-accent mb-6 opacity-80" />
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0 overflow-hidden">
                        {edu.logo ? (
                          <img src={edu.logo} alt={edu.institution} className="w-12 h-12 object-contain" />
                        ) : (
                        <GraduationCap className="w-7 h-7 text-primary" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3
                          className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          {edu.degree}
                        </h3>
                        <p className="text-lg font-semibold text-primary mb-2">
                          {edu.institution}
                        </p>
                      </div>
                      {/* Percentage ring (if available) */}
                      {typeof edu.percentage === "number" && (
                        <div className="flex-shrink-0">
                          <PercentageRing value={edu.percentage} />
                        </div>
                      )}
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-primary font-semibold">
                        <Award size={16} />
                        <span>{edu.grade}</span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-primary mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Circular percentage ring component for visualizing percentages
function PercentageRing({ value }: { value: number }) {
  const size = 56;
  const stroke = 6;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.max(0, Math.min(100, value));
  const offset = circumference - (clamped / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="hsl(var(--muted))"
          strokeWidth={stroke}
          fill="none"
          opacity={0.5}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#grad)"
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--accent))" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold">
        {clamped.toFixed(1)}%
      </div>
    </div>
  );
}
