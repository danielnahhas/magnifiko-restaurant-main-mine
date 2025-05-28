import 'server-only'
 
const dictionaries = {
  en: () => import('../../locales/en.json').then((module) => module.default),
  fr: () => import('../../locales/fr.json').then((module) => module.default),
}
 
export const getDictionary = async (locale: 'en' | 'fr') => {
  try {
    return await dictionaries[locale]()
  } catch (error) {
    console.error(error)
    console.warn(`Failed to load dictionary for locale: ${locale}, falling back to French`)
    return await dictionaries.fr()
  }
}