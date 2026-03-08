import { useState } from 'react';
import { Mail, Lock, Zap, ArrowRight, ShieldCheck, LineChart } from 'lucide-react';
import { PageTransition } from '../components/animation/PageTransition';
import { Button } from '../components/ui/Button';

export function AuthPage() {
  const [tab, setTab] = useState<'login' | 'signup'>('login');
  return (
    <PageTransition>
      <main className="grid min-h-[calc(100vh-78px)] lg:grid-cols-2">
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-16 text-white">
          <div className="absolute -left-16 top-12 h-52 w-52 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="relative max-w-xl">
            <div className="inline-flex items-center gap-2"><Zap className="text-cyan-300" /> <span className="text-4xl font-black">PetrolPulze</span></div>
            <h1 className="mt-10 text-7xl font-black leading-[0.96]">Smarter Highway <span className="text-cyan-400">Travel</span> Starts Here</h1>
            <p className="mt-6 text-xl text-slate-300">Access real-time fuel availability and plan every long route with confidence.</p>
            <div className="mt-8 inline-flex items-center rounded-2xl border border-white/20 bg-white/10 px-4 py-3">Joined by 10k+ travelers today</div>
            <div className="absolute right-12 top-20 rounded-2xl border border-white/20 bg-white/10 p-4">Diesel available</div>
          </div>
          <div className="absolute bottom-8 left-16 flex gap-6 text-slate-400"><span>Privacy Policy</span><span>Terms of Service</span><span>Support</span></div>
        </section>
        <section className="flex items-center justify-center bg-slate-50 p-10">
          <div className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-8 shadow-premium">
            <div className="mb-6 grid grid-cols-2 rounded-xl bg-slate-100 p-1 text-sm font-semibold"><button onClick={() => setTab('login')} className={`rounded-lg py-2 ${tab === 'login' ? 'bg-white shadow' : 'text-slate-500'}`}>Login</button><button onClick={() => setTab('signup')} className={`rounded-lg py-2 ${tab === 'signup' ? 'bg-white shadow' : 'text-slate-500'}`}>Sign Up</button></div>
            {tab === 'login' ? (
              <form className="space-y-4">
                <label className="block"><span className="mb-2 block text-sm font-semibold">Email</span><span className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-3"><Mail size={16} className="text-slate-400" /><input className="w-full outline-none" placeholder="name@company.com" /></span></label>
                <label className="block"><span className="mb-2 block text-sm font-semibold">Password</span><span className="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-3"><Lock size={16} className="text-slate-400" /><input type="password" className="w-full outline-none" placeholder="••••••" /></span></label>
                <div className="flex items-center justify-between text-sm"><label className="inline-flex items-center gap-2"><input type="checkbox" />Remember me</label><a className="font-semibold text-cyan-600">Forgot Password?</a></div>
                <Button className="w-full">Login to Map <ArrowRight className="ml-2 inline" size={16} /></Button>
                <Button variant="ghost" className="w-full">Continue with Google</Button>
              </form>
            ) : (
              <form className="space-y-4">
                <input className="w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="Full name" />
                <input className="w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="Email" />
                <input type="password" className="w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="Password" />
                <input type="password" className="w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="Confirm password" />
                <select className="w-full rounded-xl border border-slate-200 px-4 py-3"><option>Traveler</option><option>Petrol Pump Operator</option></select>
                <Button className="w-full">Create account</Button>
              </form>
            )}
            <div className="mt-6 flex justify-center gap-6 text-xs text-slate-400"><span className="inline-flex items-center gap-1"><ShieldCheck size={13} /> SSL Secure</span><span className="inline-flex items-center gap-1"><Lock size={13} /> Encrypted</span><span className="inline-flex items-center gap-1"><LineChart size={13} /> 24/7 Support</span></div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
