import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "E-Commerce Platform with Real-Time Features",
    description:
      "A full-featured e-commerce platform built with the MERN stack and real-time capabilities. Inventory updates are pushed live over WebSocket (Socket.io), so stock levels stay accurate for high concurrent user loads. The Stripe payment gateway is integrated behind a secure checkout flow with comprehensive error handling for reliable transactions. Product discovery is powered by Elasticsearch with advanced filtering, sorting, and full-text search, improving search accuracy by 40%.",
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
  {
    id: 2,
    name: "Task Management System with Microservices",
    description:
      "A microservices-based task management system architected around independent services for authentication, notifications, and tasks. A Redis caching layer cut database load by 50% and improved API response times by 60%. All services are containerized with Docker, enabling straightforward scaling and simplified, repeatable deployments, with PostgreSQL as the primary data store and a Next.js frontend.",
    tools: [
      "Next Js",
      "Express",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Microservices",
    ],
    role: "Full Stack Developer",
    code: "",
    demo: "",
    image: ayla,
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
//   image: travel,
// },
