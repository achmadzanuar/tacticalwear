import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullseye } from '@fortawesome/free-solid-svg-icons'
import { fetchHeroProduct } from '../lib/contentful'

export default function Hero() {
  const [heroProduct, setHeroProduct] = useState(null)

  const wa =
    'https://wa.me/62813330861324?text=' +
    encodeURIComponent(
      'Halo URCON, saya ingin tahu lebih lanjut tentang produk URCON.'
    )

  useEffect(() => {
    fetchHeroProduct().then(setHeroProduct)
  }, [])

  return (
    <section className="hero">
      <div className="container">
        {/* LEFT */}
        <div className="hero-content">
          <h1>URCON — Tactical Wear yang Berkarakter</h1>

          <p className="lead">
            Tactical wear premium untuk medan urban dan lapangan. Dirancang
            tahan banting, nyaman dipakai, dan tetap terlihat solid di setiap
            situasi.
          </p>

          <div className="hero-actions">
            <a
              className="btn primary large"
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
            >
              Konsultasi & Pesan
            </a>
            <a className="btn outline large" href="#products">
              Lihat Koleksi
            </a>
          </div>

          <div className="hero-trust">
            <FontAwesomeIcon icon={faBullseye} /> Dipercaya komunitas tactical &
            urban wear
          </div>
        </div>

        {/* RIGHT : IMAGE FROM CONTENTFUL */}
        <div className="hero-art">
          {heroProduct?.image ? (
            <img
              src={heroProduct.image}
              alt={heroProduct.name}
              className="hero-image"
              loading="eager"
            />
          ) : (
            <div className="hero-image placeholder">Loading...</div>
          )}
        </div>
      </div>
    </section>
  )
}
