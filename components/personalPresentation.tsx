import AnimatedText from "./animation";
import Container from "./container";
import ProfilePicture from "./profilePicture";

export default function PersonalPresentation() {
  return (
    <Container>
      <div className="w-full flex flex-col justify-center items-center mb-8">
        <ProfilePicture className={"lg:w-72 lg:h-72 w-48 h-48"} />
      </div>
      <div className="text-center">
        <h1 className="sr-only">
          Zakari Gaudreault St-Jean — Full-Stack Developer
        </h1>
        <AnimatedText
          text="Computer science student and full-stack developer, currently building Sinko CRM at Assurancia — a bilingual insurance platform I own end to end, from the database and serverless backend to the interface brokers use every day.
"
          delay={14}
          className="text-secondary font-bold"
        />
        <AnimatedText
          text=" I
          am a determined and hardworking individual, constantly driven by the desire to achieve excellence in everything I
          undertake and to overcome new challenges."
          delay={12}
          className="text-secondary font-bold"
        />
        <AnimatedText
          text=" My approach to computer science is not limited to just work, as it is a true
          passion."
          delay={25}
          className="text-secondary font-bold"
        />
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {[
            "React",
            "TypeScript",
            "Supabase",
            "PostgreSQL",
            "C#",
            "Tailwind CSS",
          ].map((skill) => (
            <span
              key={skill}
              className="text-xs px-3 py-1 rounded-full border border-secondary text-secondary"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </Container>
  );
}
