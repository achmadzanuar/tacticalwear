import { createClient } from 'contentful';

const space = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

if (!space || !accessToken) {
  console.error('❌ Contentful ENV missing');
}

const client = createClient({
  space,
  accessToken,
  environment: 'master',
});

export async function fetchProducts() {
  try {
    const res = await client.getEntries({
      content_type: 'tacticalwear',
      order: '-sys.createdAt',
    });

    return res.items.map(item => ({
      id: item.sys.id,
      name: item.fields.name ?? '',
      description: item.fields.descriptions ?? null, // Rich Text
      price: item.fields.number ?? 0,
      category: item.fields.category ?? '',
      image: item.fields.image ?? '', // STRING URL
      featured: item.fields.featured ?? '',
    }));
  } catch (err) {
    console.error('❌ Contentful fetch error:', err);
    return [];
  }
}
