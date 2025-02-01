import { MotionGrids } from "@/components/auth/motion-grids"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { ResetPasswordSchema } from "@/schemas/users"
import { ResetPasswordTypes } from "@/types/users"
import { AppErr } from "@/utils/app-err"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

const ResetPassword = () => {
  const form = useForm<ResetPasswordTypes>({
    resolver : zodResolver(ResetPasswordSchema),
    defaultValues : {
      password : "",
      confirmpassword : ""
    }
  });

  const navigate = useNavigate();
  async function handleResetPassword(values : ResetPasswordTypes) {
    try {
      console.log(values);
      if (values.confirmpassword !== values.password) {
        throw new Error("Passwords do not match");
      }
      toast({
        title : "Success",
        description : "Password has been reset successfully"
      })
      navigate("/sign-in");
    } catch (error) {
      AppErr(error);
    }
  }

  return (
    <MotionGrids>
      <Card>
        <CardHeader>
          <CardTitle>
            Reset Password
          </CardTitle>
          <CardDescription>
            Reset your password and get started with your login process
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleResetPassword)} className="space-y-4">
              <FormField control={form.control} name="password" render={({field}) => (
                <FormItem>
                  <FormLabel>
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="enter your password" type="password" />
                  </FormControl>
                </FormItem>
              )} />

              <FormField control={form.control} name="confirmpassword" render={({field}) => (
                <FormItem>
                  <FormLabel>
                    Confirm Password
                  </FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="confirm your password" type="password" />
                  </FormControl>
                </FormItem>
              )} />

              <Button variant={"default"} size={"sm"} className="w-full">
                {form.formState.isSubmitting ? (
                  <>
                    <Loader2 className="mr-1 w-4 h-4 animate-spin" />
                    Resetting
                  </>
                ) : (
                  <>
                   Reset Password
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </MotionGrids>
  )
}

export default ResetPassword