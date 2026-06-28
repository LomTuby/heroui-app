import Link from "next/link";
import { Badge, Button, Card, Checkbox, Switch } from "@heroui/react";

export default function DaisyuiPage() {
  return (
    <main className="comparison-shell daisyui-style comparison-surface">
      <section className="mx-auto grid min-h-screen w-full max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <div className="grid gap-6 lg:sticky lg:top-8 lg:h-fit">
          <Card className="comparison-card rounded-[1.65rem]">
            <Card.Content className="flex items-center justify-between gap-4 p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-fuchsia-500 to-amber-300" />
                <div>
                  <p className="text-sm font-semibold">daisyShop</p>
                  <p className="text-xs text-muted">Playful commerce UI</p>
                </div>
              </div>
              <div className="hidden gap-3 md:flex">
                <Link href="/" className="text-sm font-medium text-muted">
                  Compare
                </Link>
                <span className="text-sm font-medium text-muted">Browse</span>
                <span className="text-sm font-medium text-muted">Cart</span>
              </div>
            </Card.Content>
          </Card>

          <Card className="comparison-card overflow-hidden rounded-[1.65rem] p-1">
            <div className="rounded-[1.45rem] bg-gradient-to-br from-fuchsia-500 via-pink-500 to-amber-300 p-6 text-white shadow-2xl shadow-pink-500/20">
              <Link href="/" className="comparison-pill w-fit border-white/20 bg-white/15 text-white">
                ← Back to comparison
              </Link>
              <div className="mt-8 space-y-4">
                <p className="hero-eyebrow text-white/80">daisyUI</p>
                <h1 className="hero-title text-4xl font-semibold tracking-tight sm:text-6xl">
                  Friendly, playful, and a little bit loud.
                </h1>
                <p className="max-w-xl text-sm leading-7 text-white/85 sm:text-base">
                  Rounded shapes, bright color, and a happy visual language make this feel
                  approachable and fast to scan.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                <Badge content="fun" color="warning" />
                <Badge content="rounded" color="accent" />
                <Badge content="soft" color="success" />
              </div>
            </div>
          </Card>

          <Card className="comparison-card rounded-[1.65rem]">
            <Card.Header className="space-y-2">
              <p className="hero-eyebrow">Theme switcher</p>
              <h2 className="hero-title text-2xl font-semibold">One-click personality</h2>
            </Card.Header>
            <Card.Content className="grid gap-3 p-6">
              <div className="comparison-pill justify-between">
                <span className="text-sm font-medium">Default</span>
                <Badge content="active" color="accent" />
              </div>
              <div className="comparison-pill justify-between">
                <span className="text-sm font-medium">Dark</span>
                <Badge content="on" color="warning" />
              </div>
              <div className="comparison-pill justify-between">
                <span className="text-sm font-medium">Halloween</span>
                <Badge content="seasonal" color="success" />
              </div>
            </Card.Content>
          </Card>
        </div>

        <div className="grid gap-6">
          <Card className="comparison-card rounded-[1.65rem] overflow-hidden">
            <div className="grid gap-0 md:grid-cols-[0.82fr_1.18fr]">
              <div className="bg-white p-6">
                <p className="hero-eyebrow">Drawer</p>
                <h3 className="hero-title text-xl font-semibold">Category rail</h3>
                <div className="mt-4 grid gap-2 text-sm text-muted">
                  <span>New arrivals</span>
                  <span>Trending</span>
                  <span>Sale</span>
                  <span>Accessories</span>
                </div>
              </div>
              <div className="bg-rose-50 p-6">
                <p className="hero-eyebrow">Menu</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge content="Home" color="accent" />
                  <Badge content="Shop" color="warning" />
                  <Badge content="Deals" color="success" />
                  <Badge content="New" color="accent" />
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-700">
                  This feels more like a friendly storefront than an internal tool, which
                  is the key daisyUI contrast.
                </p>
              </div>
            </div>
          </Card>

          <Card className="comparison-card rounded-[1.65rem]">
            <Card.Header className="space-y-2">
              <p className="hero-eyebrow">Stats</p>
              <h2 className="hero-title text-2xl font-semibold">Card grid with big personality</h2>
            </Card.Header>
            <Card.Content className="grid gap-4 p-6 sm:grid-cols-3">
              <div className="rounded-[1.25rem] bg-white p-4 shadow-sm">
                <p className="text-sm text-muted">Visitors</p>
                <strong className="mt-2 block text-3xl">24.5k</strong>
              </div>
              <div className="rounded-[1.25rem] bg-white p-4 shadow-sm">
                <p className="text-sm text-muted">Orders</p>
                <strong className="mt-2 block text-3xl">1,284</strong>
              </div>
              <div className="rounded-[1.25rem] bg-white p-4 shadow-sm">
                <p className="text-sm text-muted">Conversion</p>
                <strong className="mt-2 block text-3xl">8.1%</strong>
              </div>
            </Card.Content>
          </Card>

          <Card className="comparison-card rounded-[1.65rem] overflow-hidden">
            <div className="grid gap-0 md:grid-cols-[0.95fr_1.05fr]">
              <div className="bg-rose-100 p-6">
                <p className="hero-eyebrow">Actions</p>
                <h3 className="hero-title text-xl font-semibold">Fast primary flow</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  Big buttons and strong color blocks make the important thing obvious.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Button>Join now</Button>
                  <Button variant="outline">Maybe later</Button>
                </div>
              </div>
              <div className="bg-white p-6">
                <p className="hero-eyebrow">Toggles</p>
                <div className="mt-4 grid gap-4">
                  <div className="comparison-pill justify-between">
                    <span className="text-sm font-medium">Email updates</span>
                    <Switch defaultSelected />
                  </div>
                  <div className="comparison-pill justify-between">
                    <span className="text-sm font-medium">Beta access</span>
                    <Checkbox defaultSelected />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
