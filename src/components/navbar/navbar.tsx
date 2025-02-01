import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { useSelector } from "react-redux"
import { RootState } from "@/store/store"
import LogoutUser from "./logout-drawer"

const Navbar = () => {
    const authInfo = useSelector((state : RootState) => state.auth);
    console.log(authInfo);
  return (
    <div className="min-h-[10vh] flex w-full px-4 justify-between items-center">
        <Link to={"/"} className="flex flex-row gap-2 items-center">
            <img src="/logo.png" alt="logo" className="w-12 h-12 object-contain" />
            <h1 className="text-xl font-semibold">ETracks</h1>
        </Link>

        <main className="flex flex-row gap-4 items-center">
            {authInfo?.isLoggedin ? (
                <>
                    <Button variant={"outline"} size={"sm"} asChild>
                        <Link to={"/employees"}>Track Employees</Link>
                    </Button>

                    <LogoutUser>
                        <Button variant={"destructive"} size={"sm"}>
                            Logout
                        </Button>
                    </LogoutUser>
                </>
            ) : (
                <>
                    <Button variant={"outline"} size={"sm"} asChild>
                        <Link to={"/sign-in"}>Login</Link>
                    </Button>

                    <Button variant={"default"} size={"sm"} asChild>
                        <Link to={"/sign-up"}>
                            Sign Up
                        </Link>
                    </Button>
                </>
            )}
        </main>
    </div>
  )
}

export default Navbar