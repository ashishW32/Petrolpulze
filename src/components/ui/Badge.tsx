import { cn } from '../../utils/cn';

type Status = 'open' | 'low' | 'out' | 'ev';

const statusMap: Record<Status, string> = {
  open: 'bg-green-100 text-green-700',
  low: 'bg-amber-100 text-amber-700',
  out: 'bg-red-100 text-red-700',
  ev: 'bg-cyan-100 text-cyan-700',
};

export function Badge({ status, children, className }: { status: Status; children: string; className?: string }) {
  return <span className={cn('rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide', statusMap[status], className)}>{children}</span>;
}
