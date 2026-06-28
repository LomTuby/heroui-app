import Navigation from "@/app/components/Navigation";
import { Button, Card, Checkbox, Switch } from "@heroui/react";

export default function DaisyuiPage() {
  return (
    <main className="comparison-shell daisyui-style comparison-surface">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
        <header className="comparison-card overflow-hidden rounded-[1.65rem] p-1">
          <div className="rounded-[1.45rem] bg-gradient-to-br from-fuchsia-500 via-pink-500 to-amber-300 px-6 py-8 text-white shadow-2xl shadow-pink-500/20">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl space-y-4">
                <p className="hero-eyebrow text-white/80">daisyUI</p>
                <h1 className="hero-title text-4xl font-semibold tracking-tight sm:text-5xl">
                  Friendly, playful, and loud.
                </h1>
                <p className="max-w-xl text-sm leading-7 text-white/85 sm:text-base">
                  Vibrant colors and organic shapes make this UI feel approachable,
                  energetic, and fun to interact with.
                </p>
              </div>
              <Navigation />
            </div>
          </div>
        </header>

        <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-6">
            <Card className="comparison-card rounded-[1.65rem] overflow-hidden">
               <Card.Header className="bg-rose-50 border-b border-rose-100 px-6 py-4">
                 <h3 className="font-bold text-rose-700">Shelf Drawer</h3>
               </Card.Header>
               <Card.Content className="p-0">
                 <div className="flex">
                    <div className="w-16 bg-rose-100/50 border-r border-rose-100 flex flex-col items-center py-6 gap-6">
                       <div className="h-8 w-8 rounded-xl bg-rose-400" />
                       <div className="h-8 w-8 rounded-xl bg-rose-200" />
                       <div className="h-8 w-8 rounded-xl bg-rose-200" />
                    </div>
                    <div className="flex-1 p-6 space-y-4 text-sm">
                       <p className="font-semibold text-slate-600 uppercase tracking-widest text-[10px]">Categories</p>
                       <div className="space-y-2">
                          <div className="px-4 py-2 bg-rose-500 text-white rounded-xl font-medium cursor-pointer shadow-lg shadow-rose-500/30">New Arrivals</div>
                          <div className="px-4 py-2 hover:bg-rose-50 rounded-xl font-medium cursor-pointer transition-colors">Trending</div>
                          <div className="px-4 py-2 hover:bg-rose-50 rounded-xl font-medium cursor-pointer transition-colors">Summer Sale</div>
                       </div>
                    </div>
                 </div>
               </Card.Content>
            </Card>

            <Card className="comparison-card rounded-[1.65rem] p-6 space-y-6">
               <h3 className="font-bold text-lg">Vibrant Buttons</h3>
               <div className="flex flex-wrap gap-3">
                  <Button className="bg-indigo-500 text-white rounded-2xl shadow-lg shadow-indigo-500/40">Primary</Button>
                  <Button className="bg-emerald-500 text-white rounded-2xl shadow-lg shadow-emerald-500/40">Success</Button>
                  <Button className="bg-amber-500 text-white rounded-2xl shadow-lg shadow-amber-500/40">Warning</Button>
                  <Button className="bg-rose-500 text-white rounded-2xl shadow-lg shadow-rose-500/40">Error</Button>
               </div>
               <div className="flex flex-wrap gap-3">
                  <Button variant="outline" className="border-2 border-indigo-500 text-indigo-600 rounded-2xl hover:bg-indigo-50">Outline</Button>
                  <Button variant="ghost" className="bg-indigo-50 text-indigo-600 rounded-2xl">Ghost</Button>
               </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="comparison-card rounded-[1.65rem] p-8">
               <h3 className="font-bold text-2xl mb-8">Checkout Flow</h3>
               <div className="space-y-10">
                  {/* Progress Bar */}
                  <div className="relative">
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2" />
                    <div className="absolute top-1/2 left-0 w-2/3 h-1 bg-indigo-500 -translate-y-1/2" />
                    <div className="relative flex justify-between">
                       <div className="h-10 w-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold ring-8 ring-white shadow-xl shadow-indigo-500/20">1</div>
                       <div className="h-10 w-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold ring-8 ring-white shadow-xl shadow-indigo-500/20">2</div>
                       <div className="h-10 w-10 rounded-full bg-white border-4 border-slate-100 text-slate-300 flex items-center justify-center font-bold ring-8 ring-white">3</div>
                    </div>
                    <div className="flex justify-between mt-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                       <span className="text-indigo-600">Cart</span>
                       <span className="text-indigo-600">Shipping</span>
                       <span>Payment</span>
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                     <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-600">Shipping Method</label>
                        <div className="p-4 rounded-[1.25rem] border-2 border-indigo-500 bg-indigo-50/50 flex justify-between items-center">
                           <div>
                              <p className="font-bold">Express Delivery</p>
                              <p className="text-xs text-indigo-600">1-2 business days</p>
                           </div>
                           <div className="h-6 w-6 rounded-full border-4 border-indigo-500 bg-white" />
                        </div>
                        <div className="p-4 rounded-[1.25rem] border-2 border-slate-100 hover:border-slate-200 transition-colors flex justify-between items-center cursor-pointer">
                           <div>
                              <p className="font-bold">Standard Ground</p>
                              <p className="text-xs text-slate-400">3-5 business days</p>
                           </div>
                           <div className="h-6 w-6 rounded-full border-2 border-slate-200 bg-white" />
                        </div>
                     </div>

                     <div className="space-y-4">
                        <div className="flex justify-between items-center">
                           <span className="font-bold text-slate-600">Gift wrap</span>
                           <Switch defaultSelected />
                        </div>
                        <div className="flex justify-between items-center">
                           <span className="font-bold text-slate-600">Send as anonymous</span>
                           <Checkbox />
                        </div>
                        <div className="pt-4 mt-4 border-t border-slate-100">
                           <div className="flex justify-between font-bold text-xl mb-4">
                              <span>Total</span>
                              <span>$158.00</span>
                           </div>
                           <Button className="w-full h-14 bg-indigo-500 text-white rounded-2xl text-lg font-bold shadow-xl shadow-indigo-500/30 hover:scale-[1.02] transition-transform">
                              Continue to Payment
                           </Button>
                        </div>
                     </div>
                  </div>
               </div>
            </Card>

            <div className="grid gap-6 sm:grid-cols-3">
               <Card className="comparison-card rounded-[1.65rem] p-6 bg-gradient-to-br from-fuchsia-500 to-pink-500 text-white">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/70">Promo</p>
                  <p className="text-3xl font-bold mt-2">20% OFF</p>
                  <p className="text-xs mt-1 text-white/80">Code: HELLO-UI</p>
               </Card>
               <Card className="comparison-card rounded-[1.65rem] p-6 bg-white">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Freebie</p>
                  <p className="text-3xl font-bold mt-2">STICKERS</p>
                  <p className="text-xs mt-1 text-slate-400">With every order</p>
               </Card>
               <Card className="comparison-card rounded-[1.65rem] p-6 bg-indigo-600 text-white">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-200">Bonus</p>
                  <p className="text-3xl font-bold mt-2">POINTS</p>
                  <p className="text-xs mt-1 text-indigo-200">Earn 2x rewards</p>
               </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
