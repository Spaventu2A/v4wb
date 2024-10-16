import { Menu } from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar({ toggleSidebar }: { toggleSidebar: () => void }) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#001F54] text-[#FEFCFB] p-4 flex items-center justify-between z-50">
      <button 
        onClick={toggleSidebar} 
        className="text-[#FEFCFB] transition-transform duration-300 ease-in-out hover:scale-110 focus:outline-none"
      >
        <Menu size={24} />
      </button>
      <h1 className="text-2xl font-bold">Tableau de bord du professeur</h1>
      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none group">
          <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full transition-shadow duration-300 ease-in-out group-hover:shadow-[0_0_0_3px_rgba(255,255,255,0.6)]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profm1-fmksMRPBpeWxYxWPh0581xbsJtpdFQ.png"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-white text-[#001F54]">
          <DropdownMenuItem className="focus:bg-[#E6F3FF] focus:text-[#001F54] cursor-pointer group">
            <span className="group-hover:border-b-2 group-hover:border-[#001F54] pb-1 transition-all duration-300 ease-in-out">
              Profil
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-[#E6F3FF] focus:text-[#001F54] cursor-pointer group">
            <span className="group-hover:border-b-2 group-hover:border-[#001F54] pb-1 transition-all duration-300 ease-in-out">
              Réglages
            </span>
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-[#E6F3FF] focus:text-red-600 cursor-pointer group">
            <span className="text-red-600 group-hover:border-b-2 group-hover:border-red-600 pb-1 transition-all duration-300 ease-in-out">
              Déconnexion
            </span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}