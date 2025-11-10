import { NavLink } from "./NavLink";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const Navigation = () => {
  const navItems = [
    { label: "Publications", path: "/publications" },
    { label: "Book Chapters", path: "/book-chapters" },
    { label: "Projects", path: "/projects" },
    { label: "Experience", path: "/experience" },
    { label: "Achievements", path: "/achievements" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-6 right-6 z-50 flex items-center gap-6"
    >
      {navItems.map((item, index) => (
        <motion.div
          key={item.path}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <NavLink
            to={item.path}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 hover:glow-text relative group"
            activeClassName="text-primary glow-text"
          >
            {item.label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
          </NavLink>
        </motion.div>
      ))}
      <motion.a
        href="https://www.linkedin.com/in/dhanush-ishwar-a07a35254/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 hover:glow-text flex items-center gap-1 relative group"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: navItems.length * 0.1 }}
      >
        LinkedIn
        <ExternalLink className="w-3 h-3" />
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
      </motion.a>
    </motion.nav>
  );
};

export default Navigation;
