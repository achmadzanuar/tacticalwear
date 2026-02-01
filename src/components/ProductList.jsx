import React, { useEffect, useState } from 'react'
import { fetchProducts } from '../lib/contentful'

function formatRupiah(price) {
  if (!price) return '-'
  return 'Rp' + Number(price).toLocaleString('id-ID')
}

function ProductCard({ product }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={`card ${expanded ? 'expanded' : ''}`}>
      {product.image && (
        <img src={product.image} alt={product.name} />
      )}

      <div className="card-body">
        <h3>{product.name}</h3>

        <p className={`desc ${expanded ? 'show' : ''}`}>
          {product.description}
        </p>

        {product.description?.length > 140 && (
          <button
            className="readmore"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Tutup' : 'Baca selengkapnya'}
          </button>
        )}

        <div className="meta">
          <span className="price">{formatRupiah(product.price)}</span>
          <span className="category">{product.category}</span>
        </div>
      </div>

      <div className="card-footer">
        <a
          className="btn primary"
          href={`https://wa.me/62813330861324?text=${encodeURIComponent(
            `Halo URCON, saya ingin memesan ${product.name} (${formatRupiah(
              product.price
            )}). Apakah masih tersedia?`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Beli via WhatsApp
        </a>
      </div>
    </div>
  )
}

export default function ProductList() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts()
      .then(data => {
        data.sort((a, b) => (b.featured === true) - (a.featured === true))
        setProducts(data)
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <section id="products" className="products">
      <div className="container">
        <h2>Produk Unggulan</h2>

        {loading ? (
          <p>Memuat produk...</p>
        ) : (
          <div className="grid">
            {products.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
