import { Edit } from "lucide-react"
import { Button } from "../ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"

const UpdateEmployee = () => {
  return (
    <Sheet>
        <SheetTrigger asChild>
            <Button variant={"default"} size={"sm"}>
                <Edit className="mr-1 h-4 w-4" />
            </Button>
        </SheetTrigger>
        <SheetContent>
            <SheetHeader>
                <SheetTitle>
                    Update Employee
                </SheetTitle>
                <SheetDescription>
                    Edit your employee info. in your dashboard
                </SheetDescription>
            </SheetHeader>
        </SheetContent>
    </Sheet>
  )
}

export default UpdateEmployee