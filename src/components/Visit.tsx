
const Visit = () => {
  return (
    <section id="visit" className="rounded-3xl border border-burger-accent/15 bg-white p-7 shadow-sm mt-10">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-burger-accent-dark">
        📍 Visit Us
      </p>
      <h2 className="mt-2 text-3xl font-semibold font-display text-burger-text">
        Stop by anytime.
      </h2>
      
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {/* Location Card */}
        <div className="rounded-[20px] border border-burger-accent/20 bg-burger-surface p-6">
          <h3 className="text-lg font-semibold text-burger-text">Main Location</h3>
          <p className="mt-2 text-sm text-burger-text/75">
            12 Market Street<br />
            Downtown District<br />
            City Center
          </p>
          <p className="mt-4 font-semibold text-burger-accent-dark">
            🚗 Free parking available
          </p>
        </div>

        {/* Hours Card */}
        <div className="rounded-[20px] border border-burger-accent/20 bg-burger-cream p-6">
          <h3 className="text-lg font-semibold text-burger-text">Hours</h3>
          <div className="mt-3 space-y-1 text-sm text-burger-text/75">
            <p>Monday - Friday: 11:00 AM - 1:00 AM</p>
            <p>Saturday - Sunday: 10:00 AM - 2:00 AM</p>
          </div>
          <p className="mt-4 text-sm font-medium text-burger-accent-dark">
            ⏰ Always fresh & hot
          </p>
        </div>
      </div>

      {/* Contact & CTA */}
      <div className="mt-8 rounded-[20px] bg-burger-text p-6 text-white">
        <h3 className="text-lg font-semibold">Get in Touch</h3>
        <p className="mt-2 text-white/80">
          Have questions? Want to host an event? Reach out to us anytime.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href="tel:+1-555-0123"
            className="rounded-full bg-burger-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-burger-accent-dark"
          >
            📞 Call Us
          </a>
          <a
            href="mailto:hello@tandoorichargha.com"
            className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold transition hover:bg-white/20"
          >
            ✉️ Email
          </a>
        </div>
      </div>
    </section>
  )
}

export default Visit