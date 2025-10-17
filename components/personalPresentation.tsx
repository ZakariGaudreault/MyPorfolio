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
          text="Second year full-time student in computer science, aiming to expand my knowledge in the field of computer science.
"
          delay={25}
          className="text-secondary font-bold"
        />
        <AnimatedText
          text=" I
          am a determined and hardworking individual, constantly driven by the desire to achieve excellence in everything I
          undertake and to overcome new challenges."
          delay={25}
          className="text-secondary font-bold"
        />
        <AnimatedText
          text=" My approach to computer science is not limited to just work, as it is a true
          passion."
          delay={25}
          className="text-secondary font-bold"
        />
      </div>
    </Container>
  );
}
