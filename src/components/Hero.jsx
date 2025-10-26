import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Rocket, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/50gS2Nx3yhdqzJSa/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_40%_at_50%_0%,rgba(255,255,255,0.12),transparent_60%)]" />

      <div className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 pt-28 pb-24 sm:pt-36 sm:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10 backdrop-blur">
            <Star className="h-4 w-4 text-yellow-300" />
            <span className="text-xs tracking-wide text-white/80">Dreamy, modern, tech-forward</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl md:text-7xl">
            Build with motion.
            <br />
            Design with depth.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-5 max-w-2xl text-base text-white/80 sm:text-lg">
            A wavy, animated backdrop for your next idea. Crafted with Spline, React, and Tailwind to deliver a premium, immersive hero experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
            >
              <Rocket className="h-4 w-4" />
              Get Started
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/15 transition hover:bg-white/15"
            >
              Explore Features
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
