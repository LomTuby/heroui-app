import Link from "next/link";
import {
  Avatar,
  Badge,
  Button,
  Card,
  Checkbox,
  Input,
  Label,
  Radio,
  RadioGroup,
  Switch,
  TextField,
} from "@heroui/react";

const tabs = [
  { name: "HeroUI", path: "/" },
  { name: "shadcn/ui", path: "/shadcn" },
  { name: "daisyUI", path: "/daisyui" },
  { name: "Magic UI", path: "/magicui" },
];

function Tabs() {
  return (
    <div className="comparison-tabs">
      {tabs.map((tab) => (
        <Link key={tab.path} href={tab.path} className="comparison-pill">
          {tab.name}
        </Link>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="comparison-shell comparison-surface">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <header className="comparison-card overflow-hidden rounded-[1.5rem] px-6 py-6 sm:px-8 sm:py-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <p className="hero-eyebrow">Component system comparison</p>
              <h1 className="hero-title text-4xl font-semibold tracking-tight sm:text-5xl">
                HeroUI baseline with sharper contrast and cleaner hierarchy.
              </h1>
              <p className="text-muted max-w-xl text-sm leading-6 sm:text-base">
                Use these pages to compare each library’s shape language, spacing,
                density, and motion assumptions. Each route now has its own visual
                personality instead of a shared template.
              </p>
            </div>
            <Tabs />
          </div>
        </header>

        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <Card className="comparison-card rounded-[1.5rem]">
            <Card.Header className="space-y-3">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="hero-eyebrow">Preview</p>
                  <h2 className="hero-title text-2xl font-semibold">HeroUI controls</h2>
                </div>
                <Badge content="LIVE" color="success" />
              </div>
            </Card.Header>
            <Card.Content className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="comparison-pill justify-between">
                  <Avatar>
                    <Avatar.Image src="https://i.pravatar.cc/150?u=heroui" />
                    <Avatar.Fallback>H</Avatar.Fallback>
                  </Avatar>
                  <span className="text-sm font-medium">Avatar</span>
                </div>
                <div className="comparison-pill justify-between">
                  <Badge content="3" color="accent" className="w-fit">
                    <Button size="sm">Inbox</Button>
                  </Badge>
                </div>
                <div className="comparison-pill justify-between">
                  <span className="text-sm font-medium">Notifications</span>
                  <Switch defaultSelected />
                </div>
                <div className="comparison-pill justify-between">
                  <span className="text-sm font-medium">Consent</span>
                  <Checkbox defaultSelected />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <TextField>
                  <Label>Email</Label>
                  <Input type="email" placeholder="ada@lovelace.dev" />
                </TextField>
                <div className="rounded-2xl border border-subtle p-4">
                  <p className="mb-3 text-sm font-medium">Mood</p>
                  <RadioGroup defaultValue="calm" className="grid gap-3 sm:grid-cols-3">
                    <Radio value="calm">Calm</Radio>
                    <Radio value="focused">Focused</Radio>
                    <Radio value="bold">Bold</Radio>
                  </RadioGroup>
                </div>
              </div>
            </Card.Content>
          </Card>

          <Card className="comparison-card rounded-[1.5rem]">
            <Card.Header>
              <div>
                <p className="hero-eyebrow">What to compare</p>
                <h2 className="hero-title text-2xl font-semibold">Visual checklist</h2>
              </div>
            </Card.Header>
            <Card.Content className="space-y-4 text-sm leading-6 text-muted">
              <p>• shadcn/ui should feel restrained and editorial.</p>
              <p>• daisyUI should read playful, colorful, and soft.</p>
              <p>• Magic UI should feel cinematic, glassy, and high contrast.</p>
              <p>• This HeroUI page should stay crisp and product-like.</p>
            </Card.Content>
          </Card>
        </div>
      </section>
    </main>
  );
}
