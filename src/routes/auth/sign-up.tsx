import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RegisterSchemaStep1 } from "@/schemas/users"
import { RegisterStep1Types } from "@/types/users"
import { AppErr } from "@/utils/app-err"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"

const SignUp = () => {
  const form = useForm<RegisterStep1Types>({
    resolver : zodResolver(RegisterSchemaStep1),
    defaultValues : {
      firstname : "",
      lastname : "",
      email : "",
      password : ""
    }
  });

  const navigate = useNavigate();
  async function handleRegister(values : RegisterStep1Types) {
    try {
      console.log(values);
      navigate("/sign-in");
    } catch (error) {
      AppErr(error);
    }
  }
  return (
    <div className="w-full min-h-[90vh] grid grid-cols-1 md:grid-cols-2 md:px-0">
      <main className="h-full w-full flex justify-center items-center order-2 md:order-1 px-4 md:px-0">
          <Card>
            <CardHeader>
              <CardTitle>
                Register yourself with ETrack
              </CardTitle>
              <CardDescription>
                Create an account to manage your employee database securely with EKart
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                  <form onSubmit={form.handleSubmit(handleRegister)} className="space-y-4 mb-6">
                    <main className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField control={form.control} name="firstname" render={({field}) => (
                      <FormItem>
                        <FormLabel>
                          Firstname
                        </FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="John" />
                        </FormControl>
                      </FormItem>
                    )} />

                    <FormField control={form.control} name="lastname" render={({field}) => (
                      <FormItem>
                        <FormLabel>
                          Lastname
                        </FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Doe" />
                        </FormControl>
                      </FormItem>
                    )} />
                    </main>

                    <FormField control={form.control} name="lastname" render={({field}) => (
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
                        Register
                      </Button>
                      <main className="flex w-full justify-between items-center">
                      <Button variant={"link"} size={"sm"} asChild>
                        <Link to={"/send-otp"}>
                         reset password
                        </Link>
                      </Button>
                      <Button variant={"link"} size={"sm"} asChild>
                        <Link to={"/sign-in"}>
                        Already have an account? Login
                        </Link>
                      </Button>
                      </main>
                    </CardFooter>
                  </form>
                </Form>
            </CardContent>
          </Card>
      </main>

      <main className="h-[13vh] md:h-[90vh] relative order-1 md:order-2">
        <img src="/auth.jpg" className="object-cover w-full h-full" alt="auth-mage" />
      </main>
    </div>
  )
}

export default SignUp