/* eslint-disable react/no-unescaped-entities */
import Container from "./container";

export default function FunFacts() {
  return (
    <Container className="border border-primary flex shadow-lg px-4 lg:w-2/3 py-4 justify-center">
      <ul className="flex flex-col justify-center items-center">
        <li className="w-full">
          🚗 Electric car enthusiast. Have a question? Let me charge up and get
          to you!
        </li>

        <li className="w-full">
          🏂 Amateur snowboarder and victim of the slopes, still in one piece
          though!
        </li>

        <li className="w-full">
          ♟️ If ever I'm not breaking my brain coding, I'm probably abusing it
          playing chess ... or some video games.
        </li>

        <li className="w-full">
          😄 Good day or bad day, come to me and I'll make you laugh.
        </li>
      </ul>
    </Container>
  );
}
