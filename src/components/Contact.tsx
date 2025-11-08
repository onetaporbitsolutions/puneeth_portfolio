import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    toast.success("Message sent successfully! I'll get back to you soon.");
    (e.target as HTMLFormElement).reset();
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "puneethxdeveloper.oncode@gmail.com", href: "mailto:puneethxdeveloper.oncode@gmail.com" },
    { icon: Phone, label: "Phone", value: "(+91) 83099 35755", href: "tel:+918309935755" },
    { icon: MapPin, label: "Location", value: "India", href: null },
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
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground" style={{ fontFamily: "'Inter', sans-serif" }}>
            Have a project in mind? Let's work together to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <a
                  href={info.href || undefined}
                  className="glass-card p-6 rounded-xl flex items-center gap-4 hover:border-primary/50 transition-all group block"
                >
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <info.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                    <p className="text-lg font-semibold">{info.value}</p>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  required
                  className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <Input
                  placeholder="Subject"
                  required
                  className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  required
                  rows={6}
                  className="bg-background/50 border-border/50 focus:border-primary transition-colors resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg py-6 rounded-full"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center mt-20 text-muted-foreground"
      >
        <p>© 2024 GUNTAKA PUNEETH REDDY. All rights reserved.</p>
      </motion.div>
    </section>
  );
};
