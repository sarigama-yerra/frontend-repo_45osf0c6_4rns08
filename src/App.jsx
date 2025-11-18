import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="relative bg-slate-950 text-white">
      {/* Global gradient + subtle grain */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.08]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'300\\' height=\\'300\\'><filter id=\\'n\\'><feTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.8\\' numOctaves=\\'4\\' stitchTiles=\\'stitch\\'/></filter><rect width=\\'100%\\' height=\\'100%\\' filter=\\'url(%23n)\\' opacity=\\'0.5\\'/></svg>')" }} />
      <div className="fixed inset-0 bg-[radial-gradient(1200px_700px_at_20%_-10%,rgba(56,189,248,0.15),transparent),radial-gradient(1000px_600px_at_90%_0%,rgba(217,70,239,0.12),transparent)]" />

      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>

      <footer className="relative border-t border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Blue — Front‑End Developer</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#projects" className="text-white/70 hover:text-white">Work</a>
            <a href="#about" className="text-white/70 hover:text-white">About</a>
            <a href="#contact" className="text-white/70 hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
