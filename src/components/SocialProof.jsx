import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const testimonials = [
  {
    name: 'Rian',
    text: 'Baju URCON awet banget, cocok buat kerja lapangan dan aktivitas berat.',
    rating: 5
  },
  {
    name: 'Maya',
    text: 'Desainnya beda dari tactical lain. Nyaman dipakai seharian.',
    rating: 4
  },
  {
    name: 'Agus',
    text: 'Kualitasnya top, worth it untuk harga segini.',
    rating: 5
  }
]

export default function SocialProof() {
  return (
    <section className="social-proof">
      <div className="container">
        <h2>Apa Kata Mereka</h2>

        <div className="testimonials">
          {testimonials.map((t, i) => (
            <div className="testimonial" key={i}>
              <div className="rating">
                {[...Array(5)].map((_, idx) => (
                  <FontAwesomeIcon
                    key={idx}
                    icon={faStar}
                    className={idx < t.rating ? 'star active' : 'star'}
                  />
                ))}
              </div>

              <p className="quote">“{t.text}”</p>

              <span className="author">— {t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
