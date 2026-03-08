import { useState } from 'react';
import { ArrowRight, LineChart, Lock, Mail, ShieldCheck, Zap } from 'lucide-react';
import { PageTransition } from '../components/animation/PageTransition';
import { Button } from '../components/ui/Button';

export function AuthPage() {
  const [tab, setTab] = useState<'login' | 'signup'>('login');

  return (
    <PageTransition>
      <main className="grid min-h-[calc(100vh-76px)] lg:grid-cols-2">
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-12 text-white lg:p-16">
          <div className="absolute -left-16 top-12 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute bottom-20 right-20 h-64 w-64 rounded-full bg-green-500/10 blur-3xl" />

          <div className="relative max-w-xl">
            <div className="inline-flex items-center gap-3">
              <span className="rounded-xl bg-cyan-500/20 p-2 text-cyan-300">
                <Zap size={18} />
              </span>
              <span className="text-3xl font-black">PetrolPulze</span>
            </div>

            <h1 className="mt-10 text-5xl font-black leading-[1.02] lg:text-7xl">
              Smarter Highway <span className="text-cyan-400">Travel</span> Starts Here
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300 lg:text-xl">
              Access real-time fuel availability and plan nearby refueling stops with confidence.
            </p>

            <div className="mt-8 inline-flex items-center rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-medium">
              Joined by 10k+ travelers today
            </div>

            <div className="absolute right-6 top-8 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm">
              Diesel available • 2.4 km
            </div>
          </div>

          <div className="absolute bottom-8 left-12 hidden gap-6 text-sm text-slate-400 md:flex">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Support</span>
          </div>
        </section>

        <section className="flex items-center justify-center bg-slate-50 p-8 lg:p-12">
          <div className="surface-card w-full max-w-xl p-8">
            <div className="mb-6 grid grid-cols-2 rounded-xl bg-slate-100 p-1 text-sm font-semibold">
              <button onClick={() => setTab('login')} className={`rounded-lg py-2.5 transition ${tab === 'login' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}>
                Login
              </button>
              <button onClick={() => setTab('signup')} className={`rounded-lg py-2.5 transition ${tab === 'signup' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}>
                Sign Up
              </button>
            </div>

            {tab === 'login' ? (
              <form className="space-y-4">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold">Email</span>
                  <span className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 focus-within:border-cyan-300 focus-within:bg-white">
                    <Mail size={16} className="text-slate-400" />
                    <input className="w-full bg-transparent outline-none" placeholder="name@company.com" />
                  </span>
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold">Password</span>
                  <span className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 focus-within:border-cyan-300 focus-within:bg-white">
                    <Lock size={16} className="text-slate-400" />
                    <input type="password" className="w-full bg-transparent outline-none" placeholder="••••••••" />
                  </span>
                </label>
                <div className="flex items-center justify-between text-sm">
                  <label className="inline-flex items-center gap-2 text-slate-600">
                    <input type="checkbox" className="rounded" /> Remember me
                  </label>
                  <a className="font-semibold text-cyan-600">Forgot Password?</a>
                </div>
                <Button className="w-full">Login to Map <ArrowRight className="ml-2 inline" size={16} /></Button>
                <Button variant="ghost" className="w-full">Continue with Google</Button>
              </form>
            ) : (
              <form className="space-y-4">
                <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-cyan-300 focus:bg-white" placeholder="Full name" />
                <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-cyan-300 focus:bg-white" placeholder="Email" />
                <input type="password" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-cyan-300 focus:bg-white" placeholder="Password" />
                <input type="password" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-cyan-300 focus:bg-white" placeholder="Confirm password" />
                <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-cyan-300 focus:bg-white">
                  <option>Traveler</option>
                  <option>Petrol Pump Operator</option>
                </select>
                <Button className="w-full">Create account</Button>
              </form>
            )}

            <div className="mt-6 flex justify-center gap-6 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1"><ShieldCheck size={13} /> SSL Secure</span>
              <span className="inline-flex items-center gap-1"><Lock size={13} /> Encrypted</span>
              <span className="inline-flex items-center gap-1"><LineChart size={13} /> 24/7 Support</span>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
