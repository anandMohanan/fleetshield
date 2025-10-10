export default function JsonLd() {
  return (
    <>
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "FleetShield",
            "url": "https://fleetshield.ai",
            "logo": "https://fleetshield.ai/logo.png",
            "description":
              "FleetShield provides AI-based vehicle safety and fleet monitoring solutions, helping businesses ensure smarter, safer, and more efficient operations.",
            "foundingDate": "2024",
            "sameAs": [
              "https://twitter.com/fleetshield",
              "https://linkedin.com/company/fleetshield"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "availableLanguage": "English"
            }
          })
        }}
      />

      {/* Software Application Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "FleetShield Tab",
            "applicationCategory": "BusinessApplication",
            "applicationSubCategory": "Fleet Safety and Monitoring Software",
            "operatingSystem": "Web Browser, Android, Embedded System",
            "offers": [
              {
                "@type": "Offer",
                "price": "49.00",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "seller": {
                  "@type": "Organization",
                  "name": "FleetShield"
                }
              }
            ],
            "description":
              "AI-powered fleet safety platform that monitors driver behavior, detects drowsiness, and ensures road safety through real-time analytics and alerts.",
            "featureList": [
              "Driver drowsiness detection using AI",
              "Phone usage and distraction monitoring",
              "GPS-based vehicle tracking",
              "Fleet-wide reporting and analytics",
              "Voice and video communication with control center",
              "Integration with fuel, tyre, and sensor data"
            ],
            "screenshot": "https://fleetshield.ai/screenshot.png",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "72",
              "bestRating": "5",
              "worstRating": "1"
            },
            "review": [
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Amit Verma"
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "reviewBody":
                  "FleetShield has completely transformed our fleet operations. The AI-based safety monitoring and live alerts make our drivers more aware and our vehicles safer every day."
              }
            ],
            "provider": {
              "@type": "Organization",
              "name": "FleetShield"
            }
          })
        }}
      />

      {/* WebSite Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "FleetShield",
            "url": "https://fleetshield.ai",
            "description": "AI-based vehicle safety and fleet monitoring platform for intelligent driver behavior detection and road safety analytics.",
            "inLanguage": "en-US",
            "copyrightHolder": {
              "@type": "Organization",
              "name": "FleetShield"
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate":
                  "https://fleetshield.ai/search?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AI-Based Vehicle Safety & Fleet Monitoring",
            "description":
              "FleetShield provides intelligent driver monitoring, vehicle safety analytics, and AI-based alerts to prevent accidents and improve fleet performance.",
            "provider": {
              "@type": "Organization",
              "name": "FleetShield"
            },
            "serviceType": "Software as a Service (SaaS)",
            "areaServed": "Worldwide",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "FleetShield Solutions",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "FleetShield Tab",
                    "description":
                      "AI-based in-vehicle safety system offering real-time driver monitoring, fleet communication, and data integration."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "FleetShield Yard",
                    "description":
                      "AI-powered yard monitoring system ensuring safety compliance and video surveillance."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "FleetShield Health",
                    "description":
                      "Driver health monitoring and biometric screening integrated with fleet operations."
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "72"
            }
          })
        }}
      />
    </>
  );
}