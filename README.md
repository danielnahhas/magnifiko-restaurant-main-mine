# Magnifiko Restaurant Website

A modern, multilingual website for Magnifiko, an Italian halal restaurant in Ivry-sur-Seine, France.

## 🌍 Internationalization (i18n)

This website supports multiple languages with a robust i18n implementation:

### Supported Languages
- **French (fr)** - Default language
- **English (en)**

### Features

#### 🔧 Technical Implementation
- **Route-based localization**: URLs include language prefix (`/fr/`, `/en/`)
- **Automatic language detection**: Detects user's preferred language from browser settings
- **Fallback mechanism**: Falls back to French if translation is missing
- **Type-safe translations**: Full TypeScript support with autocompletion
- **SEO optimized**: Proper hreflang tags and localized metadata

#### 📁 File Structure
```
src/
├── locales/
│   ├── en.json          # English translations
│   └── fr.json          # French translations
├── app/[lang]/
│   ├── layout.tsx       # Localized layout with metadata
│   ├── page.tsx         # Home page
│   ├── about/page.tsx   # About page
│   ├── contact/page.tsx # Contact page
│   ├── menu/page.tsx    # Menu page
│   ├── dictionary.ts    # Translation loader
│   ├── sitemap.ts       # Dynamic sitemap generation
│   └── robots.ts        # Robots.txt configuration
├── components/          # All components accept dictionary prop
├── lib/
│   └── seo.ts          # SEO utilities and structured data
├── types.ts            # TypeScript definitions
└── middleware.ts       # Language detection and routing
```

#### 🗂️ Translation Structure
Translations are organized into logical namespaces:

```json
{
  "navigation": { ... },    // Navigation menu items
  "common": { ... },        // Shared UI elements
  "home": { ... },          // Home page content
  "about": { ... },         // About page content
  "contact": { ... },       // Contact page content
  "menu": { ... }           // Menu page content
}
```

### 🚀 Usage

#### Adding New Translations
1. Add the key to both `src/locales/en.json` and `src/locales/fr.json`
2. Update the TypeScript type in `src/types.ts`
3. Use in components: `{dictionary.namespace.key}`

#### Creating New Pages
1. Create the page in `src/app/[lang]/your-page/page.tsx`
2. Add translations to both language files
3. Update the Dictionary type
4. Pass dictionary to components
5. Update sitemap in `src/app/sitemap.ts`

#### Component Pattern
```tsx
import { Dictionary } from '@/types'

const MyComponent = ({ dictionary }: { dictionary: Dictionary }) => {
  return (
    <div>
      <h1>{dictionary.namespace.title}</h1>
      <p>{dictionary.namespace.description}</p>
    </div>
  )
}
```

### 🔍 SEO Features
- **Dynamic sitemap**: Automatically generates sitemap for all pages in both languages
- **Robots.txt**: Proper crawling directives for search engines
- **Structured data**: Restaurant, website, and breadcrumb schema markup
- **Dynamic metadata**: Language-specific titles, descriptions, and Open Graph tags
- **Hreflang attributes**: Proper language targeting for search engines
- **Canonical URLs**: Prevents duplicate content issues
- **Twitter Cards**: Enhanced social media sharing
- **Image optimization**: Proper Open Graph images

#### Sitemap Features
- Includes all pages in both languages
- Proper alternates for language versions
- Priority settings based on page importance
- Change frequency optimization
- Automatic updates when new pages are added

#### Structured Data
The website includes comprehensive structured data:
- **Restaurant schema**: Business information, location, hours, cuisine type
- **Website schema**: Site information and search functionality
- **Breadcrumb schema**: Navigation structure (can be added to individual pages)

### 🛠️ Development

#### Adding a New Language
1. Add locale to `src/data/locales.ts`
2. Create translation file in `src/locales/`
3. Add to dictionary loader in `src/app/[lang]/dictionary.ts`
4. Update middleware in `src/middleware.ts`
5. Update sitemap in `src/app/sitemap.ts`
6. Add flag icon to `public/assets/`

#### Adding New Pages
1. Create the page component and route
2. Add translations for the new page
3. Update the sitemap to include the new page
4. Add structured data if needed (breadcrumbs, etc.)

#### Best Practices
- Keep translation keys descriptive and organized
- Use namespaces to group related translations
- Always provide fallbacks for missing translations
- Test both languages thoroughly
- Consider text expansion in different languages
- Update sitemap when adding new pages
- Add appropriate structured data for new content types

## 🏗️ Architecture

### Improvements Made
1. **Namespace Organization**: Translations are now organized into logical groups
2. **Type Safety**: Full TypeScript support with autocompletion
3. **Fallback System**: Graceful handling of missing translations
4. **Browser Detection**: Automatic language detection from user preferences
5. **SEO Optimization**: Comprehensive SEO with sitemap, robots.txt, and structured data
6. **Component Consistency**: All components follow the same pattern

### Performance
- Translations are loaded server-side for optimal performance
- Dynamic imports prevent loading unused translations
- Static generation for all language versions
- Optimized sitemap generation
- Efficient structured data implementation

### SEO Architecture
- **Dynamic sitemap**: Automatically includes all pages and languages
- **Structured data**: Rich snippets for better search results
- **Meta optimization**: Language-specific metadata and Open Graph tags
- **Robots.txt**: Proper crawling directives
- **Hreflang implementation**: Correct language targeting

## 📱 Features

- Responsive design for all devices
- Modern UI with smooth animations
- Optimized images with Next.js Image component
- Fast loading with static generation
- Accessible design following WCAG guidelines
- Comprehensive SEO optimization
- Multilingual sitemap
- Rich structured data

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📊 SEO Tools

The website includes several SEO tools and features:

### Sitemap
- Accessible at `/sitemap.xml`
- Includes all pages in both languages
- Automatic language alternates
- Priority and change frequency optimization

### Robots.txt
- Accessible at `/robots.txt`
- Proper crawling directives
- Sitemap reference
- Excludes unnecessary files

### Structured Data
- Restaurant information for local SEO
- Website schema for search engines
- Rich snippets support
- JSON-LD format

## 📄 License

© 2024 Magnifiko. All rights reserved.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.