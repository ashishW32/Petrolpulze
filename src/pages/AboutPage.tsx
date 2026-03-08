import { motion, useReducedMotion } from 'framer-motion';
import {
  Activity,
  ArrowRight,
  ChartBar,
  Compass,
  GaugeCircle,
  MapPinned,
  Milestone,
  Navigation,
  Route,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { FloatingCard } from '../components/animation/FloatingCard';
import { ScrollReveal } from '../components/animation/ScrollReveal';
import { StaggerContainer, staggerItem } from '../components/animation/StaggerContainer';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';

const timeline = [
  { icon: Navigation, title: 'Open PetrolPulze', copy: 'Launch the platform with real-time corridor intelligence.' },
  { icon: Route, title: 'Search your route', copy: 'Track highways, toll zones, and reliable station clusters.' },
  { icon: Activity, title: 'View station status', copy: 'See stock confidence, fuel mix, and live service updates.' },
  { icon: Compass, title: 'Check details', copy: 'Compare quality, ratings, amenities, and operating windows.' },
  { icon: Milestone, title: 'Drive without uncertainty', copy: 'Start your route with predictable fuel confidence.' },
];

const featureCards = [
  { title: 'Live Availability', icon: GaugeCircle, value: 92, text: 'Monitor active stock levels and station uptime by corridor.' },
  { title: 'Smart Filters', icon: Compass, value: 78, text: 'Refine by petrol, diesel, CNG, EV, and route-side preferences.' },
  { title: 'Route Price Predictor', icon: ChartBar, value: 64, text: 'Estimate total fuel spend and identify efficient refueling windows.' },
];

function AnimatedProgress({ value }: { value: number }) {
  const reduced = useReducedMotion();
  return (
    <div className="mt-4 h-2 rounded-full bg-slate-700/80">
      <motion.div
        className="h-2 rounded-full bg-cyan-400"
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={reduced ? { duration: 0 } : { duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}

export function AboutPage() {
  const reduced = useReducedMotion();

  return (
    <main>
      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50">
        <motion.div
          className="route-grid absolute inset-0 bg-route-grid opacity-40"
          animate={reduced ? undefined : { backgroundPosition: ['0px 0px', '72px 72px'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute right-10 top-12 h-64 w-64 rounded-full bg-green-400/20 blur-3xl" />
        <motion.svg
          viewBox="0 0 1400 600"
          className="pointer-events-none absolute inset-0 h-full w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <motion.path
            d="M80 430 C250 300, 430 430, 620 320 C780 230, 960 420, 1280 280"
            stroke="rgba(6,182,212,0.25)"
            strokeWidth="4"
            strokeDasharray="10 14"
            fill="none"
            animate={reduced ? undefined : { strokeDashoffset: [0, -240] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
          />
        </motion.svg>

        <div className="relative mx-auto grid max-w-[1320px] gap-10 px-6 py-24 lg:grid-cols-[1.2fr,0.8fr]">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
            className="max-w-4xl"
          >
            <motion.h1 variants={staggerItem} className="text-5xl font-black leading-[1.05] text-textPrimary lg:text-7xl">
              Never Run Out of Fuel on the <span className="bg-gradient-to-r from-accentCyan to-accentGreen bg-clip-text text-transparent">Highway Again</span>
            </motion.h1>
            <motion.p variants={staggerItem} className="mt-6 max-w-2xl text-lg text-slate-600">
              PetrolPulze combines real-time fuel availability with route intelligence to make highway travel safer, faster, and more predictable.
            </motion.p>
            <motion.div variants={staggerItem} className="mt-8 flex flex-wrap gap-3">
              <Link to="/map">
                <Button className="hover:-translate-y-0.5 hover:shadow-xl">Explore Map</Button>
              </Link>
              <Link to="/find-fuel">
                <Button variant="ghost" className="hover:-translate-y-0.5">Find Fuel</Button>
              </Link>
            </motion.div>
          </motion.div>

          <div className="grid gap-4 self-end lg:max-w-sm">
            <FloatingCard className="border-slate-200/50 bg-white/80" delay={0.1}>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Status</p>
              <p className="mt-2 text-xl font-bold text-slate-800">Diesel available</p>
            </FloatingCard>
            <FloatingCard className="border-slate-200/50 bg-white/80" delay={0.2}>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Closest Station</p>
              <p className="mt-2 text-xl font-bold text-slate-800">2.4 km from your route</p>
            </FloatingCard>
            <FloatingCard className="border-slate-200/50 bg-white/80" delay={0.3}>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Availability</p>
              <p className="mt-2 text-xl font-bold text-green-700">Open now</p>
            </FloatingCard>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1320px] items-center gap-10 px-6 py-24 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="The Challenge"
            title="Highway Fuel Anxiety is Real"
            description="Long-distance travelers in India lose valuable time to uncertainty, detours, and manual checks when station visibility is incomplete."
          />
          <StaggerContainer className="mt-8 grid gap-4 sm:grid-cols-2" staggerChildren={0.12}>
            {[
              { value: '15%', label: 'Unnecessary detours' },
              { value: '45m', label: 'Average uncertainty delay' },
              { value: '31%', label: 'Late-night route re-planning' },
            ].map((item) => (
              <motion.div key={item.label} variants={staggerItem} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-4xl font-black text-textPrimary">{item.value}</p>
                <p className="mt-2 text-sm text-slate-500">{item.label}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>

        <ScrollReveal x={34} className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-8 text-white shadow-premium">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Live Scenario</p>
          <h3 className="mt-3 text-3xl font-black">Route confidence monitor</h3>
          <p className="mt-3 text-slate-300">Predict station risk levels ahead of toll clusters and identify the safest fueling window before demand spikes.</p>
          <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
            <div className="mb-3 flex items-center justify-between text-sm">
              <span>Fuel certainty index</span>
              <span className="font-semibold text-cyan-300">86%</span>
            </div>
            <div className="h-2 rounded-full bg-white/10">
              <motion.div
                className="h-2 rounded-full bg-cyan-400"
                initial={{ width: 0 }}
                whileInView={{ width: '86%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="bg-primary py-24 text-white">
        <div className="mx-auto max-w-[1320px] px-6">
          <SectionHeading
            title="Real-time Intelligence at Your Fingertips"
            description="Precision visibility for fuel decisions, route-side stops, and highway resilience."
            light
          />
          <ScrollReveal scale={0.98} className="mt-10 rounded-3xl border border-cyan-300/20 bg-slate-900/70 p-6 lg:p-8">
            <StaggerContainer className="grid gap-5 lg:grid-cols-3" staggerChildren={0.14}>
              {featureCards.map((feature) => (
                <motion.article key={feature.title} variants={staggerItem} className="rounded-2xl border border-cyan-300/15 bg-slate-900 p-6">
                  <feature.icon className="text-cyan-300" />
                  <h3 className="mt-4 text-xl font-bold">{feature.title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{feature.text}</p>
                  <AnimatedProgress value={feature.value} />
                </motion.article>
              ))}
            </StaggerContainer>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative mx-auto grid max-w-[1320px] items-center gap-10 overflow-hidden px-6 py-24 lg:grid-cols-2">
        <ScrollReveal x={-28} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="route-grid relative h-72 rounded-2xl bg-slate-100 bg-route-grid">
            <motion.div
              className="absolute left-8 top-20 h-4 w-4 rounded-full bg-cyan-500"
              animate={reduced ? undefined : { x: [0, 240, 430], y: [0, 90, 40] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            />
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 300" fill="none">
              <path d="M40 210 C120 120, 240 240, 360 170 C440 130, 520 170, 560 120" stroke="#94a3b8" strokeWidth="3" strokeDasharray="8 8" />
            </svg>
          </div>
        </ScrollReveal>

        <div>
          <ScrollReveal x={28}>
            <SectionHeading
              title="Connected Roads. Smarter Ecosystems."
              description="PetrolPulze strengthens highway mobility by linking routing behavior with reliable fuel intelligence and service context."
            />
          </ScrollReveal>
          <StaggerContainer className="mt-6 space-y-3" staggerChildren={0.12}>
            {[
              'Route intelligence for long highway corridors.',
              'Predictive fueling behavior with demand-aware recommendations.',
              'Connected road infrastructure support for hybrid fuel ecosystems.',
            ].map((point) => (
              <motion.div key={point} variants={staggerItem} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
                <MapPinned size={18} className="mt-0.5 text-cyan-600" />
                <p className="text-slate-600">{point}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-[1320px] px-6">
          <SectionHeading title="Journey to Zero Anxiety" center description="A clear five-step experience for predictable and stress-free fueling decisions." />

          <div className="relative mt-12">
            <motion.div
              className="absolute left-4 right-4 top-6 hidden h-[2px] origin-left bg-gradient-to-r from-cyan-500 via-cyan-400 to-green-400 md:block"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            />

            <StaggerContainer className="grid gap-4 md:grid-cols-5" staggerChildren={0.1}>
              {timeline.map((step) => (
                <motion.article key={step.title} variants={staggerItem} className="relative rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
                  <step.icon size={18} className="mx-auto text-cyan-600" />
                  <h3 className="mt-3 text-sm font-bold">{step.title}</h3>
                  <p className="mt-2 text-xs text-slate-500">{step.copy}</p>
                </motion.article>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-primary py-24 text-white">
        <motion.div
          className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/20"
          animate={reduced ? undefined : { rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/20"
          animate={reduced ? undefined : { rotate: -360 }}
          transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
        />

        <div className="relative mx-auto grid max-w-[1320px] gap-10 px-6 lg:grid-cols-2">
          <SectionHeading
            eyebrow="The Vision"
            title="Empowering the Next Transition"
            description="From fuel to EV-aware corridors, PetrolPulze is building the decision layer for connected travel infrastructure."
            light
          />
          <ScrollReveal x={24} className="grid grid-cols-2 gap-4 self-center">
            {[
              ['50,000+', 'Trips supported'],
              ['100%', 'Connected experience'],
              ['8+', 'Smart corridors mapped'],
              ['24/7', 'Highway visibility'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-3xl font-black">{value}</p>
                <p className="mt-1 text-sm text-slate-300">{label}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <ScrollReveal scale={0.97} className="mx-auto max-w-3xl px-6 py-20">
        <motion.div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-premium" whileInView={{ opacity: 1 }} initial={{ opacity: 0.6 }}>
          <h3 className="text-4xl font-black">Drive Smarter with PetrolPulze</h3>
          <p className="mt-3 text-slate-500">Join 10,000+ travelers planning safer, data-driven highway journeys.</p>
          <div className="mt-8 flex justify-center gap-3">
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link to="/auth">
                <Button>Login</Button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2, delay: 0.04 }}>
              <Link to="/auth">
                <Button variant="ghost">Sign Up</Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </ScrollReveal>

      <div className="pb-6 text-center text-xs text-slate-500">
        Real-Time Fuel Intelligence for Smarter Highway Travel <ArrowRight className="ml-1 inline" size={12} />
      </div>
    </main>
  );
}
