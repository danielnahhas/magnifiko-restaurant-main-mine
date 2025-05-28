import React from 'react';
import About from '@/components/About/About';
import { Metadata } from 'next';
import { getDictionary } from '../dictionary';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: 'en' | 'fr' }>
}): Promise<Metadata> {
  const { lang } = await params
  
  const titles = {
    fr: 'Notre Histoire | Restaurant Magnifiko',
    en: 'Our Story | Restaurant Magnifiko'
  }
  
  const descriptions = {
    fr: 'Découvrez l\'histoire, les valeurs et la passion qui animent notre restaurant depuis sa création.',
    en: 'Discover the history, values and passion that have driven our restaurant since its creation.'
  }
  
  return {
    title: titles[lang],
    description: descriptions[lang],
    alternates: {
      canonical: `/${lang}/about`,
      languages: {
        'fr': '/fr/about',
        'en': '/en/about',
      }
    }
  }
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: 'en' | 'fr' }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)
  
  return <About dictionary={dict}/>
} 