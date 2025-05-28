import React from 'react';
import Contact from '@/components/Contact/Contact';
import { Metadata } from 'next';
import { getDictionary } from '../dictionary';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: 'en' | 'fr' }>
}): Promise<Metadata> {
  const { lang } = await params
  
  const titles = {
    fr: 'Contact | Magnifiko',
    en: 'Contact | Magnifiko'
  }
  
  const descriptions = {
    fr: 'Contactez-nous pour réserver une table ou pour toute autre question.',
    en: 'Contact us to reserve a table or for any other questions.'
  }
  
  return {
    title: titles[lang],
    description: descriptions[lang],
    alternates: {
      canonical: `/${lang}/contact`,
      languages: {
        'fr': '/fr/contact',
        'en': '/en/contact',
      }
    }
  }
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: 'en' | 'fr' }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)
  
  return <Contact dictionary={dict}/>
} 