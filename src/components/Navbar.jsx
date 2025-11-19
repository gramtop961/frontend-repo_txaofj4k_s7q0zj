import { Menu, PhoneCall } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-slate-900/60 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 shadow-[0_0_40px_-10px] shadow-fuchsia-500/50" />
          <span className="text-white text-lg font-semibold tracking-tight">VOXA ai</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-slate-300">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#solutions" className="hover:text-white transition">Solutions</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#faq" className="hover:text-white transition">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#demo" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 text-slate-200 hover:bg-white/5 transition">
            <PhoneCall className="w-4 h-4" />
            Book a demo
          </a>
          <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 text-slate-200 hover:bg-white/5">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
