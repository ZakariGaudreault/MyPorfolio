"use client";
import React from "react";
import Image from "next/image";
import Container from "./container";

type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  repoLink: string;
  repoButtonText: string;
};

export default function Projects() {
  const basePath = process.env.NODE_ENV === "production" ? "/MyPorfolio" : "";

  // ✅ Slideshow images with basePath applied
  const calendarImages = [
    `${basePath}/Agenda.jpeg`,
    `${basePath}/Report.jpeg`,
    `${basePath}/Add.jpeg`,
  ];

  const stroopyImages = [
    `${basePath}/stroodleOne.jpeg`,
    `${basePath}/stroodleTwo.jpeg`,
    `${basePath}/stroodleThree.jpeg`,
    `${basePath}/stroodleFour.jpeg`,
  ];

  const [calendarIndex, setCalendarIndex] = React.useState(0);
  const [stroopyIndex, setStroopyIndex] = React.useState(0);

  // ✅ Manage both slideshows
  React.useEffect(() => {
    const calendarTimer = setInterval(() => {
      setCalendarIndex((prev) => (prev + 1) % calendarImages.length);
    }, 2000);

    const stroopyTimer = setInterval(() => {
      setStroopyIndex((prev) => (prev + 1) % stroopyImages.length);
    }, 2000);

    return () => {
      clearInterval(calendarTimer);
      clearInterval(stroopyTimer);
    };
  }, [calendarImages.length, stroopyImages.length]);

  // ✅ Project definitions
  const projects: Project[] = [
    {
      id: "geek-gourmet",
      title: "Geek gourmet",
      subtitle: "Winter 2023",
      description:
        "Engaging in a collaborative classroom project for Web Programming II...",
      imageSrc: `${basePath}/bakery.jpeg`,
      imageAlt: "GG",
      repoLink: "https://github.com/ZakariGaudreault/GeekGourmet",
      repoButtonText: "Source",
    },
    {
      id: "wpf-calendar",
      title: "WPF Calendar Application",
      subtitle: "Fall 2022",
      description:
        "A comprehensive software application designed to deliver an intuitive GUI...",
      imageSrc: "", // slideshow overrides this
      imageAlt: "Calendar",
      repoLink: "https://github.com/ZakariGaudreault/Agenda",
      repoButtonText: "Source",
    },
    {
      id: "stroopy",
      title: "Stroopy",
      subtitle: "Fall 2021",
      description: "Embark on a cognitive journey with the Stroop Effect Game...",
      imageSrc: `${basePath}/stroodleOne.jpeg`, // fallback
      imageAlt: "Stroopy",
      repoLink: "https://github.com/ZakariGaudreault/Stroopy",
      repoButtonText: "Source",
    },
    {
      id: "first-computer",
      title: "First Computer built",
      subtitle: "Summer 2016",
      description:
        "In this photo we can see one of my favourite moments ever...",
      imageSrc: `${basePath}/built.jpeg`,
      imageAlt: "Built",
      repoLink: "https://ca.pcpartpicker.com/list/Y3JZNG",
      repoButtonText: "See the components",
    },
  ];

  return (
    <Container>
      <main id="projects" className="space-y-16">
        {projects.map(
          ({
            id,
            title,
            subtitle,
            description,
            imageSrc,
            imageAlt,
            repoLink,
            repoButtonText,
          }) => (
            <section key={id} className="project">
              <div className="flex justify-center mb-6">
                {/* ✅ Show slideshow for calendar */}
                {id === "wpf-calendar" ? (
                  <div className="border-4 border-black overflow-hidden">
                    <Image
                      src={calendarImages[calendarIndex]}
                      alt={title}
                      width={600}
                      height={600}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                ) : id === "stroopy" ? (
                  /* ✅ Show slideshow for Stroopy */
                  <div className="border-4 border-black overflow-hidden">
                    <Image
                      src={stroopyImages[stroopyIndex]}
                      alt={title}
                      width={600}
                      height={600}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                ) : (
                  /* ✅ Default static image */
                  <div className="border-4 border-black overflow-hidden">
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      width={600}
                      height={600}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                )}
              </div>

              <article className="project_text text-center">
                <h1 className="text-3xl font-semibold">{title}</h1>
                <h2 className="text-xl mb-4">{subtitle}</h2>
                <p className="mb-4">{description}</p>
                <a href={repoLink} target="_blank" rel="noopener noreferrer">
                  <button className="btn-primary">{repoButtonText}</button>
                </a>
              </article>
            </section>
          )
        )}
      </main>
    </Container>
  );
}
