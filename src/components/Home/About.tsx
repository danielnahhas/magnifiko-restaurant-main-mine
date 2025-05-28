import React from 'react'
import Image from 'next/image'
import restaurant from '../../../public/assets/restaurant.jpg'
import plates from '../../../public/assets/plates.jpeg'
import { Dictionary } from '@/types'

const About = ({ dictionary }: { dictionary: Dictionary }) => {
  return (
    <section className="py-12 md:py-20 bg-primaryBeige">
      <div className="container">
        <div className="space-y-6 flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-bold text-black mb-2 font-allura">{dictionary.home.ourHistory}</h2>
          <h3 className="text-3xl md:text-4xl text-black font-bold mb-6">{dictionary.home.ourHistoryTitle}</h3>
          <p className="text-black mb-6 md:max-w-3/4 text-lg md:text-xl">
            {dictionary.home.ourHistoryDescription}
          </p>
          <div className="flex flex-col md:flex-row gap-3 w-full">
            <Image 
              src={restaurant} 
              alt="Magnifiko Restaurant Interior" 
              placeholder="blur"
              height={500} 
              width={500}
              className="object-cover w-full md:w-1/2"
            />
            <Image 
              src={plates} 
              alt="Magnifiko Restaurant Plates" 
              placeholder="blur"
              height={500} 
              width={500}
              className="object-cover w-full md:w-1/2"
            />
        </div>
        </div>
      </div>
    </section>
  )
}

export default About 