import { Search, User } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar({ onSearch }) {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md/50 bg-gradient-to-b from-black/60 to-transparent"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-md" />
          <span className="text-white font-semibold tracking-wide">Stream+</span>
        </div>

        <div className="hidden md:flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5 border border-white/10">
          <Search className="w-4 h-4 text-white/70" />
          <input
            onChange={(e) => onSearch?.(e.target.value)}
            type="text"
            placeholder="Search movies, shows..."
            className="bg-transparent outline-none text-sm text-white placeholder:text-white/60 w-64"
          />
        </div>

        <button className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
          <User className="w-5 h-5" />
          <span className="hidden sm:inline text-sm">Profile</span>
        </button>
      </div>
    </motion.header>
  );
}
