import { ButtonHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const variantStyles: Record<Variant, string> = {
  primary:
    'bg-primary text-white shadow-[0_12px_26px_-14px_rgba(15,23,42,0.65)] hover:-translate-y-0.5 hover:bg-slate-900 active:translate-y-0',
  secondary:
    'bg-accentCyan text-white shadow-[0_12px_24px_-14px_rgba(6,182,212,0.65)] hover:-translate-y-0.5 hover:bg-cyan-500 active:translate-y-0',
  ghost: 'border border-slate-300 bg-white text-textPrimary hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50 active:translate-y-0',
  danger: 'border border-red-200 bg-white text-danger hover:-translate-y-0.5 hover:bg-red-50 active:translate-y-0',
};

export function Button({ variant = 'primary', className, ...props }: Props) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/50 disabled:cursor-not-allowed disabled:opacity-60',
        variantStyles[variant],
        className,
      )}
      {...props}
    />
  );
}
