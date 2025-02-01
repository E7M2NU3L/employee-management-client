import { Trash, Trash2Icon } from "lucide-react"
import { Button } from "../ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"

const DeleteEmployee = () => {
  return (
    <Dialog>
        <DialogTrigger asChild>
            <Button size={"sm"} variant={"destructive"}>
                <Trash2Icon />
            </Button>
        </DialogTrigger>

       <DialogContent>
       <DialogHeader>
                <DialogTitle>
                    Delete Employee
                </DialogTitle>
                <DialogDescription>
                    Are you sure you want to delete this employee info from your <span className="text-primary">database</span>?
                </DialogDescription>
            </DialogHeader>

            <DialogFooter className="w-full justify-end items-center gap-4 flex flex-row">
                <DialogClose asChild>
                    <Button variant={"outline"} size={"sm"}>Cancel</Button>
                </DialogClose>
                <Button variant={"destructive"} size="sm">
                    <Trash className="mr-1 h-4 w-4" /> Delete
                </Button>
            </DialogFooter>
       </DialogContent>
    </Dialog>
  )
}

export default DeleteEmployee