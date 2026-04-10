/**
 * SEO Configuration and Constants
 * Centralized SEO settings for the portfolio
 */

export const SEO_CONFIG = {
  // Site URLs
  siteUrl: "https://thedevfaysal.com",
  domain: "thedevfaysal.com",

  // Personal Information
  author: {
    name: "Faysal Ahmed",
    title: "Full Stack Software Engineer",
    email: "fr.abir.ahmed.faysal@gmail.com",
    phone: "+1-555-123-4567",
  },

  // Social Links
  social: {
    github: "https://github.com/Abir-Ahmed-Faysal",
    linkedin: "https://linkedin.com/in/faysal-ahmed",
    twitter: "https://twitter.com/thedevfaysal",
  },

  // Skills and Expertise
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Prisma ORM",
    "Tailwind CSS",
    "JavaScript",
    "Web Development",
    "Full Stack Development",
    "Frontend Development",
    "Backend Development",
    "RESTful APIs",
    "GraphQL",
    "Docker",
  ],

  // Keywords
  keywords: {
    main: [
      "Full Stack Developer",
      "React Developer",
      "Next.js Developer",
      "Node.js Developer",
      "Web Developer",
      "Software Engineer",
      "Faysal Ahmed",
    ],
    secondary: [
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
      "Web Application Development",
      "Full Stack Engineering",
      "Modern Web Development",
      "JavaScript Developer",
      "API Development",
      "Database Design",
    ],
  },

  // Open Graph Images
  images: {
    og: "/og-image.png",
    ogSquare: "/og-image-square.png",
    profile: "/images/thedevfaysal -professional-image.jpeg",
  },

  // Meta Descriptions
  descriptions: {
    home: "Full Stack Software Engineer specialized in React, Next.js, Node.js, and PostgreSQL. Building scalable web applications with modern technologies.",
    about:
      "Learn about Faysal Ahmed's background, experience, and expertise in full-stack web development.",
    skills:
      "Explore Faysal Ahmed's technical skills in frontend, backend, databases, and modern web technologies.",
    projects:
      "Discover Faysal Ahmed's portfolio of innovative web applications and projects showcasing full-stack development expertise.",
    contact:
      "Get in touch with Faysal Ahmed for web development projects or professional inquiries.",
  },

  // Structured Data
  structuredData: {
    personType: "Person",
    organizationType: "Organization",
    occupationType: "SoftwareEngineer",
  },

  // Verification Codes (update these with actual values)
  verification: {
    google: "", // Add your Google Site Verification code
    msValidate: "", // Add your Bing verification code
    yandex: "", // Add your Yandex verification code
  },

  // Analytics (update with actual IDs)
  analytics: {
    googleAnalyticsId: "", // Add your GA4 ID
    gtmId: "", // Add your Google Tag Manager ID
  },

  // Robots and Crawling
  robots: {
    index: true,
    follow: true,
    maxImagePreview: "large",
    maxSnippet: -1,
    maxVideoPreview: -1,
  },

  // Cache Control
  cache: {
    staticPages: 3600, // 1 hour
    dynamicPages: 1800, // 30 minutes
  },

  // Locale
  locale: "en_US",
  language: "en",

  // Mobile App (optional)
  mobileApp: {
    enabled: false,
    appName: "Faysal Ahmed Portfolio",
  },
};

/**
 * Generate canonical URL for a page
 */
export function getCanonicalUrl(path: string = ""): string {
  return `${SEO_CONFIG.siteUrl}${path}`;
}

/**
 * Generate full keywords string
 */
export function getKeywords(): string {
  return [
    ...SEO_CONFIG.keywords.main,
    ...SEO_CONFIG.keywords.secondary,
  ].join(", ");
}

/**
 * Generate meta description fallback
 */
export function getMetaDescription(type: keyof typeof SEO_CONFIG.descriptions = "home"): string {
  return SEO_CONFIG.descriptions[type];
}

/**
 * BreadcrumbList Schema Generator
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Common JSON-LD Schemas
 */
export const JSONLD_SCHEMAS = {
  /**
   * Person Schema
   */
  person: () => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SEO_CONFIG.siteUrl}#person`,
    name: SEO_CONFIG.author.name,
    url: SEO_CONFIG.siteUrl,
    image: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.images.profile}`,
    jobTitle: SEO_CONFIG.author.title,
    email: `mailto:${SEO_CONFIG.author.email}`,
    sameAs: [SEO_CONFIG.social.github, SEO_CONFIG.social.linkedin, SEO_CONFIG.social.twitter],
    knowsAbout: SEO_CONFIG.skills,
  }),

  /**
   * Organization Schema
   */
  organization: () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SEO_CONFIG.siteUrl}#organization`,
    name: `${SEO_CONFIG.author.name} - Portfolio`,
    url: SEO_CONFIG.siteUrl,
    logo: `${SEO_CONFIG.siteUrl}/logo.png`,
    sameAs: [SEO_CONFIG.social.github, SEO_CONFIG.social.linkedin, SEO_CONFIG.social.twitter],
  }),

  /**
   * WebSite Schema
   */
  website: () => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SEO_CONFIG.siteUrl}#website`,
    name: `${SEO_CONFIG.author.name} - Full Stack Software Engineer`,
    url: SEO_CONFIG.siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SEO_CONFIG.siteUrl}?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }),

  /**
   * SoftwareApplication Schema (for projects)
   */
  softwareApplication: (title: string, description: string, url: string) => ({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: title,
    description: description,
    url: url,
    applicationCategory: "WebApplication",
    offers: {
      "@type": "Offer",
      price: "0",
    },
  }),
};
