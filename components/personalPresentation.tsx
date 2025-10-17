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
        <AnimatedText
          text="Welcome to my personal website. I'm a third year, soon to graduate, computer science student at John Abbott College."
          delay={50}
          className="text-secondary font-bold"
        />
        <AnimatedText
          text="I am someone with a strong passion for solving logical problems and learning new technologies to continually challenge
          myself."
          delay={50}
          className="text-secondary font-bold"
        />
        <AnimatedText
          text="Knowing we only live once, I aim to bring value to the table, whether it's in my day-to-day life or in my
          working environment."
          delay={50}
          className="text-secondary font-bold"
        />
        <AnimatedText
          text="Eager to learn new technologies and ways of solving problems. Seeking a position in
          software development."
          delay={50}
          className="text-secondary font-bold"
        />
      </div>
    </Container>
  );
}
