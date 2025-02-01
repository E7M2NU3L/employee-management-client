import { Eye } from "lucide-react"
import { Button } from "../ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"

const SingleEmployee = () => {
  return (
    <Dialog>
        <DialogTrigger asChild>
            <Button variant={"outline"} size={"sm"}>
                <Eye />
            </Button>
        </DialogTrigger>
        <DialogContent>
        <DialogHeader>
            <DialogTitle>
                Employee Info
            </DialogTitle>
            <DialogDescription>
                View through the employee profile, details
            </DialogDescription>
        </DialogHeader>

        <DialogFooter>
            <DialogClose asChild>
                <Button variant={"outline"} size={"sm"}>
                    Close
                </Button>
            </DialogClose>
        </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}

export default SingleEmployee