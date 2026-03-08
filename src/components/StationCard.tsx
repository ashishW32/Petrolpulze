import { MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Station } from '../types/station';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';

export function StationCard({ station }: { station: Station }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-2xl font-bold leading-tight">{station.name}</h3>
          <p className="mt-1 text-sm text-slate-500">{station.address}</p>
        </div>
        <Badge status={station.status}>{station.status === 'open' ? 'Open' : station.status === 'low' ? 'Low Fuel' : station.status === 'out' ? 'Out of Stock' : 'EV Station'}</Badge>
      </div>
      <div className="mb-4 flex gap-5 text-sm text-slate-600">
        <span className="inline-flex items-center gap-1"><MapPin size={14} /> {station.distance}</span>
        <span>{station.travelTime}</span>
        <span className="inline-flex items-center gap-1"><Star size={14} className="text-amber-500" /> {station.rating}</span>
      </div>
      <div className="mb-4 flex flex-wrap gap-2">{station.tags.map((tag) => <span key={tag} className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">{tag}</span>)}</div>
      <div className="h-2 rounded-full bg-slate-100"><div className="h-2 rounded-full bg-green-500" style={{ width: `${station.availability}%` }} /></div>
      <div className="mt-4 flex gap-2">
        <Button variant="primary" className="flex-1">Route</Button>
        <Link to={`/station/${station.id}`} className="flex-1"><Button variant="ghost" className="w-full">Details</Button></Link>
      </div>
    </article>
  );
}
