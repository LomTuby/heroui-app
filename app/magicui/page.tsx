import Navigation from "@/app/components/Navigation";
import { Button, Card, Input, Label } from "@heroui/react";

export default function MagicuiPage() {
  return (
    <main className="comparison-shell magic-style comparison-surface text-white">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <header className="comparison-card overflow-hidden rounded-[1.8rem] p-8 sm:p-10 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.3),transparent_40%)]" />
          <div className="relative flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-5">
              <p className="hero-eyebrow text-white/70">Magic UI</p>
              <h1 className="hero-title text-4xl font-semibold tracking-tight sm:text-6xl">
                Cinematic & Impactful.
              </h1>
              <p className="max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                Glowing gradients, glass panels, and a motion-first feel designed for
                premium landing pages and high-end digital experiences.
              </p>
            </div>
            <Navigation />
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <Card className="comparison-card rounded-[1.8rem] overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
               <Card.Header className="relative p-8 pb-0">
                  <p className="hero-eyebrow text-violet-400">Spotlight</p>
                  <h2 className="text-3xl font-bold mt-2">Interactive Glass</h2>
               </Card.Header>
               <Card.Content className="relative p-8 pt-6 space-y-6">
                  <p className="text-white/60 leading-relaxed">
                     The core of Magic UI is the &quot;Glassmorphism&quot; effect—layered transparency
                     combined with subtle background blurs and vibrant accent glows.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="h-32 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md group-hover:border-violet-500/30 transition-colors">
                        <div className="h-12 w-12 rounded-full bg-violet-500/20 blur-xl animate-pulse" />
                        <span className="text-xs font-medium text-white/40">Layer 01</span>
                     </div>
                     <div className="h-32 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md group-hover:border-blue-500/30 transition-colors">
                        <div className="h-12 w-12 rounded-full bg-blue-500/20 blur-xl animate-pulse" />
                        <span className="text-xs font-medium text-white/40">Layer 02</span>
                     </div>
                  </div>
               </Card.Content>
            </Card>

            <div className="grid gap-6 sm:grid-cols-2">
               <Card className="comparison-card rounded-[1.8rem] p-6 flex flex-col items-center text-center gap-4 border-violet-500/20 bg-violet-500/5">
                  <div className="h-12 w-12 rounded-full bg-violet-500 flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.5)]">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
                  </div>
                  <h3 className="font-bold">Magic Glow</h3>
                  <p className="text-xs text-white/50">Luminous accents that guide the user&apos;s eye to primary actions.</p>
                  <Button className="w-full bg-violet-600 text-white shadow-[0_0_30px_rgba(139,92,246,0.4)] border-none rounded-xl">Pulse Action</Button>
               </Card>
               <Card className="comparison-card rounded-[1.8rem] p-6 flex flex-col items-center text-center gap-4 border-blue-500/20 bg-blue-500/5">
                  <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93l2.83 2.83"/><path d="M16.24 16.24l2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="M4.93 19.07l2.83-2.83"/><path d="M16.24 7.76l2.83-2.83"/></svg>
                  </div>
                  <h3 className="font-bold">Aura Motion</h3>
                  <p className="text-xs text-white/50">Dynamic background elements that react to cursor movement.</p>
                  <Button variant="outline" className="w-full border-blue-500/50 text-blue-400 rounded-xl hover:bg-blue-500/10">Explore Motion</Button>
               </Card>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="comparison-card rounded-[1.8rem] p-8 border-white/10 bg-white/5 backdrop-blur-2xl">
               <div className="flex items-center justify-between mb-8">
                  <h3 className="font-bold text-xl">Cosmos Dashboard</h3>
                  <div className="flex gap-1">
                     <div className="h-2 w-2 rounded-full bg-red-500/50" />
                     <div className="h-2 w-2 rounded-full bg-amber-500/50" />
                     <div className="h-2 w-2 rounded-full bg-emerald-500/50" />
                  </div>
               </div>

               <div className="space-y-6">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                     <div className="flex justify-between items-end">
                        <div>
                           <p className="text-[10px] text-white/40 uppercase tracking-widest">Active Users</p>
                           <p className="text-2xl font-bold">12,842</p>
                        </div>
                        <div className="text-emerald-400 text-xs font-medium">+14.2%</div>
                     </div>
                     <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full w-2/3 bg-gradient-to-r from-violet-500 to-blue-500 shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
                     </div>
                  </div>

                  <div className="grid gap-4">
                     <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors">
                        <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center">
                           <div className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_8px_#a78bfa]" />
                        </div>
                        <div className="flex-1">
                           <p className="text-sm font-medium">Node Primary</p>
                           <p className="text-[10px] text-white/40">Uptime: 99.9%</p>
                        </div>
                        <div className="h-6 w-12 bg-emerald-500/20 border border-emerald-500/30 rounded-full flex items-center justify-center">
                           <div className="h-1 w-1 rounded-full bg-emerald-400" />
                        </div>
                     </div>
                     <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors">
                        <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center">
                           <div className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_8px_#60a5fa]" />
                        </div>
                        <div className="flex-1">
                           <p className="text-sm font-medium">Edge Cache</p>
                           <p className="text-[10px] text-white/40">Latency: 14ms</p>
                        </div>
                        <div className="h-6 w-12 bg-emerald-500/20 border border-emerald-500/30 rounded-full flex items-center justify-center">
                           <div className="h-1 w-1 rounded-full bg-emerald-400" />
                        </div>
                     </div>
                  </div>

                  <div className="pt-4 space-y-4">
                     <div className="space-y-2">
                        <Label className="text-xs text-white/50 uppercase tracking-widest">Access Token</Label>
                        <div className="flex gap-2">
                           <Input readOnly value="sk_magic_84295810293" className="bg-white/5 border-white/10 text-white/70" />
                           <Button className="bg-white/10 text-white border-white/10">Copy</Button>
                        </div>
                     </div>
                  </div>
               </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
