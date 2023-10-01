import React from "react"
import { getPostBySlug } from "@/lib/getData"
import styles from "./Post.module.css"
import Image from "next/image"
import Navbar from '@/components/Navbar'

export async function generateMetadata({ params }) {
    const post = await getPostBySlug(params.slug)
    if (!post) {
        return {
            title: "Not Found",
            description: "The page is not found"
        }
    }
    return { title: post.title, description: post.description  }
} 

export default async function Page({ params }) {
    const data = await getPostBySlug(params.slug)

    const dateHandler = date => {
        const newDate = new Date(date)
        return newDate.toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })
    }

    return (
        <>
            <Navbar />
            <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
                <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
                    <article className="mx-auto w-full max-w-3xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                        <header className="mb-4 lg:mb-6">
                            <h1 className="my-4 text-3xl font-semibold leading-tight text-slate-700 lg:mb-6 lg:text-4xl">{ data.title }</h1>
                            <time className="text-base text-gray-500 dark:text-gray-400" dateTime={data.date}>
                                Publicado el { dateHandler(data.date)}
                            </time>
                            <h2 className="my-4 text-xl font-normal leading-tight text-gray-400 lg:mb-6 lg:text-base text-justify">{ data.description }</h2>
                            <figure>
                                <Image 
                                    src={data.image.src} 
                                    alt={data.image.alt} 
                                    sizes="100vw"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                    }}
                                    width={500}
                                    height={300}
                                    placeholder="blur"
                                    blurDataURL={data.image.src}
                                />
                                <figcaption className="text-center text-gray-500">{ data.image.alt }</figcaption>
                            </figure>
                        </header>
                        <div
                            className={styles.content} 
                            dangerouslySetInnerHTML={{ __html: data.content }} 
                        />
                    </article>
                </div>
            </main>
        </>
    )
}