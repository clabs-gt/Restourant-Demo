import Hero from "./components/Hero"
import Menu from "./components/Menu"
import Navbar from "./components/Navbar"
import Story from "./components/Story"
import Visit from "./components/Visit"



function App() {
  return (
    <div className="min-h-screen bg-burger-bg text-burger-ink">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 pb-16 lg:px-8 relative z-0">
        <Hero />
        <Menu />
        <Story/>
        <Visit/>

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
