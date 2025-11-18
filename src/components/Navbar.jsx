import { useState, useEffect } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navClick = (id) => {
    const el = document.querySelector(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className={classNames(
      'fixed top-0 inset-x-0 z-50 transition-all',
      scrolled ? 'backdrop-blur-xl bg-slate-900/60 border-b border-white/10' : 'bg-transparent'
    )}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <button onClick={() => navClick('#home')} className="group inline-flex items-center gap-2">
          <div className="relative grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400/30 to-fuchsia-500/30 border border-white/10 shadow-[0_0_25px_rgba(14,165,233,0.25)]">
            <Sparkles className="w-5 h-5 text-cyan-300 group-hover:rotate-12 transition-transform" />
          </div>
          <span className="text-white/90 font-semibold tracking-tight">Blue</span>
        </button>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <button onClick={() => navClick('#projects')} className="text-white/70 hover:text-white transition-colors">Work</button>
          <button onClick={() => navClick('#about')} className="text-white/70 hover:text-white transition-colors">About</button>
          <button onClick={() => navClick('#contact')} className="text-white/70 hover:text-white transition-colors">Contact</button>
          <a href="#contact" onClick={(e)=>{e.preventDefault();navClick('#contact')}} className="ml-2 inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/15 text-white/90 px-4 py-2 border border-white/10 transition-all">
            <span>Let’s build</span>
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white/80 p-2 rounded-lg hover:bg-white/10">
          {open ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4">
          <div className="rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-xl p-4 mx-1 mb-2">
            <button onClick={() => navClick('#projects')} className="block w-full text-left text-white/80 py-2">Work</button>
            <button onClick={() => navClick('#about')} className="block w-full text-left text-white/80 py-2">About</button>
            <button onClick={() => navClick('#contact')} className="block w-full text-left text-white/80 py-2">Contact</button>
          </div>
        </div>
      )}
    </header>
  )
}
