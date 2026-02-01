import React from 'react'

export default function Hero() {
  const wa =
    'https://wa.me/62813330861324?text=' +
    encodeURIComponent('Halo URCON, saya ingin konsultasi produk')

  return (
    <section className="hero">
      <div className="container">
        <div>
          <h1>URCON — Tactical Wear yang Berkarakter</h1>
          <p className="lead">
            Tactical wear premium untuk medan urban dan lapangan.
            Dirancang tahan banting, nyaman dipakai, dan tetap solid di setiap situasi.
          </p>

          <div className="hero-actions">
            <a href={wa} className="btn primary">Konsultasi & Pesan</a>
            <a href="#products" className="btn outline">Lihat Koleksi</a>
          </div>

          <div className="hero-trust">
            ◎ Dipercaya komunitas tactical & urban wear
          </div>
        </div>

        {/* HERO IMAGE DARI PUBLIC */}
        <img
          src="/hero-recon.jpg"
          alt="URCON Recon Elite Tee"
          className="hero-image"
          loading="eager"
          decoding="async"
        />
      </div>
    </section>
  )
}
