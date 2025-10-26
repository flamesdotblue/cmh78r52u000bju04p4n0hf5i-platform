import { Cpu, Shield, Rocket } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Fast by default',
    desc: 'Vite + React + Tailwind deliver instant feedback and crisp DX.'
  },
  {
    icon: Shield,
    title: 'Production-grade',
    desc: 'Best practices baked in with modern tooling and accessibility.'
  },
  {
    icon: Cpu,
    title: '3D, simply',
    desc: 'Drop-in Spline scenes for vivid motion and effortless depth.'
  }
];

export default function FeatureGrid() {
  return (
    <section id="features" className="relative isolate">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-2xl font-semibold sm:text-3xl">Design-first components</h2>
          <p className="mt-3 text-white/70">
            Compose clear, focused sections that are easy to extend. Each component has a single responsibility.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div key={i} className="group rounded-xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur transition hover:bg-white/10">
              <div className="mb-4 inline-flex rounded-lg bg-white/10 p-3 ring-1 ring-white/15">
                <f.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
