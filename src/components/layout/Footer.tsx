import { Fuel } from 'lucide-react';

export function Footer() {
  return (
    <footer className="mt-14 border-t border-slate-200/80 bg-white">
      <div className="section-shell grid gap-10 py-12 lg:grid-cols-[1.2fr,1fr,1fr,1fr]">
        <div>
          <div className="mb-3 flex items-center gap-2 text-lg font-bold">
            <Fuel size={18} className="text-cyan-500" /> PetrolPulze
          </div>
          <p className="max-w-xs text-sm leading-6 text-slate-500">
            Real-Time Fuel Intelligence for smarter long-distance mobility across India’s highways.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Platform</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>Nearby Stations</li>
            <li>Fuel Prices</li>
            <li>Route Planner</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Company</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>About Us</li>
            <li>Partnerships</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Legal</h4>
          <ul className="space-y-2 text-sm text-slate-600">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Highway Assistance</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200/70">
        <div className="section-shell flex items-center justify-between py-5 text-xs text-slate-400">
          <span>© 2026 PetrolPulze. All rights reserved.</span>
          <span>Built for connected highway travel intelligence.</span>
        </div>
      </div>
    </footer>
  );
}
