import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.racksonrent.com';
  const lastModified = new Date();

  const routes = [
    '',
    '/about',
    '/for-gym-owners',
    '/for-wellness-businesses',
    '/how-it-works',
    '/opportunities',
    '/services',
    '/faq',
    '/contact',
    '/privacy-policy',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
