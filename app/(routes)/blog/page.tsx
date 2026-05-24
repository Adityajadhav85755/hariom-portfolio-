"use client";

import { motion } from "framer-motion";
import {
  Award,
  ExternalLink,
  CalendarDays,
  Building2,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StarHeader } from "@/components/shared/star-header";

const certificates = [
  {
    id: 1,
    title: "CFA Program Level I",
    organization: "CFA Institute",
    date: "Issued Jan 2026",
    description:
      "Completed CFA Level I covering ethics, financial reporting, quantitative methods, economics, and portfolio management.",
    image:
      "/images/76da3f6b-e1d5-4e78-9118-1bf623fbdb6f.png",
    link: "https://credentials.cfainstitute.org/d5c38c79-d7bc-4b55-9628-d52604ba8c61#acc.yck4dXpN",
    credentialId: "171625659",
  },

  {
    id: 2,
    title: "Goldman Sachs - Risk Job Simulation",
    organization: "Goldman Sachs",
    date: "Issued Jan 2025",
    description:
      "Completed practical risk analysis and financial decision-making simulation by Goldman Sachs.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
    link: "https://www.theforage.com/completion-certificates/MBA4MnZTNFEoJZGnk/ETGMhLB5eCrYjcH8o_MBA4MnZTNFEoJZGnk_ogz78jtoYbJL7ALck_1735739357505_completion_certificate.pdf",
    credentialId: "9r5yLsyfb5tXN9Gqi",
  },

  {
    id: 3,
    title: "JPMorgan Chase - Investment Banking",
    organization: "J.P. Morgan",
    date: "Issued Jan 2025",
    description:
      "Hands-on experience with investment banking concepts, valuation, and M&A analysis.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
    link: "https://www.theforage.com/completion-certificates/ZtgA28qyexifyEdHE/YD2kY95RQxQtXxFTS_ZtgA28qyexifyEdHE_ogz78jtoYbJL7ALck_1735714905624_completion_certificate.pdf",
    credentialId: "3uniLdK7pEv9LwS3S",
  },

  {
    id: 4,
    title: "HSBC - Global Banking & Markets Job Simulation",
    organization: "HSBC",
    date: "Issued Dec 2024",
    description:
      "Explored global banking operations, financial markets, and client solutions.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
    link: "https://www.theforage.com/completion-certificates/jCtDBF7kyfRqQpxp6/cEn98BQrAXAHRqqQB_jCtDBF7kyfRqQpxp6_ogz78jtoYbJL7ALck_1734366733524_completion_certificate.pdf",
    credentialId: "MWeDQN3cWnNXn8Q6c",
  },

  {
    id: 5,
    title: "Research Analyst",
    organization: "National Institute of Securities Markets (NISM)",
    date: "Issued Jul 2024 · Expires Jul 2027",
    description:
      "Certified in equity research, valuation techniques, and financial statement analysis.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    link: "https://drive.google.com/file/d/1yXmYbaAbpbllQgBeESqKAwPo0RouXIol/view",
    credentialId: "NISM Research Analyst",
  },
  {
    id: 6,
    title: "Equity Derivatives",
    organization: "National Institute of Securities Markets (NISM)",
    date: "Issued Jul 2024 · Expires Jul 2027",
    description:
      "Certified in equity research, valuation techniques, and financial statement analysis.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop",
    link: "https://drive.google.com/file/d/1B1Yxh0taQUnC8CqdIacKq4PbCrR63Q_x/view",
    credentialId: "NISM Research Analyst",
  },
  {
    id: 7,
    title: "National Financial Literacy",
    organization: "National Institute of Securities Markets (NISM)",
    date: "Issued Jul 2024 · Expires Jul 2027",
    description:
      "Certified in equity research, valuation techniques, and financial statement analysis.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop",
    link: "https://drive.google.com/file/d/1VG2R9sFfgbkQz_TuQXlpR84tRYXzSJTJ/view",
    credentialId: "NISM Research Analyst",
  },
 {
    id: 8,
    title: "Mutual Fund Distributor",
    organization: "National Institute of Securities Markets (NISM)",
    date: "Issued Jul 2024 · Expires Jul 2027",
    description:
      "Certified in equity research, valuation techniques, and financial statement analysis.",
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1200&auto=format&fit=crop",
      
    link: "https://drive.google.com/file/d/1fJn7Dm61siSQEIk56demydmCO9HtIeNg/view",
    credentialId: "NISM Research Analyst",
  },
  
  // OTHER CERTIFICATES

//   {
//     id: 6,
//     title: "Bloomberg Essentials",
//     organization: "Bloomberg",
//     date: "Issued Jan 2025",
//     description:
//       "Learned Bloomberg Terminal basics, market data analysis, and financial research tools.",
//     image:
//       "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop",
//     link: "https://www.bloomberg.com/professional/support/certification-program/",
//   },

//   {
//     id: 7,
//     title: "Financial Analyst",
//     organization: "New York Jobs CEO Council",
//     date: "Issued Jan 2025",
//     description:
//       "Developed financial analysis and analytical problem-solving skills.",
//     image:
//       "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1200&auto=format&fit=crop",
//     link: "https://www.nycjobsceocouncil.org/",
//     credentialId: "faRxu5Q7kSFtwYuKo",
//   },

//   {
//     id: 8,
//     title: "Equity Derivatives",
//     organization: "National Institute of Securities Markets (NISM)",
//     date: "Issued Mar 2024 · Expires Mar 2027",
//     description:
//       "Certified in derivatives market concepts, futures, options, and hedging strategies.",
//     image:
//       "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop",
//     link: "https://www.nism.ac.in/",
//   },

//   {
//     id: 9,
//     title: "Financial Modelling",
//     organization: "Skill91",
//     date: "Issued Oct 2023",
//     description:
//       "Practical training in financial modeling, forecasting, and valuation.",
//     image:
//       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
//     link: "https://skill91.com/",
//     credentialId: "Skill2283",
//   },

//   {
//     id: 10,
//     title: "Investment Banking Job Simulation",
//     organization: "Bank of America",
//     date: "Issued Nov 2023",
//     description:
//       "Simulated investment banking projects and valuation assignments.",
//     image:
//       "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1200&auto=format&fit=crop",
//     link: "https://www.theforage.com/completion-certificates/Bank%20of%20America/Hi8MJQE5T3MeTRWQR_Bank%20of%20America_ogz78jtoYbJL7ALck_1692801514167_completion_certificate.pdf",
//   },

//   {
//     id: 11,
//     title: "Excel Fundamentals – Formulas for Finance",
//     organization: "Corporate Finance Institute (CFI)",
//     date: "Issued Jul 2023",
//     description:
//       "Mastered Excel formulas and spreadsheet tools for financial analysis.",
//     image:
//       "https://images.unsplash.com/photo-1516321310764-8d5f1c8f35c3?q=80&w=1200&auto=format&fit=crop",
//     link: "https://corporatefinanceinstitute.com/",
//     credentialId: "45537758",
//   },

//   {
//     id: 12,
//     title: "Reading Financial Statements",
//     organization: "Corporate Finance Institute (CFI)",
//     date: "Issued Jul 2023",
//     description:
//       "Developed skills in analyzing balance sheets, income statements, and cash flow statements.",
//     image:
//       "https://images.unsplash.com/photo-1554224154-22dec7ec8818?q=80&w=1200&auto=format&fit=crop",
//     link: "https://corporatefinanceinstitute.com/",
//     credentialId: "77480475",
//   },

//   {
//     id: 13,
//     title: "Certified National Level Chess Player",
//     organization: "National University of Physical Training and Sports, Kyiv",
//     date: "Issued Mar 2023",
//     description:
//       "Recognized as a certified national-level chess player demonstrating strategic thinking and analytical skills.",
//     image:
//       "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?q=80&w=1200&auto=format&fit=crop",
//     link: "#",
//   },

//   {
//     id: 14,
//     title: "Money Management And Investment",
//     organization: "FinX Institute Limited",
//     date: "Issued Feb 2023",
//     description:
//       "Learned personal finance, investment planning, and wealth management concepts.",
//     image:
//       "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=1200&auto=format&fit=crop",
//     link: "#",
//   },

//   {
//     id: 15,
//     title: "Data Analysis - Excel Crash Course",
//     organization: "Corporate Finance Institute (CFI)",
//     date: "Issued Jan 2022",
//     description:
//       "Hands-on Excel training focused on data analysis and spreadsheet automation.",
//     image:
//       "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?q=80&w=1200&auto=format&fit=crop",
//     link: "https://corporatefinanceinstitute.com/",
//   },

//   {
//     id: 16,
//     title: "Mutual Fund Distributor",
//     organization: "National Institute of Securities Markets (NISM)",
//     date: "Issued Nov 2022",
//     description:
//       "Certified in mutual funds, investment products, and distribution regulations.",
//     image:
//       "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=1200&auto=format&fit=crop",
//     link: "https://www.nism.ac.in/",
//   },
];

export default function CertificatePage() {
  return (
    <>
      <StarHeader>
        <div className="container mx-auto px-4 py-14 md:px-6 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <div className="mb-5 rounded-full border border-primary/20 bg-primary/10 p-4">
              <Award className="h-10 w-10 text-primary" />
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Certificates & Achievements
            </h1>

            <p className="mt-5 max-w-2xl text-muted-foreground md:text-lg">
              A showcase of my certifications, internships, finance research,
              leadership roles, and professional achievements.
            </p>
          </motion.div>
        </div>
      </StarHeader>

      <section className="container mx-auto px-4 pb-20 md:px-6">
        {/* ROW CARDS */}
        <div className="flex flex-col gap-8">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-3xl"
            >
              {/* Glow Effect */}
              <div
                className="absolute inset-0 opacity-20 blur-2xl"
                style={{
                  background:
                    "conic-gradient(from 225deg, rgba(81,156,254,0.99) 12deg, rgb(72,46,147) 45deg, rgb(198,95,245) 80deg, rgba(138,102,255,0.68) 116deg, rgba(87,155,250,0) 143deg, rgba(82,157,255,0) 327deg, rgb(81,156,254) 353deg)",
                }}
              />

              <Card className="relative overflow-hidden border border-white/10 bg-background/70 backdrop-blur-xl">
                <CardContent className="p-0">
                  <div className="grid items-center gap-0 md:grid-cols-2">
                    {/* IMAGE */}
                    <div className="relative h-[280px] overflow-hidden">
                      <img
                        src={certificate.image}
                        alt={certificate.title}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>

                    {/* CONTENT */}
                    <div className="flex flex-col justify-center p-8 md:p-10">
                      <div className="mb-5 flex items-center gap-3">
                        <div className="rounded-xl bg-primary/10 p-3">
                          <Award className="h-5 w-5 text-primary" />
                        </div>

                        <div>
                          <h2 className="text-2xl font-bold">
                            {certificate.title}
                          </h2>

                          <div className="mt-1 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Building2 className="h-4 w-4" />
                              {certificate.organization}
                            </div>

                            <div className="flex items-center gap-1">
                              <CalendarDays className="h-4 w-4" />
                              {certificate.date}
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="mb-6 leading-relaxed text-muted-foreground">
                        {certificate.description}
                      </p>

                      <div className="flex flex-wrap gap-4">
                        <a
                          href={certificate.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="gap-2 rounded-xl px-6">
                            View Certificate
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </a>

                        {/* <Button
                          variant="outline"
                          className="rounded-xl border-primary/20"
                        >
                          Download PDF
                        </Button> */}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}