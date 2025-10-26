export default function Stats() {
  const stats = [
    { label: 'Performance Score', value: '99+' },
    { label: 'Time to Interactive', value: '~0.6s' },
    { label: 'Bundle Size', value: '< 60kb' },
    { label: 'Components', value: 'Modular' }
  ];

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold sm:text-3xl">Lean, elegant, and fast</h2>
          <p className="mt-3 max-w-2xl text-white/70">
            Built with performance in mind and a focus on expressive UI. Ship something beautiful without friction.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur">
              <div className="text-3xl font-semibold tracking-tight sm:text-4xl">{s.value}</div>
              <div className="mt-2 text-sm text-white/70">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
