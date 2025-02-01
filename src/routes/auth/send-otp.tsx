import { MotionGrids } from "@/components/auth/motion-grids"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/hooks/use-toast"
import { SendOTPSchema } from "@/schemas/users"
import { SendOTPTypes } from "@/types/users"
import { AppErr } from "@/utils/app-err"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

const SendOTP = () => {
  const form = useForm<SendOTPTypes>({
    resolver : zodResolver(SendOTPSchema),
    defaultValues : {
      email : ""
    }
  });

  const navigate = useNavigate();
  async function handleSendOTP(values : SendOTPTypes) {
    try {
      console.log(values);
      toast({
        title : "Success",
        description : "OTP has been sent to your email"
      })
      navigate("/verify-otp");
    } catch (error) {
      AppErr(error);
    }
  }

  return (
    <MotionGrids>
      <Card>
        <CardHeader>
          <CardTitle>
            Send OTP
          </CardTitle>
          <CardDescription>
            Enter your mail to get your one time password
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSendOTP)} className="space-y-4">
              <FormField control={form.control} name="email" render={({field}) => (
                <FormItem>
                  <FormLabel>
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Eg: johndoe@example.com" />
                  </FormControl>
                </FormItem>
              )} />

              <Button variant={"default"} size={"sm"} className="w-full">
                {form.formState.isSubmitting ? (
                  <>
                    <Loader2 className="mr-1 w-4 h-4 animate-spin" />
                    Sending
                  </>
                ) : (
                  <>
                   Send OTP
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

export default SendOTP