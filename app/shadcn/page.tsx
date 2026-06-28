import Navigation from "@/app/components/Navigation";
import { Badge, Button, Card, Input, Label } from "@heroui/react";

export default function ShadcnPage() {
  return (
    <main className="comparison-shell shadcn-style comparison-surface">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <header className="comparison-card overflow-hidden rounded-[0.95rem] px-6 py-6 sm:px-8 sm:py-8 bg-white/90 backdrop-blur-sm">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <p className="hero-eyebrow">shadcn/ui</p>
              <h1 className="hero-title text-4xl font-semibold tracking-tight sm:text-5xl">
                Quiet, balanced, and editorial.
              </h1>
              <p className="text-muted max-w-xl text-sm leading-6 sm:text-base">
                An understated aesthetic that prioritizes content and clarity through
                fine borders, muted tones, and generous whitespace.
              </p>
            </div>
            <Navigation />
          </div>
        </header>

        <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
          <div className="space-y-6">
            <Card className="comparison-card rounded-[0.95rem]">
              <Card.Header className="space-y-2 border-b border-subtle/60 pb-5">
                <p className="hero-eyebrow">Command Palette</p>
                <h2 className="hero-title text-2xl font-semibold">Quick search</h2>
              </Card.Header>
              <Card.Content className="space-y-4 p-6">
                <div className="relative">
                   <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-slate-400">
                     <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                   </div>
                   <input
                    className="w-full bg-slate-50 border border-slate-200 rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400"
                    placeholder="Type a command or search..."
                   />
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wider px-2 mb-2">Suggestions</p>
                  <div className="flex items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-slate-100 cursor-pointer transition-colors">
                    <span className="flex items-center gap-2">
                       <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 2C3.22386 2 3 2.22386 3 2.5V12.5C3 12.7761 3.22386 13 3.5 13H11.5C11.7761 13 12 12.7761 12 12.5V2.5C12 2.22386 11.7761 2 11.5 2H3.5ZM2 2.5C2 1.67157 2.67157 1 3.5 1H11.5C12.3284 1H13 1.67157 13 2.5V12.5C13 13.3284 12.3284 14 11.5 14H3.5C2.67157 14 2 13.3284 2 12.5V2.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                       Search Docs
                    </span>
                    <kbd className="text-[10px] bg-slate-200 px-1.5 py-0.5 rounded border border-slate-300">⌘D</kbd>
                  </div>
                  <div className="flex items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-slate-100 cursor-pointer transition-colors">
                    <span className="flex items-center gap-2">
                       <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 3C1.22386 3 1 3.22386 1 3.5V11.5C1 11.7761 1.22386 12 1.5 12H13.5C13.7761 12 14 11.7761 14 11.5V3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM0 3.5C0 2.67157 0.67157 2 1.5 2H13.5C14.3284 2 15 2.67157 15 3.5V11.5C15 12.3284 14.3284 13 13.5 13H1.5C0.67157 13 0 12.3284 0 11.5V3.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                       Settings
                    </span>
                    <kbd className="text-[10px] bg-slate-200 px-1.5 py-0.5 rounded border border-slate-300">⌘S</kbd>
                  </div>
                </div>
              </Card.Content>
            </Card>

            <Card className="comparison-card rounded-[0.95rem]">
              <Card.Header className="space-y-2 border-b border-subtle/60 pb-5">
                <p className="hero-eyebrow">Data Table</p>
                <h2 className="hero-title text-2xl font-semibold">Recent Transactions</h2>
              </Card.Header>
              <Card.Content className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-slate-50/50 border-b border-subtle">
                      <tr className="text-slate-500 font-medium">
                        <th className="px-6 py-3">Customer</th>
                        <th className="px-6 py-3">Status</th>
                        <th className="px-6 py-3 text-right">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-subtle">
                      <tr className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4">
                           <div className="font-medium">Liam Johnson</div>
                           <div className="text-xs text-slate-400">liam@example.com</div>
                        </td>
                        <td className="px-6 py-4"><Badge content="Success" variant="soft" /></td>
                        <td className="px-6 py-4 text-right font-medium">$250.00</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4">
                           <div className="font-medium">Olivia Smith</div>
                           <div className="text-xs text-slate-400">olivia@example.com</div>
                        </td>
                        <td className="px-6 py-4"><Badge content="Pending" variant="soft" /></td>
                        <td className="px-6 py-4 text-right font-medium">$125.00</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-6 py-4">
                           <div className="font-medium">Noah Williams</div>
                           <div className="text-xs text-slate-400">noah@example.com</div>
                        </td>
                        <td className="px-6 py-4"><Badge content="Failed" variant="soft" /></td>
                        <td className="px-6 py-4 text-right font-medium">$45.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="px-6 py-3 border-t border-subtle bg-slate-50/30 text-xs text-slate-400">
                  Showing 3 of 42 transactions
                </div>
              </Card.Content>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="comparison-card rounded-[0.95rem]">
              <Card.Header className="space-y-2 border-b border-subtle/60 pb-5">
                <p className="hero-eyebrow">Form Design</p>
                <h2 className="hero-title text-2xl font-semibold">Account Settings</h2>
              </Card.Header>
              <Card.Content className="space-y-6 p-6">
                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Username</Label>
                    <Input placeholder="shadcn" className="bg-slate-50 border-slate-200" />
                    <p className="text-[11px] text-slate-400">This is your public display name.</p>
                  </div>
                  <div className="grid gap-2">
                    <Label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Email</Label>
                    <Input placeholder="me@example.com" type="email" className="bg-slate-50 border-slate-200" />
                  </div>
                  <div className="grid gap-2">
                    <Label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Bio</Label>
                    <textarea
                      className="w-full min-h-[100px] bg-slate-50 border border-slate-200 rounded-md p-3 text-sm focus:outline-none focus:ring-1 focus:ring-slate-400"
                      placeholder="Tell us a little bit about yourself"
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-3 pt-4 border-t border-subtle">
                  <Button variant="outline" size="sm">Cancel</Button>
                  <Button size="sm" className="bg-slate-900 text-white hover:bg-slate-800">Update profile</Button>
                </div>
              </Card.Content>
            </Card>

            <Card className="comparison-card rounded-[0.95rem]">
              <Card.Header className="space-y-2 border-b border-subtle/60 pb-5">
                <p className="hero-eyebrow">Visual Hierarchy</p>
                <h2 className="hero-title text-2xl font-semibold">Design Principles</h2>
              </Card.Header>
              <Card.Content className="space-y-4 p-6 text-sm text-slate-600 leading-relaxed">
                <div className="flex gap-4">
                  <div className="h-10 w-1 min-w-[4px] bg-slate-900 rounded-full" />
                  <p><strong>Subtle Borders:</strong> 1px borders in low-contrast grays create structure without noise.</p>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-1 min-w-[4px] bg-slate-400 rounded-full" />
                  <p><strong>Typography First:</strong> Using font weight and size to create hierarchy instead of colors.</p>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-1 min-w-[4px] bg-slate-200 rounded-full" />
                  <p><strong>Neutral Palette:</strong> Relying on a grayscale foundation with very deliberate use of color.</p>
                </div>
              </Card.Content>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
