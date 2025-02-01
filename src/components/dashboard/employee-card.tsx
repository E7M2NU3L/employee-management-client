import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import DeleteEmployee from "./delete-employee";
import SingleEmployee from "./single-employee";
import UpdateEmployee from "./update-employee";

const EmployeeCard = () => {
  return (
    <Card className="relative">
        <CardHeader>
            <CardTitle>
                Emmanuel A
            </CardTitle>
            <CardDescription>
                aemmanuel.codes@gmail.com
            </CardDescription>
        </CardHeader>

        <CardFooter className="flex justify-between w-full items-center">
            <p className="text-xs font-light text-muted-foreground">
                created on: 21 Jan 2025
            </p>
            <main className="flex flex-row gap-2 items-center">
                <UpdateEmployee />
                <DeleteEmployee />
            </main>
        </CardFooter>

        <main className="absolute top-3 right-3">
            <SingleEmployee />
        </main>
    </Card>
  )
}

export default EmployeeCard