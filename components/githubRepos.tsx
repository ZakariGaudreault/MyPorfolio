"use client";
import React from "react";
import Image from "next/image";
import Container from "./container";

interface ProjectsProps {
  username?: string;
}

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

export default function Projects({ username }: ProjectsProps) {
  const basePath = process.env.NODE_ENV === "production" ? "/MyPorfolio" : "";

  // Image sets
  const calendarImages = ["/Agenda.jpeg", "/Report.jpeg", "/Add.jpeg"];
  const stroopyImages = [
    "/stroodleOne.jpeg",
    "/stroodleTwo.jpeg",
    "/stroodleThree.jpeg",
    "/stroodleFour.jpeg",
  ];

  // Slideshow states
  const [calendarIndex, setCalendarIndex] = React.useState(0);
  const [stroopyIndex, setStroopyIndex] = React.useState(0);

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
  }, []);

  const projects: Project[] = [
    {
      id: "geek-gourmet",
      title: "Geek Gourmet",
      subtitle: "Winter 2023",
      description:
        "Engaging in a collaborative classroom project for Web Programming II...",
      imageSrc: "/bakery.jpeg",
      imageAlt: "Geek Gourmet",
      repoLink: "https://github.com/ZakariGaudreault/GeekGourmet",
      repoButtonText: "Source",
    },
    {
      id: "wpf-calendar",
      title: "WPF Calendar Application",
      subtitle: "Fall 2022",
      description:
        "A comprehensive software application designed to deliver an intuitive GUI...",
      imageSrc: "",
      imageAlt: "Calendar slideshow",
      repoLink: "https://github.com/ZakariGaudreault/Agenda",
      repoButtonText: "Source",
    },
    {
      id: "stroopy",
      title: "Stroopy",
      subtitle: "Fall 2021",
      description:
        "Embark on a cognitive journey with the Stroop Effect Game...",
      imageSrc: "",
      imageAlt: "Stroopy slideshow",
      repoLink: "https://github.com/ZakariGaudreault/Stroopy",
      repoButtonText: "Source",
    },
    {
      id: "first-computer",
      title: "First Computer built",
      subtitle: "Summer 2016",
      description:
        "In this photo we can see one of my favourite moments ever...",
      imageSrc: "/built.jpeg",
      imageAlt: "Built computer",
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
                {/* Calendar slideshow */}
                {id === "wpf-calendar" ? (
                  <div className="border-4 border-black overflow-hidden rounded-2xl">
                    <Image
                      src={`${basePath}${calendarImages[calendarIndex]}`}
                      alt={title}
                      width={600}
                      height={600}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                ) : id === "stroopy" ? (
                  /* Stroopy slideshow */
                  <div className="border-4 border-black overflow-hidden rounded-2xl">
                    <Image
                      src={`${basePath}${stroopyImages[stroopyIndex]}`}
                      alt={title}
                      width={600}
                      height={600}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                ) : (
                  /* Static project image */
                  <div className="border-4 border-black overflow-hidden rounded-2xl">
                    <Image
                      src={`${basePath}${imageSrc}`}
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
