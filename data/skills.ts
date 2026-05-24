// data/skills.ts
export type SkillCategory = "Financial Analysis" | "Technical Tools" | "Soft Skills" | "Research";

export interface Skill {
  name: string;
  category: SkillCategory;
  logoKey: string; // Used to generate the CDN URL
}

export const skills: Record<SkillCategory, Skill[]> = {
  "Financial Analysis": [
    { name: "Financial Modeling", category: "Financial Analysis", logoKey: "excel" },
    { name: "DCF Analysis", category: "Financial Analysis", logoKey: "excel" },
    { name: "Ratio Analysis", category: "Financial Analysis", logoKey: "excel" },
    { name: "Valuation Methods", category: "Financial Analysis", logoKey: "excel" },
  ],

  "Technical Tools": [
    { name: "Excel", category: "Technical Tools", logoKey: "excel" },
    { name: "Power BI", category: "Technical Tools", logoKey: "microsoft" },
    { name: "Canva", category: "Technical Tools", logoKey: "canva" },
    { name: "Gamma AI", category: "Technical Tools", logoKey: "sparkles" },
    { name: "AI Tools", category: "Technical Tools", logoKey: "brain" },
  ],

  "Soft Skills": [
    { name: "Communication", category: "Soft Skills", logoKey: "users" },
    { name: "Problem Solving", category: "Soft Skills", logoKey: "brain" },
    { name: "Team Collaboration", category: "Soft Skills", logoKey: "users" },
    { name: "Time Management", category: "Soft Skills", logoKey: "clock" },
  ],

  Research: [
    { name: "Fundamental Analysis", category: "Research", logoKey: "search" },
    { name: "Market Research", category: "Research", logoKey: "search" },
    { name: "Company Analysis", category: "Research", logoKey: "search" },
    { name: "Growth Potential Assessment", category: "Research", logoKey: "search" },
    { name: "Investment Trend Finding", category: "Research", logoKey: "trending-up" },
    { name: "Primary Research", category: "Research", logoKey: "user-check" },
    { name: "Secondary Research", category: "Research", logoKey: "file-text" },
  ],
};
