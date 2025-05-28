import Link from 'next/link'
import React from 'react'
import { RiInstagramFill, RiFacebookCircleFill, RiTiktokFill } from "react-icons/ri"
import { mainNavigation } from '@/data/navigation'
import { socialLinks } from '@/data/social'
import { usePathname } from 'next/navigation'
import { Dictionary } from '@/types'

const Sidebar = ({ isOpen, dictionary, lang }: { isOpen: boolean, dictionary: Dictionary, lang: string }) => {
  const path = usePathname()

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

  let agnosticPath = path.replace(`/${lang}`, "")
  if (agnosticPath.trim().length === 0) agnosticPath = "/"

  return (
    <>
      <aside className={`lg:hidden p-6 fixed inset-y-0 right-0 w-full z-30 bg-primaryBeige flex flex-col shadow-xl transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <nav className='flex flex-col items-center justify-center flex-1 gap-8 text-black text-2xl'>
          {mainNavigation.map((item, index) => (
            <Link
              key={index}
              href={`/${lang}${item.path}`}
              className={`border-t border-b p-1 ${agnosticPath === item.path ? 'border-black' : 'border-transparent'}`}
            >
              {dictionary.navigation[item.label as keyof typeof dictionary.navigation]}
            </Link>
          ))}
        </nav>     
        <div className='flex items-center justify-center gap-8'>
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target='_blank'
              rel='noopener noreferrer'
              className={`text-black text-3xl cursor-pointer ${social.hoverColor} transition-all duration-300`}
            >
              {getSocialIcon(social.icon)}
            </a>
          ))}
        </div> 
      </aside>
    </>
  )
}

export default Sidebar