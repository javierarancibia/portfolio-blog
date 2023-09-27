import { getAllPosts } from "@/lib/getData";

export default async function sitemap() {
  const posts = await getAllPosts()
  const postUrls = posts.map(post => ({
    url: `https://www.ciudad-comercial.cl/blog/${post.slug}`, 
    lastModified: post.date
  }))

  return [
    {
      url: "https://www.ciudad-comercial.cl",
      lastModified: new Date(),
    },
    {
      url: "https://www.ciudad-comercial.cl/calculadora-uf",
      lastModified: new Date(),
    },
    ...postUrls
  ];
}
