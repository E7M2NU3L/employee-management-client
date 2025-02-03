import { Box } from "lucide-react";
import { Badge } from "../ui/badge";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `Managing employees efficiently is crucial, yet outdated systems burden you with complexity and inefficiency. Our solution streamlines HR processes, making workforce management seamless and stress-free.`;
const words = text.split(" ");

export default function Introduction() {
  const scrollTarget = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end center"],
  });

  const [currentWord, setCurrentWord] = useState(0);
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  useEffect(() => {
    return wordIndex.on("change", (latest) => {
      setCurrentWord(Math.floor(latest));
    });
  }, [wordIndex]);

  return (
    <div className="py-12 md:py-32">
      <div className="container">
        <div className="sticky top-0" ref={scrollTarget}>
          <div className="flex flex-col justify-center">
            <div className="text-center">
              <Badge className="max-w-40 w-full">
                <Box className="mr-1 h-4 w-4" />
                Introducing ETracks
              </Badge>
            </div>

            <div className="text-4xl md:text-6xl font-medium max-w-7xl mx-auto mt-12 text-center">
              <span className="text-foreground">
                Messy HR? Manage smarter.
              </span>
              <span className="text-muted-foreground ml-2">
                {words.map((word, index) => (
                  <motion.span
                    key={index}
                    className={twMerge(
                      "transition-all duration-300 opacity-30",
                      index < currentWord && "text-foreground opacity-100"
                    )}
                    initial={{ opacity: 0.2 }}
                    animate={{ opacity: index < currentWord ? 1 : 0.2 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                  >
                    {`${word} `}
                  </motion.span>
                ))}
              </span>
              <span className="text-primary">
                Empower teams. Boost productivity.
              </span>
            </div>
          </div>
        </div>
        <div className="h-[100px]"></div>
      </div>
    </div>
  );
}
