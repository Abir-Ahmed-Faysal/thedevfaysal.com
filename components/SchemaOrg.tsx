"use client";

export function SchemaOrg() {
  // Person Schema
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://thedevfaysal.com#person",
    name: "Faysal Ahmed",
    url: "https://thedevfaysal.com",
    image: {
      "@type": "ImageObject",
      url: "https://thedevfaysal.com/images/thedevfaysal -professional-image.jpeg",
      width: 400,
      height: 400,
      caption: "Faysal Ahmed - Full Stack Software Engineer",
    },
    jobTitle: "Full Stack Software Engineer",
    email: "fr.abir.ahmed.faysal@gmail.com",
    phone: "+880-1779161032",
    description:
      "Full Stack Software Engineer specialized in React, Next.js, Node.js, and PostgreSQL. Building scalable web applications and crafting beautiful user experiences.",
    sameAs: [
      "https://github.com/Abir-Ahmed-Faysal",
      "https://linkedin.com/in/faysal-ahmed",
      "https://twitter.com/thedevfaysal",
    ],
    knowsAbout: [
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
      "Git",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Software Engineer",
      description: "Full Stack Software Engineer specializing in modern web technologies",
    },
    contact: {
      "@type": "ContactPoint",
      contactType: "Professional Contact",
      email: "fr.abir.ahmed.faysal@gmail.com",
      phone: "+8801779161032",
      url: "https://thedevfaysal.com#contact",
    },
    workLocation: {
      "@type": "Place",
      name: "Remote",
    },
  };

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://thedevfaysal.com#organization",
    name: "Faysal Ahmed - Portfolio",
    url: "https://thedevfaysal.com",
    logo: "https://thedevfaysal.com/logo.png",
    description: "Full Stack Software Engineer Portfolio showcasing modern web applications",
    sameAs: [
      "https://github.com/Abir-Ahmed-Faysal",
      "https://linkedin.com/in/faysal-ahmed",
      "https://twitter.com/thedevfaysal",
    ],
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://thedevfaysal.com#website",
    name: "Faysal Ahmed - Full Stack Software Engineer",
    url: "https://thedevfaysal.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://thedevfaysal.com?search={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://thedevfaysal.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://thedevfaysal.com#about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Skills",
        item: "https://thedevfaysal.com#skills",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Projects",
        item: "https://thedevfaysal.com#projects",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Contact",
        item: "https://thedevfaysal.com#contact",
      },
    ],
  };

  // FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What technologies does Faysal Ahmed specialize in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Faysal Ahmed specializes in React, Next.js, TypeScript, Node.js, Express.js, and PostgreSQL for full-stack web development.",
        },
      },
      {
        "@type": "Question",
        name: "What services does Faysal Ahmed offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Full Stack Web Development, Frontend Development, Backend Development, API Design, Database Architecture, and Web Application Optimization.",
        },
      },
      {
        "@type": "Question",
        name: "How can I contact Faysal Ahmed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can reach out through the contact form on the portfolio, via email at fr.abir.ahmed.faysal@gmail.com, or connect on LinkedIn and GitHub.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
