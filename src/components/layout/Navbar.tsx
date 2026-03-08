import { Bell, Fuel, Search, Settings } from 'lucide-react';
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
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1320px] items-center gap-6 px-6 py-4">
        <NavLink to="/about" className="flex items-center gap-3">
          <div className="rounded-lg bg-primary p-2 text-cyan-300"><Fuel size={18} /></div>
          <span className="text-3xl font-black tracking-tight">PetrolPulze</span>
        </NavLink>
        <nav className="flex items-center gap-2">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={({ isActive }) => cn('rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:text-cyan-600', isActive && 'bg-cyan-50 text-cyan-600')}>
              {link.label}
            </NavLink>
          ))}
        </nav>
        {showSearch && (
          <label className="ml-auto hidden flex-1 items-center gap-2 rounded-xl border border-slate-200 bg-slate-100 px-4 py-2 lg:flex">
            <Search size={18} className="text-slate-400" />
            <input className="w-full bg-transparent text-sm outline-none" placeholder="Search highway, city or station..." />
          </label>
        )}
        <div className="ml-auto flex items-center gap-4 text-slate-500 lg:ml-0">
          <Bell size={18} />
          <Settings size={18} />
          <div className="h-9 w-9 rounded-full bg-amber-200" />
        </div>
      </div>
    </header>
  );
}
