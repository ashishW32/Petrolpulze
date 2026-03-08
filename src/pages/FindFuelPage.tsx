import { Link } from 'react-router-dom';
import { stations } from '../data/stations';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { PageTransition } from '../components/animation/PageTransition';

export function FindFuelPage() {
  return (
    <PageTransition>
      <main>
        <section className="border-b border-slate-200 bg-slate-50 py-20">
          <div className="mx-auto max-w-[1320px] px-6 text-center">
            <h1 className="text-6xl font-black">Find Fuel Near You</h1>
            <p className="mx-auto mt-4 max-w-3xl text-xl text-slate-500">Search by fuel type, distance, and live station availability on Indian highways.</p>
            <div className="mt-10 grid grid-cols-5 gap-2 rounded-2xl border border-slate-200 bg-white p-2 text-left">
              <input className="col-span-2 rounded-xl bg-slate-50 px-4 py-3" placeholder="Enter highway name or city (e.g. NH48, Pune)" />
              <select className="rounded-xl bg-slate-50 px-4 py-3"><option>Fuel Type</option></select>
              <select className="rounded-xl bg-slate-50 px-4 py-3"><option>Status</option></select>
              <Button variant="secondary">Search Stations</Button>
            </div>
          </div>
        </section>
        <section className="mx-auto grid max-w-[1320px] gap-6 px-6 py-14 lg:grid-cols-[2fr,1fr]">
          <div>
            <div className="mb-6 flex items-end justify-between"><div><h2 className="text-4xl font-black">12 stations found near NH48</h2><p className="text-slate-500">Sorted by recommended availability</p></div><div className="flex gap-2"><button className="rounded-lg bg-white px-4 py-2">List</button><button className="rounded-lg bg-slate-100 px-4 py-2">Map</button></div></div>
            <div className="space-y-4">
              {stations.slice(0, 4).map((station) => (
                <article key={station.id} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="flex items-start justify-between"><div><h3 className="text-3xl font-black">{station.name}</h3><p className="text-slate-500">{station.address}</p></div><Badge status={station.status}>{station.status}</Badge></div>
                  <div className="mt-3 flex gap-4 text-sm text-slate-600"><span>{station.distance}</span><span>{station.travelTime}</span><span>⭐ {station.rating}</span></div>
                  <div className="mt-3 flex gap-2">{station.tags.map((t) => <span key={t} className="rounded bg-slate-100 px-2 py-1 text-xs">{t}</span>)}</div>
                  <div className="mt-4 flex gap-3"><Button variant="ghost">Open in Map</Button><Link to={`/station/${station.id}`}><Button>View Details</Button></Link></div>
                </article>
              ))}
            </div>
          </div>
          <aside className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="mb-3 flex justify-between"><h3 className="text-xl font-bold">Live Traffic View</h3><span className="text-cyan-600">Full Map</span></div>
            <div className="route-grid h-[560px] rounded-xl bg-slate-100 bg-route-grid" />
            <div className="mt-3 rounded-xl bg-primary p-3 text-white">Closest fuel station: 1.8km • Bharat Petroleum Premium</div>
          </aside>
        </section>
      </main>
    </PageTransition>
  );
}
