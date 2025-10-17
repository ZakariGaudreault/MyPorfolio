import Link from "next/link";
import Container from "./container";

export default function ProfessionalCareer() {
  const experiences = [
    {
      title: "Reservist @Canadian Armed Forces",
      date: "March 2023 - Current",
    },
    {
      title: "Full Stack Developer Intern @Carbonia Web",
      date: "January 2023 - Current",
    },
    {
      title: "Residential Real Estate Broker @Landmark Group",
      date: "August 2022 - Current",
    },
    {
      title: "Officer Cadet @Royal Military College",
      date: "June 2020 - September 2021",
    },
    {
      title: "Summer Camp Counselor @Centre des loisirs Lachine",
      date: "June 2019 - August 2019",
    },
  ];

  return (
    <Container>
      <div className="flex flex-row">
        <div className="w-1/2 flex flex-col justify-center items-center ">
          <h2 className="text-primary font-bold text-4xl mb-8">Career</h2>
          <div className="flex flex-col lg:flex-row gap-x-2 gap-y-2">
            <a
              href="/resume.pdf"
              className="border-2 hover:border-primary rounded-2xl py-2 px-4 hover:text-primary hover:bg-secondary bg-primary border-secondary text-secondary"
            >
              View resume
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
