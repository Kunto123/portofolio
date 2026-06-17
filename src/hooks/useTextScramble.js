import { useEffect, useState } from "react";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!?<>/\\-_=+*#@%".split("");

function getRandomGlyph() {
  return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
}

export function useTextScramble(targetText, options = {}) {
  const { revealDelay = 35, scrambleDuration = 180 } = options;
  const [displayText, setDisplayText] = useState(targetText);

  useEffect(() => {
    if (!targetText) {
      setDisplayText("");
      return undefined;
    }

    const characters = Array.from(targetText);
    let animationFrame = 0;
    const startedAt = performance.now();
    const animationEnd = characters.length * revealDelay + scrambleDuration;

    const renderFrame = (now) => {
      const elapsed = now - startedAt;

      const nextValue = characters
        .map((character, index) => {
          if (character === " ") {
            return " ";
          }

          const startAt = index * revealDelay;
          const finishAt = startAt + scrambleDuration;

          if (elapsed >= finishAt) {
            return character;
          }

          if (elapsed < startAt) {
            return getRandomGlyph();
          }

          return getRandomGlyph();
        })
        .join("");

      setDisplayText(nextValue);

      if (elapsed < animationEnd) {
        animationFrame = requestAnimationFrame(renderFrame);
      } else {
        setDisplayText(targetText);
      }
    };

    setDisplayText(
      characters
        .map((character) => (character === " " ? " " : getRandomGlyph()))
        .join(""),
    );
    animationFrame = requestAnimationFrame(renderFrame);

    return () => cancelAnimationFrame(animationFrame);
  }, [revealDelay, scrambleDuration, targetText]);

  return displayText;
}