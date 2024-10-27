import { motion, AnimatePresence } from "framer-motion";
import { X, LayoutDashboard, BookOpen as Course, Clock, ClipboardList, Layers, Briefcase } from "lucide-react";
import { useEffect, useRef } from "react";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as HTMLElement;
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(target) &&
        isOpen &&
        !target.closest('button[aria-label="Toggle sidebar"]')
      ) {
        toggleSidebar();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, toggleSidebar]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={sidebarRef}
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          exit={{ x: -300 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed left-0 top-16 bottom-0 w-64 bg-[#001F54] text-[#FEFCFB] p-4 shadow-lg z-40"
        >
          <button 
            onClick={toggleSidebar} 
            className="absolute top-4 right-4 text-[#FEFCFB]"
          >
            <X size={24} />
          </button>
          <nav className="mt-8">
            <ul className="space-y-4">
              <li>
                <a href="#" className="flex items-center space-x-2 text-lg hover:text-[#1282A2] transition-colors">
                  <LayoutDashboard size={20} />
                  <span>Dashboard</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 text-lg hover:text-[#1282A2] transition-colors">
                  <Course size={20} />
                  <span>Cours</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 text-lg hover:text-[#1282A2] transition-colors">
                  <Clock size={20} />
                  <span>Séances</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 text-lg hover:text-[#1282A2] transition-colors">
                  <ClipboardList size={20} />
                  <span>Évaluation</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 text-lg hover:text-[#1282A2] transition-colors">
                  <Layers size={20} />
                  <span>Séquences</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 text-lg hover:text-[#1282A2] transition-colors">
                  <Briefcase size={20} />
                  <span>Stages</span>
                </a>
              </li>
            </ul>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
