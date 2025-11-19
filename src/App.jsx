import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* subtle background texture */}
      <div className="fixed inset-0 bg-[radial-gradient(65%_65%_at_50%_-10%,rgba(99,102,241,0.12),transparent_60%)]" />

      <div className="relative">
        <Navbar />
        <Hero />
        <Features />
        <CTA />

        {/* footer */}
        <footer className="py-12 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400" />
              <span className="text-white font-medium">VOXA ai</span>
            </div>
            <p className="text-sm text-slate-400">© {new Date().getFullYear()} VOXA AI, Inc. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
