import { motion } from 'framer-motion';
import { ArrowRight, ChartBar, Compass, GaugeCircle, MapPinned, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/animation/ScrollReveal';
import { Button } from '../components/ui/Button';

const steps = ['Open PetrolPulze', 'Search your route', 'View station status', 'Check details', 'Drive without uncertainty'];

export function AboutPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50">
        <div className="route-grid absolute inset-0 bg-route-grid opacity-50" />
        <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-green-400/20 blur-3xl" />
        <div className="relative mx-auto max-w-[1320px] px-6 py-24">
          <motion.div initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }} className="max-w-4xl">
            <motion.h1 variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }} className="text-6xl font-black leading-[1.05] text-textPrimary">Never Run Out of Fuel on the <span className="bg-gradient-to-r from-accentCyan to-accentGreen bg-clip-text text-transparent">Highway Again</span></motion.h1>
            <motion.p variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }} className="mt-6 max-w-2xl text-lg text-slate-600">Experience real-time fuel availability, intelligent filters, and predictive route planning engineered for India's highways.</motion.p>
            <motion.div variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }} className="mt-8 flex gap-3"><Link to="/map"><Button variant="primary">Explore Map</Button></Link><Link to="/find-fuel"><Button variant="ghost">Find Fuel</Button></Link></motion.div>
          </motion.div>
          <div className="mt-14 grid max-w-3xl gap-4 md:grid-cols-3">
            {['Diesel available', 'Closest station 2.4 km', 'Open now'].map((item) => (
              <motion.div key={item} whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 16 }} viewport={{ once: true }} className="rounded-2xl border border-white/60 bg-white/75 p-4 backdrop-blur"><p className="text-sm font-semibold text-slate-700">{item}</p></motion.div>
            ))}
          </div>
        </div>
      </section>

      <ScrollReveal className="mx-auto grid max-w-[1320px] gap-8 px-6 py-24 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">The Challenge</p>
          <h2 className="mt-3 text-4xl font-black">Highway Fuel Anxiety is Real</h2>
          <p className="mt-4 text-slate-600">Unexpected stockouts and uncertainty force long detours and unsafe decisions for travelers.</p>
          <div className="mt-6 flex gap-4"><div className="rounded-xl bg-white p-4 shadow-sm"><p className="text-3xl font-black">15%</p><p className="text-xs text-slate-500">Unnecessary detours</p></div><div className="rounded-xl bg-white p-4 shadow-sm"><p className="text-3xl font-black">45m</p><p className="text-xs text-slate-500">Average delay</p></div></div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-700 p-8 text-white shadow-premium">Live route confidence monitor with station risk alerts and rest-stop planning intelligence.</div>
      </ScrollReveal>

      <section className="bg-primary py-24 text-white">
        <div className="mx-auto max-w-[1320px] px-6">
          <ScrollReveal>
            <h2 className="text-4xl font-black">Real-time Intelligence at Your Fingertips</h2>
            <p className="mt-3 max-w-2xl text-slate-300">Fuel decisions shouldn't feel uncertain—PetrolPulze gives precision visibility while you travel.</p>
          </ScrollReveal>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {[{ t: 'Live Availability', i: GaugeCircle }, { t: 'Smart Filters', i: Compass }, { t: 'Price Predictor', i: ChartBar }].map((f, idx) => (
              <ScrollReveal key={f.t} delay={idx * 0.08} className="rounded-2xl border border-cyan-300/20 bg-slate-900 p-6">
                <f.i className="text-cyan-300" />
                <h3 className="mt-4 text-xl font-bold">{f.t}</h3>
                <div className="mt-4 h-2 rounded-full bg-slate-700"><div className="h-2 rounded-full bg-cyan-400" style={{ width: `${55 + idx * 18}%` }} /></div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ScrollReveal className="mx-auto grid max-w-[1320px] items-center gap-8 px-6 py-24 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">Interactive mobility dashboard preview with connected road overlays.</div>
        <div><h2 className="text-4xl font-black">Connected Roads. Smarter Ecosystems.</h2><ul className="mt-5 space-y-3 text-slate-600"><li className="flex gap-2"><MapPinned size={18} className="text-cyan-600" /> Route intelligence for long corridors.</li><li className="flex gap-2"><Sparkles size={18} className="text-cyan-600" /> Predictive fueling behavior insights.</li><li className="flex gap-2"><ShieldCheck size={18} className="text-cyan-600" /> Connected road infrastructure support.</li></ul></div>
      </ScrollReveal>

      <section className="border-y border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-[1320px] px-6">
          <ScrollReveal><h2 className="text-center text-4xl font-black">Journey to Zero Anxiety</h2></ScrollReveal>
          <div className="mt-10 grid gap-4 md:grid-cols-5">{steps.map((step, i) => <ScrollReveal key={step} delay={i * 0.06} className="rounded-xl border border-slate-200 bg-white p-4 text-center text-sm font-semibold">{step}</ScrollReveal>)}</div>
        </div>
      </section>

      <section className="bg-primary py-24 text-white">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-6 lg:grid-cols-2">
          <ScrollReveal><p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">The Vision</p><h2 className="mt-3 text-5xl font-black">Empowering the Next Transition</h2><p className="mt-4 text-slate-300">PetrolPulze is evolving into a unified mobility intelligence layer across petrol, CNG, and EV infrastructure.</p><div className="mt-6 flex gap-8"><div><p className="text-4xl font-black">50,000+</p><p className="text-slate-400">Trips supported</p></div><div><p className="text-4xl font-black">100%</p><p className="text-slate-400">Connected experience</p></div></div></ScrollReveal>
          <div className="rounded-full border border-cyan-500/30 p-20" />
        </div>
      </section>

      <ScrollReveal className="mx-auto max-w-3xl px-6 py-20">
        <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-premium"><h3 className="text-4xl font-black">Drive Smarter with PetrolPulze</h3><p className="mt-3 text-slate-500">Join 10,000+ citizens on safer, data-driven highway journeys.</p><div className="mt-8 flex justify-center gap-3"><Link to="/auth"><Button>Login</Button></Link><Link to="/auth"><Button variant="ghost">Sign Up</Button></Link></div></div>
      </ScrollReveal>
      <div className="pb-6 text-center text-xs text-slate-500">Real-Time Fuel Intelligence for Smarter Highway Travel <ArrowRight className="ml-1 inline" size={12} /></div>
    </main>
  );
}
