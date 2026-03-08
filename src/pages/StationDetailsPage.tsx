import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Footer } from '../components/layout/Footer';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { stations } from '../data/stations';

export function StationDetailsPage() {
  const { id } = useParams();
  const station = useMemo(() => stations.find((s) => s.id === id) ?? stations[0], [id]);
  const similar = stations.filter((s) => s.id !== station.id).slice(0, 3);

  return (
    <main>
      <section className="section-shell py-10">
        <header className="mb-8 flex flex-wrap items-start justify-between gap-6">
          <div>
            <h1 className="text-4xl font-black leading-tight lg:text-6xl">{station.name}</h1>
            <p className="mt-2 text-slate-500">{station.address} • ⭐ {station.rating} (1,240 Reviews)</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Badge status={station.status}>Open - High Stock</Badge>
            <Button variant="secondary">Get Directions</Button>
            <Button variant="ghost">Save Station</Button>
            <Button variant="danger">Report Issue</Button>
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
          <div>
            <h2 className="mb-4 text-3xl font-black lg:text-4xl">Fuel Availability</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {station.fuels.map((fuel) => (
                <article key={fuel.type} className="surface-card p-5">
                  <p className="text-xs uppercase tracking-[0.14em] text-slate-400">{fuel.label ?? 'Standard'}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <h3 className="text-2xl font-black lg:text-3xl">{fuel.type}</h3>
                    <span className="text-xs uppercase text-slate-500">{fuel.status}</span>
                  </div>
                  <p className="mt-4 text-4xl font-black lg:text-5xl">{fuel.price}</p>
                  <div className="mt-4 h-2 rounded-full bg-slate-100">
                    <div className="h-2 rounded-full bg-cyan-500" style={{ width: `${fuel.stock}%` }} />
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <article className="surface-card p-5">
                <h3 className="text-2xl font-black">Available Services</h3>
                <ul className="mt-4 grid grid-cols-2 gap-2 text-slate-600">
                  {station.services.map((service) => (
                    <li key={service}>• {service}</li>
                  ))}
                </ul>
              </article>
              <article className="surface-card p-5">
                <h3 className="text-2xl font-black">Opening Hours</h3>
                <p className="mt-3 text-slate-600">{station.hours}</p>
                <p className="mt-2 font-semibold text-slate-800">{station.phone}</p>
              </article>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="surface-card p-4">
              <div className="route-grid h-52 rounded-xl bg-slate-100 bg-route-grid" />
              <p className="mt-3 text-slate-600">Your Distance: {station.distance} • {station.travelTime}</p>
            </div>
            <div className="rounded-2xl bg-primary p-5 text-white shadow-[0_16px_36px_-24px_rgba(15,23,42,0.85)]">
              <h3 className="text-2xl font-black">Station Summary</h3>
              <ul className="mt-3 space-y-2 text-slate-300">
                <li>Heavy vehicle support available</li>
                <li>High-speed EV charging active</li>
                <li>CNG under maintenance</li>
              </ul>
              <Button variant="ghost" className="mt-4 w-full border-slate-600 bg-slate-800 text-white hover:bg-slate-700">
                View Full History
              </Button>
            </div>
            <div className="surface-card p-4 text-slate-600">
              Found incorrect info? <button className="font-semibold text-cyan-600">Edit Details</button>
            </div>
          </aside>
        </div>

        <section className="mt-10">
          <h2 className="mb-4 text-3xl font-black lg:text-4xl">Similar Nearby Stations</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {similar.map((s) => (
              <Link key={s.id} to={`/station/${s.id}`} className="surface-card block p-4 transition hover:-translate-y-0.5 hover:border-slate-300">
                <h3 className="text-xl font-black">{s.name}</h3>
                <p className="text-slate-500">{s.address}</p>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="chip">{s.tags[0]}</span>
                  <strong>{s.fuels[0].price}</strong>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
}
