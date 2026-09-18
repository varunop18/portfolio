export const profile = {
  name: "Varun Rathod",
  role: "Software Developer",
  rotatingRoles: ["Software Developer", "Full-Stack Builder", "Computer Programming & Analysis Student"],
  location: "Ottawa, ON",
  phone: "+1 437 879 1570",
  email: "varunarathod2005@gmail.com",
  linkedin: "https://www.linkedin.com/in/varun-rathod-va/",
  github: "https://github.com/varunop18",
  summary:
    "Computer Programming and Analysis student at Algonquin College with hands-on experience building full-stack, database-driven, and desktop applications in Python, Java, and the MERN stack. Looking for an entry-level Software Developer role to keep building practical, real-world development skills.",
};

export const education = [
  {
    degree: "Advanced Diploma in Computer Programming and Analysis",
    school: "Algonquin College",
    location: "Ottawa, ON",
    date: "Expected Dec 2026",
  },
  {
    degree: "Diploma in Computer Engineering",
    school: "R.C. Technical Institute",
    location: "Ahmedabad, India",
    date: "2020 – 2023",
    detail: "CGPA: 7.93/10",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "Java", "JavaScript", "C", "C++", "C#", "PHP"],
  },
  {
    title: "Web & Databases",
    items: [
      "HTML",
      "CSS",
      "Django",
      "React 18",
      "Express.js",
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "SQLite",
      "MongoDB",
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      "Git",
      "GitHub",
      "Azure DevOps",
      "Linux",
      "Android Studio",
      "Eclipse",
      "Visual Studio",
      "PyCharm",
    ],
  },
  {
    title: "Concepts",
    items: [
      "OOP",
      "Database Design",
      "REST APIs",
      "CI/CD",
      "Agile",
      "Authentication",
      "WCAG Accessibility",
    ],
  },
];

export const projects = [
  {
    id: "event-manager",
    title: "Event Manager — End-to-End Event Planning Platform",
    date: "May 2026 – Aug 2026",
    stack: ["MongoDB", "Express.js", "React 18", "Node.js", "Azure DevOps"],
    featured: true,
    bullets: [
      "Engineered a full-stack platform delivering 6 core modules including real-time RSVPs and budget variance alerts.",
      "Ran Agile delivery across 4 sprints in Azure DevOps: 4 Epics, 18 User Stories, 45 Tasks, with a strict Definition of Done.",
      "Facilitated 5 client-facing checkpoints from kickoff to sign-off, iterating scope and UI from feedback.",
      "Mitigated bottlenecks with mid-sprint re-estimation and 20% setup buffers, resolving CRUD complexities.",
    ],
  },
  {
    id: "retirement-directory",
    title: "Ontario Retirement Residence Directory",
    date: "Sep 2025 – Dec 2025",
    client: "Coyle Media Group (Fifty-Five Plus Magazine)",
    stack: ["HTML", "CSS", "JavaScript", "SheetJS", "html2pdf.js"],
    featured: true,
    bullets: [
      "Shipped a responsive, senior-friendly directory embedded via iframe, reaching 30,000+ subscribers.",
      "Built a client-managed data pipeline using SheetJS to parse admin Excel files into a dynamic frontend with no backend.",
      "Built a multi-filter search UI: 50+ amenity checkboxes, regional dropdowns, keyword search, Card/Table views.",
      "Added client-side Excel/PDF/Print export while holding strict WCAG accessibility compliance.",
    ],
  },
  {
    id: "travelocity",
    title: "Travelocity Travel Booking Website",
    stack: ["Python", "Django", "PostgreSQL", "HTML/CSS/JavaScript"],
    bullets: [
      "Built a full-stack travel booking site for browsing and booking travel packages.",
      "Implemented secure auth and role-based access separating traveler and admin permissions.",
    ],
  },
  {
    id: "desktop-apps",
    title: "Desktop Applications — Gym Management & Expense Tracker",
    date: "May 2026 – Aug 2026",
    stack: ["Java", "JavaFX", "SQLite"],
    bullets: [
      "Built a Gym Management System handling member registrations, class scheduling, and payment tracking with JavaFX GUI and SQLite database.",
      "Developed a Personal Expense Tracker for logging daily expenses, categorizing spending, and visualizing budgets with summary reports.",
      "Implemented add/update/search/delete flows using OOP design patterns with clean MVC architecture.",
      "Added reporting: generate and export monthly financial summaries and membership reports as PDF.",
    ],
  },
];

export const experience = [
  {
    role: "Staff",
    company: "Subway",
    location: "Ottawa, ON",
    date: "Nov 2024 – Present",
    bullets: [
      "Prepared and served orders accurately under time pressure, maintaining high service standards.",
      "Handled cash transactions and POS operations while following sanitation procedures.",
    ],
  },
];

export const socials = [
  {
    name: "LinkedIn",
    icon: "/linkedin.svg",
    url: "https://www.linkedin.com/in/varun-rathod-va/",
  },
  {
    name: "GitHub",
    icon: "/github.svg",
    url: "https://github.com/varunop18",
  },
];
