export const projects = [
  {
    id: "stayease",
    index: "01",
    name: "StayEase",
    tag: "Backend API · Hotel Booking Platform",
    size: "large",
    summary:
      "A production-ready hotel booking engine with role-based access, room inventory, and a full reservation lifecycle — built the way a real booking platform's backend is built.",
    challenge:
      "Booking systems live or die on data integrity: two guests can't be confirmed into the same room on the same night, and role boundaries between guests, staff, and admins have to be airtight.",
    solution:
      "Modeled bookings and rooms with availability checks at the database layer, layered JWT auth with role-based middleware, and kept controllers thin with a clean MVC structure so every endpoint stays predictable and testable in Postman.",
    stack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT"],
    features: [
      "Authentication & role-based access (guest / staff / admin)",
      "Room inventory & availability management",
      "End-to-end booking lifecycle with conflict checks",
      "Guest reviews tied to completed stays",
      "REST API fully documented & Postman-tested",
    ],
    stats: [
      { label: "Endpoints", value: "30+" },
      { label: "Core models", value: "4" },
      { label: "Auth roles", value: "3" },
    ],
    github: "https://github.com/rashii007",
    live: null,
  },
  {
    id: "banking",
    index: "02",
    name: "Banking Transaction System",
    tag: "MERN · Fintech Dashboard",
    size: "large",
    summary:
      "A full-stack banking simulation covering account management, peer-to-peer transfers, and a live analytics dashboard — the kind of ledger logic real fintech products depend on.",
    challenge:
      "Money movement has to be exact. Every transfer needs to update two account balances atomically, keep an immutable transaction record, and surface it back to the user instantly.",
    solution:
      "Built transfer logic around atomic MongoDB updates and a dedicated transactions collection as the single source of truth, with an Express API in front and a React dashboard that visualizes balance history and recent activity in real time.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    features: [
      "Secure authentication & account management",
      "Peer-to-peer money transfers",
      "Full transaction history & statements",
      "Analytics dashboard with spending insight",
      "Protected routes on every sensitive action",
    ],
    stats: [
      { label: "Transaction integrity", value: "Atomic" },
      { label: "Dashboard views", value: "5" },
      { label: "Auth", value: "JWT" },
    ],
    github: "https://github.com/rashii007",
    live: null,
  },
  {
    id: "ai-interview",
    index: "03",
    name: "AI Interview Platform",
    tag: "GenAI · MERN + Gemini",
    size: "medium",
    summary:
      "An AI-powered mock interview platform that generates role-specific questions with Gemini, tracks history, and gives candidates a dashboard to review their own progress.",
    challenge:
      "Generated questions needed to feel relevant to the candidate's role rather than generic, and every session had to be saved without slowing the interview flow down.",
    solution:
      "Wrapped the Gemini API behind a prompt layer tuned per role/level, streamed responses into a responsive interview UI, and persisted every session to MongoDB so the dashboard can replay history instantly.",
    stack: ["React", "Node.js", "MongoDB", "Gemini AI"],
    features: [
      "AI-generated, role-specific interview questions",
      "Authentication & personal dashboard",
      "Full interview history & session review",
      "Responsive interview UI",
    ],
    stats: [
      { label: "AI model", value: "Gemini" },
      { label: "Session history", value: "Persisted" },
    ],
    github: "https://github.com/rashii007",
    live: null,
  },
  {
    id: "notes",
    index: "04",
    name: "MERN Notes Application",
    tag: "MERN · Productivity",
    size: "medium",
    summary:
      "A categorized, searchable notes app with a dark-mode dashboard — built for speed of capture and speed of retrieval.",
    challenge:
      "Notes apps are only useful if finding something is faster than re-typing it, so search and categorization had to feel instant.",
    solution:
      "Indexed notes by category and keyword on the backend, kept the dashboard state optimistic on the frontend so edits feel instant, and shipped a dark mode as a first-class theme rather than an afterthought.",
    stack: ["React", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Authentication",
      "Full CRUD on notes",
      "Categories & tagging",
      "Search across notes",
      "Dark mode & responsive dashboard",
    ],
    stats: [
      { label: "Core action", value: "CRUD" },
      { label: "Theme", value: "Dark / Light" },
    ],
    github: "https://github.com/rashii007",
    live: null,
  },
  {
    id: "todo",
    index: "05",
    name: "MERN Todo Dashboard",
    tag: "MERN · Task Analytics",
    size: "small",
    summary: "A task dashboard that turns a plain to-do list into a progress-tracked, analytics-backed workflow.",
    challenge: "A to-do list is only motivating if progress is visible, not just a list of unchecked boxes.",
    solution:
      "Added a dashboard analytics layer on top of standard CRUD — completion rate, streaks, and progress tracking — backed by JWT-authenticated endpoints.",
    stack: ["React", "Node.js", "MongoDB", "JWT"],
    features: ["Dashboard analytics", "JWT authentication", "Progress tracking", "Full CRUD todos", "Responsive UI"],
    stats: [{ label: "Tracking", value: "Live" }],
    github: "https://github.com/rashii007",
    live: null,
  },
  {
    id: "auth-api",
    index: "06",
    name: "Authentication Backend API",
    tag: "Node.js · Security",
    size: "small",
    summary:
      "A standalone, reusable authentication service covering the full account lifecycle — the kind of foundation every other project in this list is built on.",
    challenge:
      "Auth is the one system where cut corners become security holes, so password resets, verification, and route protection all had to be handled correctly, not just functionally.",
    solution:
      "Implemented JWT-based auth with hashed passwords, email verification, and a secure forgot/reset-password flow, then wrapped role-based middleware around every protected route.",
    stack: ["Node.js", "Express.js", "MongoDB", "JWT"],
    features: [
      "Register & login with hashed passwords",
      "Email verification",
      "Forgot / reset password flow",
      "Protected & role-based routes",
    ],
    stats: [{ label: "Flow", value: "Full lifecycle" }],
    github: "https://github.com/rashii007",
    live: null,
  },
];
