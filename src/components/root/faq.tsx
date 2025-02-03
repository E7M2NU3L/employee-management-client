import { Box } from "lucide-react";
import { Badge } from "../ui/badge";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const faqs_array = [
    {
      question: "What is this Employee Management System?",
      answer: "It is a web application designed to help organizations manage employees, departments, attendance, and HR tasks efficiently."
    },
    {
      question: "How can I add and manage employees?",
      answer: "Admins can add employees, update their details, assign them to departments, and manage their records through an easy-to-use dashboard."
    },
    {
      question: "Does this system support authentication and security?",
      answer: "Yes, the system uses Spring Security to ensure safe login, role-based access control, and secure employee data management."
    },
    {
      question: "Can employees update their own profiles?",
      answer: "Employees can view their profiles, and admins can allow limited self-editing for fields like contact information."
    },
    {
      question: "How does department management work?",
      answer: "You can create and manage departments, assign employees to specific departments, and set department heads."
    },
  ];

const Faq = () => {
    return (
    <div className="px-4 md:px-0">
        <div className="container">
            <div className="flex justify-center">
                <Badge>
                    <Box className="mr-1 h-4 w-4" />
                    Faqs
                </Badge>
            </div>
            <h1 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
                Questions? We've got {" "} <span className="text-primary">answers</span>
            </h1>
        </div>

        <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
            {faqs_array.map((faq, index) => (
                <Accordion type="single" key={index} collapsible>
                <AccordionItem value={faq.question}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
        </div>
    </div>
  )
}

export default Faq