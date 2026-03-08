import { Link } from 'react-router-dom';
import { PageTransition } from '../components/animation/PageTransition';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { stations } from '../data/stations';

export function FindFuelPage() {
  return (
    <PageTransition>
      <main>
        <section className="border-b border-slate-200 bg-slate-50 py-20">
          <div className="section-shell text-center">
            <h1 className="text-5xl font-black tracking-tight lg:text-6xl">Find Fuel Near You</h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-500">
              Search nearby stations by fuel type, distance, and real-time availability on Indian highways.
            </p>
            <div className="surface-card mt-10 grid gap-2 p-2 text-left lg:grid-cols-[2fr,1fr,1fr,1fr,auto]">
              <input className="rounded-xl border border-transparent bg-slate-50 px-4 py-3 text-sm placeholder:text-slate-400 focus:border-slate-200 focus:bg-white focus:outline-none" placeholder="Enter highway name or city (e.g. NH48, Pune)" />
              <select className="rounded-xl border border-transparent bg-slate-50 px-4 py-3 text-sm text-slate-700 focus:border-slate-200 focus:bg-white focus:outline-none"><option>Fuel Type</option></select>
              <select className="rounded-xl border border-transparent bg-slate-50 px-4 py-3 text-sm text-slate-700 focus:border-slate-200 focus:bg-white focus:outline-none"><option>Status</option></select>
              <select className="rounded-xl border border-transparent bg-slate-50 px-4 py-3 text-sm text-slate-700 focus:border-slate-200 focus:bg-white focus:outline-none"><option>10 km</option></select>
              <Button variant="secondary" className="h-full min-w-[170px]">Search Stations</Button>
            </div>
          </div>
        </section>

        <section className="section-shell grid gap-6 py-14 lg:grid-cols-[2fr,1fr]">
          <div>
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl font-black lg:text-4xl">12 stations found near NH48</h2>
                <p className="text-slate-500">Sorted by recommended availability</p>
              </div>
              <div className="flex gap-2">
                <button className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">List</button>
                <button className="rounded-lg bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">Map</button>
              </div>
            </div>

            <div className="space-y-4">
              {stations.slice(0, 4).map((station) => (
                <article key={station.id} className="surface-card p-5 transition hover:-translate-y-0.5 hover:border-slate-300">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-black text-slate-900">{station.name}</h3>
                      <p className="mt-1 text-slate-500">{station.address}</p>
                    </div>
                    <Badge status={station.status}>{station.status}</Badge>
                  </div>
                  <div className="mt-3 flex gap-4 text-sm text-slate-600">
                    <span>{station.distance}</span>
                    <span>{station.travelTime}</span>
                    <span>⭐ {station.rating}</span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {station.tags.map((t) => (
                      <span key={t} className="rounded bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-600">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-3">
                    <Button variant="ghost">Open in Map</Button>
                    <Link to={`/station/${station.id}`}>
                      <Button>View Details</Button>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="surface-card p-4">
            <div className="mb-3 flex justify-between">
              <h3 className="text-xl font-bold">Live Traffic View</h3>
              <span className="text-sm font-semibold text-cyan-600">Full Map</span>
            </div>
            <div className="route-grid h-[560px] rounded-xl bg-slate-100 bg-route-grid" />
            <div className="mt-3 rounded-xl bg-primary p-3 text-sm text-white">
              Closest fuel station: 1.8km • Bharat Petroleum Premium
            </div>
          </aside>
        </section>
      </main>
    </PageTransition>
  );
}
