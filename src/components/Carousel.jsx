import { useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sampleItems = [
  {
    id: 'm1',
    title: 'Guardians of the Galaxy Vol. 3',
    thumb: 'https://image.tmdb.org/t/p/w780/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg',
    tag: 'Movie',
  },
  {
    id: 'm2',
    title: 'Loki',
    thumb: 'https://image.tmdb.org/t/p/w780/voHUmluYmKyleFkTu3lOXQG702u.jpg',
    tag: 'Series',
  },
  {
    id: 'm3',
    title: 'WandaVision',
    thumb: 'https://image.tmdb.org/t/p/w780/glKDfE6btIRcVB5zrjspRIs4r52.jpg',
    tag: 'Series',
  },
  {
    id: 'm4',
    title: 'Avengers: Endgame',
    thumb: 'https://image.tmdb.org/t/p/w780/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
    tag: 'Movie',
  },
  {
    id: 'm5',
    title: 'The Mandalorian',
    thumb: 'https://image.tmdb.org/t/p/w780/eU1i6eHXlzMOlEq0ku1Rzq7Y4wA.jpg',
    tag: 'Series',
  },
  {
    id: 'm6',
    title: 'Black Panther: Wakanda Forever',
    thumb: 'https://image.tmdb.org/t/p/w780/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
    tag: 'Movie',
  },
];

export default function Carousel({ title, filter = '' }) {
  const [hovered, setHovered] = useState(null);
  const list = useMemo(() =>
    sampleItems.filter(i => i.title.toLowerCase().includes(filter.toLowerCase())),
  [filter]);

  const scrollRef = useRef(null);
  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.9;
    el.scrollTo({ left: el.scrollLeft + (dir === 'left' ? -amount : amount), behavior: 'smooth' });
  };

  return (
    <section className="mt-8">
      <div className="flex items-end justify-between mb-3">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <div className="hidden sm:flex gap-2">
          <button onClick={() => scroll('left')} className="px-2 py-1 rounded bg-white/10 text-white hover:bg-white/20">◄</button>
          <button onClick={() => scroll('right')} className="px-2 py-1 rounded bg-white/10 text-white hover:bg-white/20">►</button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2"
      >
        {list.map(item => (
          <motion.div
            key={item.id}
            onHoverStart={() => setHovered(item.id)}
            onHoverEnd={() => setHovered(null)}
            whileHover={{ y: -6 }}
            className="relative min-w-[240px] sm:min-w-[280px] snap-start"
          >
            <img
              src={item.thumb}
              alt={item.title}
              className="h-40 sm:h-48 w-full object-cover rounded-lg shadow-xl"
              loading="lazy"
            />
            <AnimatePresence>
              {hovered === item.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-black/50 rounded-lg p-3 flex flex-col justify-end"
                >
                  <div className="text-white">
                    <span className="text-xs px-2 py-0.5 rounded bg-white/20 mr-2">{item.tag}</span>
                    <p className="font-semibold mt-1">{item.title}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
