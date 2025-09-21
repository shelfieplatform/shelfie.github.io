import { Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-12 pb-24 border-t border-white/10">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p>&copy; 2024 FaveIt. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white/80"><Facebook className="w-6 h-6" /></a>
          <a href="#" className="hover:text-white/80"><Twitter className="w-6 h-6" /></a>
          <a href="#" className="hover:text-white/80"><Instagram className="w-6 h-6" /></a>
        </div>
      </div>
    </footer>
  )
}

