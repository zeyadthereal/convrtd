import React from 'react';

const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "convrtd",
  "url": "https://convrtd.ai/",
  "logo": "/favicon.png",
  "contactPoint": [{
    "@type": "ContactPoint",
    "telephone": "+20-100-000-0000",
    "contactType": "customer support",
    "areaServed": "EG"
  }],
  "sameAs": [
    "https://instagram.com/convrtd.ai",
    "https://wa.me/201000000000"
  ]
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
