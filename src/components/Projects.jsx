import { motion, useScroll, useTransform } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Neon Agency Website',
    desc: 'A blazing fast landing page with 3D accents, glass panels, and smooth parallax.',
    tags: ['Next.js', 'Framer Motion', 'Spline'],
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1200&auto=format&fit=crop',
    link: '#'
  },
  {
    title: 'AI SaaS Dashboard',
    desc: 'Elegant, data‑dense dashboard with micro‑interactions and dark mode.',
    tags: ['React', 'Tailwind', 'Charts'],
    image: 'https://images.unsplash.com/photo-1677044983562-5bfc4af692e4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBSSUyMFNhYVMlMjBEYXNoYm9hcmR8ZW58MHwwfHx8MTc2MzQ1ODYyMnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    link: '#'
  },
  {
    title: 'E‑commerce Motion UX',
    desc: 'High‑conversion product pages with immersive transitions and 60fps animations.',
    tags: ['Remix', 'GSAP', 'A11y'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
    link: '#'
  },
]

export default function Projects() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -200])

  return (
    <section id="projects" className="relative py-28 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(700px_400px_at_80%_20%,rgba(56,189,248,0.12),transparent),radial-gradient(600px_360px_at_10%_30%,rgba(217,70,239,0.10),transparent)]"/>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 style={{ y }} className="text-3xl sm:text-4xl font-semibold text-white mb-12">Selected Work</motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              href={p.link}
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                  <ExternalLink className="w-4 h-4 text-white/60" />
                </div>
                <p className="mt-2 text-white/70 text-sm">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs text-white/70 bg-white/10 border border-white/10 px-2 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-slate-950/40 to-transparent"/>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
