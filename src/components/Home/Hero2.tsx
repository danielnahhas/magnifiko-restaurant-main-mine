import Image from 'next/image'
import React from 'react'
import DesktopImage from '../../../public/assets/platters.jpg'
import MobileImage from '../../../public/assets/restaurant3.jpg'
import { FaUtensils, FaMapMarkerAlt } from "react-icons/fa";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import Link from 'next/link';
import { Dictionary } from '@/types';

const Hero2 = ({ dictionary, lang }: { dictionary: Dictionary, lang: string }) => {
  return (
    <section className='min-h-[75vh] md:min-h-[85vh] relative flex items-center justify-center'>
        <Image src={DesktopImage} placeholder='blur' alt="Restaurant Magnifiko" width={1000} height={1000} className='hidden sm:block w-full h-full object-cover absolute brightness-[0.2]' />
        <Image src={MobileImage} placeholder='blur' alt="Restaurant Magnifiko" width={1000} height={1000} className='block sm:hidden w-full h-full object-cover absolute brightness-[0.2]' />
        <div className='z-10 text-center space-y-2 sm:pt-20 container'>
            <h1 className='text-4xl md:text-5xl font-bold text-white font-garamond'>{dictionary.home.welcome}</h1>
            <p className='text-6xl md:text-8xl text-primaryBeige font-bold font-garamond'>Magnifiko</p>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mt-14'>
                <Link href={`/${lang}/menu`} className='flex items-center justify-center bg-black/40 border border-primaryBeige hover:bg-primaryBeige group py-4 px-6 transition-all duration-300'>
                    <FaUtensils className='text-xl text-primaryBeige group-hover:text-black transition-colors duration-300 mr-3' />
                    <span className='text-white group-hover:text-black font-medium transition-colors duration-300'>{dictionary.common.seeMenu}</span>
                </Link>
                
                <a href="https://www.rushour-direct.io/s/lovepizza/" target='_blank' rel='noopener noreferrer' 
                   className='flex items-center justify-center bg-black/40 border border-primaryBeige hover:bg-primaryBeige group py-4 px-6 transition-all duration-300'>
                    <FiShoppingBag className='text-xl text-primaryBeige group-hover:text-black transition-colors duration-300 mr-3' />
                    <span className='text-white group-hover:text-black font-medium transition-colors duration-300'>{dictionary.common.orderOnline}</span>
                </a>
                
                <a href="https://widget.thefork.com/en/cf1a7c0b-43c5-4b5f-baed-f20dc13c2f0a?fbclid=PAZXh0bgNhZW0CMTEAAaeyCJoNAEJNXsd9eWXBssUFxB-JUuQt1frFGxjEQwT-DITpjjeU8T4qKZwYgQ_aem_Rwl2liwZq48lUzW_JIfoGg" target='_blank' rel='noopener noreferrer' 
                   className='flex items-center justify-center bg-black/40 border border-primaryBeige hover:bg-primaryBeige group py-4 px-6 transition-all duration-300'>
                    <BsFillCalendarCheckFill className='text-xl text-primaryBeige group-hover:text-black transition-colors duration-300 mr-3' />
                    <span className='text-white group-hover:text-black font-medium transition-colors duration-300'>{dictionary.common.reserveTable}</span>
                </a>
                
                <a href="https://maps.app.goo.gl/fUDvhhQpkyoSgH676?g_st=iw" target='_blank' rel='noopener noreferrer' 
                   className='flex items-center justify-center bg-black/40 border border-primaryBeige hover:bg-primaryBeige group py-4 px-6 transition-all duration-300'>
                    <FaMapMarkerAlt className='text-xl text-primaryBeige group-hover:text-black transition-colors duration-300 mr-3' />
                    <span className='text-white group-hover:text-black font-medium transition-colors duration-300'>{dictionary.common.findUs}</span>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Hero2