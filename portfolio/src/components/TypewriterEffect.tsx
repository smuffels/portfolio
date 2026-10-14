import { useState, useEffect } from "react";

function TypewriterEffect({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;
      if (index === text.length) {
        clearInterval(interval);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [text]);

  return <p className={className}>{displayedText}</p>;
}

export default TypewriterEffect;
