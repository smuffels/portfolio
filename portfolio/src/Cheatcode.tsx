import { useState } from "react";

export function useCheatcode(onSuccess: () => void) {
  const code = [
    "up",
    "up",
    "down",
    "down",
    "left",
    "right",
    "left",
    "right",
    "b",
    "a",
    "start",
  ];

  const [input, setInput] = useState<string[]>([]);

  const registerInput = (key: string) => {
    const expectedKey = code[input.length];

    if (key !== expectedKey) {
      setInput([]);
    } else {
      const newInput = [...input, key];
      setInput(newInput);

      if (newInput.length === code.length) {
        onSuccess();
        setInput([]);
      }
    }
  };

  return { registerInput };
}
