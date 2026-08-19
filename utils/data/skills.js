// Skills grouped to match the categories on the resume.
// Each entry maps to an icon in utils/skill-image.js when available;
// entries without a matching icon simply render as a text chip.
export const skillCategories = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Next JS",
      "Typescript",
      "Redux Toolkit",
      "Context API",
      "React Query",
      "React Hooks",
      "Javascript",
      "HTML",
      "CSS",
      "Tailwind",
      "MaterialUI",
      "Sass",
      "Framer Motion",
      "Responsive Design",
      "Web Accessibility",
      "Performance Optimization",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node JS",
      "Express Js",
      "RESTful APIs",
      "WebSocket APIs",
      "Microservices Architecture",
    ],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "MySQL"],
  },
  {
    category: "DevOps & CI/CD",
    skills: ["Docker", "GitHub Actions", "ESLint", "Webpack 5", "Babel"],
  },
  {
    category: "Tools",
    skills: ["Git", "Postman", "Agile/Scrum", "RBAC Authentication"],
  },
];

// Flat list retained for components (e.g. hero code block) that just need
// a quick marquee/summary of the stack.
export const skillsData = skillCategories.flatMap((group) => group.skills);
