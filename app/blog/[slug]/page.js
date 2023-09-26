import React from "react"

async function getData(slug) {
    // const res = await fetch('https://api.example.com/...')
   
    // if (!res.ok) {
    //   // This will activate the closest `error.js` Error Boundary
    //   throw new Error('Failed to fetch data')
    // }
   
    // return res.json()
    return `This is the slug from params ${slug}`
}
   

export default async function Page({ params }) {
    const data = await getData(params.slug)
    return <div>My Post: { data }</div>
}