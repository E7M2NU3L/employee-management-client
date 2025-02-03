import { Crown } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { motion, useAnimate } from "framer-motion";
import Pointer from "./pointer";
import { useEffect } from "react";

const Hero = () => {
  const [leftscope, leftanimate] = useAnimate();
  const [leftpointerscope, leftpointeranimate] = useAnimate();

  const [rightscope, rightanimate] = useAnimate();

  useEffect(() => {
    const sequence = async () => {
      await leftanimate(leftscope.current, { opacity: 1 }, { duration: 0.7, ease: "easeOut" });
      await leftpointeranimate(leftpointerscope.current, { x: -20, y: -20}, { duration: 0.5, ease: "easeOut" });
      await leftanimate(leftscope.current, {y: 0, x: 0}, {duration : 0.4, ease: "easeOut" });
      await leftpointeranimate(leftpointerscope.current, { x: 0, y: 0}, { duration: 0.5, ease: "easeOut" });
    };
    sequence();
  }, []);

  useEffect(() => {
    const sequence = async () => {
      await rightanimate(rightscope.current, { opacity: 1 }, { duration: 0.7, ease: "easeIn" });
      await rightanimate(rightscope.current, {y: 0, x: 0}, {duration : 0.4, ease: "easeOut" });
    };
    sequence();
  }, []);

  return (
    <div className="min-h-[90vh] w-full flex justify-center items-center relative">
      <section className="flex overflow-x-clip">
        <section className="flex flex-none">
          <motion.img initial={{
            opacity: 0,
            y: 20,
            x: -20,
            rotate: -4
          }}
          animate={{
            opacity: 1,
            y: 0,
            x: 0,
          }}
          whileHover={{
            rotate: 8,
            scale: 1.2,
            shadow: "border-primary"
          }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
          src="/completed_employee_card.png" alt="compo" className="object-contain block md:hidden absolute top-3 left-4 h-[120px]" />
        </section>
      </section>

      <section className="flex overflow-x-clip">
        <section className="flex flex-none">
          <motion.img initial={{
            opacity: 0,
            y: 20,
            x: -20,
            rotate: -4
          }}
          animate={{
            opacity: 1,
            y: 0,
            x: 0,
          }}
          whileHover={{
            rotate: 8,
            scale: 1.2,
            shadow: "border-primary"
          }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
          src="/department.png" alt="compo" className="object-contain block md:hidden absolute -bottom-3 right-4 h-[180px]" />
        </section>
      </section>
      <motion.main
      className="grid space-y-5 text-center px-4 md:px-0 max-w-2xl mx-auto">
        <div className="text-center">
          <Badge className="max-w-28">
            <Crown className="h-4 w-4 mr-1" /> HR Solution
          </Badge>
        </div>

        <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-foreground">
          Effortless Employee Management, <span className="text-primary">Simplified</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground font-medium tracking-tight leading-tight">
          Streamline your workforce with an intuitive, secure, and minimalistic employee management system. Manage employees, departments, and attendance—all in one place.
        </p>

        <main className="flex flex-row gap-4 items-center text-center w-full justify-center">
          <Button variant={"outline"} size={"sm"} asChild>
            <Link to={"/sign-in"}>Connect</Link>
          </Button>
          <Button variant={"default"} size={"sm"} asChild>
            <Link to={"/sign-up"}>Get Started</Link>
          </Button>
        </main>
      </motion.main>

      <motion.div ref={leftscope} className="absolute top-2 right-96 md:-left-12 md:top-56 hidden md:block" initial={{ y: 50, opacity: 0, x: -50 }}>
        <img
          src="/completed_employee_card.png"
          alt="employee"
          className="h-[120px] md:h-[170px]"
        />
      </motion.div>

      <motion.div ref={leftpointerscope} initial={{ x: -50, y:-20 }} className="absolute top-16 left-64 md:top-96 hidden md:block">
        <Pointer text="Emmanuel" />
      </motion.div>

      
      <motion.div ref={rightscope} className="absolute top-4 inset-y-0 bottom-0 right-32 md:top-56 hidden md:block" initial={{
        opacity: 0,
        x: 120,
        y: -100
      }}>
      <img
          src="/department.png"
          alt="employee"
          className="h-[120px] md:h-[240px]"
        />
      </motion.div>
    </div>
  );
};

export default Hero;