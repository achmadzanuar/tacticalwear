import React from 'react'

export default function CTA() {
  const wa =
    'https://wa.me/62813330861324?text=' +
    encodeURIComponent('Halo URCON, saya ingin konsultasi produk.')

  return (
    <section className="cta">
      <div className="container">
        <h2>Bergabung dengan Komunitas URCON</h2>
        <p>
          Stok terbatas untuk setiap seri. Konsultasikan kebutuhan Anda dan
          dapatkan rekomendasi produk yang paling sesuai dengan misi Anda.
        </p>

        <a
          className="btn primary large"
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
        >
          Konsultasi & Pesan via WhatsApp
        </a>
      </div>
    </section>
  )
}
