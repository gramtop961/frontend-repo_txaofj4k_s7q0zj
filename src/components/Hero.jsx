import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[86vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient overlay to blend with brand colors without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_45%,rgba(124,58,237,0.25)_0%,rgba(14,165,233,0.18)_35%,rgba(251,146,60,0.12)_65%,transparent_80%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live AI calling agent
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            Close more deals with a voice agent that never sleeps
          </h1>
          <p className="text-slate-300 text-lg">
            VOXA ai books appointments, qualifies leads, and supports customers with human‑like conversations across phone and web. Always on. Always on‑brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#demo" className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-white text-slate-900 font-medium hover:opacity-90 transition shadow-[0_10px_40px_-12px_rgba(255,255,255,0.45)]">
              Get a live demo
            </a>
            <a href="#pricing" className="inline-flex justify-center items-center px-6 py-3 rounded-xl border border-white/15 text-white hover:bg-white/5 transition">
              See pricing
            </a>
          </div>
          <div className="flex items-center gap-6 pt-2 text-slate-300">
            <div className="text-xl font-semibold text-white">+32%</div>
            <div className="text-sm">More booked calls in 30 days</div>
          </div>
        </div>
        <div className="hidden lg:block" />
      </div>
    </section>
  );
}
