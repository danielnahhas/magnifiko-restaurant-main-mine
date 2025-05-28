import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Magnifiko',
    short_name: 'Magnifiko',
    description: 'Magnifiko - La référence de la cuisine italienne halal en Île-de-France, certifiée Achahada. Pizzas, pâtes fraîches et desserts traditionnels.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F5F5DC',
    theme_color: '#F5F5DC',
    icons: [
      {
        src: '/logo/site-icon.jpeg',
        sizes: '192x192',
        type: 'image/jpeg',
      }
    ],
  };
} 