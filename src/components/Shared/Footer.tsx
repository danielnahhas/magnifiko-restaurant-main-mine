import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/logo/logo-tp.png'
import { RiInstagramFill, RiFacebookCircleFill, RiTiktokFill } from "react-icons/ri"
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa"
import { mainNavigation } from '@/data/navigation'
import { socialLinks } from '@/data/social'
import { Dictionary } from '@/types'

const Footer = ({ dictionary, lang }: { dictionary: Dictionary, lang: string }) => {
  // Social icon components mapping
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'RiInstagramFill':
        return <RiInstagramFill />;
      case 'RiFacebookCircleFill':
        return <RiFacebookCircleFill />;
      case 'RiTiktokFill':
        return <RiTiktokFill />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <Image src={logo} alt="Logo" width={120} height={120} className="mx-auto md:mx-0 invert mb-4" />
          
          <div className='flex flex-col items-center md:items-start text-center md:text-start'>
            <h4 className="text-xl font-extrabold mb-6">{dictionary.common.quickLinks}</h4>
            <ul className="space-y-3 text-xl font-thin">
              {mainNavigation.map((item, index) => (
                <li key={index}>
                  <Link 
                    href={`/${lang}${item.path}`}
                    className="hover:text-white transition-colors duration-300"
                  >
                    {dictionary.navigation[item.label as keyof typeof dictionary.navigation]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className='flex flex-col items-center md:items-start text-center md:text-start'>
            <h4 className="text-xl font-extrabold mb-6">{dictionary.common.information}</h4>
            <ul className="space-y-5">
              <li className="flex items-start justify-center md:justify-start gap-3 text-base">
                <FaMapMarkerAlt className="text-white mt-1" />
                <span className="whitespace-pre-line">{dictionary.contact.addressValue}</span>
              </li>
              <li className="flex items-start justify-center md:justify-start gap-3 text-base">
                <FaPhone className="text-white mt-1" />
                <span>{dictionary.contact.phoneValue}</span>
              </li>
              <li className="flex items-start justify-center md:justify-start gap-3 text-base">
                <FaEnvelope className="text-white mt-1" />
                <span>{dictionary.contact.emailValue}</span>
              </li>
            </ul>
          </div>
          
          <div className='text-xl flex flex-col items-center md:items-start text-center md:text-start'>
            <h4 className="text-xl font-extrabold mb-6">{dictionary.common.hours}</h4>
            <div className="space-y-3">
              <div className="flex flex-col">
                <div className="flex flex-col mb-2">
                  <span className="font-medium text-lg">{dictionary.common.openEveryDay}</span>
                  <span className="text-base text-gray-300">{dictionary.contact.hoursEveryDay}</span>
                </div>
                <span className="font-medium text-lg">{dictionary.common.friday}</span>
                <span className="text-base text-gray-300">{dictionary.contact.hoursFriday}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col-reverse md:flex-row gap-6 justify-between items-center border-t border-gray-800 pt-8 text-center md:text-start">
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`text-white text-2xl cursor-pointer ${social.hoverColor} transition-all duration-300`}
              >
                {getSocialIcon(social.icon)}
              </a>
            ))}
          </div>
          <p>
            &copy; {new Date().getFullYear()} Magnifiko. {dictionary.common.allRightsReserved}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 