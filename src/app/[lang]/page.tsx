import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import MenuTeaser from "@/components/Home/MenuTeaser";
import SecretsOfFlavor from "@/components/Home/SecretsOfFlavor";
import Hours from "@/components/Home/Hours";
import Hero2 from "@/components/Home/Hero2";
import OurPride from "@/components/Home/OurPride";
import { getDictionary } from "./dictionary";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: 'en' | 'fr' }>
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <>
      <Hero/>
      <Hero2 dictionary={dict} lang={lang}/>
      <About dictionary={dict}/>
      <OurPride dictionary={dict}/>
      <MenuTeaser dictionary={dict} lang={lang}/>
      <Hours dictionary={dict}/>
      <SecretsOfFlavor dictionary={dict}/>
    </>
  );
}
