import { Headphones, CalendarCheck2, Brain, Waveform } from "lucide-react";

const features = [
  {
    icon: Headphones,
    title: "Natural conversations",
    desc: "Understands intent, interrupts, clarifies, and adapts tone for each caller.",
  },
  {
    icon: CalendarCheck2,
    title: "Instant scheduling",
    desc: "Books meetings into your CRM and calendar in real-time with conflict checks.",
  },
  {
    icon: Brain,
    title: "On-brand intelligence",
    desc: "Trained on your FAQs, docs, and past calls to answer exactly like your team.",
  },
  {
    icon: Waveform,
    title: "Crystal voice",
    desc: "Ultra-low latency streaming TTS and ASR for a delightful human feel.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(45%_45%_at_50%_0%,rgba(168,85,247,0.12),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Built for revenue teams</h2>
          <p className="text-slate-300 mt-3">Deploy an AI caller that handles outreach, qualification, routing, and scheduling while your team closes.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 hover:bg-white/7 transition">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 grid place-items-center shadow-[0_0_30px_-10px] shadow-fuchsia-500/40">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="mt-4 text-white font-medium">{title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
