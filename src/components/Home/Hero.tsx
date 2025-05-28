import Image from 'next/image'
import React from 'react'
import HeroImage from '../../../public/assets/square2.png'

const Hero = () => {
  return (
    <section className='aspect-[0.8] sm:hidden relative flex items-center justify-center'>
        <Image src={HeroImage} placeholder='blur' alt="Hero" width={1000} height={1000} className='w-full h-full object-cover absolute' />
    </section>
  )
}

export default Hero