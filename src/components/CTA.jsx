export default function CTA() {
  return (
    <section id="demo" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/40 via-fuchsia-600/30 to-amber-500/20 p-8 sm:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl text-white font-semibold tracking-tight">Let VOXA ai call your leads in 60 seconds</h3>
              <p className="text-slate-200/90 mt-2">Drop in your number and we’ll place a live sample call showcasing qualification and booking flows.</p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3">
              <input type="tel" placeholder="Your phone number" className="flex-1 rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder:text-slate-300/60 outline-none focus:ring-2 focus:ring-white/30" />
              <button type="button" className="px-6 py-3 rounded-xl bg-white text-slate-900 font-medium hover:opacity-90 transition">Get sample call</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
