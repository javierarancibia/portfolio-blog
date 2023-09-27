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

    return (
        <>
            <Navbar />
            <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
                <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
                    <article className="mx-auto w-full max-w-3xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                        <header className="mb-4 lg:mb-6">
                            <address className="flex items-center mb-6 not-italic">
                                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                                    <Image 
                                        className="mr-4 w-16 h-16 rounded-full" 
                                        src="/blog-inmobiliario.png" 
                                        height={100} 
                                        width={100} 
                                        alt="Blog Inmobiliario de Latam" 
                                        placeholder="blur"
                                        blurDataURL="/blog-inmobiliario.png"
                                        unoptimized
                                    />
                                    <div>
                                        <a href="#" rel="author" className="text-xl font-bold text-blue-700 dark:text-white">CommercialCity</a>
                                        <p className="text-base text-gray-500 dark:text-gray-400">El Blog Inmobiliario de Latam</p>
                                        <p className="text-base text-gray-500 dark:text-gray-400">{ data.date }</p>
                                    </div>
                                </div>
                            </address>
                            <h1 className="my-4 text-3xl font-semibold leading-tight text-slate-700 lg:mb-6 lg:text-4xl">{ data.title }</h1>
                            <h2 className="my-4 text-xl font-normal leading-tight text-gray-400 lg:mb-6 lg:text-xl text-justify">{ data.description }</h2>
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