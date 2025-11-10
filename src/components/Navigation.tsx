import { NavLink } from "./NavLink";
import { motion } from "framer-motion";

const Navigation = () => {
  const navItems = [
    { label: "Publications", path: "/publications" },
    { label: "Book Chapters", path: "/book-chapters" },
    { label: "Projects", path: "/projects" },
    { label: "Experience", path: "/experience" },
    { label: "Achievements", path: "/achievements" },
    { label: "LinkedIn", path: "/linkedin" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
      role="navigation"
      aria-label="Primary"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-4 mb-2 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl supports-[backdrop-filter]:bg-black/30 shadow-[0_0_25px_-5px_rgba(56,189,248,0.35)] ring-1 ring-primary/20 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(circle_at_center,white,transparent)]">
            <div className="absolute -inset-px animate-pulse bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.25),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(167,139,250,0.25),transparent_60%)]" />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-3 py-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
              >
                <NavLink
                  to={item.path}
                  className="relative inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold text-slate-300 tracking-wide transition-all border border-white/10 bg-gradient-to-br from-slate-900/60 via-slate-800/40 to-slate-900/60 hover:from-slate-800/70 hover:to-slate-900/70 hover:text-cyan-300 group shadow-[0_0_0_0_rgba(56,189,248,0.0)] hover:shadow-[0_0_12px_2px_rgba(56,189,248,0.35)] backdrop-blur"
                  activeClassName="text-cyan-300 border-cyan-400/40 shadow-[0_0_14px_3px_rgba(56,189,248,0.45)]"
                >
                  <span className="relative z-10">
                    {item.label}
                  </span>
                  <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[conic-gradient(from_0deg,rgba(56,189,248,0.15),rgba(167,139,250,0.15),rgba(52,211,153,0.15),rgba(56,189,248,0.15))] animate-spin-slow" />
                  <span className="pointer-events-none absolute -inset-px rounded-full ring-1 ring-cyan-400/0 group-hover:ring-cyan-400/50 transition-all duration-300" />
                </NavLink>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
