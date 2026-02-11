import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Titel & Meta Description */}
        <title>Friseursalon Bergisch Gladbach | Friseursalon Haar-Liebe</title>
        <meta
          name="description"
          content="Besuchen Sie unseren Premium Friseursalon Haar-Liebe in Bergisch Gladbach für erstklassige Haarschnitte, Styling und individuelle Looks. Jetzt Termin buchen!"
        />
        <meta
          name="keywords"
          content="Friseursalon, Herrenfriseur, Damenfriseur, Haarschnitt, Styling, Bergisch Gladbach"
        />
        <link rel="canonical" href="https://haar-liebe.de" />

        {/* Open Graph */}
        <meta property="og:title" content="Friseursalon Haar-Liebe | Premium Friseursalon Bergisch Gladbach" />
        <meta
          property="og:description"
          content="Erstklassige Haarschnitte und professionelles Styling in Bergisch Gladbach beim Friseursalon Haar-Liebe."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://haar-liebe.de" />
        <meta property="og:image" content="https://haar-liebe.de/images/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Friseursalon Haar-Liebe | Premium Friseursalon Bergisch Gladbach" />
        <meta
          name="twitter:description"
          content="Erleben Sie erstklassige Haarschnitte und professionelle Beratung."
        />
        <meta name="twitter:image" content="https://haar-liebe.de/images/og-image.png" />

        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HairSalon",
            "name": "Friseursalon Haar-Liebe",
            "image": "https://haar-liebe.de/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Hauptstraße 123",
              "addressLocality": "Bergisch Gladbach",
              "postalCode": "51465",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "50.9918",
              "longitude": "7.1293"
            },
            "url": "https://haar-liebe.de",
            "telephone": "+49 2202 1234567",
            "openingHours": "Di-Fr 09:00-18:30, Sa 08:30-14:00",
            "priceRange": "€€",
            "servesCuisine": "Friseur Services",
            "sameAs": [
              "https://www.facebook.com/haarliebe",
              "https://www.instagram.com/haarliebe"
            ]
          })}
        </script>
      </Helmet>

      {/* Navigation */}
      <Navigation />

      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;

