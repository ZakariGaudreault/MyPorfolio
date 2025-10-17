import { useState, useEffect } from "react";

// https://blog.logrocket.com/3-ways-implement-typing-animation-react/
export default function AnimatedText({
  text,
  delay,
  className,
}: {
  text: string;
  delay: number;
  className: string;
}) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <p className={`${className}`}>{currentText}</p>;
}
