"use client"
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import logo from '../../../public/logo/logo-tp.png'
import Link from 'next/link'
import { RiInstagramFill, RiFacebookCircleFill, RiTiktokFill } from "react-icons/ri";
import Sidebar from './Sidebar';
import LanguageDropdown from './LanguageDropdown';
import { mainNavigation } from '@/data/navigation'
import { socialLinks } from '@/data/social'
import { usePathname } from 'next/navigation'
import { Dictionary } from '@/types';

const Header = ({ dictionary, lang }: { dictionary: Dictionary, lang: "fr" | "en" }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [headerState, setHeaderState] = useState('default')
    const [lastScrollY, setLastScrollY] = useState(0)
    const scrollUpAmount = useRef(0)
    const path = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            
            if (currentScrollY < 10) {
                setHeaderState('default')
                scrollUpAmount.current = 0
            } else if (currentScrollY < lastScrollY) {
                scrollUpAmount.current += (lastScrollY - currentScrollY)

                if (scrollUpAmount.current > 30) {
                    setHeaderState('scrollingUp')
                }
            } else {
                scrollUpAmount.current = 0
                setHeaderState('scrollingDown')
            }
            
            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [lastScrollY])

    useEffect(() => {
        if (isSidebarOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [isSidebarOpen])

    useEffect(() => {
        setIsSidebarOpen(false)
    }, [path])
    
    const isScrollingUp = headerState === 'scrollingUp'
    const isScrollingDown = headerState === 'scrollingDown'
    
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
        <header className={`fixed left-0 right-0 z-40 transition-transform text-lg ${
            isScrollingUp 
                ? `bg-primaryBeige text-black translate-y-0 ${!isSidebarOpen ? "shadow-lg" : ""}` 
                : isScrollingDown 
                    ? "bg-transparent text-white -translate-y-full" 
                    : "bg-transparent text-white translate-y-0"
        }`}>
            <div className='container flex items-center justify-between lg:justify-center py-3 gap-3'>
                <Link href={`/${lang}`}>
                    <Image 
                        src={logo} 
                        alt="Magnifiko Logo" 
                        width={75} 
                        height={75} 
                        className={`${isScrollingUp || isSidebarOpen ? "invert-0" : "invert"}`}
                    />
                </Link>
                
                <nav className='hidden lg:flex items-center gap-8 mx-30'>
                    {mainNavigation.map((item, index) => (
                        <Link
                            key={index}
                            href={`/${lang}${item.path}`}
                            className={`border-t border-b p-1 transition-colors duration-200 ${
                                isScrollingUp 
                                    ? `text-black ${agnosticPath === item.path ? "border-black" : "border-transparent"}` 
                                    : `${agnosticPath === item.path ? "text-primaryBeige border-primaryBeige" : "text-white border-transparent"}`
                            }`}
                        >
                            {dictionary.navigation[item.label as keyof typeof dictionary.navigation]}
                        </Link>
                    ))}
                    
                    <LanguageDropdown 
                        lang={lang} 
                        isScrollingUp={isScrollingUp} 
                        isSidebarOpen={isSidebarOpen}
                    />
                </nav>
                
                {/* Mobile Language Dropdown */}
                <div className='md:hidden ml-auto -mt-1'>
                    <LanguageDropdown 
                        lang={lang} 
                        isScrollingUp={isScrollingUp} 
                        isSidebarOpen={isSidebarOpen}
                    />
                </div>
                
                <div className='hidden lg:flex items-center gap-6'>
                    {socialLinks.map((social, index) => (
                        <a 
                            key={index}
                            href={social.url} 
                            target='_blank' 
                            rel='noopener noreferrer'
                            className={`text-2xl cursor-pointer transition-colors duration-200 ${social.hoverColor}`}
                        >
                            {getSocialIcon(social.icon)}
                        </a>
                    ))}
                </div>
                
                <button 
                    onClick={() => setIsSidebarOpen(prev => !prev)} 
                    className={`h-6 w-8 z-40 cursor-pointer drawer-icon lg:hidden relative ${isSidebarOpen ? "open" : ""} ${isScrollingUp ? "scrolling" : ""}`}
                ></button>
            </div>
        </header>
        <Sidebar isOpen={isSidebarOpen} dictionary={dictionary} lang={lang}/>
        </>
    )
}

export default Header