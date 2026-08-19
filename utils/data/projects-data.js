import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Octopus Social",
    description:
      "Octopus Social is a single platform that brings a social media network, an e-commerce marketplace, an events business, and service booking under one React.js front end. I owned the frontend architecture: a modular Next.js app split into five product modules on top of a shared library of 60+ reusable TypeScript components and a token-based design system, which cut new-feature UI development time by 35%. The social layer is an infinite-scroll feed built with list virtualization, optimistic UI updates, and React Query caching, staying smooth at 10,000+ posts while reducing unnecessary re-renders by 45%. Commerce runs through shoppable posts and a full storefront journey — product listing, faceted filters, cart, and Stripe checkout — with Redux Toolkit driving global state and React Error Boundaries plus Suspense handling loading and failure states. The events module covers both online and physical events with calendar views, ticket booking, seat and slot selection, attendee dashboards, and QR-based check-in screens, while the service booking flow is a multi-step journey with an availability calendar, dynamic slot picker, and real-time Socket.io notifications. Next.js SSR and ISR, route-level code splitting, lazy loading, and memoization push the Lighthouse performance score above 95 with Largest Contentful Paint under 2 seconds, on fully responsive and WCAG-compliant screens.",
    tools: [
      "React Js",
      "Next Js",
      "TypeScript",
      "Redux Toolkit",
      "React Query",
      "Tailwind CSS",
      "Socket.io",
      "Node Js",
      "MongoDB",
      "Stripe API",
    ],
    role: "Frontend Lead / React Developer",
    code: "",
    demo: "",
    image: travel,
  },
  {
    id: 2,
    name: "E-Commerce Platform with Real-Time Features",
    description:
      "A full-featured e-commerce platform built with the MERN stack and real-time capabilities. The React.js storefront receives live inventory updates over WebSocket (Socket.io), so stock levels stay accurate for high concurrent user loads. The Stripe payment gateway is integrated behind a secure checkout flow with comprehensive error handling for reliable transactions. Product discovery is powered by an advanced filtering, sorting, and full-text search UI backed by Elasticsearch, improving search accuracy by 40%.",
    tools: [
      "React Js",
      "Node Js",
      "Express",
      "MongoDB",
      "Socket.io",
      "Elasticsearch",
      "Stripe API",
    ],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: crefin,
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },

// {
//   id: 3,
//   name: "Portfolio Website",
//   description:
//     "I have designed and developed this portfolio website while practicing Next.js. The portfolio is fully responsive, ensuring an optimal user experience across all devices. I deployed this portfolio using Vercel to create a live link.",
//   tools: ["HTML", "Tailwind CSS", "NextJS", "JSX"],
//   role: "Frontend Developer",
//   code: "",
//   demo: "",
//   image: realEstate,
// },
