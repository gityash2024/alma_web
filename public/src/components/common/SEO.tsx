import React from 'react';
import { Helmet } from 'react-helmet-async';
import { DEFAULT_SEO, SEOProps, getPageTitle, getCanonicalUrl } from '../../utils/seo';

interface SEOComponentProps extends Partial<SEOProps> {
  path?: string;
  structuredData?: Record<string, any>;
}

const SEO: React.FC<SEOComponentProps> = ({
  title,
  description,
  keywords,
  path,
  ogImage,
  ogType,
  twitterCard,
  structuredData,
}) => {
  const seoTitle = title ? getPageTitle(title) : DEFAULT_SEO.title;
  const seoDescription = description || DEFAULT_SEO.description;
  const seoKeywords = keywords || DEFAULT_SEO.keywords;
  const seoOgType = ogType || DEFAULT_SEO.ogType;
  const seoTwitterCard = twitterCard || DEFAULT_SEO.twitterCard;
  const seoOgImage = ogImage || DEFAULT_SEO.ogImage;
  const canonicalUrl = path ? getCanonicalUrl(path) : undefined;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      {seoKeywords && <meta name="keywords" content={seoKeywords} />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      <meta property="og:type" content={seoOgType} />
      <meta property="og:image" content={seoOgImage} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content={seoTwitterCard} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoOgImage} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO; 