import { useState } from 'react';
import { motion } from 'framer-motion';

const tabs = ['All', 'Movies', 'Series', 'Originals'];

export default function CategoryTabs({ onChange }) {
  const [active, setActive] = useState('All');

  const handle = (tab) => {
    setActive(tab);
    onChange?.(tab);
  };

  return (
    <div className="mt-6">
      <div className="inline-flex bg-white/10 border border-white/10 rounded-full p-1">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => handle(t)}
            className={`relative px-4 py-1.5 text-sm rounded-full transition-colors ${
              active === t ? 'text-black' : 'text-white/80 hover:text-white'
            }`}
          >
            {active === t && (
              <motion.span
                layoutId="pill"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className="absolute inset-0 bg-white rounded-full z-0"
              />
            )}
            <span className="relative z-10">{t}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
