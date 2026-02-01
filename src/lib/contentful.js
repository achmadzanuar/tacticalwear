import { createClient } from 'contentful'

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN
})

/**
 * Helper: extract plain text dari Rich Text Contentful
 */
function extractText(richText) {
  if (!richText?.content?.length) return ''

  return richText.content
    .map(block =>
      block.content?.map(item => item.value || '').join('')
    )
    .join('\n')
}

/**
 * Fetch semua produk (untuk ProductList)
 */
export async function fetchProducts() {
  try {
    const res = await client.getEntries({
      content_type: 'tacticalwear'
    })

    return res.items.map(item => ({
      id: item.sys.id,
      name: item.fields.name ?? '',
      description: extractText(item.fields.descriptions),
      price: item.fields.number ?? 0,
      category: item.fields.category ?? '',
      featured: item.fields.featured ?? '',
      image: item.fields.image ?? ''
    }))
  } catch (err) {
    console.error('fetchProducts error:', err)
    return []
  }
}

/**
 * Fetch 1 produk untuk HERO
 * Gambar diambil 100% dari Contentful
 */
export async function fetchHeroProduct() {
  try {
    const res = await client.getEntries({
      content_type: 'tacticalwear',
      limit: 1
    })

    if (!res.items.length) return null

    const item = res.items[0]

    return {
      name: item.fields.name ?? '',
      image: item.fields.image ?? ''
    }
  } catch (err) {
    console.error('fetchHeroProduct error:', err)
    return null
  }
}
