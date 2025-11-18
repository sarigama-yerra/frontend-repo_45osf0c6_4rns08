import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_20%_10%,rgba(56,189,248,0.10),transparent),radial-gradient(700px_360px_at_90%_30%,rgba(217,70,239,0.08),transparent)]"/>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{ once:true }} className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
            <h2 className="text-3xl font-semibold text-white">About</h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              I’m a front‑end engineer focused on modern aesthetics and performance. I craft interfaces that feel alive: layered glass, soft glows, and motion that guides, not distracts. My toolkit spans React, Framer Motion, and 3D on the web.
            </p>
            <p className="mt-4 text-white/70 leading-relaxed">
              I collaborate with startups and brands to ship immersive sites, marketing pages, and product experiences that convert.
            </p>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
              {['React','TypeScript','Framer Motion','Tailwind','Spline','GSAP'].map(s => (
                <div key={s} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white/80">{s}</div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{ once:true }} className="relative h-80 rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10">
            <div className="absolute inset-0 bg-[radial-gradient(400px_200px_at_20%_10%,rgba(56,189,248,0.25),transparent),radial-gradient(400px_200px_at_90%_80%,rgba(217,70,239,0.25),transparent)]"/>
            <div className="absolute inset-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-2xl grid place-items-center">
              <div className="text-center px-6">
                <p className="text-white/80">Clean code, crisp visuals, delightful details.</p>
                <p className="text-white/60 text-sm mt-2">Available for select projects.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
