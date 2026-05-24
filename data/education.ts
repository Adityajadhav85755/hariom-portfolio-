export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  percentage?: string;
  description?: string;
}

export const education: Education[] = [
  {
    id: "cfa-level-1",
    degree: "Chartered Financial Analyst (CFA) - Level 1",
    institution: "CFA Institute, USA",
    location: "USA",
    startDate: "January 2025",
    endDate: "January 2026",
    description: "Passed",
    percentage: "90%ile",
  },
  {
    id: "bms",
    degree: "Bachelor of Management Studies (BMS)",
    institution: "Vidyalankar School of Information Technology, Mumbai",
    location: "Mumbai, India",
    startDate: "2021",
    endDate: "2024",
    gpa: "8.73/10",
  },
  {
    id: "hsc",
    degree: "Higher Secondary (HSC XII)",
    institution: "Siddharth College of Commerce & Economics, Fort, Mumbai",
    location: "Mumbai, India",
    startDate: "2019",
    endDate: "February 2021",
    gpa: "75%",
  },
  {
    id: "ssc",
    degree: "Secondary (SSC X)",
    institution: "Bara Devi School, Parel, Mumbai",
    location: "Mumbai, India",
    startDate: "2019",
    endDate: "March 2019",
    gpa: "58.40%",
  },
];
