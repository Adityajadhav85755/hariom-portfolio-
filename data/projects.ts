export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  equityReports?: { id: string; title: string; description: string; pdf: string; link: string }[];
  sectorReports?: { id: string; title: string; description: string; pdf: string; link: string }[];
  achievements: string[];
  image: string;
  github?: string;
  liveUrl?: string;
  pdfs?: { name: string; file: string }[];
  links?: { name: string; url: string }[];
  featured: boolean;
}

export const projects: Project[] = [
  // ── Featured Projects ──────────────────────────────────────────────
{
  id: "equity-research-report",
  title: "Equity Research Report",

  description:
    "In-depth equity research report with valuation, financial analysis, and investment recommendation.",

  longDescription:
    "Conducted a complete equity research analysis of listed companies including financial statement analysis, industry comparison, and valuation using DCF and relative valuation techniques. Provided investment recommendations based on data-driven insights.",

  technologies: ["Excel", "DCF", "Financial Modeling", "Ratio Analysis"],

  achievements: [
    "Performed detailed analysis of income statement, balance sheet, and cash flow",
    "Built DCF valuation model with assumptions and projections",
    "Compared company with industry peers using ratio analysis",
    "Delivered investment recommendation with risk analysis",
  ],

  equityReports: [
    {
      id: "nbcc-ltd",
      title: "NBCC Ltd Equity Research Report",

      description:
        "Comprehensive equity research report on NBCC Ltd including valuation analysis, financial performance, and growth outlook.",

      pdf: "D:/Portfolios/achyut-portfolio/public/pdfs/NBCC India Equity Research Report by Omniscient Securities Ltd.pdf",

      link:
        "https://drive.google.com/file/d/1k3-00hWdoHV41YA7FDgN7Vt7T5Px_7sn/view",
    },

    {
      id: "black-box-ltd",
      title: "Black Box Ltd Equity Research Report",

      description:
        "Detailed equity research analysis of Black Box Ltd covering financial ratios, DCF valuation, and investment recommendation.",

      pdf: "/pdfs/Black Box Ltd Equity Research Report.pdf",

      link:
        "D:/Portfolios/achyut-portfolio/public/pdfs/Black Box Ltd Report - by Tradonomy-3.pdf",
    },
  ],

  image: "/images/projects/skillbridge-ai/skillbridge-ai.webp",

  featured: true,
},
{
  id: "sector-research-report",
  title: "Sector Research Report",

  description:
    "Comprehensive sector analysis with company comparisons and investment insights.",

  longDescription:
    "Conducted in-depth sector research analyzing market trends, competitive landscape, and investment opportunities. Compared key players, evaluated growth prospects, and provided actionable investment recommendations.",

  technologies: ["Excel", "Financial Analysis", "Market Research"],

  achievements: [
    "Analyzed sector trends and growth drivers",
    "Compared key players using financial ratios",
    "Evaluated competitive positioning and market share",
    "Provided investment recommendations with risk assessment",
  ],

  sectorReports: [
    {
      id: "data-center-sector",
      title: "Data Center Sector",

      description:
        "Analysis of India’s growing data center industry including demand drivers, infrastructure expansion, and investment opportunities.",

      pdf: "/pdfs/Data Center Report - by Tradonomy.pdf",

      link:
        "https://drive.google.com/file/d/1vkrfKSFlcv6mEzaBtPHtV4VDCVeRmcrf/view?usp=sharing",
    },

    {
      id: "cement-sector-report",
      title: "Cement Sector Report",

      description:
        "Detailed research on the cement sector covering market leaders, capacity expansion, pricing trends, and growth outlook.",

      pdf: "/pdfs/Cement Sector Report - By Tradonomy.pdf",

      link:
        "https://drive.google.com/file/d/1a4inJWm_LDWypEC6YWMM4U93oBCz5dIL/view?usp=sharing",
    },

    {
      id: "indian-power-sector-report",
      title: "Indian Power Sector Report",

      description:
        "Comprehensive report on India’s power sector including renewable energy growth, generation trends, and future opportunities.",

      pdf: "/pdfs/Indian Power Sector Report - By Tradonomy.pdf",

      link:
        "https://drive.google.com/file/d/1R703VkIKIP_WWH43UWpB8r7-4vfXf9Z4/view?usp=sharing",
    },
  ],

  image: "/images/projects/collaborative-docs/collaborative-docs.webp",

  featured: true,
},

  // {
  //   id: "stock-analysis-python",
  //   title: "Stock Market Analysis (Python)",
  //   description: "Data-driven stock analysis using Python with trend and volatility insights.",
  //   longDescription:
  //     "Analyzed historical stock data using Python libraries like Pandas and Matplotlib. Calculated returns, moving averages, and volatility to identify trends and investment opportunities.",
  //   technologies: ["Python", "Pandas", "Matplotlib"],
  //   achievements: [
  //     "Fetched and cleaned historical stock data",
  //     "Calculated daily returns and moving averages",
  //     "Visualized trends using line charts",
  //     "Analyzed volatility and risk patterns",
  //   ],
  //   image: "/images/projects/byteroot/byteroot.webp",
  //   github: "",
  //   featured: true,
  // },

  // ── Other Projects ─────────────────────────────────────────────────
  {
    id: "financial-model-excel",
    title: "Financial Modeling (Excel)",
    description: "Built a 3-statement financial model with projections and scenario analysis.",
    longDescription:
      "Created a complete financial model linking income statement, balance sheet, and cash flow. Included forecasting assumptions and sensitivity analysis.",
    technologies: ["Excel", "Financial Modeling"],
    achievements: [
      "Built integrated 3-statement model",
      "Created revenue and expense projections",
      "Performed scenario and sensitivity analysis",
      "Improved decision-making using data insights",
    ],
    image: "/images/projects/neunotes/neunotes.webp",
    featured: false,
  },

  {
    id: "ratio-analysis-tool",
    title: "Financial Ratio Analysis Tool",
    description: "Tool to calculate and analyze key financial ratios for companies.",
    longDescription:
      "Developed a tool to evaluate company performance using profitability, liquidity, and solvency ratios for better investment decisions.",
    technologies: ["Excel", "Finance"],
    achievements: [
      "Calculated key ratios like ROE, ROA, Current Ratio",
      "Compared multiple companies",
      "Simplified financial analysis process",
      "Improved evaluation speed",
    ],
    image: "/images/projects/infinitus/infinitus.webp",
    featured: false,
  },

  {
    id: "macro-analysis",
    title: "Macroeconomic Analysis Report",
    description: "Analyzed macroeconomic indicators and their impact on financial markets.",
    longDescription:
      "Studied inflation, GDP, interest rates, and monetary policy to understand their effect on stock markets and investment decisions.",
    technologies: ["Economics", "Research"],
    achievements: [
      "Analyzed GDP, inflation, and interest rate trends",
      "Connected macro factors with market movement",
      "Developed investment insights",
      "Created structured research report",
    ],
    image: "/images/projects/lightning-time/lightning-time.webp",
    featured: false,
    links: [
      {
        name: "View Report",
        url: "https://www.linkedin.com/posts/tradonomy_the-future-of-the-rupee-activity-7371826798189330432-D1Sg/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADj97xoBSU8fEg4tw_Tx9IsD1ghgKNhwDKo",
      },
    ],
  },
];
