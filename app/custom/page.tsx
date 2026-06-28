import Navigation from "@/app/components/Navigation";

export default function CustomPage() {
  return (
    <main className="comparison-shell custom-style bg-orange-50/30">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <header className="bg-white border-2 border-orange-200 rounded-3xl px-6 py-6 sm:px-8 sm:py-8 shadow-xl shadow-orange-200/20">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500">Custom Library</p>
              <h1 className="text-4xl font-black tracking-tight sm:text-5xl text-slate-900">
                Built from Scratch.
              </h1>
              <p className="text-slate-500 max-w-xl text-sm leading-6 sm:text-base">
                No external UI components. Every element here is crafted using raw
                Tailwind CSS to demonstrate total control over the design language.
              </p>
            </div>
            <Navigation />
          </div>
        </header>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="bg-white border-2 border-slate-100 rounded-[2rem] p-8 space-y-8">
            <div className="space-y-2">
               <h2 className="text-2xl font-bold text-slate-900">Bespoke Inputs</h2>
               <p className="text-sm text-slate-400">Custom focus states and labeled compositions.</p>
            </div>

            <div className="space-y-6">
               <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 ml-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="Jane Doe"
                    className="w-full h-12 px-4 rounded-xl bg-slate-50 border-2 border-transparent focus:border-orange-500 focus:bg-white focus:outline-none transition-all duration-200"
                  />
               </div>
               <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 ml-1">Account Type</label>
                  <select className="w-full h-12 px-4 rounded-xl bg-slate-50 border-2 border-transparent focus:border-orange-500 focus:bg-white focus:outline-none appearance-none transition-all duration-200">
                     <option>Personal</option>
                     <option>Business</option>
                     <option>Enterprise</option>
                  </select>
               </div>
               <div className="flex items-center gap-4 p-4 rounded-2xl bg-orange-50 border-2 border-orange-100">
                  <div className="relative inline-flex items-center cursor-pointer">
                     <input type="checkbox" className="sr-only peer" defaultChecked />
                     <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                  </div>
                  <span className="text-sm font-bold text-orange-900">Enable automatic updates</span>
               </div>
            </div>
          </div>

          <div className="grid gap-8">
             <div className="bg-slate-900 rounded-[2rem] p-8 text-white space-y-6">
                <h2 className="text-2xl font-bold">Action Buttons</h2>
                <div className="flex flex-wrap gap-4">
                   <button className="px-8 py-3 bg-orange-500 hover:bg-orange-400 text-white font-bold rounded-xl transition-colors shadow-lg shadow-orange-500/30 active:scale-95">
                      Primary
                   </button>
                   <button className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-colors active:scale-95">
                      Secondary
                   </button>
                </div>
                <div className="pt-6 border-t border-white/10">
                   <p className="text-sm text-white/50 leading-relaxed">
                      Custom buttons often feature unique hover transformations or
                      complex shadow layering that standardized libraries might abstract away.
                   </p>
                </div>
             </div>

             <div className="bg-white border-2 border-orange-100 rounded-[2rem] p-8 space-y-4">
                <div className="flex items-center gap-4">
                   <div className="h-12 w-12 rounded-2xl bg-orange-500 flex items-center justify-center text-white">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                   </div>
                   <div>
                      <h3 className="font-black text-slate-900">Security First</h3>
                      <p className="text-xs text-slate-400">Identity verified via scratch-built modules.</p>
                   </div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                   <div className="flex justify-between text-xs font-bold mb-2">
                      <span className="text-slate-400">Strength</span>
                      <span className="text-orange-500">High</span>
                   </div>
                   <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full w-4/5 bg-orange-500 rounded-full" />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
