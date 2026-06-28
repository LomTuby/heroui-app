import Link from "next/link";
import { Badge, Button, Card, Input, Label, TextField } from "@heroui/react";

export default function ShadcnPage() {
  return (
    <main className="comparison-shell shadcn-style comparison-surface">
      <section className="mx-auto grid min-h-screen w-full max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
        <div className="flex flex-col gap-6">
          <div className="space-y-6 pt-2">
            <Link href="/" className="comparison-pill w-fit">
              ← Back to comparison
            </Link>
            <div className="space-y-4">
              <p className="hero-eyebrow">shadcn/ui</p>
              <h1 className="hero-title max-w-2xl text-4xl font-semibold tracking-tight sm:text-6xl">
                Quiet, balanced, and product-focused.
              </h1>
              <p className="text-muted max-w-xl text-base leading-7">
                This layout leans editorial: lots of breathing room, a muted palette,
                fine borders, and cards that feel intentionally understated rather than flashy.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="comparison-pill justify-between"><span>Rounded 10px</span><Badge content="base" color="default" /></div>
            <div className="comparison-pill justify-between"><span>Low elevation</span><Badge content="soft" color="accent" /></div>
            <div className="comparison-pill justify-between"><span>Muted neutral tone</span><Badge content="text" color="warning" /></div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <Card className="comparison-card rounded-[0.95rem]">
              <Card.Header className="space-y-2 border-b border-subtle/60 pb-5">
                <p className="hero-eyebrow">Command</p>
                <h2 className="hero-title text-2xl font-semibold">Search and command palette</h2>
              </Card.Header>
              <Card.Content className="space-y-4 p-6">
                <TextField>
                  <Label>Search docs</Label>
                  <Input placeholder="Type a command..." />
                </TextField>
                <div className="space-y-2 rounded-lg border border-subtle/70 bg-white p-3">
                  <div className="flex items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-slate-50">
                    <span>Open settings</span>
                    <span className="text-muted">⌘K</span>
                  </div>
                  <div className="flex items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-slate-50">
                    <span>Create invoice</span>
                    <span className="text-muted">⌘N</span>
                  </div>
                  <div className="flex items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-slate-50">
                    <span>Invite teammate</span>
                    <span className="text-muted">⌘I</span>
                  </div>
                </div>
              </Card.Content>
            </Card>

            <Card className="comparison-card rounded-[0.95rem]">
              <Card.Header className="space-y-2 border-b border-subtle/60 pb-5">
                <p className="hero-eyebrow">Metrics</p>
                <h2 className="hero-title text-2xl font-semibold">Compact stats</h2>
              </Card.Header>
              <Card.Content className="grid gap-3 p-6">
                <div className="flex items-center justify-between rounded-md border border-subtle/70 px-4 py-3">
                  <span className="text-sm text-muted">Active projects</span>
                  <strong>18</strong>
                </div>
                <div className="flex items-center justify-between rounded-md border border-subtle/70 px-4 py-3">
                  <span className="text-sm text-muted">Open tasks</span>
                  <strong>42</strong>
                </div>
                <div className="flex items-center justify-between rounded-md border border-subtle/70 px-4 py-3">
                  <span className="text-sm text-muted">Builds passed</span>
                  <strong>99.2%</strong>
                </div>
              </Card.Content>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <Card className="comparison-card rounded-[0.95rem]">
              <Card.Header className="space-y-2 border-b border-subtle/60 pb-5">
                <p className="hero-eyebrow">Dialog</p>
                <h2 className="hero-title text-2xl font-semibold">Confirmation sheet</h2>
              </Card.Header>
              <Card.Content className="space-y-4 p-6">
                <p className="text-sm leading-6 text-muted">
                  Delete the project and all associated files? This mirrors the kind of calm,
                  deliberate confirmation pattern shadcn/ui is known for.
                </p>
                <div className="rounded-lg border border-subtle/70 bg-slate-50 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">Project Alpha</p>
                      <p className="text-xs text-muted">Last modified 2h ago</p>
                    </div>
                    <Badge content="protected" color="warning" />
                  </div>
                  <div className="mt-4 flex gap-3">
                    <Button variant="outline">Cancel</Button>
                    <Button>Delete project</Button>
                  </div>
                </div>
              </Card.Content>
            </Card>

            <Card className="comparison-card rounded-[0.95rem]">
              <Card.Header className="space-y-2 border-b border-subtle/60 pb-5">
                <p className="hero-eyebrow">Toast</p>
                <h2 className="hero-title text-2xl font-semibold">Inline feedback stack</h2>
              </Card.Header>
              <Card.Content className="space-y-3 p-6">
                <div className="rounded-lg border border-subtle/70 bg-white px-4 py-3 text-sm">
                  Profile saved successfully.
                </div>
                <div className="rounded-lg border border-subtle/70 bg-slate-50 px-4 py-3 text-sm">
                  Sync paused while offline.
                </div>
                <div className="rounded-lg border border-subtle/70 bg-white px-4 py-3 text-sm">
                  Deploy preview ready for review.
                </div>
              </Card.Content>
            </Card>
          </div>
        </div>

        <div className="grid gap-6">
          <Card className="comparison-card rounded-[0.95rem]">
            <Card.Header className="space-y-2 border-b border-subtle/60 pb-5">
              <p className="hero-eyebrow">Form sample</p>
              <h2 className="hero-title text-2xl font-semibold">Minimal form composition</h2>
            </Card.Header>
            <Card.Content className="space-y-5 p-6">
              <TextField>
                <Label>Workspace name</Label>
                <Input placeholder="Northstar Studio" />
              </TextField>
              <TextField>
                <Label>Project slug</Label>
                <Input placeholder="northstar" />
              </TextField>
              <div className="grid gap-3 sm:grid-cols-2">
                <Button>Save changes</Button>
                <Button variant="outline">Cancel</Button>
              </div>
            </Card.Content>
          </Card>

          <Card className="comparison-card rounded-[0.95rem]">
            <Card.Header className="space-y-2 border-b border-subtle/60 pb-5">
              <p className="hero-eyebrow">Table</p>
              <h2 className="hero-title text-2xl font-semibold">Compact data table</h2>
            </Card.Header>
            <Card.Content className="p-6">
              <div className="overflow-hidden rounded-lg border border-subtle/70">
                <div className="grid grid-cols-3 border-b border-subtle/70 bg-slate-50 px-4 py-3 text-xs font-medium uppercase tracking-wide text-muted">
                  <span>Name</span>
                  <span>Role</span>
                  <span>Status</span>
                </div>
                <div className="grid grid-cols-3 px-4 py-3 text-sm">
                  <span>Olivia</span>
                  <span>Design</span>
                  <span>Active</span>
                </div>
                <div className="grid grid-cols-3 border-t border-subtle/70 px-4 py-3 text-sm">
                  <span>Noah</span>
                  <span>Engineering</span>
                  <span>Review</span>
                </div>
              </div>
            </Card.Content>
          </Card>
        </div>
      </section>
    </main>
  );
}
