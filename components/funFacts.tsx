/* eslint-disable react/no-unescaped-entities */
import Container from "./container";

export default function FunFacts() {
  return (
    <Container className="border border-primary flex shadow-lg px-4 lg:w-2/3 py-4 justify-center">
      <ul className="flex flex-col justify-center items-center">
        <li className="w-full">
          🏋️‍♂️ I love working out, I have been training for over 7 years!
        </li>

        <li className="w-full">
          💻 I built my first pc when I was 13 years old
        </li>

        <li className="w-full">
          🍔 I love burgers as much as I love coding.
        </li>

      </ul>
    </Container>
  );
}
