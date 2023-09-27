
export async function getPostBySlug(slug) {
    const headers = { headers: { COMMERCIAL_CITY_API_KEY: process.env.SERVER_API_KEY }}
    const res = await fetch(`${process.env.SERVER_URL}/api/v1/blog/${slug}`, headers)

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    return res.json()
}

