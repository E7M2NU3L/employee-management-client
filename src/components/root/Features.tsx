import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import {motion} from 'framer-motion';

const features = [
    {
      title: "Complete Security",
      description: "Your data, fully protected. Ensure top-tier security with encrypted storage, multi-factor authentication, and role-based access control for total peace of mind.",
      image: "/secure.png",
      text : "Get Started"
    },
    {
      title: "Employee Management",
      description: "Simplify HR, maximize efficiency. Manage hiring, payroll, attendance, and performance—all in one intuitive platform, eliminating unnecessary complexity.",
      image: "/cards (1).png",
      text : "Learn more"
    },
    {
      title: "Department Management",
      description: "Organized teams, optimized workflow. Create, assign, and monitor departments effortlessly, ensuring clear roles, streamlined collaboration, and improved accountability.",
      image: "/cards (2).png",
      text : "Sign Up"
    }
  ];
  

export default function Features() {
    return <div className="py-12 md:py-20 px-4 md:px-0">
        <div className="text-center mb-12 flex flex-col gap-4 max-w-2xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-medium">Smarter Workforce, Seamless <span className="text-primary">Management</span></h1>
            <p className="text-lg text-muted-foreground tracking-tight leading-tight font-medium">
            Streamline HR, boost productivity, and empower your team with an all-in-one employee management solution.
            </p>
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 max-w-7xl mx-auto place-content-center">
            {features.map((feature, index) => (
                <motion.section key={index} 
                    initial={{
                        opacity: 0,
                        y: -50,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5 * index },
                    }}
                    whileHover={{
                        scale: 1.05,
                        rotate: 1,
                        transition: { duration: 0.3 },
                    }}
                    className="place-content-center grid"
                >
                    <Card className="max-w-sm">
                        <CardContent className="border-input border">
                            <motion.img
                                initial={{
                                    x: 0,
                                    y: 0,
                                    scale: 1
                                }}
                                whileHover={{
                                    scale: 1.1,
                                    rotate: 3,
                                    transition: { duration: 0.3 },
                                }}
                            src={feature.image} alt="logo" className="object-fill h-[200px]" />
                        </CardContent>
                        <CardHeader>
                            <CardTitle>
                                {feature.title}
                            </CardTitle>
                            <CardDescription>
                                {feature.description}
                            </CardDescription>
                        </CardHeader>
                        <CardFooter className="flex justify-end w-full flex-row">
                            <Button variant={"link"} asChild size={"sm"}>
                                <Link to={"/sign-up"}>
                                    {feature.text}
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </motion.section>
            ))}
        </section>
    </div>;
}
