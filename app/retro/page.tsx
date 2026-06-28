import Navigation from "@/app/components/Navigation";

export default function RetroPage() {
  return (
    <main className="comparison-shell retro-style">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <header className="comparison-card px-6 py-6 sm:px-8 sm:py-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <p className="hero-eyebrow">Establishment 1984</p>
              <h1 className="hero-title text-4xl sm:text-6xl">
                Miami Nights.
              </h1>
              <p className="text-cyan-300 max-w-xl text-sm leading-6 sm:text-base font-mono">
                Retro-future aesthetics blending neon vibrancy with 80s digital nostalgia.
                Everything built from the ground up for maximum impact.
              </p>
            </div>
            <Navigation />
          </div>
        </header>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="comparison-card p-8 space-y-8">
            <div className="space-y-2">
               <h2 className="text-2xl font-black italic text-pink-500 uppercase tracking-widest">Neon Inputs</h2>
               <p className="text-xs font-mono text-cyan-400">Glowing borders and digital typography.</p>
            </div>

            <div className="space-y-6">
               <div className="space-y-2">
                  <label className="text-xs font-bold text-pink-400 ml-1 uppercase">User Alias</label>
                  <input
                    type="text"
                    placeholder="VICECITY_99"
                    className="w-full h-12 px-4 bg-purple-950/50 border-2 border-cyan-500/50 text-cyan-400 placeholder:text-cyan-900 rounded-none focus:border-pink-500 focus:shadow-[0_0_15px_rgba(236,72,153,0.5)] focus:outline-none transition-all duration-300 font-mono"
                  />
               </div>
               <div className="space-y-2">
                  <label className="text-xs font-bold text-pink-400 ml-1 uppercase">Access Level</label>
                  <div className="relative">
                    <select className="w-full h-12 px-4 bg-purple-950/50 border-2 border-cyan-500/50 text-cyan-400 appearance-none rounded-none focus:border-pink-500 focus:outline-none font-mono">
                       <option>Guest</option>
                       <option>Operator</option>
                       <option>Admin</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-cyan-500">
                      ▼
                    </div>
                  </div>
               </div>
               <div className="flex items-center gap-4 p-4 border-2 border-pink-500/30 bg-pink-500/5">
                  <div className="relative inline-flex items-center cursor-pointer">
                     <input type="checkbox" className="sr-only peer" defaultChecked />
                     <div className="w-14 h-7 bg-purple-900 border border-pink-500/50 rounded-none peer-focus:outline-none peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-pink-500 after:rounded-none after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-500/20 peer-checked:after:bg-cyan-400 peer-checked:shadow-[0_0_10px_rgba(236,72,153,0.5)]"></div>
                  </div>
                  <span className="text-xs font-black text-pink-500 uppercase tracking-tighter">Hyperdrive Engaged</span>
               </div>
            </div>
          </div>

          <div className="grid gap-8">
             <div className="comparison-card p-8 space-y-6 overflow-hidden relative">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-pink-500/20 blur-3xl rounded-full" />
                <h2 className="text-2xl font-black italic text-cyan-400 uppercase tracking-widest">Synth Buttons</h2>
                <div className="flex flex-wrap gap-4 relative z-10">
                   <button className="px-8 py-3 bg-transparent border-2 border-pink-500 text-pink-500 font-black uppercase tracking-widest hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-[4px_4px_0px_#00ffff] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:scale-95">
                      Accept
                   </button>
                   <button className="px-8 py-3 bg-transparent border-2 border-cyan-500 text-cyan-500 font-black uppercase tracking-widest hover:bg-cyan-500 hover:text-white transition-all duration-300 shadow-[4px_4px_0px_#ff00ff] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:scale-95">
                      Decline
                   </button>
                </div>
                <div className="pt-6 border-t border-cyan-500/20">
                   <p className="text-xs font-mono text-cyan-500/70 leading-relaxed uppercase">
                      {"// Warning: High voltage interface. Neon components may cause excessive 80s nostalgia."}
                   </p>
                </div>
             </div>

             <div className="comparison-card p-8 space-y-4">
                <div className="flex items-center gap-4">
                   <div className="h-12 w-12 border-2 border-pink-500 flex items-center justify-center text-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.5)]">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                   </div>
                   <div>
                      <h3 className="font-black text-white uppercase italic tracking-wider">Turbo Boost</h3>
                      <p className="text-[10px] font-mono text-cyan-400 uppercase">Current Velocity: 88 MPH</p>
                   </div>
                </div>
                <div className="p-4 border border-cyan-500/30 bg-cyan-500/5">
                   <div className="flex justify-between text-[10px] font-black uppercase mb-2">
                      <span className="text-cyan-500">Capacitor Charge</span>
                      <span className="text-pink-500">Optimal</span>
                   </div>
                   <div className="h-3 w-full bg-purple-950 border border-cyan-500/50 p-[2px]">
                      <div className="h-full w-[88%] bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 shadow-[0_0_10px_rgba(0,255,255,0.5)]" />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
