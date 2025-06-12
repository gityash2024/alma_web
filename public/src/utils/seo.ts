/**
 * SEO utility functions for the Almawakening website
 */

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  twitterCard?: 'summary' | 'summary_large_image';
}

/**
 * Default SEO values for the website
 */
export const DEFAULT_SEO: SEOProps = {
  title: 'Almawakening - Reshaping Tomorrow',
  description: 'Almawakening is a non-profit organization focused on bringing positive change through awareness and community action.',
  keywords: 'almawakening, non-profit, social change, community, awareness',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  ogImage: 'https://www.almawakening.org/og-image.jpg',
};

/**
 * Generate the full page title with site name
 * @param title Page title
 * @returns Full page title with site name
 */
export const getPageTitle = (title: string): string => {
  if (title === DEFAULT_SEO.title) {
    return title;
  }
  return `${title} - Almawakening`;
};

/**
 * Generate the canonical URL for a page
 * @param path Page path (e.g., '/about', '/events')
 * @returns Full canonical URL
 */
export const getCanonicalUrl = (path: string): string => {
  const baseUrl = 'https://www.almawakening.org';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
};

/**
 * Get structured data for the organization
 * @returns JSON-LD structured data for the organization
 */
export const getOrganizationSchema = (): Record<string, any> => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Almawakening',
    url: 'https://www.almawakening.org',
    logo: 'https://www.almawakening.org/logo.png',
    sameAs: [
      'https://www.facebook.com/almawakening',
      'https://www.twitter.com/almawakening',
      'https://www.instagram.com/almawakening',
      'https://www.linkedin.com/company/almawakening',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-234-567-8900',
      email: 'contact@almawakening.org',
      contactType: 'customer service',
    },
  };
};

/**
 * Get structured data for an event
 * @param event Event details
 * @returns JSON-LD structured data for the event
 */
export const getEventSchema = (event: {
  name: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  image?: string;
}): Record<string, any> => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.name,
    startDate: event.startDate,
    endDate: event.endDate,
    location: {
      '@type': 'Place',
      name: event.location,
    },
    image: event.image || 'https://www.almawakening.org/event-default.jpg',
    description: event.description,
    organizer: {
      '@type': 'Organization',
      name: 'Almawakening',
      url: 'https://www.almawakening.org',
    },
  };
}; 