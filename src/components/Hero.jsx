import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden bg-gradient-to-b from-[#0b0f1a] via-[#0b0f1a] to-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zBXGLjse1OwBSbps/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-black/20 to-black/80" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-white max-w-xl"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Dive into Marvels & Magic
          </h1>
          <p className="mt-3 text-white/80 text-lg">
            Superhero worlds, timeless classics, and blockbuster sagas. Stream the latest movies and TV shows with buttery-smooth motion.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <button className="px-5 py-2.5 rounded-md bg-white text-black font-medium hover:bg-white/90 transition shadow-lg">
              Start Watching
            </button>
            <button className="px-5 py-2.5 rounded-md border border-white/20 text-white font-medium hover:bg-white/10 transition">
              Explore Library
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
