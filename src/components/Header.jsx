import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navigation } from "../data/portfolio";

export function Header({ activeId }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="glass-panel fixed left-0 right-0 top-0 z-50 flex h-14 items-center justify-between px-4 lg:px-8"
    >
      {/* Brand */}
      <a href="#hero" className="flex items-center gap-3 no-underline">
        <span className="h-2.5 w-2.5 rounded-full bg-neon shadow-[0_0_18px_rgba(255,0,60,0.7)]" />
        <span className="font-display text-sm uppercase tracking-[0.35em] text-mist">
          Dwi Putra
        </span>
      </a>

      {/* Desktop nav */}
      <nav className="hidden items-center gap-1 md:flex">
        {navigation.map((item) => {
          const isActive = activeId === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.35em] transition ${
                isActive
                  ? "bg-neon/10 text-neon"
                  : "text-silver hover:bg-white/5 hover:text-mist"
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </nav>

      {/* Mobile hamburger */}
      <button
        type="button"
        aria-label="Toggle menu"
        onClick={() => setMobileOpen((v) => !v)}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/6 bg-white/0 text-silver transition hover:border-white/10 hover:bg-white/5 hover:text-mist md:hidden"
      >
        {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </button>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="glass-panel absolute left-0 right-0 top-14 flex flex-col gap-1 p-3 md:hidden"
          >
            {navigation.map((item) => {
              const isActive = activeId === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-xl px-4 py-3 text-xs uppercase tracking-[0.35em] transition ${
                    isActive
                      ? "bg-neon/10 text-neon"
                      : "text-silver hover:bg-white/5 hover:text-mist"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
