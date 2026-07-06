
const Story = () => {
  const highlights = [
    { icon: '🔥', title: 'Fresh Grilled', desc: 'Every patty smashed to order on a screaming hot griddle.' },
    { icon: '👨‍🍳', title: 'Craft Sauces', desc: 'House-made special sauces crafted from secret family recipes.' },
    { icon: '🌙', title: 'Late Night Love', desc: 'Open till 1–2 AM for those late-night cravings.' },
    { icon: '⭐', title: 'Quality First', desc: 'Premium beef, fresh toppings, zero shortcuts ever.' },
  ]

  return (
    <section id="story" className="mt-10">
      <div className="rounded-3xl border border-burger-accent/15 bg-burger-surface p-7 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-burger-accent-dark">
          Our Story
        </p>
        <h2 className="mt-2 text-3xl font-semibold font-display text-burger-text">
          Why guests keep coming back.
        </h2>
        
        <p className="mt-5 max-w-3xl text-base text-burger-text/90">
          Born from a love of simple, bold flavors and late-night nostalgia, Tandoori Chargha Burger House 
          started as a dream to bring warmth and comfort to every plate. We believe that a great burger isn't just food—
          it's a moment of joy, best shared with friends over good conversation.
        </p>

        {/* Highlights Grid */}
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-burger-accent/15 bg-burger-accent p-5 shadow-sm"
            >
              <p className="text-2xl">{item.icon}</p>
              <h3 className="mt-3 font-semibold text-burger-ink">{item.title}</h3>
              <p className="mt-1 text-sm text-burger-ink/70">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-8 rounded-2xl bg-burger-accent-dark p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-burger-accent-dark">
            ⭐⭐⭐⭐⭐ What our guests say
          </p>
          <p className="mt-3 italic text-burger-ink/80">
            "The best burger I've had in years. The staff is friendly, the place feels like home, and you can taste 
            the care in every bite. Worth the late-night drive."
          </p>
          <p className="mt-2 text-sm font-semibold text-burger-ink">— Alex, Local Regular</p>
        </div>
      </div>
    </section>
  )
}

export default Story