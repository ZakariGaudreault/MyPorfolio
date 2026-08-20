import Container from "@/components/container";

const basePath = process.env.NODE_ENV === "production" ? "/MyPorfolio" : "";

const links = [
  {
    label: "Email",
    value: "zakarigaudreault@hotmail.com",
    href: "mailto:zakarigaudreault@hotmail.com",
  },
  {
    label: "LinkedIn",
    value: "zakari-gaudreault-st-jean",
    href: "https://www.linkedin.com/in/zakari-gaudreault-st-jean-37b3532a1/",
  },
  {
    label: "GitHub",
    value: "ZakariGaudreault",
    href: "https://github.com/ZakariGaudreault",
  },
];

export default function ContactMe() {
  return (
    <Container className="max-w-2xl mx-auto text-center">
      <h1 className="text-primary font-bold text-4xl mb-4">Get in touch</h1>
      <p className="text-gray-300 mb-10">
        I&apos;m always open to talking about full-stack work, internships or an
        interesting problem. The fastest way to reach me is by email.
      </p>

      <ul className="flex flex-col gap-y-4 mb-10">
        {links.map(({ label, value, href }) => (
          <li key={label}>
            <a
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-y-1 border border-secondary rounded-2xl px-5 py-4 hover:bg-secondary/20 transition-colors"
            >
              <span className="text-secondary font-semibold">{label}</span>
              <span className="text-primary break-all">{value}</span>
            </a>
          </li>
        ))}
      </ul>

      <a href={`${basePath}/resume.pdf`} download className="btn-primary">
        Download resume
      </a>
    </Container>
  );
}
