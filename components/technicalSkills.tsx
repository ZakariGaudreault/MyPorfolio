import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HC_more from "highcharts/highcharts-more";

if (typeof Highcharts === "object") {
  HC_more(Highcharts);
}

const options = {
  title: {
    text: "Technical skills",
    align: "center",
    style: {
      color: "#D4AF37",
    },
  },
  tooltip: {
    useHTML: true,
    pointFormat: "<b>{point.name}:</b>",
  },
  chart: {
    type: "packedbubble",
    backgroundColor: "#011307ff",
  },
  plotOptions: {
    packedbubble: {
      dataLabels: {
        enabled: true,
        format: "{point.name}",
        style: {
          color: "white",
          textOutline: "none",
          fontWeight: "bold",
          size: "55px",
        },
        className: "text-normal lg:text-lg",
      },
      minSize: "10%",
      maxSize: "150%",
    },
  },
  series: [
    {
      name: "Programming Languages",
      color: "#D4AF37",
      data: [
        { value: 90, name: "C#" },
        { value: 75, name: "Java" },
        { value: 80, name: "JavaScript" },
        { value: 75, name: "Python" },
        { value: 80, name: "Bash" },
        { value: 70, name: "TypeScript" },
        { value: 60, name: "Kotlin" },
        { value: 50, name: "PHP" },
        { value: 70, name: "C" },
      ],
    },
    {
      name: "App technologies",
      data: [
        { value: 70, name: "WPF" },
        { value: 65, name: "React Native" },
        { value: 65, name: "Expo" },
        { value: 65, name: "Compose" },
      ],
    },
    {
      name: "Web Technologies",
      color: "#18206F",
      data: [
        { value: 80, name: "HTML" },
        { value: 70, name: "CSS" },
        { value: 75, name: "Tailwind" },
        { value: 70, name: "React" },
        { value: 30, name: "NestJS" },
        { value: 40, name: "Express" },
        { value: 50, name: "Jinja" },
        { value: 70, name: "Node.js" },
        { value: 10, name: "Angular" },
        { value: 30, name: "NextJS" },
        { value: 50, name: "Astro" },
        { value: 70, name: "Vite" },
      ],
    },
    {
      name: "Database Technologies",
      data: [
        { value: 80, name: "SQL" },
        { value: 80, name: "NoSQL" },
        { value: 75, name: "MongoDB" },
        { value: 70, name: "EFCore" },
        { value: 80, name: "PostgreSQL" },
        { value: 80, name: "Supabase" },
        { value: 70, name: "Row-Level Security" },
      ],
    },
    {
      name: "Cloud & DevOps",
      data: [
        { value: 75, name: "Serverless functions" },
        { value: 70, name: "Deno" },
        { value: 70, name: "Vercel" },
        { value: 60, name: "Azure" },
        { value: 65, name: "Docker" },
        { value: 55, name: "Terraform" },
        { value: 65, name: "GitHub Actions" },
        { value: 60, name: "REST / SOAP APIs" },
      ],
    },
    {
      name: "Testing",
      data: [
        { value: 30, name: "Cypress" },
        { value: 30, name: "Jest" },
        { value: 60, name: "Unit testing" },
        { value: 40, name: "E2E testing" },
      ],
    },
    {
      name: "Methodologies",
      data: [
        { value: 70, name: "Agile methodologies" },
        { value: 60, name: "Jira" },
        { value: 80, name: "Trello" },
        { value: 60, name: "CI/CD" },
        { value: 80, name: "Flowcharts" },
        { value: 60, name: "Figma" },
      ],
    },
  ],
};

export default function TechnicalSkills() {
  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      constructorType={"chart"}
      containerProps={{ className: "w-full h-screen lg:h-[800px] p-4 mb-8" }}
    />
  );
}
