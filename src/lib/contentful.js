import { createClient } from 'contentful'

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
  environment: 'master' // ⬅️ INI KUNCI MASALAHNYA
})

export async function fetchProducts() {
  try {
    const res = await client.getEntries({
      content_type: 'Tacticalwear',
      include: 2,
      order: '-sys.createdAt'
    })

    return res.items.map(item => ({
      id: item.sys.id,
      name: item.fields.name || '',
      description:
        item.fields.description?.content?.[0]?.content?.[0]?.value || '',
      price: item.fields.price || 0,
      category: item.fields.category || '',
      featured: item.fields.featured || false,
      image: item.fields.image?.fields?.file?.url
        ? `https:${item.fields.image.fields.file.url}`
        : null
    }))
  } catch (err) {
    console.error('❌ Contentful error:', err)
    return []
  }
}
