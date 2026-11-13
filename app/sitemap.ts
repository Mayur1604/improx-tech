import { MetadataRoute } from 'next';
import { allServicesList } from './data/servicesData';
import { blogPosts } from './data/blogData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://improxtech.com';

  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/blog',
    '/privacy-policy',
    '/terms-of-service',
    '/application-services',
    '/product-engineering',
    '/technology-services',
    '/ai-bi',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const serviceRoutes = allServicesList.map((service) => ({
    url: `${baseUrl}${service.categoryHref}/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
