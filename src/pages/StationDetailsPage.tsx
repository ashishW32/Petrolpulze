import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { stations } from '../data/stations';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Footer } from '../components/layout/Footer';

export function StationDetailsPage() {
  const { id } = useParams();
  const station = useMemo(() => stations.find((s) => s.id === id) ?? stations[0], [id]);
  const similar = stations.filter((s) => s.id !== station.id).slice(0, 3);

  return (
    <main>
      <section className="mx-auto max-w-[1320px] px-6 py-10">
        <header className="mb-8 flex items-center justify-between gap-8"><div><h1 className="text-6xl font-black">{station.name}</h1><p className="mt-2 text-slate-500">{station.address} • ⭐ {station.rating} (1,240 Reviews)</p></div><div className="flex items-center gap-3"><Badge status={station.status}>Open - High Stock</Badge><Button variant="secondary">Get Directions</Button><Button variant="ghost">Save Station</Button><Button variant="danger">Report Issue</Button></div></header>
        <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
          <div>
            <h2 className="mb-4 text-4xl font-black">Fuel Availability</h2>
            <div className="grid gap-4 md:grid-cols-2">{station.fuels.map((fuel) => <article key={fuel.type} className="rounded-2xl border border-slate-200 bg-white p-5"><p className="text-xs uppercase tracking-wide text-slate-400">{fuel.label ?? 'Standard'}</p><div className="mt-2 flex items-center justify-between"><h3 className="text-3xl font-black">{fuel.type}</h3><span className="text-xs uppercase text-slate-500">{fuel.status}</span></div><p className="mt-4 text-5xl font-black">{fuel.price}</p><div className="mt-4 h-2 rounded-full bg-slate-100"><div className="h-2 rounded-full bg-cyan-500" style={{ width: `${fuel.stock}%` }} /></div></article>)}</div>
            <div className="mt-6 grid gap-4 md:grid-cols-2"><article className="rounded-2xl border border-slate-200 bg-white p-5"><h3 className="text-3xl font-black">Available Services</h3><ul className="mt-4 grid grid-cols-2 gap-2 text-slate-600">{station.services.map((service) => <li key={service}>• {service}</li>)}</ul></article><article className="rounded-2xl border border-slate-200 bg-white p-5"><h3 className="text-3xl font-black">Opening Hours</h3><p className="mt-3 text-slate-600">{station.hours}</p><p className="mt-2 font-semibold">{station.phone}</p></article></div>
          </div>
          <aside className="space-y-4"><div className="rounded-2xl border border-slate-200 bg-white p-4"><div className="route-grid h-52 rounded-xl bg-slate-100 bg-route-grid" /><p className="mt-3 text-slate-600">Your Distance: {station.distance} • {station.travelTime}</p></div><div className="rounded-2xl bg-primary p-5 text-white"><h3 className="text-3xl font-black">Station Summary</h3><ul className="mt-3 space-y-2 text-slate-300"><li>Heavy vehicle support available</li><li>High-speed EV charging active</li><li>CNG under maintenance</li></ul><Button variant="ghost" className="mt-4 w-full border-slate-600 bg-slate-800 text-white">View Full History</Button></div><div className="rounded-2xl border border-slate-200 bg-white p-4">Found incorrect info? <button className="font-semibold text-cyan-600">Edit Details</button></div></aside>
        </div>

        <section className="mt-10"><h2 className="mb-4 text-4xl font-black">Similar Nearby Stations</h2><div className="grid gap-4 md:grid-cols-3">{similar.map((s) => <Link key={s.id} to={`/station/${s.id}`} className="rounded-2xl border border-slate-200 bg-white p-4"><h3 className="text-2xl font-black">{s.name}</h3><p className="text-slate-500">{s.address}</p><div className="mt-4 flex justify-between text-sm"><span>{s.tags[0]}</span><strong>{s.fuels[0].price}</strong></div></Link>)}</div></section>
      </section>
      <Footer />
    </main>
  );
}
