import React from 'react'
import Image from 'next/image'
import Certificate from '../../../public/assets/certificate.jpeg'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Dictionary } from '@/types'

const OurPride = ({ dictionary }: { dictionary: Dictionary }) => {
  return (
    <section className="pb-12 md:pb-20 bg-primaryBeige space-y-6">
      <div className="container flex flex-col-reverse lg:flex-row items-center gap-6">
        <Image 
            src={Certificate} 
            alt="Magnifiko Halal Certificate" 
            placeholder="blur"
            height={500} 
            width={500}
            className="object-cover w-full lg:w-1/2 aspect-square"
        />
        <div className="space-y-6 flex flex-col justify-center items-center lg:items-start text-center lg:text-left w-full lg:w-1/2">
          <h2 className="text-3xl font-bold text-black mb-2 font-allura">{dictionary.home.ourPride}</h2>
          <h3 className="text-3xl md:text-4xl text-black font-bold mb-6">{dictionary.home.ourPrideTitle}</h3>
          <p className="text-black mb-6 text-lg md:text-xl">
            {dictionary.home.ourPrideDescription}
          </p>
          <a href="https://www.instagram.com/reel/DJrLIVatQaS/?igsh=MWZhNTE4c29mMmR5Zw==" target='_blank' rel='noopener noreferrer' className="inline-flex items-center group bg-black text-white px-8 py-3 w-fit">
            <span>{dictionary.home.achahada}</span>
            <FaArrowRightLong className="ml-2 w-4 transition-all duration-300 group-hover:ml-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default OurPride 