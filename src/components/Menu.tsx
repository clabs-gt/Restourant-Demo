

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


const Menu = () => {
  return (
    <section id="menu" className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-burger-accent/15 bg-white p-7 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-burger-accent-dark">
              Signature menu
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-burger-text" style={{ fontFamily: 'var(--font-display)' }}>
              Built for bold appetites.
            </h2>
            <ul className="mt-6 space-y-4">
              {specials.map((item) => (
                <li key={item.title} className="rounded-2xl bg-burger-accent-dark p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm text-burger-ink/70">{item.description}</p>
                    </div>
                    <span className="rounded-full bg-burger-ink/10 px-3 py-1 text-sm font-semibold text-burger-accent">
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
            <h2 className="mt-2 text-3xl font-semibold text-burger-text" style={{ fontFamily: 'var(--font-display)' }}>
              A modern burger house with a cozy soul.
            </h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item} className="rounded-2xl bg-burger-accent-dark/80 p-4 text-sm font-medium shadow-sm">
                  {item}
                </div>
              ))}
            </div>
            <div id="visit" className="mt-8 rounded-3xl bg-burger-text p-5 text-white">
              <p className="text-sm uppercase tracking-[0.25em] text-white/70">Visit us</p>
              <p className="mt-2 text-xl font-semibold">12 Market Street, Downtown</p>
              <p className="mt-1 text-sm text-white/75">Open daily · 11am to 1am</p>
            </div>
          </div>
        </section>
  )
}

export default Menu