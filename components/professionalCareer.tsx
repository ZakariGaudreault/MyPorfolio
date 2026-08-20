import Link from "next/link";
import Container from "./container";

const basePath = process.env.NODE_ENV === "production" ? "/MyPorfolio" : "";

type Experience = {
  title: string;
  company: string;
  date: string;
  description: string;
  tech?: string[];
  current?: boolean;
};

export default function ProfessionalCareer() {
  const experiences: Experience[] = [
    {
      title: "Full-Stack Developer",
      company: "Assurancia",
      date: "May 2026 - Present",
      description:
        "Sole developer of Sinko CRM, a bilingual insurance platform running the full FPQ No 5 policy lifecycle for a brokerage network: quoting engine, contract issuance and cancellation, financing-provider integration and monthly insurer reporting.",
      tech: ["React", "Supabase", "PostgreSQL", "Edge Functions", "Tailwind"],
      current: true,
    },
    {
      title: "Software Specialist Intern",
      company: "Bureau Veritas",
      date: "January 2024 - May 2024",
      description:
        "Built and maintained internal tooling for a technical inspection team, working across the stack in an Agile environment.",
      tech: ["C#", "SQL", "Agile"],
    },
    {
      title: "Sales Advisor",
      company: "Vidéotron",
      date: "May 2023 - October 2023",
      description:
        "Advised customers on telecom products and services, translating technical details into plain language.",
    },
    {
      title: "Sales Associate",
      company: "Patrick Morin",
      date: "July 2021 - Present",
      description:
        "Customer service and in-store advising alongside full-time studies.",
      current: true,
    },
  ];

  return (
    <Container>
      <div className="flex flex-col lg:flex-row gap-y-10 lg:gap-x-10">
        <div className="lg:w-1/3 flex flex-col justify-center items-center text-center">
          <h2 className="text-primary font-bold text-4xl mb-8">Career</h2>
          <div className="flex flex-col lg:flex-col gap-x-2 gap-y-2">
            <a
              href={`${basePath}/resume.pdf`}
              download
              className="border-2 hover:border-primary rounded-2xl py-2 px-4 hover:text-primary hover:bg-secondary bg-primary border-secondary text-secondary"
            >
              Download resume
            </a>
            <Link
              href="/portfolio"
              className="border-2 hover:border-primary rounded-2xl py-2 px-4 hover:text-primary hover:bg-secondary bg-primary border-secondary text-secondary text-center"
            >
              View portfolio
            </Link>
          </div>
        </div>
        <ol className="relative border-s border-secondary lg:w-2/3 ps-2">
          {experiences.map((item, index) => (
            <li key={index} className="mb-10 ms-4">
              <div
                className={`absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-secondary ${
                  item.current ? "bg-secondary animate-pulse-slow" : "bg-primary"
                }`}
              ></div>
              <time className="mb-1 text-sm font-normal leading-none text-secondary">
                {item.date}
              </time>
              <h3 className="text-lg font-semibold text-primary">
                {item.company} — {item.title}
              </h3>
              <p className="mt-1 text-sm text-gray-300">{item.description}</p>
              {item.tech && (
                <ul className="flex flex-wrap gap-2 mt-3">
                  {item.tech.map((t) => (
                    <li
                      key={t}
                      className="text-xs px-2 py-1 rounded-full border border-secondary text-secondary"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </div>
    </Container>
  );
}
