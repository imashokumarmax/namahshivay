import React from 'react';
import { Helmet } from 'react-helmet';

export const SEOHead = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "NCR Dream Homes",
    "description": "Premium residential & commercial plots, farmhouses, villas in Noida, Ghaziabad, Greater Noida, Jewar Airport. YEIDA approved properties.",
    "url": "https://ncr-dreamhomes.com",
    "telephone": "+91-8287673037",
    "email": "ashokumarmax@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Noida",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    },
    "areaServed": [
      "Noida",
      "Greater Noida",
      "Ghaziabad",
      "Jewar Airport",
      "Yamuna Expressway",
      "Greater Noida West",
      "Delhi NCR"
    ],
    "priceRange": "₹₹₹",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "210",
      "bestRating": "5",
      "worstRating": "5"
    }
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>Buy Residential Plots Near Jewar Airport | YEIDA Plots 2026 | NCR Dream Homes</title>
      <meta 
        name="title" 
        content="Buy Residential Plots Near Jewar Airport | YEIDA Plots 2026 | NCR Dream Homes" 
      />
      <meta 
        name="description" 
        content="Premium residential & commercial plots in Noida, Ghaziabad, Greater Noida, Jewar Airport area. YEIDA approved plots from ₹36,250/sqft. Best investment 2026. Same day registry. Call +91-8287673037" 
      />
      <meta 
        name="keywords" 
        content="plots near Jewar Airport, YEIDA plots 2026, Noida International Airport plots, residential plots Greater Noida, Yamuna Expressway plots, Ghaziabad plots for sale, plots near me NCR, farmhouse Jewar Airport, investment property Noida, Greater Noida West plots, affordable plots NCR, YEIDA sector 18 plots, real estate Noida 2026, property near Jewar Airport, plots Ghaziabad Indirapuram, Noida Extension plots, commercial plots Noida, best real estate investment India 2026" 
      />
      <link rel="canonical" href="https://ncr-dreamhomes.com" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ncr-dreamhomes.com" />
      <meta 
        property="og:title" 
        content="Buy Premium Plots Near Jewar Airport | NCR Dream Homes" 
      />
      <meta 
        property="og:description" 
        content="YEIDA approved residential & commercial plots in Noida, Ghaziabad, Greater Noida, Jewar Airport. Best investment opportunity 2026. Call +91-8287673037" 
      />
      <meta 
        property="og:image" 
        content="https://ncr-dreamhomes.com/wp-content/uploads/2024/06/bannerAir.jpg" 
      />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://ncr-dreamhomes.com" />
      <meta 
        property="twitter:title" 
        content="Buy Premium Plots Near Jewar Airport | NCR Dream Homes" 
      />
      <meta 
        property="twitter:description" 
        content="YEIDA approved residential & commercial plots in Noida, Ghaziabad, Greater Noida, Jewar Airport. Best investment opportunity 2026." 
      />
      <meta 
        property="twitter:image" 
        content="https://ncr-dreamhomes.com/wp-content/uploads/2024/06/bannerAir.jpg" 
      />

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="English, Hindi" />
      <meta name="revisit-after" content="1 days" />
      <meta name="author" content="NCR Dream Homes" />
      <meta name="geo.region" content="IN-UP" />
      <meta name="geo.placename" content="Noida, Greater Noida, Ghaziabad" />
      <meta name="geo.position" content="28.5355;77.3910" />
      <meta name="ICBM" content="28.5355, 77.3910" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Local Business Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "NCR Dream Homes",
          "image": "https://ncr-dreamhomes.com/wp-content/uploads/2024/06/bannerAir.jpg",
          "@id": "https://ncr-dreamhomes.com",
          "url": "https://ncr-dreamhomes.com",
          "telephone": "+91-8287873037",
          "email": "ncr.dreamhomes@gmail.com",
          "priceRange": "₹₹₹",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Noida",
            "addressLocality": "Noida",
            "addressRegion": "UP",
            "postalCode": "201301",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 28.5355,
            "longitude": 77.3910
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "09:00",
            "closes": "19:00"
          }
        })}
      </script>
    </Helmet>
  );
};
