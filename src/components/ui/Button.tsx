import { ButtonHTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const variantStyles: Record<Variant, string> = {
  primary: 'bg-primary text-white hover:bg-primary/90 shadow-premium',
  secondary: 'bg-accentCyan text-white hover:bg-cyan-500',
  ghost: 'border border-slate-300 bg-white text-textPrimary hover:bg-slate-50',
  danger: 'border border-red-200 bg-white text-danger hover:bg-red-50',
};

export function Button({ variant = 'primary', className, ...props }: Props) {
  return <button className={cn('rounded-xl px-5 py-3 text-sm font-semibold transition-all', variantStyles[variant], className)} {...props} />;
}
