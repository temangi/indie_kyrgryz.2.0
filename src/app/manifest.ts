import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Indie Kyrgyz Travel',
    short_name: 'IndieKyrgyz',
    description: 'Authentic tours and adventures in Kyrgyzstan',
    start_url: '/',
    display: 'standalone', 
    background_color: '#ffffff',
    theme_color: '#4f7b6b', 
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}