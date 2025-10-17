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

  const calendarImages = ["/Agenda.jpeg", "/Report.jpeg", "/Add.jpeg"];
  const stroopyImages = [
    "/stroodleOne.jpeg",
    "/stroodleTwo.jpeg",
    "/StroodleThree.jpeg",
    "/StroodleFour.jpeg",
  ];

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
      id: "ConU",
      title: "ConUHacks IX 3rd place winning project",
      subtitle: "February 2025",
      description:
        "With the help of three teammates, we made 404 Lost & Found, which helps users report and locate lost items efficiently. Using advanced video recognition technology, it identifies close matches and provides navigation assistance to guide users to their lost belongings. We used Python (Streamlit frontend, FastAPI backend), OpenCV, ResNet, YOLOv8, MongoDB, Azure Blob Storage, Azure Container Registry, Docker, Terraform, GitHub Actions.",
      imageSrc: "https://www.youtube.com/embed/BHq4QkTe6PE",
      imageAlt: "404 Lost & Found demo video",
      repoLink: "https://github.com/nic5694/404_Lost_And_Found",
      repoButtonText: "Source",
    },
    {
      id: "Container-farm",
      title: "Container farm",
      subtitle: "Spring 2024",
      description:
        "IoT-based solution for remotely managing shipping container farms using a MAUI mobile app and Azure IoT, with sensors and actuators for optimal plant growth, geo-tracking, and security monitoring.",
      imageSrc: "/farm.jpeg",
      imageAlt: "Container farm",
      repoLink: "https://github.com/ZakariGaudreault/automatic-container-farm",
      repoButtonText: "Source",
    },
    {
      id: "geek-gourmet",
      title: "Geek Gourmet",
      subtitle: "Winter 2023",
      description:
        "A comprehensive software application designed to deliver an intuitive graphical user interface for efficient viewing and management of events and appointments. This project was a collaborative effort undertaken during Programming III, emphasizing effective communication and seamless integration of back-end and front-end components.",
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
        "Collaborative classroom project for Web Programming II involving React, MongoDB, JavaScript, HTML, and CSS. The project featured authentication, user settings, and a friendly UI, deepening understanding of dynamic web app creation.",
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
        "A cognitive game built in C# exploring the Stroop Effect. This project marked a key milestone, demonstrating the power of C# to create engaging, console-based experiences blending psychology and programming.",
      imageSrc: "",
      imageAlt: "Stroopy slideshow",
      repoLink: "https://github.com/ZakariGaudreault/Stroopy",
      repoButtonText: "Source",
    },
    {
      id: "first-computer",
      title: "First Computer built",
      subtitle: "Summer 2016",
      description: "In this photo we can see one of my favourite moments ever...",
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
            <section key={id} className="project text-center">
              {/* Title above image/video */}
              <h1 className="text-3xl font-semibold mb-1">{title}</h1>
              <h2 className="text-xl mb-4 text-gray-300">{subtitle}</h2>

              <div className="flex justify-center mb-6">
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
                  <div className="border-4 border-black overflow-hidden rounded-2xl">
                    <Image
                      src={`${basePath}${stroopyImages[stroopyIndex]}`}
                      alt={title}
                      width={600}
                      height={600}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                ) : id === "ConU" ? (
                  <div className="w-full max-w-3xl aspect-video border-4 border-black overflow-hidden rounded-2xl">
                    <iframe
                      src={imageSrc}
                      title={imageAlt}
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                ) : (
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

              {/* Description + Button below */}
              <article className="project_text text-center max-w-2xl mx-auto">
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
