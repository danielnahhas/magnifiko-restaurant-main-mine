import React from 'react'
import Image from 'next/image'
import { FaArrowRightLong } from "react-icons/fa6"
import pastaImage from '../../../public/assets/pasta-plate.jpg'
import pizzaImage from '../../../public/assets/pizza.jpg'
import dessertImage from '../../../public/assets/desserts.jpeg'
import Link from 'next/link'
import { Dictionary } from '@/types'

const MenuTeaser = ({ dictionary, lang }: { dictionary: Dictionary, lang: string }) => {
  return (
    <section className="pb-12 md:pb-20 bg-primaryBeige">
      <div className="container">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-black mb-2 font-allura">{dictionary.home.ourSpecialties}</h2>
          <h3 className="text-3xl md:text-4xl text-black font-bold">{dictionary.home.ourSpecialtiesTitle}</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg overflow-hidden">
            <div className="relative aspect-[1.4]">
              <Image 
                src={pastaImage} 
                alt="Magnifiko Pasta" 
                placeholder="blur"
                fill 
                className="object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h4 className="text-xl font-bold text-black mb-3">{dictionary.home.pastaTitle}</h4>
              <p className="text-black mb-4 text-lg">
                {dictionary.home.pastaDescription}
              </p>
              <p className='text-sm text-gray-500 font-thin'>&#10004; {dictionary.home.glutenFree}</p>
            </div>
          </div>
          
          <div className="bg-white shadow-lg overflow-hidden">
            <div className="relative aspect-[1.4]">
              <Image 
                src={pizzaImage} 
                alt="Magnifiko Pizza" 
                placeholder="blur"
                fill 
                className="object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h4 className="text-xl font-bold text-black mb-3">{dictionary.home.pizzaTitle}</h4>
              <p className="text-black mb-4 text-lg">
                {dictionary.home.pizzaDescription}
              </p>
            </div>
          </div>
          
          <div className="bg-white shadow-lg overflow-hidden">
            <div className="relative aspect-[1.4]">
              <Image 
                src={dessertImage} 
                alt="Magnifiko Dessert" 
                placeholder="blur"
                fill 
                className="object-cover object-bottom"
              />
            </div>
            <div className="p-6 text-center">
              <h4 className="text-xl font-bold text-black mb-3">{dictionary.home.dessertTitle}</h4>
              <p className="text-black mb-4 text-lg">
                {dictionary.home.dessertDescription}
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <Link href={`/${lang}/menu`} className="inline-flex items-center group bg-black text-white px-8 py-3">
            <span>{dictionary.common.viewFullMenu}</span>
            <FaArrowRightLong className="ml-2 w-4 transition-all duration-300 group-hover:ml-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default MenuTeaser 