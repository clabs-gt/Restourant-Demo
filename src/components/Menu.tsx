

const specials = [
  { title: 'Smoky Sunset Burger', description: 'Double patty, cheddar glow, caramelized onions.', img:'/smokey-sunset-burger-img.webp' },
  { title: 'Golden Crunch Fries', description: 'Crispy fries with house spice and garlic aioli.', img:'/golden-crunch-fries-img.avif' },
  { title: 'Honey Melt Shake', description: 'Creamy vanilla shake with a warm honey drizzle.', img:'/honey-melt-shake-img.png' },
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
                <li key={item.title} className="rounded-2xl p-4 relative overflow-hidden h-max z-0 sm:min-h-40 bg-burger-accent-dark">
                  <img src={item.img} alt={item.title} className="absolute  h-full w-full object-cover opacity-50 top-0 left-0 -z-10"/>
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
            <div id="visit" className="mt-8 rounded-3xl  p-5 text-white relative bg-burger-text">
              <p className="text-sm uppercase tracking-[0.25em] text-white/70">Visit us</p>
              <p className="mt-2 text-xl font-semibold">12 Market Street, Downtown</p>
              <p className="mt-1 text-sm text-white/75">Open daily · 11am to 1am</p>
            </div>
              <iframe className="h-56 w-full mt-8 rounded-3xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106239.49143609726!2d72.9345778923702!3d33.68347569056221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfc1007db8fecb%3A0x6b609f8e70f8e5b8!2sDhok%20Tahli%20Nearby%20Ownership%20Works%20Quaid%20E%20Azam%20University%20Islamabad!5e0!3m2!1sen!2s!4v1788958685488!5m2!1sen!2s" width="600" height="450" loading="lazy" ></iframe>
          </div>
        </section>
  )
}

export default Menu