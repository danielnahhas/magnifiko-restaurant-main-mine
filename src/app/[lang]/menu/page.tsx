import Menu from "@/components/Menu/Menu";
import { Metadata } from "next";
import { getDictionary } from '../dictionary';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: 'en' | 'fr' }>
}): Promise<Metadata> {
  const { lang } = await params
  
  const titles = {
    fr: 'Menu | Magnifiko',
    en: 'Menu | Magnifiko'
  }
  
  const descriptions = {
    fr: 'Découvrez notre menu de pizzas, pâtes et desserts traditionnels.',
    en: 'Discover our menu of pizzas, pasta and traditional desserts.'
  }
  
  return {
    title: titles[lang],
    description: descriptions[lang],
    alternates: {
      canonical: `/${lang}/menu`,
      languages: {
        'fr': '/fr/menu',
        'en': '/en/menu',
      }
    }
  }
}

export default async function MenuPage({
  params,
}: {
  params: Promise<{ lang: 'en' | 'fr' }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)
  
  return <Menu dictionary={dict}/>
}
