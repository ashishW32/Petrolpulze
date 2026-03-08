import { Layers, LocateFixed, Minus, Plus } from 'lucide-react';
import { PageTransition } from '../components/animation/PageTransition';
import { StationCard } from '../components/StationCard';
import { Button } from '../components/ui/Button';
import { stations } from '../data/stations';

export function MapPage() {
  return (
    <PageTransition>
      <main className="section-shell py-8">
        <div className="grid min-h-[calc(100vh-130px)] grid-cols-12 overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_26px_60px_-38px_rgba(15,23,42,0.45)]">
          <aside className="col-span-12 border-b border-slate-200/80 p-6 lg:col-span-4 lg:border-b-0 lg:border-r">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-3xl font-black">Nearby Fuel Stations</h2>
              <span className="rounded-lg bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600">{stations.length} found</span>
            </div>
            <div className="mb-4 flex flex-wrap gap-2">
              {['Petrol', 'Diesel', 'EV Charging', 'CNG'].map((f, i) => (
                <button key={f} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${i === 0 ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
                  {f}
                </button>
              ))}
            </div>
            <div className="mb-5 grid grid-cols-2 gap-2">
              <select className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
                <option>Availability: Open Now</option>
              </select>
              <select className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
                <option>Sort: Near Me</option>
              </select>
            </div>
            <div className="space-y-4 overflow-y-auto pr-1" style={{ maxHeight: 'calc(100vh - 290px)' }}>
              {stations.slice(0, 4).map((station) => (
                <StationCard key={station.id} station={station} />
              ))}
            </div>
          </aside>

          <section className="relative col-span-12 min-h-[700px] overflow-hidden bg-slate-100 lg:col-span-8">
            <div className="absolute inset-0 route-grid bg-route-grid opacity-45" />
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 800" fill="none">
              <path d="M80 580 C220 420, 380 560, 530 460 C640 390, 740 520, 920 430" stroke="#06B6D4" strokeWidth="8" strokeDasharray="12 10" />
              <circle cx="300" cy="250" r="13" fill="#22C55E" />
              <circle cx="430" cy="390" r="13" fill="#F59E0B" />
              <circle cx="710" cy="300" r="13" fill="#06B6D4" />
              <circle cx="820" cy="510" r="13" fill="#EF4444" />
            </svg>

            <div className="surface-card absolute right-6 top-6 p-5 backdrop-blur">
              <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Availability Legend</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>🟢 Full / Available</li>
                <li>🟠 Limited Stock</li>
                <li>🔴 Out of Stock</li>
                <li>🔵 EV Station</li>
              </ul>
            </div>

            <div className="surface-card absolute bottom-6 left-8 w-[420px] p-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-green-600">Selected Station</p>
              <h3 className="mt-2 text-3xl font-black">Shell NH44 Express</h3>
              <div className="mt-4 flex gap-8 text-sm">
                <div>
                  <p className="text-slate-500">ETA</p>
                  <p className="font-bold text-slate-900">8 mins</p>
                </div>
                <div>
                  <p className="text-slate-500">Distance</p>
                  <p className="font-bold text-slate-900">2.4 km</p>
                </div>
              </div>
              <Button className="mt-4 w-full">Start Route</Button>
            </div>

            <div className="absolute bottom-8 right-8 flex flex-col gap-3">
              {[LocateFixed, Plus, Minus, Layers].map((Icon, idx) => (
                <button key={idx} className="rounded-xl border border-slate-200 bg-white p-3 text-slate-700 shadow-sm transition hover:border-slate-300">
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </section>
        </div>
      </main>
    </PageTransition>
  );
}
