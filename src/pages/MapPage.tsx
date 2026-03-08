import { Layers, LocateFixed, Minus, Plus } from 'lucide-react';
import { stations } from '../data/stations';
import { StationCard } from '../components/StationCard';
import { PageTransition } from '../components/animation/PageTransition';

export function MapPage() {
  return (
    <PageTransition>
      <main className="mx-auto grid max-w-[1500px] grid-cols-12 gap-0 border-x border-slate-200 bg-white">
        <aside className="col-span-4 border-r border-slate-200 p-6">
          <div className="mb-4 flex items-center justify-between"><h2 className="text-4xl font-black">Nearby Fuel Stations</h2><span className="rounded-lg bg-slate-100 px-3 py-1 text-sm">{stations.length} found</span></div>
          <div className="mb-5 flex flex-wrap gap-2">{['Petrol', 'Diesel', 'EV Charging', 'CNG'].map((f, i) => <button key={f} className={`rounded-full px-4 py-2 text-sm font-semibold ${i === 0 ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600'}`}>{f}</button>)}</div>
          <div className="space-y-4 overflow-y-auto pr-1" style={{ maxHeight: 'calc(100vh - 220px)' }}>{stations.slice(0, 4).map((station) => <StationCard key={station.id} station={station} />)}</div>
        </aside>
        <section className="relative col-span-8 min-h-[calc(100vh-78px)] overflow-hidden bg-slate-100">
          <div className="absolute inset-0 route-grid bg-route-grid opacity-50" />
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 800" fill="none"><path d="M80 580 C220 420, 380 560, 530 460 C640 390, 740 520, 920 430" stroke="#06B6D4" strokeWidth="8" strokeDasharray="12 10"/><circle cx="300" cy="250" r="13" fill="#22C55E"/><circle cx="430" cy="390" r="13" fill="#F59E0B"/><circle cx="710" cy="300" r="13" fill="#06B6D4"/><circle cx="820" cy="510" r="13" fill="#EF4444"/></svg>
          <div className="absolute right-6 top-6 rounded-2xl border border-slate-200 bg-white/90 p-5 backdrop-blur"><h4 className="mb-3 text-xs font-bold uppercase text-slate-500">Availability Legend</h4><ul className="space-y-2 text-sm"><li>🟢 Full / Available</li><li>🟠 Limited Stock</li><li>🔴 Out of Stock</li><li>🔵 EV Station</li></ul></div>
          <div className="absolute bottom-6 left-12 w-[420px] rounded-3xl border border-slate-200 bg-white p-6 shadow-premium"><p className="text-xs font-bold uppercase text-green-600">Selected Station</p><h3 className="mt-2 text-3xl font-black">Shell NH44 Express</h3><div className="mt-4 flex gap-8 text-sm"><div><p className="text-slate-500">ETA</p><p className="font-bold">8 mins</p></div><div><p className="text-slate-500">Distance</p><p className="font-bold">2.4 km</p></div></div><button className="mt-4 w-full rounded-xl bg-primary px-4 py-3 font-semibold text-white">Start Route</button></div>
          <div className="absolute bottom-8 right-8 flex flex-col gap-3">{[LocateFixed, Plus, Minus, Layers].map((Icon, idx) => <button key={idx} className="rounded-xl border border-slate-200 bg-white p-3"><Icon size={20} /></button>)}</div>
        </section>
      </main>
    </PageTransition>
  );
}
