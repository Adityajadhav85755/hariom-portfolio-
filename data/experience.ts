// data/experience.ts

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  type?: "work" | "research" | "education" | "leadership";
}

export const experiences: Experience[] = [
  // ── Tradonomy ──────────────────────────────────────────────
  {
    id: "tradonomy-research-analyst",
    title: "Research Analyst",
    company: "Tradonomy",
    location: "Mumbai, Maharashtra, India",
    startDate: "April 2025",
    endDate: "Present",
    description:
      "Working as a Research Analyst at Tradonomy inside the Bombay Stock Exchange building office, focusing on equity research, valuation, and market analysis.",

    achievements: [
      "Prepared Global Indices Report analyzing international indices and reasons behind recent FII selling pressure",
      "Worked on Union Budget 2025 report highlighting key announcements, high-impact sectors, and beneficiary stocks",
      "Conducted historical stock return study covering 1, 3, 5, and 10-year returns across market segments",
      "Prepared equity research reports on Vedanta Ltd., Manappuram Finance Ltd., and ABB India",
      "Performed peer comparison, valuation analysis, and financial research",
    ],

    type: "work",
  },

  // ── ICICI Prudential ───────────────────────────────────────
  {
    id: "icici-financial-advisor",
    title: "Financial Advisor",
    company: "ICICI Prudential Life Insurance Company Limited",
    location: "Mumbai, Maharashtra, India",
    startDate: "November 2023",
    endDate: "January 2025",
    description:
      "Worked as a freelance Financial Advisor providing financial planning and insurance solutions to clients.",

    achievements: [
      "Guided clients in selecting suitable financial and insurance products",
      "Developed communication and relationship management skills",
      "Assisted customers with financial planning and investment-related queries",
      "Worked in a hybrid environment managing client interactions and support",
    ],

    type: "work",
  },

  // ── The Legal Club VSIT - Head of Operations ───────────────
  {
    id: "legal-club-head-operations",
    title: "Head of Operations",
    company: "The Legal Club VSIT",
    location: "Mumbai, Maharashtra, India",
    startDate: "July 2023",
    endDate: "July 2024",
    description:
      "Led operational activities and coordinated management tasks for The Legal Club VSIT.",

    achievements: [
      "Managed club operations and ensured smooth execution of activities",
      "Coordinated with students and management for events and communication",
      "Developed leadership and people management skills",
      "Handled operational planning and team coordination",
    ],

    type: "leadership",
  },

  // ── The Legal Club VSIT - Head of PR ───────────────────────
  {
    id: "legal-club-pr-head",
    title: "Head of Public Relations",
    company: "The Legal Club VSIT",
    location: "Mumbai, Maharashtra, India",
    startDate: "November 2021",
    endDate: "July 2023",
    description:
      "Served as the first PR Head of the club during its inaugural year, handling communication and public relations activities.",

    achievements: [
      "Became the first PR Head during the club's inaugural year",
      "Handled message drafting, report writing, and event coordination",
      "Ensured smooth communication between students and management",
      "Built strong public relations and communication skills",
    ],

    type: "leadership",
  },

  // ── The Legal Club VSIT - PR Member ────────────────────────
  {
    id: "legal-club-pr-member",
    title: "PR Member",
    company: "The Legal Club VSIT",
    location: "Mumbai, Maharashtra, India",
    startDate: "August 2021",
    endDate: "November 2021",
    description:
      "Worked as a PR Member during the inaugural year of the club and gained practical public relations experience.",

    achievements: [
      "Assisted in PR activities and communication handling",
      "Supported event management and coordination tasks",
      "Developed teamwork and communication skills",
    ],

    type: "leadership",
  },

  // ── FinTree ────────────────────────────────────────────────
  {
    id: "fintree-assistant-manager",
    title: "Assistant Manager",
    company: "FinTree",
    location: "Mumbai, Maharashtra, India",
    startDate: "April 2023",
    endDate: "December 2023",
    description:
      "Managed counseling, operations, sales, and business development activities for FinTree Mumbai.",

    achievements: [
      "Contributed to a 20% revenue surge through counseling and sales strategies",
      "Guided 300+ students and professionals for CFA, FRM, and Financial Modeling courses",
      "Managed operations, sales, R&D, and business development activities",
      "Received appreciation for strong counseling, operations, and sales performance",
    ],

    type: "work",
  },

  // ── E-Cell VSIT ────────────────────────────────────────────
  {
    id: "ecell-event-manager",
    title: "Event Manager",
    company: "E-cell VSIT",
    location: "Mumbai, Maharashtra, India",
    startDate: "May 2022",
    endDate: "June 2023",
    description:
      "Managed events and coordinated activities as part of the entrepreneurship cell at VSIT.",

    achievements: [
      "Organized and managed student events and activities",
      "Worked with teams for smooth event execution",
      "Developed teamwork and event management skills",
      "Handled coordination and communication responsibilities",
    ],

    type: "leadership",
  },

  // ── Evepaper ───────────────────────────────────────────────
  {
    id: "evepaper-research-promotion",
    title: "Research and Promotion Intern",
    company: "Evepaper",
    location: "Mumbai, Maharashtra, India",
    startDate: "February 2023",
    endDate: "May 2023",
    description:
      "Worked on business research, social media growth, and presentation activities during the internship.",

    achievements: [
      "Analyzed operations of multiple companies to understand business strategies",
      "Helped increase LinkedIn followers using social media strategies",
      "Improved presentation and communication skills",
      "Collaborated with team members on projects and research activities",
      "Expanded professional network through industry interactions",
    ],

    type: "research",
  },

  // ── Big Bulls 77 ───────────────────────────────────────────
  {
    id: "bigbulls-financial-analyst",
    title: "Financial Analyst Intern",
    company: "Big Bulls 77",
    location: "Mumbai, Maharashtra, India",
    startDate: "December 2022",
    endDate: "February 2023",
    description:
      "Worked as a Financial Analyst Intern focusing on international capital markets and forex trading analysis.",

    achievements: [
      "Gained practical exposure to international capital markets",
      "Learned forex trading concepts and investment strategies",
      "Conducted financial analysis and report preparation",
      "Collaborated with senior analysts for research and recommendations",
    ],

    type: "research",
  },
];