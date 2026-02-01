import { createClient } from 'contentful'

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN
})

// helper rich text → string
function extractText(richText) {
  if (!richText?.content) return ''
  return richText.content
    .map(b => b.content?.map(c => c.value || '').join(''))
    .join('\n')
}

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
    console.error('Contentful error:', err)
    return []
  }
}
