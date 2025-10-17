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
    pointFormat: "<b>{point.name}:</b> {point.value}/100",
  },
  chart: {
    type: "packedbubble",
    backgroundColor: "#CBCBD4",
  },
  plotOptions: {
    packedbubble: {
      dataLabels: {
        enabled: true,
        format: "{point.name}",
        style: {
          color: "black",
          textOutline: "none",
          fontWeight: "bold",
          size: "18px",
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
        { value: 30, name: "Python" },
        { value: 50, name: "Bash" },
        { value: 70, name: "TypeScript" },
        { value: 60, name: "Kotlin" },
        { value: 50, name: "PHP" },
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
      ],
    },
    {
      name: "Database Technologies",
      data: [
        { value: 75, name: "SQL" },
        { value: 75, name: "NoSQL" },
        { value: 60, name: "MongoDB" },
        { value: 50, name: "SQLAlchemy" },
        { value: 70, name: "EFCore" },
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
