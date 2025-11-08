import { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import CategoryTabs from './components/CategoryTabs';

function App() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const subtitle = useMemo(() => {
    if (!search) return 'Trending now on Stream+';
    return `Results for "${search}"`;
  }, [search]);

  return (
    <div className="min-h-screen bg-black font-inter">
      <Navbar onSearch={setSearch} />
      <main className="pt-14">
        <Hero />
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
          <CategoryTabs onChange={setCategory} />

          <div className="mt-8">
            <h3 className="text-white/80 text-sm uppercase tracking-wider">{subtitle}</h3>
            <Carousel title={category === 'All' ? 'Featured' : category} filter={search} />
            <Carousel title="Top Picks for You" filter={search} />
            <Carousel title="New & Noteworthy" filter={search} />
          </div>
        </section>

        <footer className="mt-16 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-white/60 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Stream+. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Help</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
