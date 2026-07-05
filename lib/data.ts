export const profile = {
  name: "Akash Singh",
  initials: "AS",
  role: "Full Stack Developer",
  roles: [
    "Full Stack Developer",
    "React.js & Next.js Engineer",
    "Building performant SPAs",
    "Shipping production APIs"
  ],
  location: "Noida / Delhi NCR, India",
  email: "akash.singh13997@gmail.com",
  phone: "9990885804",
  github: "https://github.com/akash13997",
  linkedin: "https://www.linkedin.com/in/akash-singh-3028951b5/",
  availability: "Available for new opportunities",
  summary:
    "Full stack developer with 3.5+ years of experience shipping production web applications end to end — from pixel-perfect, SEO-friendly React and Next.js interfaces to the Node.js APIs and databases behind them. I focus on performance, clean architecture, and interfaces that feel considered rather than assembled.",
  aboutParagraphs: [
    "I'm a full stack developer who enjoys owning a feature from the database schema to the last pixel of the interface. Over the past three years I've worked across the stack — React and Next.js on the frontend, Node.js and REST APIs on the backend, and MongoDB, MySQL, or PostgreSQL depending on what the project needs.",
    "Most of my recent work has centered on building server-rendered, SEO-optimized applications with Next.js, integrating payment infrastructure like Stripe, and collaborating closely with backend teams to keep API calls lean and application performance high.",
    "I care about clean architecture, readable component libraries, and the kind of small performance decisions that add up to a product that feels fast. I'm equally comfortable debugging a tricky state management bug as I am reasoning about API design."
  ],
  stats: [
    { label: "Years of Experience", value: 3.5, suffix: "+" },
    { label: "Projects Delivered", value: 8, suffix: "+" },
    { label: "Core Technologies", value: 15, suffix: "+" },
    { label: "Companies Worked With", value: 2, suffix: "" }
  ]
};

export const skills = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Redux Toolkit (RTK)", "Redux-Saga", "Formik", "Tailwind CSS", "Bootstrap", "Material UI"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "Cron Jobs"]
  },
  {
    category: "Database",
    items: ["MongoDB", "MySQL", "PostgreSQL"]
  },
  {
    category: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3 / SASS"]
  },
  {
    category: "Payments",
    items: ["Stripe"]
  },
  {
    category: "Tools & Workflow",
    items: ["Git & GitHub", "Postman", "VS Code", "Agile / Scrum"]
  }
];

export const experience = [
  {
    role: "Frontend Developer | Full Stack Developer",
    company: "Delimp Technology",
    duration: "Nov 2024 — Present",
    points: [
      "Own both frontend (React.js, Next.js, Tailwind CSS) and backend (Node.js, REST APIs, MongoDB/SQL) work across multiple live products.",
      "Designed and built scalable RESTful APIs and integrated third-party services, including the Stripe payment gateway and scheduled cron jobs.",
      "Shipped SEO-friendly, mobile-optimized applications using server-side rendering with Next.js.",
      "Collaborated with cross-functional teams in an agile environment to deliver production-ready features on schedule.",
      "Optimized API calls and database queries to reduce load times and improve overall application performance."
    ]
  },
  {
    role: "Frontend Developer (React JS)",
    company: "DeopersIndia",
    duration: "Jun 2023 — Nov 2024",
    points: [
      "Built responsive, SEO-friendly, mobile-optimized React components across multiple client projects.",
      "Implemented state management with Redux Toolkit (RTK) and integrated REST APIs efficiently.",
      "Developed and maintained reusable UI component libraries that reduced development time across projects."
    ]
  },
  {
    role: "Associate Developer",
    company: "DeopersIndia",
    duration: "Dec 2022 — May 2023",
    points: [
      "Contributed to web application features using React JS, JavaScript, and CSS3.",
      "Participated in code reviews, debugging sessions, and agile sprint planning."
    ]
  }
];

export type Project = {
  slug: string;
  title: string;
  overview: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  challenges: string;
  results: string;
  url?: string;
  gradient: string;
};

export const projects: Project[] = [
  {
    slug: "way-of-glory",
    title: "Way of Glory",
    overview:
      "A digital platform providing complete technology solutions for churches, including live streaming and online giving.",
    problem:
      "Churches needed a single, reliable platform to stream services and accept online giving without stitching together multiple disconnected tools.",
    solution:
      "Built a responsive Next.js and React.js application with pixel-perfect UIs translated from Figma, backed by Next.js API Routes handling Stripe payments and cron-scheduled jobs.",
    features: [
      "Live streaming integration for church services",
      "Online giving with Stripe payment processing",
      "Pixel-perfect UI built from Figma using HTML5, CSS3, SASS",
      "SEO-friendly service pages and consultation booking flow"
    ],
    tech: ["Next.js", "React.js", "Next.js API Routes", "Axios", "Tailwind CSS", "Stripe", "Vercel", "Cron Jobs"],
    challenges:
      "Coordinating scheduled cron jobs with real-time Stripe events required careful API design to keep giving records consistent and auditable.",
    results:
      "Delivered a consistently smooth-performing platform now used to power live streaming and digital giving for church communities.",
    url: "https://wayofglory.com",
    gradient: "from-indigo-500 via-blue-500 to-violet-500"
  },
  {
    slug: "business-registration-australia",
    title: "Business Registration Australia",
    overview:
      "A high-performance frontend for Australia's business registration platform with real-time API data integration.",
    problem:
      "Users needed a fast, trustworthy interface for registering businesses online, backed by live data from registration APIs.",
    solution:
      "Built with Next.js and React.js, integrating Axios-driven real-time API calls and Stripe for paid registration tiers, styled with Tailwind CSS.",
    features: [
      "Real-time integration with business registration data APIs",
      "Stripe-powered payment flow for registration packages",
      "Fully responsive, high-performance frontend"
    ],
    tech: ["Next.js", "React.js", "Axios", "Tailwind CSS", "Stripe"],
    challenges:
      "Keeping the interface fast while handling live, frequently changing registration data from external APIs.",
    results: "Delivered a performant, production-grade frontend supporting real business registrations.",
    url: "https://www.business-registration.com.au",
    gradient: "from-blue-500 via-indigo-500 to-blue-400"
  },
  {
    slug: "the-easy-life",
    title: "The Easy Life",
    overview:
      "A multilingual service platform spanning healthcare, tourism, and transportation for English and Arabic-speaking users.",
    problem:
      "The client needed one platform serving three distinct service verticals to a bilingual audience without compromising performance or UX.",
    solution:
      "Implemented English and Arabic localization with i18next on top of a Next.js and React.js frontend, with optimized API integration and a responsive UI.",
    features: [
      "Full English & Arabic localization with i18next",
      "Coverage across healthcare, tourism, and transportation services",
      "Optimized, responsive UI across all supported locales"
    ],
    tech: ["Next.js", "React.js", "Axios", "Tailwind CSS", "i18next"],
    challenges:
      "Handling RTL layout requirements for Arabic while keeping a single shared component library for both locales.",
    results: "Shipped a unified, responsive multilingual platform serving three service categories.",
    url: "https://theeasylife.net",
    gradient: "from-violet-500 via-indigo-500 to-blue-500"
  },
  {
    slug: "giftstacc",
    title: "GiftStacc (FirstRewards)",
    overview:
      "An e-commerce frontend with role-based access for users and admins, including coupon logic.",
    problem:
      "The platform needed distinct, secure experiences for end users and administrators, along with flexible promotional coupon handling.",
    solution:
      "Built with React.js and Redux Toolkit for state management, using Bootstrap for UI and REST APIs for data, with ongoing feature maintenance.",
    features: [
      "Role-based access control for users and admins",
      "Coupon and promotions logic",
      "REST API–driven e-commerce catalog and checkout"
    ],
    tech: ["React.js", "Redux (RTK)", "Axios", "Bootstrap", "REST API"],
    challenges: "Designing state management that cleanly separated admin and user permission logic within one codebase.",
    results: "Delivered and continues to maintain a functioning role-based e-commerce experience.",
    url: "https://firstrewards.in",
    gradient: "from-indigo-500 via-violet-500 to-blue-500"
  }
];

export const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    school: "Skyline Institute of Engineering & Technology, Greater Noida, India",
    detail: "69%"
  },
  {
    degree: "Intermediate (12th)",
    school: "St. Xavier's Public School, Gorakhpur",
    detail: "65%"
  },
  {
    degree: "High School (10th)",
    school: "St. Xavier's Public School, Gorakhpur",
    detail: "7.6 CGPA"
  }
];
