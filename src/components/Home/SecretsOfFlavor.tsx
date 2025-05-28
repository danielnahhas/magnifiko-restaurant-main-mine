import React from 'react'
import Image from 'next/image'
import platters from '../../../public/assets/platters.jpeg'
import { Dictionary } from '@/types'

const SecretsOfFlavor = ({ dictionary }: { dictionary: Dictionary }) => {
  return (
    <section className="py-12 md:py-20 bg-primaryBeige">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center"> 
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-black mb-2 font-allura">{dictionary.home.ourSecrets}</h2>
              <h3 className="text-3xl md:text-4xl text-black font-bold mb-6">{dictionary.home.secretsTitle}</h3>
            </div>
            
            <p className="text-black text-lg md:text-xl leading-relaxed">
              {dictionary.home.secretsDescription1}
            </p>
            
            <p className="text-black md:text-lg leading-relaxed">
              {dictionary.home.secretsDescription2}
            </p>
          </div>
          <div className="relative w-full aspect-square overflow-hidden">
            <Image 
              src={platters} 
              alt="Chef préparant des pâtes fraîches" 
              placeholder="blur"
              fill 
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecretsOfFlavor 