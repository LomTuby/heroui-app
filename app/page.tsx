import Link from "next/link";
import Navigation from "@/app/components/Navigation";
import { Card, Button } from "@heroui/react";

const libraries = [
  {
    name: "HeroUI",
    description: "The baseline framework with sharp contrast and clean hierarchy.",
    path: "/heroui",
    color: "from-blue-500 to-cyan-400",
    pill: "Framework",
  },
  {
    name: "shadcn/ui",
    description: "Quiet, balanced, and product-focused editorial design.",
    path: "/shadcn",
    color: "from-slate-700 to-slate-900",
    pill: "Editorial",
  },
  {
    name: "daisyUI",
    description: "Friendly, playful, and colorful approachable visual language.",
    path: "/daisyui",
    color: "from-fuchsia-500 to-pink-500",
    pill: "Playful",
  },
  {
    name: "Magic UI",
    description: "Cinematic, glossy, and built for high-impact premium polish.",
    path: "/magicui",
    color: "from-violet-600 to-indigo-600",
    pill: "Cinematic",
  },
  {
    name: "Custom",
    description: "Built from scratch using raw Tailwind CSS for total control.",
    path: "/custom",
    color: "from-orange-500 to-amber-500",
    pill: "Bespoke",
  },
];

export default function Home() {
  return (
    <main className="comparison-shell comparison-surface">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-12 px-4 py-12 sm:px-6 lg:px-8">
        <header className="flex flex-col items-center text-center gap-6">
          <div className="space-y-4">
            <p className="hero-eyebrow">Design System Explorer</p>
            <h1 className="hero-title text-5xl font-bold tracking-tight sm:text-7xl">
              Compare Modern UI Libraries
            </h1>
            <p className="text-muted max-w-2xl mx-auto text-lg leading-8">
              Explore how different component systems handle shape language, spacing,
              density, and motion. Click any library below to see its personality in action.
            </p>
          </div>
          <Navigation />
        </header>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {libraries.map((lib) => (
            <Link key={lib.path} href={lib.path} className="group">
              <Card className="comparison-card h-full transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl overflow-hidden rounded-3xl">
                <div className={`h-24 bg-gradient-to-r ${lib.color} flex items-center px-8 text-white`}>
                  <span className="text-xs font-bold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full backdrop-blur-md">
                    {lib.pill}
                  </span>
                </div>
                <Card.Header className="pt-6 px-8">
                  <h2 className="text-2xl font-bold">{lib.name}</h2>
                </Card.Header>
                <Card.Content className="px-8 pb-8 space-y-6">
                  <p className="text-muted leading-relaxed">
                    {lib.description}
                  </p>
                  <Button
                    className="w-full group-hover:bg-opacity-90"
                    variant="primary"
                  >
                    Explore {lib.name}
                  </Button>
                </Card.Content>
              </Card>
            </Link>
          ))}
        </div>

        <footer className="mt-auto pt-12 border-t border-subtle text-center text-muted text-sm">
          <p>© 2024 UI Library Comparison. Built for analysis and demonstration.</p>
        </footer>
      </section>
    </main>
  );
}
