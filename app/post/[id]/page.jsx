import StaticData from '@/app/config/StaticData'
import React from 'react'
import Image from "next/image";
import Link from "next/link";

const PostPage = () => {
    const data = StaticData.news
    return (
        <div className="pt-2 bg-base-100">
            <div className="grid grid-cols-12 px-5 md:px-10 gap-2">
                <div className="col-span-0 md:col-span-1"></div>
                <div className="col-span-12 md:col-span-10">
                    <div className='max-w-4xl mx-auto'>

                        <h1 class="text-brand-primary mb-4 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">{data.title}</h1>
                        <Image src={data.imgurl} width={900} height={500} className='rounded-xl aspect-video mx-auto' alt={data.title} title={data.title} />
                        <div className='px-8 xl:px-5 py-5 lg:py-8'>
                            <p>{data.body}</p>
                        </div>
                        <div class="mb-7 mt-7 flex justify-center">
                            <Link class="bg-brand-secondary/20 rounded-full px-5 py-2 text-sm text-blue-600 dark:text-blue-500 " href="/">برگشت به خانه</Link>
                        </div>
                    </div>
                </div>
                <div className="col-span-0 md:col-span-1"></div>
            </div>
        </div>
    )
}

export default PostPage