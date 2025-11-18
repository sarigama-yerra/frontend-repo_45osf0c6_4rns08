import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="relative py-28 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_10%_20%,rgba(56,189,248,0.10),transparent),radial-gradient(600px_300px_at_80%_40%,rgba(217,70,239,0.08),transparent)]"/>
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Let’s talk</h2>
          <p className="mt-3 text-white/70">Tell me about your project and timeline. I’ll get back within 24 hours.</p>
        </div>
        <motion.form initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{ once:true }} onSubmit={handleSubmit} className="mt-8 grid gap-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <input required placeholder="Your name" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
            <input required type="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
          </div>
          <input placeholder="Company / Website (optional)" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
          <textarea required rows="5" placeholder="Project details" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/40" />
          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-5 py-3 font-medium shadow-[0_10px_30px_rgba(255,255,255,0.2)] hover:scale-[1.02] active:scale-[.98] transition-transform">Send message</button>
            {sent && <span className="text-sm text-white/70">Thanks! I’ll reply shortly.</span>}
          </div>
        </motion.form>
      </div>
    </section>
  )
}
