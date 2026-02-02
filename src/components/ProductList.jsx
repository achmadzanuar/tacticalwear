import { useEffect, useState } from 'react';
import { fetchProducts } from '../lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

function rupiah(value) {
  if (!value) return 'Rp -';
  return 'Rp ' + Number(value).toLocaleString('id-ID');
}

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then(data => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p style={{ textAlign: 'center' }}>Memuat produk...</p>;
  }

  return (
    <section id="products" className="products">
      <div className="container">
        <h2>Produk Unggulan</h2>

        <div className="grid">
          {products.map(p => (
            <div className="card" key={p.id}>
              {p.image && (
                <img src={p.image} alt={p.name} loading="lazy" />
              )}

              <div className="card-body">
                <h3>{p.name}</h3>

                {p.description && (
                  <div className="desc">
                    {documentToReactComponents(p.description)}
                  </div>
                )}

                <div className="meta">
                  <span className="price">{rupiah(p.price)}</span>
                  <span className="category">{p.category}</span>
                </div>
              </div>

              <div className="card-footer">
                <a
                  className="btn primary"
                  href={`https://wa.me/62813330861324?text=${encodeURIComponent(
                    `Halo URCON, saya tertarik dengan produk ${p.name}`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Beli via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
