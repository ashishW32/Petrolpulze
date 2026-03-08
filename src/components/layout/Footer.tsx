import { Fuel } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-[1320px] gap-8 px-6 py-12 lg:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2 font-bold"><Fuel size={18} className="text-cyan-500" /> PetrolPulze</div>
          <p className="text-sm text-slate-500">Real-Time Fuel Intelligence for Smarter Highway Travel.</p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-400">Platform</h4>
          <ul className="space-y-2 text-sm text-slate-600"><li>Nearby Stations</li><li>Fuel Prices</li><li>Route Planner</li></ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-400">Company</h4>
          <ul className="space-y-2 text-sm text-slate-600"><li>About Us</li><li>Partnerships</li><li>Contact</li></ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-400">Legal</h4>
          <ul className="space-y-2 text-sm text-slate-600"><li>Privacy Policy</li><li>Terms of Service</li><li>Highway Assistance</li></ul>
        </div>
      </div>
    </footer>
  );
}
