import { Trash2 } from "lucide-react"
import { Button } from "../ui/button"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "../ui/drawer"

const DeleteDepartment = () => {
  return (
    <Drawer>
        <DrawerTrigger asChild>
            <Button variant={"destructive"} size={"sm"}>
                <Trash2 />
            </Button>
        </DrawerTrigger>
        <DrawerContent>
            <DrawerHeader>
                <DrawerTitle>
                    Confirm Deletion
                </DrawerTitle>
                <DrawerDescription>
                    the employee connected with this department will be discarded as well, are you sure you want to continue?
                </DrawerDescription>
            </DrawerHeader>

            <DrawerFooter className="flex flex-row gap-3 items-center justify-end">
                <DrawerClose asChild>
                <Button variant={"outline"} size={"sm"}>
                    Cancel
                </Button>
                </DrawerClose>
                <Button variant={"destructive"} size={"sm"}>
                    Delete
                </Button>
            </DrawerFooter>
        </DrawerContent>
    </Drawer>
  )
}

export default DeleteDepartment