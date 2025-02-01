import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { LoginSchema } from "@/schemas/users"
import { login } from "@/store/features/auth-slice"
import { LoginTypes } from "@/types/users"
import { AppErr } from "@/utils/app-err"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

const SignIn = () => {
  const form = useForm<LoginTypes>({
    resolver : zodResolver(LoginSchema),
    defaultValues : {
      email : "",
      password : ""
    }
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function handleRegister(values : LoginTypes) {
    try {
      console.log(values);
      dispatch(login(values));
      navigate("/employees");
    } catch (error) {
      AppErr(error);
    }
  }
  return (
    <div className="w-full min-h-[90vh] grid grid-cols-1 md:grid-cols-2 md:px-0">
      <main className="h-[13vh] md:h-[90vh] relative">
        <img src="/sign-in.jpg" className="object-cover w-full h-full" alt="auth-mage" />
      </main>
      <main className="h-full w-full flex justify-center items-center px-4 md:px-0">
          <Card>
            <CardHeader>
              <CardTitle>
                Connect back with ETrack
              </CardTitle>
              <CardDescription>
               login to your account to manage your employee database securely with EKart
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                  <form onSubmit={form.handleSubmit(handleRegister)} className="space-y-4 mb-6">
                    <FormField control={form.control} name="email" render={({field}) => (
                      <FormItem>
                        <FormLabel>
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input {...field} type="email" placeholder="Eg: johndoe@example.com" />
                        </FormControl>
                      </FormItem>
                    )} />

                    <FormField control={form.control} name="password" render={({field}) => (
                      <FormItem>
                        <FormLabel>
                          Password
                        </FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Enter your password" type="password" />
                        </FormControl>
                      </FormItem>
                    )} />

                    <CardFooter className="flex flex-col">
                      <Button type="submit" variant={"default"} className="w-full" size={"sm"}>
                        Login
                      </Button>
                      <main className="flex w-full justify-between items-center">
                      <Button variant={"link"} size={"sm"} asChild>
                        <Link to={"/send-otp"}>
                         reset password
                        </Link>
                      </Button>
                      <Button variant={"link"} size={"sm"} asChild>
                        <Link to={"/sign-up"}>
                        Don't have an account? Sign Up
                        </Link>
                      </Button>
                      </main>
                    </CardFooter>
                  </form>
                </Form>
            </CardContent>
          </Card>
      </main>
    </div>
  )
}

export default SignIn