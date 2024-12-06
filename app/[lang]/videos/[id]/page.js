import VideoDetails from '@/components/VideoDetails'
import React from 'react'
import { getDictionary } from '@/app/[lang]/dictionaries/dictionaries'

export default async function page({params: {id,lang}}) { 
    const dict = await getDictionary(lang) 
  return (
    <main className='flex flex-col lg:flex-row gap-6'>
    <VideoDetails id={id} dict={dict}/>
    </main>
  )
}
 