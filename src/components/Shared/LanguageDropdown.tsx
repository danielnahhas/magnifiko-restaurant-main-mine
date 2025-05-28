"use client"
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BiChevronDown } from 'react-icons/bi'
import { iconMap, locales, titleMap } from '@/data/locales'

interface LanguageDropdownProps {
  lang: "fr" | "en"
  isScrollingUp: boolean,
  isSidebarOpen: boolean
}

const LanguageDropdown = ({ lang, isScrollingUp, isSidebarOpen }: LanguageDropdownProps) => {
  const [showDropdown, setShowDropdown] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const path = usePathname()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const buttonClasses = `
    flex items-center text-base gap-2 px-3 py-2 transition-all duration-300 ease-in-out cursor-pointer
    ${isScrollingUp || isSidebarOpen
      ? 'text-black' 
      : 'text-white'
    }
    ${showDropdown ? 'bg-white/10' : ''}
  `

  const dropdownClasses = `
    absolute top-full left-0 mt-2 min-w-full bg-white shadow-xl border border-gray-200
    transform transition-all duration-300 ease-in-out origin-top z-50
    ${showDropdown 
      ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' 
      : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
    }
  `

  const linkClasses = `
    flex items-center text-base gap-2 px-4 py-3 text-gray-700 hover:bg-primaryBeige/20 
    transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg
  `

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setShowDropdown(prev => !prev)} 
        className={buttonClasses}
        aria-label="Select language"
        aria-expanded={showDropdown}
      >
        <div className="relative">
          <Image 
            width={24} 
            height={24} 
            src={iconMap[lang]} 
            alt={`${titleMap[lang]} flag`}
            className="rounded-sm"
          />
        </div>
        <span className="font-medium">{titleMap[lang]}</span>
        <div className={`transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`}>
          <BiChevronDown />
        </div>
      </button>

      <div className={dropdownClasses}>
        {locales.filter(locale => locale !== lang).map((locale) => (
          <Link 
            key={locale} 
            href={path.replace(`/${lang}`, `/${locale}`)} 
            className={linkClasses}
          >
            <div className="relative">
              <Image 
                width={24} 
                height={24} 
                src={iconMap[locale as "fr" | "en"]} 
                alt={`${titleMap[locale as "fr" | "en"]} flag`}
                className="rounded-sm"
              />
            </div>
            <span className="font-medium">{titleMap[locale as "fr" | "en"]}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default LanguageDropdown 