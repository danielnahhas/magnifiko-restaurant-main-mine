import React from 'react';
import Image from 'next/image';
import desktopImage from '../../../public/assets/welcome.jpg';
import mobileImage from '../../../public/assets/welcome-vertical.jpg';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCalendarAlt } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Dictionary } from '@/types';

export default function Contact({ dictionary }: { dictionary: Dictionary }) {
  return (
    <>
      {/* Hero Section */}
      <section className='min-h-[65vh] md:min-h-[85vh] relative flex items-center justify-center'>
        <Image 
          src={desktopImage} 
          placeholder='blur' 
          alt="Restaurant Magnifiko Interieur" 
          width={1000} 
          height={1000} 
          className='w-full h-full object-cover absolute brightness-[0.5] hidden md:block' 
        />
        <Image 
          src={mobileImage} 
          placeholder='blur' 
          alt="Restaurant Magnifiko Interieur" 
          width={1000} 
          height={1000} 
          className='w-full h-full object-cover absolute brightness-[0.5] md:hidden' 
        />
        <div className='z-10 text-center space-y-2 pt-20 container'>
          <h1 className='text-5xl md:text-6xl font-bold text-white'>{dictionary.contact.title}</h1>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className='py-20 bg-primaryBeige'>
        <div className='container'>
          <div className='max-w-5xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold text-black text-center mb-16'>{dictionary.contact.contactInfo}</h2>
            
            <div className='flex flex-col md:flex-row gap-16 justify-between'>
              <div className='md:w-1/2 space-y-12'>
                <div className='flex items-start gap-6'>
                  <div className='mt-1 bg-white p-4 rounded-full shadow-sm'>
                    <FaMapMarkerAlt className='text-black text-2xl' />
                  </div>
                  <div>
                    <h3 className='text-2xl font-semibold text-black'>{dictionary.contact.address}</h3>
                    <p className='text-gray-700 text-lg mt-2 whitespace-pre-line'>{dictionary.contact.addressValue}</p>
                  </div>
                </div>
                
                <div className='flex items-start gap-6'>
                  <div className='mt-1 bg-white p-4 rounded-full shadow-sm'>
                    <FaPhone className='text-black text-2xl' />
                  </div>
                  <div>
                    <h3 className='text-2xl font-semibold text-black'>{dictionary.contact.phone}</h3>
                    <p className='text-gray-700 text-lg mt-2'>{dictionary.contact.phoneValue}</p>
                  </div>
                </div>
                
                <div className='flex items-start gap-6'>
                  <div className='mt-1 bg-white p-4 rounded-full shadow-sm'>
                    <FaEnvelope className='text-black text-2xl' />
                  </div>
                  <div>
                    <h3 className='text-2xl font-semibold text-black'>{dictionary.contact.email}</h3>
                    <p className='text-gray-700 text-lg mt-2'>{dictionary.contact.emailValue}</p>
                  </div>
                </div>
              </div>
              
              <div className='md:w-1/2 h-full relative'>
                <div className='flex items-start gap-6 mb-8'>
                  <div className='mt-1 bg-white p-4 rounded-full shadow-sm'>
                    <FaClock className='text-black text-2xl' />
                  </div>
                  <div>
                    <h3 className='text-2xl font-semibold text-black'>{dictionary.contact.openingHours}</h3>
                    <p className='text-gray-700 text-lg mt-4 italic'>
                      {dictionary.contact.everyDay}
                    </p>
                    <p className='text-gray-700 text-xl font-medium mt-2'>
                      {dictionary.contact.hoursEveryDay}
                    </p>
                    <p className='text-gray-700 text-lg mt-4 italic'>
                      {dictionary.contact.friday}
                    </p>
                    <p className='text-gray-700 text-xl font-medium mt-2'>
                      {dictionary.contact.hoursFriday}
                    </p>
                    
                    <div className='mt-12'>
                      <h3 className='text-2xl font-semibold text-black'>{dictionary.contact.reservations}</h3>
                      <p className='text-gray-700 text-lg mt-3'>
                        {dictionary.contact.reservationHours}
                      </p>
                      
                      <a 
                        href="https://widget.thefork.com/en/cf1a7c0b-43c5-4b5f-baed-f20dc13c2f0a?fbclid=PAZXh0bgNhZW0CMTEAAaeyCJoNAEJNXsd9eWXBssUFxB-JUuQt1frFGxjEQwT-DITpjjeU8T4qKZwYgQ_aem_Rwl2liwZq48lUzW_JIfoGg" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className='inline-flex items-center mt-6 bg-black text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-opacity-90 transition-all group'
                      >
                        <FaCalendarAlt className='mr-3' />
                        <span>{dictionary.contact.reserveTable}</span>
                        <FaArrowRightLong className='ml-2 transition-all duration-300 group-hover:ml-4' />
                      </a>
                    </div>
                    
                    <div className='mt-12'>
                      <h3 className='text-2xl font-semibold text-black'>{dictionary.contact.onlineOrder}</h3>
                      <p className='text-gray-700 text-lg mt-3'>
                        {dictionary.contact.onlineOrderDescription}
                      </p>
                      
                      <a 
                        href="https://www.rushour-direct.io/s/lovepizza/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className='inline-flex items-center mt-6 bg-black text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-opacity-90 transition-all group'
                      >
                        <span>{dictionary.contact.orderNow}</span>
                        <FaArrowRightLong className='ml-2 transition-all duration-300 group-hover:ml-4' />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className='pb-12 md:pb-20 bg-primaryBeige'>
        <div className='container'>
          <h2 className='text-3xl md:text-4xl font-bold text-black text-center mb-12'>{dictionary.contact.ourLocation}</h2>
          <div className='w-full h-[500px] overflow-hidden max-w-6xl mx-auto'>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2627.123893728385!2d2.3987757!3d48.81769750000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e673e60c11e34f%3A0xac8f36376f402c05!2sMagnifiko%20%E2%80%93%20Restaurant%20italien%20%C3%A0%20Ivry-sur-Seine!5e0!3m2!1sen!2slb!4v1746973953004!5m2!1sen!2slb" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
} 