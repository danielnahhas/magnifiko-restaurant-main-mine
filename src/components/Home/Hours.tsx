import React from 'react'
import welcome from "../../../public/assets/restaurant2.jpg"
import Image from 'next/image'
import { Dictionary } from '@/types'

const Hours = ({ dictionary }: { dictionary: Dictionary }) => {
  return (
    <section className='relative py-20 md:py-28'>
      <Image 
        width={1000} 
        height={500} 
        src={welcome} 
        alt='Magnifiko Restaurant Ambiance' 
        placeholder='blur' 
        className='absolute z-[1] inset-0 w-full h-full brightness-[0.25] object-cover'
      />
      <div className='relative z-10 container mx-auto px-4'>
        <div className='container p-12 rounded'>
          <div className='text-center space-y-6'>
            <h3 className='text-white text-sm uppercase tracking-[0.3em] font-light'>{dictionary.home.hoursTitle}</h3>
            <div className='h-px w-16 bg-white/30 mx-auto'></div>
            <div className='text-white text-3xl md:text-5xl font-light tracking-wider'>
              <p className='mb-4'>{dictionary.home.hoursEveryDay}</p>
              <p className='font-light text-3xl md:text-4xl'>{dictionary.home.hoursTime}</p>
              <p className='text-sm mt-10'>{dictionary.home.hoursFriday}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hours