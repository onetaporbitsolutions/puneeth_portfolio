import { Link, NavLink } from "react-router-dom";
import { Button } from "./ui/button";

export const NavBar = () => {
  const baseLink = "px-4 py-2 rounded-full text-sm font-semibold transition-colors";
  const ghostLink = `${baseLink} text-muted-foreground hover:text-primary hover:bg-primary/10`;

  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-lg font-bold gradient-text" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Portfolio
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="/" className={ghostLink}>HOME</NavLink>
          <NavLink to="/about" className={ghostLink}>ABOUT</NavLink>
          <NavLink to="/education" className={ghostLink}>EDUCATION</NavLink>
          <NavLink to="/skills" className={ghostLink}>SKILLS</NavLink>
          <NavLink to="/projects" className={ghostLink}>PROJECTS</NavLink>
          <NavLink to="/achievements" className={ghostLink}>ACHIEVEMENTS</NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild className="rounded-full px-5">
            <Link to="/contact">CONTACT ME</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};


