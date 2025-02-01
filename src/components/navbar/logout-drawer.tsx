import { useDispatch } from "react-redux"
import { Button } from "../ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { AppErr } from "@/utils/app-err"
import { useState } from "react"
import { logout } from "@/store/features/auth-slice"
import { Loader } from "lucide-react"

const LogoutUser = ({children} : {
    children : React.ReactNode
}) => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    async function handlelogout() {
        try {
            setLoading(true);
            dispatch(logout());        
        } catch (error) {
            AppErr(error);
        } finally {
            setLoading(false);
            setOpen(false);
        }
    };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
            {children}
        </DialogTrigger>

        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    Logout User?
                </DialogTitle>
                <DialogDescription>
                    Are you sure you want to log out of your account?
                </DialogDescription>
            </DialogHeader>

            <DialogFooter>
                <DialogClose>
                    <Button variant={"outline"} size={"sm"}>
                        Cancel
                    </Button>
                </DialogClose>

                <Button variant={"destructive"} size={"sm"} onClick={handlelogout} disabled={loading}>
                    {loading ? <>
                        <Loader className="mr-1 w-4 h-4 animate-spin" />
                        Logging out user
                    </> : <>
                    Logout
                    </>}
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}

export default LogoutUser