export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div>
          <h1>URCON — Tactical Wear yang Berkarakter</h1>
          <p className="lead">
            Tactical wear premium untuk medan urban dan lapangan.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#products">
              Lihat Koleksi
            </a>
            <a className="btn outline" href="https://wa.me/62XXXXXXXXXX">
              Konsultasi & Pesan
            </a>
          </div>
        </div>
        <img
          src="/hero-recon.jpg"
          alt="URCON Recon Elite Tee"
          className="hero-image"
        />
      </div>
    </section>
  )
}
