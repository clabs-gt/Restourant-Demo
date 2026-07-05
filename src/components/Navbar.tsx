
const Navbar = () => {
  return (
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
  )
}

export default Navbar