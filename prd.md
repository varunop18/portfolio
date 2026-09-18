# PRD — Varun Rathod Developer Portfolio
### Theme base: "Metaversus" (Next.js + Tailwind v4 + Framer Motion) — reskinned for a personal dev portfolio
Prepared for: Google Antigravity (agentic build)
Version: 1.0 · Date: 2026-09-17

---

## 1. Summary

Build a single-page, fully responsive, motion-rich developer portfolio for **Varun Rathod**, a Computer Programming & Analysis student (Algonquin College, Ottawa) seeking an entry-level Software Developer role. The visual language, motion system, and component architecture are **ported 1:1 from the "Metaversus" theme** (dark, glassmorphic, gradient-blurred, staggered scroll-reveal animations, planet/orbit motifs) but every content slot, label, and section purpose is remapped to a portfolio. No metaverse copy, no placeholder lorem ipsum, no unrelated branding should remain in the final build.

**Reference codebase provided:** `metaversus-main` (Next.js 16, React 19, Tailwind CSS v4 via `@theme`, Framer Motion 13, App Router). Antigravity should scaffold a **new** Next.js 15/16 app using the same stack and reuse the theme's design tokens, spacing scale, and motion variants verbatim (see §6), rewriting only JSX content, images, and data.

---

## 2. Goals

- Ship a portfolio that gets Varun interviews: recruiters should understand in <10 seconds who he is, what he can build, and how to contact him.
- Preserve the "wow" factor of the source theme (parallax gradients, glassmorphism, spring/stagger animations) without it overpowering readability of resume content.
- 100% responsive: mobile (360px) → tablet → desktop (2xl, 1280px content cap, matching theme's `innerWidth`).
- Fast: Lighthouse Performance ≥ 90, Accessibility ≥ 95 on mobile.
- Fully driven by structured data (`constants/index.js`) so content can be edited without touching JSX — mirrors the source theme's pattern.

## 3. Non-Goals

- No CMS/backend, no auth, no database.
- No blog engine (a lightweight "Notes/Insights" card grid is enough — see §5.7 — it does not need real routing to individual articles unless time permits).
- No e-commerce, no multi-language i18n.

## 4. Target Users & Use Cases

| User | Need |
|---|---|
| Recruiter / hiring manager | Skim skills + projects in under a minute, download/view resume, get contact info fast |
| Technical interviewer | See real project depth (stack, role, metrics) and code links |
| Varun (owner) | Easy to update projects/experience by editing one data file; easy to redeploy |

---

## 5. Information Architecture (mapped from resume → theme sections)

Reuse the theme's section order and motion choreography; remap purpose per section:

| Theme section | New purpose | Content source |
|---|---|---|
| `Navbar` | Sticky nav: logo/initials "VR", nav links (About, Projects, Skills, Experience, Contact), resume download icon-button, GitHub/LinkedIn icons | Resume header |
| `Hero` | Full-bleed intro: "VARUN RATHOD" big kinetic heading (same two-line big-type treatment as "METAVERSE / MA[D]NESS"), rotating role subtitle ("Software Developer" / "Full-Stack Builder" / "CPA Student"), short one-line pitch, primary CTA "View Projects", secondary CTA "Download Résumé", hero visual = abstract code/orbit graphic or headshot photo in the same rounded/blurred-gradient frame as `cover.png` | Summary section |
| `About` | Short bio paragraph (from Summary) + education timeline card (Algonquin College Advanced Diploma, Expected Dec 2026; R.C. Technical Institute Diploma, CGPA 7.93/10) + quick stats strip (Languages count, Projects count, Years coding) | Summary + Education |
| `Explore` (planet grid) | **"Skills Universe"** — reuse the 5-tile orbiting/planet-card grid layout, but each tile is a skill category card (Languages, Web & DBs, Tools & Platforms, Concepts, plus a 5th "Currently Learning" card) with icon + tag chips | Technical Skills |
| `GetStarted` (3-step list) | **"How I Work"** — reuse 3-step numbered layout for a short "my process" (Discover → Build → Ship/Iterate) OR repurpose as **"Get In Touch"** 3-step contact block (Email, LinkedIn, Book a call) — pick contact version since portfolio needs a strong CTA block | New copy, contact-oriented |
| `WhatsNew` (2-card feature) | **"Featured Projects"** highlight — 2 large feature cards for the top 2 projects: **Event Manager (MERN)** and **Ontario Retirement Residence Directory** (real client project = strongest proof point) | Projects |
| `World` (image showcase) | **"Full Project Grid"** — card grid for all 4 projects: Ontario Retirement Residence Directory, Event Manager, Travelocity Booking Site, Desktop Apps (Gym Manager & Expense Tracker). Each card: title, stack chips, 2–3 bullet impact points, GitHub/live links | Projects |
| `Insights` (article cards) | **"Experience & Highlights"** — reuse card grid to show Work Experience (Subway — Staff) + optional "certifications/notes" cards if added later | Experience |
| `Feedback` (glass card + gradient) | **"Testimonial / Recommendation"** placeholder OR repurpose as a pull-quote about Varun's client work (from the Coyle Media Group project — "delivered to 30,000+ subscribers") if no real testimonial exists yet | Optional — fallback to a stat highlight if no testimonial is supplied |
| `Footer` | Contact block: email, phone, location (Ottawa, ON), LinkedIn, GitHub, copyright | Header info |

> **Content rule:** Every card/section above must pull from a single `constants/index.js` (or `data/resume.js`) file, exactly like the source theme's `constants/index.js`. No hardcoded resume text inside JSX.

### 5.x Exact content to seed into the data file

```js
export const profile = {
  name: "Varun Rathod",
  role: "Software Developer",
  rotatingRoles: ["Software Developer", "Full-Stack Builder", "CPA Student"],
  location: "Ottawa, ON",
  phone: "+1 437 879 1570",
  email: "varunarathod2005@gmail.com",
  linkedin: "<LinkedIn Profile URL>",
  github: "<GitHub URL>",
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
  { title: "Languages", items: ["Python", "Java", "JavaScript", "C", "C++", "C#", "PHP"] },
  { title: "Web & Databases", items: ["HTML", "CSS", "Django", "React 18", "Express.js", "PostgreSQL", "MySQL", "SQL Server", "SQLite", "MongoDB"] },
  { title: "Tools & Platforms", items: ["Git", "GitHub", "Azure DevOps", "Linux", "Android Studio", "Eclipse", "Visual Studio", "PyCharm"] },
  { title: "Concepts", items: ["OOP", "Database Design", "REST APIs", "CI/CD", "Agile", "Authentication", "WCAG Accessibility"] },
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
      "Built desktop apps with JavaFX GUIs and SQLite persistence for memberships and budgets.",
      "Implemented add/update/search flows using solid OOP design.",
      "Added reporting: generate and export monthly financial summaries as PDF.",
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
```

---

## 6. Design System (ported from theme — do not invent a new one)

**Keep exactly:**
- Color tokens (Tailwind v4 `@theme` block):
  - `--color-primary-black: #1a232e` (base background)
  - `--color-secondary-white: #c7c7c7` (secondary text)
  - `--ease-out-flex: cubic-bezier(0.05, 0.6, 0.4, 0.9)`
- Gradients: `.hero-gradient`, `.gradient-01` … `.gradient-05`, `.feedback-gradient`, `.footer-gradient`, `.glassmorphism` — reuse verbatim as decorative backdrops behind sections.
- Layout tokens from `styles/index.js`: `innerWidth` (`2xl:max-w-[1280px] w-full`), `xPaddings`/`yPaddings`/`paddings`, `flexCenter`/`flexStart`/`flexEnd`, and the big kinetic `heroHeading` type scale (144px desktop → 44px mobile) for the name in Hero.
- Font: keep a bold geometric sans (theme uses "Eudoxus Sans"; if unlicensed, substitute **Space Grotesk** or **General Sans** at matching weights) — do not switch to a generic system font, the type scale is part of the identity.
- Motion library: reuse `utils/motion.js` variants unmodified — `navVariants`, `staggerContainer`, `textVariant`, `fadeIn`, `slideIn`, `zoomIn`, `planetVariants`, `footerVariants`. Apply `whileInView` + `viewport={{ once: false, amount: 0.25 }}` scroll-triggered reveals exactly as the source Hero/Navbar do, so every section animates in on scroll (staggered children, spring easing).

**Change:**
- Replace metaverse imagery (`planet-0X.png`, `stamp.png`, `map.png`, `cover.png`) with: a portfolio headshot or abstract dev/orbit illustration for Hero; tech-stack icon set (simple-icons or devicon SVGs) for the Skills cards; generic UI-mockup or code-editor illustrations for project cards where no real screenshot exists.
- Navbar wordmark → "VR." monogram or "Varun Rathod" instead of "METAVERSUS"; nav icons → smooth-scroll section links instead of a search icon; GitHub icon link → Varun's real GitHub.
- CTA/labels: "Enter the metaverse" style copy → recruiter-facing verbs ("View my work", "Download résumé", "Let's talk").

---

## 7. Functional Requirements

1. **Sticky animated navbar** with active-section highlighting and a mobile hamburger menu (slide-in drawer using `slideIn` variant) below `md` breakpoint.
2. **Hero** with kinetic name headline, rotating role text (simple text-swap animation, no extra library needed — reuse Framer Motion `AnimatePresence`), two CTAs, and a résumé download button that serves the actual PDF from `/public`.
3. **Skills Universe grid** — animated tile grid (reuse the planet-card component pattern), each tile flips/tilts slightly on hover (`whileHover={{ scale: 1.05 }}`), and expands to show the tag chips for that category.
4. **Featured Projects (2-up)** — large cards with image, title, 1-line impact stat, "View details ↗" link.
5. **Full Projects grid (4 cards)** — filterable by stack tag if time allows (nice-to-have, not required for v1).
6. **Experience timeline / cards** for work history, extensible for future roles.
7. **Contact section** — mailto + tel links, LinkedIn/GitHub buttons, and a copy-to-clipboard for email.
8. **Footer** with socials + "© 2026 Varun Rathod."
9. **Résumé PDF** placed at `/public/Varun_Rathod_Resume.pdf` and linked from Navbar + Hero + Contact.
10. All external links use `target="_blank" rel="noreferrer noopener"`.
11. Smooth-scroll anchor navigation (`scroll-behavior: smooth`, already in theme's `globals.css`).

## 8. Non-Functional Requirements

- **Responsive breakpoints:** mobile 360–639px, `sm` 640px, `md` 768px, `lg` 1024px, `xl`/`2xl` 1280px cap on content width (matches theme's `innerWidth`).
- **Accessibility:** semantic landmarks (`<nav>`, `<main>`, `<section aria-label>`), alt text on every image, visible focus states, color-contrast checked against the dark `#1a232e` background (secondary text `#c7c7c7` already meets AA on dark bg — verify for any new colors), reduced-motion support via `prefers-reduced-motion` media query that disables/shortens Framer Motion transitions.
- **Performance:** use Next.js `<Image>` for all raster images, lazy-load below-the-fold sections, avoid layout shift from web fonts (`font-display: swap`), target Lighthouse ≥ 90 mobile.
- **SEO:** unique `<title>`/meta description, Open Graph image (a static portfolio preview card), `sitemap.xml`, semantic heading order (one `<h1>` = name).
- **Deployment:** static-export or Vercel/Netlify-ready (theme already ships `next.config.js` compatible with Netlify per its README).

## 9. Tech Stack (for Antigravity to scaffold)

- Next.js (App Router, same major version family as the reference: 15/16)
- React 19
- Tailwind CSS v4 (CSS-first `@theme` config, no `tailwind.config.js` needed — matches source)
- Framer Motion (latest v11/v13-compatible API used by the reference `utils/motion.js`)
- Icons: `lucide-react` or plain SVGs for socials/skills
- No state management library needed; local `useState` only (nav menu open/close, rotating role index)

### Suggested file structure

```
app/
  layout.js
  page.js
  head.js
components/
  Navbar.jsx
  Footer.jsx
  SkillCard.jsx
  ProjectCard.jsx
  ExperienceCard.jsx
  StatChip.jsx
sections/
  Hero.jsx
  About.jsx
  Skills.jsx        (was Explore)
  FeaturedProjects.jsx (was WhatsNew)
  Projects.jsx       (was World)
  Experience.jsx     (was Insights)
  Testimonial.jsx    (was Feedback, optional)
  Contact.jsx        (was GetStarted)
constants/
  index.js           (profile, education, skillGroups, projects, experience — see §5.x)
styles/
  globals.css
  index.js
utils/
  motion.js           (copied verbatim from reference)
public/
  Varun_Rathod_Resume.pdf
  headshot.jpg / hero-visual.png
  icons/*.svg
```

## 10. Milestones

1. **Scaffold** — Next.js + Tailwind v4 + Framer Motion project; port `globals.css`, `styles/index.js`, `utils/motion.js` unchanged.
2. **Static content pass** — build all sections with real resume data, no animation yet, confirm responsive layout at 360/768/1280/1536px.
3. **Motion pass** — wire up scroll-reveal variants per section, navbar spring-in, rotating hero role text, hover micro-interactions on cards.
4. **Polish** — replace placeholder art with real headshot/icons, add favicon, OG image, accessibility audit, reduced-motion fallback.
5. **Ship** — Lighthouse pass, deploy, verify résumé download and all outbound links.

## 11. Acceptance Criteria

- [ ] All resume content (summary, education, skills, 4 projects, 1 job) appears, verbatim in meaning, with no leftover "Metaversus"/metaverse copy anywhere.
- [ ] Site is visually distinguishable as "the same theme feel" (colors, gradients, type scale, motion) as the reference build.
- [ ] Fully usable and legible from 360px to 1536px+ with no horizontal scroll or overlap.
- [ ] All animations respect `prefers-reduced-motion`.
- [ ] Résumé PDF, email, phone, LinkedIn, GitHub links all work.
- [ ] Lighthouse: Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95 (mobile, production build).
- [ ] No console errors/warnings in production build.

## 12. Open Questions (fill in before/at build time)

- Real LinkedIn and GitHub profile URLs (placeholders above).
- Live/GitHub links per project (only include if repos are public).
- Headshot photo or preferred abstract hero visual?
- Any real testimonial/recommendation text for §5's Feedback/Testimonial section, or should it be dropped in favor of a third stat/highlight block?