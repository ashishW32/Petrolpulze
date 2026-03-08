import { Bell, ChevronDown, Fuel, Search, Settings } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import { cn } from '../../utils/cn';

const links = [
  { label: 'About', to: '/about' },
  { label: 'Map', to: '/map' },
  { label: 'Find Fuel', to: '/find-fuel' },
  { label: 'Login', to: '/auth' },
];

export function Navbar() {
  const location = useLocation();
  const showSearch = ['/map', '/find-fuel', '/station'].some((path) => location.pathname.startsWith(path));

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="section-shell flex h-[76px] items-center gap-6">
        <NavLink to="/about" className="flex items-center gap-3">
          <div className="rounded-xl bg-primary p-2.5 text-cyan-300 shadow-[0_10px_20px_-12px_rgba(15,23,42,0.8)]">
            <Fuel size={17} />
          </div>
          <span className="text-[2rem] font-black tracking-tight">PetrolPulze</span>
        </NavLink>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  'rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:text-cyan-600',
                  isActive && 'bg-cyan-50 text-cyan-700',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {showSearch && (
          <label className="ml-auto hidden h-11 flex-1 items-center gap-2 rounded-xl border border-slate-200 bg-slate-100/80 px-4 lg:flex">
            <Search size={16} className="text-slate-400" />
            <input className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400" placeholder="Search highway, city or station..." />
          </label>
        )}

        <div className="ml-auto flex items-center gap-2 text-slate-500 lg:ml-0">
          <button className="rounded-lg p-2 transition hover:bg-slate-100 hover:text-slate-700"><Bell size={18} /></button>
          <button className="rounded-lg p-2 transition hover:bg-slate-100 hover:text-slate-700"><Settings size={18} /></button>
          <button className="ml-1 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-2 py-1.5 transition hover:border-slate-300">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-200 to-amber-300" />
            <ChevronDown size={14} className="text-slate-400" />
          </button>
        </div>
      </div>
    </header>
  );
}
