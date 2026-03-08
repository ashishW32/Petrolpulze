import { ScrollReveal } from '../animation/ScrollReveal';

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <ScrollReveal className={center ? 'text-center' : ''}>
      {eyebrow && (
        <p className={`text-xs font-bold uppercase tracking-[0.22em] ${light ? 'text-cyan-300' : 'text-cyan-600'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`mt-3 text-4xl font-black leading-tight lg:text-5xl ${light ? 'text-white' : 'text-textPrimary'}`}>{title}</h2>
      {description && <p className={`mt-4 max-w-2xl text-base ${light ? 'text-slate-300' : 'text-slate-600'} ${center ? 'mx-auto' : ''}`}>{description}</p>}
    </ScrollReveal>
  );
}
