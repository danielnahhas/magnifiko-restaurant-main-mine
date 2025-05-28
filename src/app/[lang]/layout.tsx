import type { Metadata } from "next";
import { Allura, EB_Garamond } from "next/font/google";
import Script from "next/script";
import "../globals.css";
import Header from "@/components/Shared/Header";
import Footer from "@/components/Shared/Footer";
import { getDictionary } from "./dictionary";
import { DOMAIN } from "@/data/context";

const allura = Allura({
  variable: "--font-allura",
  subsets: ["latin"],
  weight: "400"
});

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"]
})

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: 'en' | 'fr' }>
}): Promise<Metadata> {
  const { lang } = await params
  
  const titles = {
    fr: "Magnifiko - Restaurant Italien Halal à Ivry-sur-Seine",
    en: "Magnifiko - Halal Italian Restaurant in Ivry-sur-Seine"
  }
  
  const descriptions = {
    fr: "Magnifiko - La référence de la cuisine italienne halal en Île-de-France, certifiée Achahada. Pizzas, pâtes fraîches et desserts traditionnels.",
    en: "Magnifiko - The reference for halal Italian cuisine in Île-de-France, Achahada certified. Pizzas, fresh pasta and traditional desserts."
  }
  
  return {
    title: titles[lang],
    description: descriptions[lang],
    keywords: "magnifiko, pizza, pâtes, desserts, cuisine italienne, halal, ivry-sur-seine",
    metadataBase: new URL(DOMAIN),
    alternates: {
      canonical: `/${lang}`,
      languages: {
        'fr': '/fr',
        'en': '/en',
      }
    },
    openGraph: {
      title: titles[lang],
      description: descriptions[lang],
      url: `${DOMAIN}/${lang}`,
      siteName: 'Magnifiko',
      locale: lang === 'fr' ? 'fr_FR' : 'en_US',
      type: 'website',
    }
  }
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: 'en' | 'fr' }>
}>) {
  const { lang } = await params
  const dict = await getDictionary(lang)
  return (
    <html lang={lang} className="h-full w-full">
      <head>
        <link rel="icon" href="/logo/site-icon.jpeg" />
        <link rel="alternate" hrefLang="fr" href={`${DOMAIN}/fr`} />
        <link rel="alternate" hrefLang="en" href={`${DOMAIN}/en`} />
        <link rel="alternate" hrefLang="x-default" href={`${DOMAIN}/fr`} />
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16951821212"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16951821212');
          `}
        </Script>
      </head>
      <body
        className={`${allura.variable} ${garamond.variable} antialiased h-full w-full`}
      >
        <Header dictionary={dict} lang={lang} />
        <main className="min-h-full w-full">{children}</main>
        <Footer dictionary={dict} lang={lang} />
      </body>
    </html>
  );
}
