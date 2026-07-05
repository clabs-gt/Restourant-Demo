const specials = [
  { title: 'Smoky Sunset Burger', description: 'Double patty, cheddar glow, caramelized onions.' },
  { title: 'Golden Crunch Fries', description: 'Crispy fries with house spice and garlic aioli.' },
  { title: 'Honey Melt Shake', description: 'Creamy vanilla shake with a warm honey drizzle.' },
]

const highlights = [
  'Freshly grilled patties',
  'House-made sauces',
  'Late-night comfort bites',

]

function App() {
  return (
    <div className="min-h-screen bg-burger-bg text-burger-ink">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-burger-accent-dark">
            Tandoori Chargha
          </p>
          <h2 className="text-xl font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
            Burger House
          </h2>
        </div>
        <nav className="hidden gap-6 text-sm font-medium text-burger-ink/80 md:flex">
          <a href="#menu" className="transition hover:text-burger-accent-dark">
            Menu
          </a>
          <a href="#story" className="transition hover:text-burger-accent-dark">
            Story
          </a>
          <a href="#visit" className="transition hover:text-burger-accent-dark">
            Visit
          </a>
        </nav>
      </header>

      <main className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
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

        <section id="menu" className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-burger-accent/15 bg-white p-7 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-burger-accent-dark">
              Signature menu
            </p>
            <h2 className="mt-2 text-3xl font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
              Built for bold appetites.
            </h2>
            <ul className="mt-6 space-y-4">
              {specials.map((item) => (
                <li key={item.title} className="rounded-2xl bg-burger-bg p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm text-burger-ink/70">{item.description}</p>
                    </div>
                    <span className="rounded-full bg-burger-accent/10 px-3 py-1 text-sm font-semibold text-burger-accent-dark">
                      New
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div id="story" className="rounded-3xl border border-burger-accent/15 bg-burger-surface p-7 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-burger-accent-dark">
              Why guests love us
            </p>
            <h2 className="mt-2 text-3xl font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
              A modern burger house with a cozy soul.
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item} className="rounded-2xl bg-white/80 p-4 text-sm font-medium shadow-sm">
                  {item}
                </div>
              ))}
            </div>
            <div id="visit" className="mt-8 rounded-3xl bg-burger-ink p-5 text-white">
              <p className="text-sm uppercase tracking-[0.25em] text-white/70">Visit us</p>
              <p className="mt-2 text-xl font-semibold">12 Market Street, Downtown</p>
              <p className="mt-1 text-sm text-white/75">Open daily · 11am to 1am</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="mx-auto max-w-7xl px-6 pb-8 pt-16 text-sm text-burger-ink/70 lg:px-8">
        <p>© 2024 Tandoori Chargha. All rights reserved. 
          Developed by CLabs
        </p>
        
      </footer>
    </div>
  )
}

export default App
