import React from 'react';
import Image from 'next/image';
import desktopImage from '../../../public/assets/outside-horizontal.jpg';
import mobileImage from '../../../public/assets/restaurant3.jpg';
import SquareImage from '../../../public/assets/square.png';
import outsideImage from '../../../public/assets/outside.jpg';
import { Dictionary } from '@/types';

export default function About({ dictionary }: { dictionary: Dictionary }) {
  return (
    <>
      {/* Hero Section */}
      <section className='min-h-[65vh] md:min-h-[85vh] relative flex items-center justify-center'>
        <Image 
          src={desktopImage} 
          placeholder='blur' 
          alt="Restaurant Magnifiko" 
          width={1000} 
          height={1000} 
          className='w-full h-full object-cover absolute brightness-[0.4] hidden md:block' 
        />
        <Image 
          src={mobileImage} 
          placeholder='blur' 
          alt="Restaurant Magnifiko" 
          width={1000} 
          height={1000} 
          className='w-full h-full object-cover absolute brightness-[0.4] md:hidden' 
        />
        <div className='z-10 text-center space-y-2 pt-20 container'>
          <h1 className='text-5xl md:text-6xl font-bold text-white font-garamond'>{dictionary.about.title}</h1>
        </div>
      </section>

      {/* Story Section */}
      <section className='py-20 bg-primaryBeige'>
        <div className='container'>
          <div className='max-w-4xl mx-auto space-y-12'>
            <div className='text-center'>
              <h2 className='text-3xl md:text-4xl font-bold mb-8 text-black'>{dictionary.about.passionTitle}</h2>
              <p className='text-lg md:text-xl text-gray-700 leading-relaxed'>
                {dictionary.about.passionDescription}
              </p>
            </div>

            <div className='flex flex-col md:flex-row gap-10 items-center'>
              <div className='w-full md:w-1/2 h-[400px] relative overflow-hidden'>
                <Image 
                  src={outsideImage} 
                  alt="Notre restaurant" 
                  fill
                  quality={80}
                  placeholder='blur'
                  className='object-cover'
                />
              </div>
              <div className='w-full md:w-1/2 space-y-4'>
                <h3 className='text-3xl font-semibold text-black'>{dictionary.about.convivialTitle}</h3>
                <p className='text-lg md:text-xl text-gray-700 leading-relaxed'>
                  {dictionary.about.convivialDescription1}
                </p>
                <p className='text-lg md:text-xl text-gray-700 leading-relaxed'>
                  {dictionary.about.convivialDescription2}
                </p>
              </div>
            </div>

            <div className='flex flex-col md:flex-row-reverse gap-10 items-center'>
              <div className='w-full md:w-1/2 h-[400px] relative overflow-hidden'>
              <Image 
                  src={SquareImage} 
                  alt="Farine" 
                  fill
                  quality={80}
                  placeholder='blur'
                  className='object-cover'
                />
              </div>
              <div className='w-full md:w-1/2 space-y-4'>
                <h3 className='text-3xl font-semibold text-black'>{dictionary.about.knowHowTitle}</h3>
                <p className='text-lg md:text-xl text-gray-700 leading-relaxed'>
                  {dictionary.about.knowHowDescription1}
                </p>
                <p className='text-lg md:text-xl text-gray-700 leading-relaxed'>
                  {dictionary.about.knowHowDescription2}
                </p>
              </div>
            </div>

            <div className='text-center mt-16'>
              <h2 className='text-3xl md:text-4xl font-bold mb-8 text-black'>{dictionary.about.commitmentTitle}</h2>
              <p className='text-lg md:text-xl text-gray-700 leading-relaxed'>
                {dictionary.about.commitmentDescription1}
              </p>
              <p className='text-lg md:text-xl text-gray-700 leading-relaxed mt-4'>
                {dictionary.about.commitmentDescription2}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 