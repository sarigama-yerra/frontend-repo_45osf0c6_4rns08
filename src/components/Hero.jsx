import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_10%_-10%,rgba(56,189,248,0.35),transparent),radial-gradient(800px_500px_at_90%_10%,rgba(217,70,239,0.25),transparent)] pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-28">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 px-3 py-1 text-xs text-white/80">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"/>
            Available for freelance projects
          </div>
          <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white">
            Futuristic Front‑End Craft with Motion
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-2xl">
            I design and code delightful, high‑performance websites with rich micro‑interactions, glassmorphism, and cinematic scroll.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-5 py-3 font-medium shadow-[0_10px_30px_rgba(255,255,255,0.2)] hover:scale-[1.02] active:scale-[.98] transition-transform">
              View Work
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white px-5 py-3 font-medium border border-white/15 backdrop-blur-xl hover:bg-white/15 transition-colors">
              Contact
            </a>
          </div>
        </motion.div>
      </div>

      {/* bottom gradient fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-slate-950"></div>
    </section>
  )
}
