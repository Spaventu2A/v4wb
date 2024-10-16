import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#001F54] text-[#FEFCFB] py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center space-x-4 mb-4">
          <Link href="#" className="hover:text-[#1282A2] transition-colors">Accueil</Link>
          <Link href="#" className="hover:text-[#1282A2] transition-colors">Contact</Link>
          <Link href="#" className="hover:text-[#1282A2] transition-colors">Politique de confidentialité</Link>
          <Link href="#" className="hover:text-[#1282A2] transition-colors">Mentions légales</Link>
        </div>
        <div className="text-center">
          <p>&copy; 2023 AI-workbook. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}