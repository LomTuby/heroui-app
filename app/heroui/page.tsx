import Navigation from "@/app/components/Navigation";
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

export default function HeroUIPage() {
  return (
    <main className="comparison-shell comparison-surface">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <header className="comparison-card overflow-hidden rounded-[1.5rem] px-6 py-6 sm:px-8 sm:py-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <p className="hero-eyebrow">HeroUI Framework</p>
              <h1 className="hero-title text-4xl font-semibold tracking-tight sm:text-5xl">
                The baseline for modern React applications.
              </h1>
              <p className="text-muted max-w-xl text-sm leading-6 sm:text-base">
                HeroUI provides a crisp, professional aesthetic with excellent
                accessibility and a highly customizable theme system.
              </p>
            </div>
            <Navigation />
          </div>
        </header>

        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <Card className="comparison-card rounded-[1.5rem]">
            <Card.Header className="space-y-3">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="hero-eyebrow">Preview</p>
                  <h2 className="hero-title text-2xl font-semibold">Standard Controls</h2>
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
                <p className="hero-eyebrow">Best Practice</p>
                <h2 className="hero-title text-2xl font-semibold">Rich Feedback</h2>
              </div>
            </Card.Header>
            <Card.Content className="space-y-4 text-sm leading-6">
              <p className="text-muted">
                HeroUI excels at providing immediate, accessible feedback through
                coordinated state changes and clear visual cues.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                   <Button variant="primary">Primary Action</Button>
                   <Button variant="outline">Secondary</Button>
                </div>
                <div className="flex gap-2">
                   <Badge content="New" variant="soft" />
                   <Badge content="Updated" variant="soft" />
                   <Badge content="Deprecated" variant="soft" />
                </div>
              </div>
              <div className="mt-4 p-4 rounded-xl bg-blue-50 border border-blue-100 text-blue-800">
                <strong>Pro-tip:</strong> Use the built-in theme provider to switch
                between light and dark modes seamlessly with automatic transition effects.
              </div>
            </Card.Content>
          </Card>
        </div>
      </section>
    </main>
  );
}
