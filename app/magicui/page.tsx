import Link from "next/link";
import { Button, Card, Input, Label, TextField } from "@heroui/react";

export default function MagicuiPage() {
  return (
    <main className="comparison-shell magic-style comparison-surface text-white">
      <section className="mx-auto grid min-h-screen w-full max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
        <div className="grid gap-6">
          <div className="comparison-card overflow-hidden rounded-[1.8rem] p-8 sm:p-10">
            <Link href="/" className="comparison-pill w-fit text-white">
              ← Back to comparison
            </Link>

            <div className="mt-10 space-y-5">
              <p className="hero-eyebrow text-white/70">Magic UI</p>
              <h1 className="hero-title max-w-2xl text-4xl font-semibold tracking-tight sm:text-6xl">
                Cinematic, glossy, and built for impact.
              </h1>
              <p className="max-w-xl text-sm leading-7 text-white/72 sm:text-base">
                Glowing gradients, glass panels, and a more dramatic motion-first feel.
                This should read as a premium landing page rather than a standard admin UI.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="comparison-pill text-white">Glow</div>
              <div className="comparison-pill text-white">Glass</div>
              <div className="comparison-pill text-white">Motion-first</div>
              <div className="comparison-pill text-white">Spotlight</div>
            </div>

            <div className="relative mt-6 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.35),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.22),transparent_30%)]" />
              <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="hero-eyebrow text-white/70">Spotlight ribbon</p>
                  <h2 className="hero-title text-2xl font-semibold text-white">
                    Built for launches, promos, and polished hero sections
                  </h2>
                </div>
                <Button>Start now</Button>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <Card className="comparison-card rounded-[1.45rem] p-5">
              <p className="hero-eyebrow text-white/65">Reach</p>
              <strong className="mt-2 block text-3xl text-white">2.4M</strong>
              <p className="mt-2 text-sm text-white/65">impressions last week</p>
            </Card>
            <Card className="comparison-card rounded-[1.45rem] p-5">
              <p className="hero-eyebrow text-white/65">CTR</p>
              <strong className="mt-2 block text-3xl text-white">14.8%</strong>
              <p className="mt-2 text-sm text-white/65">above benchmark</p>
            </Card>
            <Card className="comparison-card rounded-[1.45rem] p-5">
              <p className="hero-eyebrow text-white/65">Watch time</p>
              <strong className="mt-2 block text-3xl text-white">6m 12s</strong>
              <p className="mt-2 text-sm text-white/65">for demo experience</p>
            </Card>
            <Card className="comparison-card rounded-[1.45rem] p-5">
              <p className="hero-eyebrow text-white/65">Boost</p>
              <strong className="mt-2 block text-3xl text-white">+31%</strong>
              <p className="mt-2 text-sm text-white/65">after redesign</p>
            </Card>
          </div>
        </div>

        <div className="grid gap-6">
          <Card className="comparison-card rounded-[1.8rem] p-1">
            <div className="rounded-[1.55rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <Card.Header className="space-y-2 p-0">
                <p className="hero-eyebrow text-white/70">Launch panel</p>
                <h2 className="hero-title text-2xl font-semibold text-white">Hero section controls</h2>
              </Card.Header>
              <Card.Content className="space-y-5 p-0 pt-6 text-white/80">
                <TextField>
                  <Label className="text-white/80">Campaign name</Label>
                  <Input placeholder="Midnight release" />
                </TextField>
                <TextField>
                  <Label className="text-white/80">Destination</Label>
                  <Input placeholder="/waitlist" />
                </TextField>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Button>Launch</Button>
                  <Button variant="outline">Preview</Button>
                </div>
              </Card.Content>
            </div>
          </Card>

          <Card className="comparison-card rounded-[1.8rem] p-1">
            <div className="rounded-[1.55rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/0 p-6 backdrop-blur-xl">
              <p className="hero-eyebrow text-white/70">Spotlight</p>
              <h3 className="hero-title mt-2 text-xl font-semibold text-white">Why Magic UI feels different</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">
                The library typically emphasizes motion, depth, and premium polish, so this
                page uses glow rings, glass layers, and a stronger visual center of gravity.
              </p>
              <div className="mt-5 rounded-[1.25rem] border border-white/10 bg-black/20 p-4 text-sm text-white/75">
                Suggested interaction: hover the cards, then compare the hero on each route.
              </div>
            </div>
          </Card>

          <Card className="comparison-card rounded-[1.8rem] p-1">
            <div className="rounded-[1.55rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <p className="hero-eyebrow text-white/70">Motion strip</p>
              <div className="mt-4 grid gap-3">
                <div className="h-2 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-400 to-cyan-400" />
                <div className="h-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500" />
                <div className="h-2 rounded-full bg-gradient-to-r from-pink-500 via-rose-400 to-amber-300" />
              </div>
              <p className="mt-4 text-sm leading-7 text-white/70">
                A simple layered strip suggests motion and premium polish without adding
                extra dependencies.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
