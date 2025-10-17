import Link from "next/link";
import Container from "./container";

const basePath = process.env.NODE_ENV === "production" ? "/MyPorfolio" : "";

export default function ProfessionalCareer() {
  const experiences = [
    {
      title: "Bureau Veritas - intern Software Specialist",
      date: "January 2024 - Mai 2024",
    },
    {
      title: "Vidéotron - Sale Advisor",
      date: "May 2023 - October 2023",
    },
     {
      title: "Patrick morin - Sales Associate",
      date: "July 2021 - Current",
    },
  ];

  return (
    <Container>
      <div className="flex flex-row">
        <div className="w-1/2 flex flex-col justify-center items-center">
          <h2 className="text-primary font-bold text-4xl mb-8">Career</h2>
          <div className="flex flex-col lg:flex-row gap-x-2 gap-y-2">
            <a
              href={`${basePath}/resume.pdf`}
              download
              className="border-2 hover:border-primary rounded-2xl py-2 px-4 hover:text-primary hover:bg-secondary bg-primary border-secondary text-secondary"
            >
              Download resume
            </a>
            <Link
              href="/portfolio"
              className="border-2 hover:border-primary rounded-2xl py-2 px-4 hover:text-primary hover:bg-secondary bg-primary border-secondary text-secondary"
            >
              View portfolio
            </Link>
          </div>
        </div>
        <ol className="relative border-s border-secondary w-1/2">
          {experiences.map((item, index) => (
            <li key={index} className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -start-1.5 border border-secondary"></div>
              <time className="mb-1 text-sm font-normal leading-none text-secondary">
                {item.date}
              </time>
              <h3 className="text-lg font-semibold text-primary">
                {item.title}
              </h3>
            </li>
          ))}
        </ol>
      </div>
    </Container>
  );
}
