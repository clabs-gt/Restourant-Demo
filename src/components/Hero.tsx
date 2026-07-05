
const Hero = () => {
  return (
  <section className="grid items-center gap-8 rounded-4xl border border-burger-accent/20 bg-linear-to-br from-burger-surface via-burger-cream to-white p-8 shadow-[0_24px_80px_rgba(0,0,0,0.08)] lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-burger-accent/30 bg-white/70 px-3 py-1 text-sm font-semibold text-burger-accent-dark">
              🔥 New season smash burger
            </p>
            <h1
              className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Golden buns. Juicy patties. Pure comfort.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-burger-ink/75">
              Welcome to a warm, modern burger spot where the grill is glowing and every bite feels handcrafted.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#menu"
                className="rounded-full bg-burger-accent px-5 py-3 font-semibold text-white transition hover:bg-burger-accent-dark"
              >
                View specials
              </a>
              <a
                href="#visit"
                className="rounded-full border border-burger-accent/30 bg-white px-5 py-3 font-semibold text-burger-ink transition hover:border-burger-accent-dark"
              >
                Book a table
              </a>
            </div>
          </div>

          <div className="rounded-[28px] bg-burger-ink p-6 text-white shadow-2xl">
            <div className="rounded-[20px] border border-white/10 bg-linear-to-br from-burger-accent to-burger-accent-dark p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-white/80">Tonight’s pick</p>
              <h3 className="mt-3 text-2xl font-semibold">The Sunset Stack</h3>
              <p className="mt-2 text-sm text-white/80">
                Double smash, pepper jam, and melty cheddar in a crisp brioche bun.
              </p>
              <div className="mt-6 flex items-end justify-between">
                <div>
                  <p className="text-4xl font-black">4.9★</p>
                  <p className="text-sm text-white/70">Local favorite</p>
                </div>
                <div className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
                  Open till 1am
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Hero