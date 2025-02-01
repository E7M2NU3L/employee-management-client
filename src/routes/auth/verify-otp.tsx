import { MotionGrids } from "@/components/auth/motion-grids"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { toast } from "@/hooks/use-toast"
import { VerifyOTPSchema } from "@/schemas/users"
import { VerifyOTPTypes } from "@/types/users"
import { AppErr } from "@/utils/app-err"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

const VerifyOTP = () => {
  const form = useForm<VerifyOTPTypes>({
    resolver : zodResolver(VerifyOTPSchema),
    defaultValues : {
      otp : ""
    }
  });

  const navigate = useNavigate();
  async function handleVerifyOTP(values : VerifyOTPTypes) {
    try {
      console.log(values);
      toast({
        title : "Success",
        description : "OTP has been verified successfully"
      })
      navigate("/reset-password");
    } catch (error) {
      AppErr(error);
    }
  }

  return (
    <MotionGrids>
      <Card>
        <CardHeader>
          <CardTitle>
            Verify OTP
          </CardTitle>
          <CardDescription>
            Enter proper OTP to proceed with the process
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleVerifyOTP)} className="space-y-4">
              <FormField control={form.control} name="otp" render={({field}) => (
                <FormItem>
                  <FormLabel>
                    OTP
                  </FormLabel>
                  <FormControl>
                  <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
                  </FormControl>
                </FormItem>
              )} />

              <Button variant={"default"} size={"sm"} className="w-full">
                {form.formState.isSubmitting ? (
                  <>
                    <Loader2 className="mr-1 w-4 h-4 animate-spin" />
                    Verifying
                  </>
                ) : (
                  <>
                   Verify OTP
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

export default VerifyOTP