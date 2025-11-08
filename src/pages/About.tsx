import { motion } from "framer-motion";
import { Mail, Phone, Calendar, Droplets, Palette, Car, User } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="px-6 pt-24 pb-24">
        <div className="max-w-6xl mx-auto">
          {/* Two-column layout: Left - Content, Right - Photo */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Name Section */}
              <div>
                <h1
                  className="text-5xl md:text-6xl font-bold mb-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  I'm <span className="text-primary">GUNTAKA PUNEETH</span> REDDY
                </h1>
                <p
                  className="text-xl md:text-2xl text-primary font-semibold uppercase tracking-wide"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  FULL STACK DEVELOPER / SOFTWARE ENGINEER
                </p>
              </div>

              {/* Personal Information Section */}
              <div className="space-y-6 pt-4">
                <div className="border-l-4 border-primary pl-4 space-y-4">
                  <InfoRow
                    icon={User}
                    label="Full Name"
                    value="GUNTAKA PUNEETH REDDY"
                  />
                  <InfoRow
                    icon={Calendar}
                    label="Date of Birth"
                    value="20 May 2005"
                  />
                  <InfoRow
                    icon={User}
                    label="Gender"
                    value="Male"
                  />
                  <InfoRow
                    icon={Droplets}
                    label="Blood Group"
                    value="O Positive (O+ve)"
                  />
                </div>

                {/* Contact Information */}
                <div className="border-l-4 border-primary pl-4 space-y-4 pt-2">
                  <InfoRow
                    icon={Phone}
                    label="Mobile"
                    value="(+91) 83099 35755"
                    href="tel:+918309935755"
                  />
                  <InfoRow
                    icon={Mail}
                    label="Email"
                    value="puneethxdeveloper.oncode@gmail.com"
                    href="mailto:puneethxdeveloper.oncode@gmail.com"
                  />
                </div>

                {/* Personal Interests */}
                <div className="border-l-4 border-primary pl-4 space-y-4 pt-2">
                  <InfoRow
                    icon={Palette}
                    label="Hobbies"
                    value="Drawing, exploring creative ideas"
                  />
                  <InfoRow
                    icon={Car}
                    label="Passions"
                    value="Loves to drive and explore new places"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right Column - Photo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center md:justify-end"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-30" />
                <img
                  src={profilePhoto}
                  alt="GUNTAKA PUNEETH REDDY"
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

interface InfoRowProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}

const InfoRow = ({ icon: Icon, label, value, href }: InfoRowProps) => {
  const content = (
    <div className="flex items-start gap-4">
      <div className="mt-1">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div className="flex-1">
        <p className="text-sm uppercase tracking-wider text-muted-foreground mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
          {label}
        </p>
        {href ? (
          <a
            href={href}
            className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {value}
          </a>
        ) : (
          <p className="text-lg font-semibold text-foreground" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {value}
          </p>
        )}
      </div>
    </div>
  );

  return content;
};


