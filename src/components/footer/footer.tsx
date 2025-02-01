import { Link } from "react-router-dom"
import { CircleUserRound, Github, Linkedin, Loader2, Mail } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { AppErr } from "@/utils/app-err";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const EmailSchema = z.object({
    firstname : z.string(),
    lastname : z.string(),
    email : z.string().email({
        message : "Enter a valid email"
    })
});

type EmailTypes = z.infer<typeof EmailSchema>;

const Footer = () => {
    function getFullYear() {
        return new Date().getFullYear();
    };

    const form = useForm<EmailTypes>({
        resolver : zodResolver(EmailSchema),
        defaultValues : {
            email : ""
        }
    });

    const [loading, setLoading] = useState<boolean>(false);

    async function SubscribeUser(values : EmailTypes) {
        try {
            setLoading(true);
            console.log(values);
            toast({
                title : "Success",
                description : "You have been successfully subscribed to EKart"
            })
        } catch (error) {
            AppErr(error);
        } finally {
            setLoading(false);
        }
    };

  return (
    <div className="p-4">
        <main className="min-h-[20vh] grid mb-6">
            <Card className="flex flex-col md:flex-row items-center justify-between to-transparent">
                <CardHeader>
                    <CardTitle className="text-3xl font-semibold tracking-tight text-foreground">Keep in Track with ETrack</CardTitle>
                    <CardDescription>
                        subscribe to our newsletter for more updates related to versions
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(SubscribeUser)} className="flex w-full flex-row gap-5 items-center">
                            <main className="flex flex-col gap-3">
                           <main className="flex flex-row gap-3">
                           <FormField name="firstname" control={form.control} render={({field}) => (
                                <FormItem>
                                    <FormControl>
                                        <Input {...field} placeholder="Eg: john" />
                                    </FormControl>
                                </FormItem>
                            )} />
                            
                            <FormField name="lastname" control={form.control} render={({field}) => (
                                <FormItem>
                                    <FormControl>
                                        <Input {...field} placeholder="Eg: doe" />
                                    </FormControl>
                                </FormItem>
                            )} />
                            
                            <FormField name="email" control={form.control} render={({field}) => (
                                <FormItem>
                                    <FormControl>
                                        <Input {...field} placeholder="Eg: johndoe@example.com" />
                                    </FormControl>
                                </FormItem>
                            )} />
                           </main>

                            <p className="text-sm font-light text-muted-foreground tracking-tight leading-tight">Subscribe me to EKart for newsletters, articles and more related content i can unsubscribe at any time</p>
                            </main>

                            <Button disabled={loading} type="submit" variant={"default"}>
                                {loading ? <><Loader2 className="h-4 w-4 mr-1 animate-spin" /> Loading..</> : <>Subscribe</>}
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </main>

        <main className="min-h-[40vh] gap-4 grid grid-cols-1 md:grid-cols-3">
            <Card className="col-span-1">
                <h1>
                    Bento 1
                </h1>
            </Card>
            <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 col-span-2">
            <Card>
                <h1>
                    Bento 1
                </h1>
            </Card>
            <Card>
                <h1>
                    Bento 1
                </h1>
            </Card>
            <Card>
                <h1>
                    Bento 1
                </h1>
            </Card>
            </main>
        </main>

        <main className="min-h-[10vh] flex md:justify-between md:items-center gap-4 md:gap-0 py-4 w-full max-w-7xl mx-auto flex-wrap flex-col md:flex-row justify-start">
        <section className='flex flex-col justify-start gap-4'>
            <main className="flex flex-row gap-2 justify-start items-start">
                <img src={"https://avatars.githubusercontent.com/u/97432538?v=4"} alt='emmanuel' className='object-contain rounded-full' width={46} height={46} />
                <main className='flex flex-col leading-tight gap-1 items-start'>
                    <h1 className='text-lg font-medium tracking-tight text-foreground'>Emmanuel Arokiaraj</h1>
                    <p className='text-sm font-light text-muted-foreground'>+91 7397336625</p>
                </main>
            </main>
        </section>
            <p className="text-sm font-light text-muted-foreground tracking-tight leading-tight text-truncate">
                &copy; {getFullYear()} ETracks - Employee Management Systems, All Rights Reserved.
            </p>
            
            <main className="flex flex-row flex-wrap gap-3 items-center">
                <Link className="p-2 rounded-full border hover:shadow hover:shadow-primary transition-all hover:translate-x-1 active:scale-95 duration-200 ease-in-out" to={"https://github.com/E7M2NU3L"} target="_blank">
                    <Github className="h-4 w-4" />
                </Link>

                <Link to={"mailto:aemmanuel.codes@gmail.com"} target="_blank" className="p-2 rounded-full border hover:shadow hover:shadow-primary transition-all hover:translate-x-1 active:scale-95 duration-200 ease-in-out">
                    <Mail className="h-4 w-4" />
                </Link>

                <Link to={"https://www.linkedin.com/in/emmanuel-a-1bb23b24b/"} target="_blank" className="p-2 rounded-full border hover:shadow hover:shadow-primary transition-all hover:translate-x-1 active:scale-95 duration-200 ease-in-out">
                    <Linkedin className="h-4 w-4" />
                </Link>

                <Link to={"https://worlddelaemmanuel.vercel.app/"} target="_blank" className="p-2 rounded-full border hover:shadow hover:shadow-primary transition-all hover:translate-x-1 active:scale-95 duration-200 ease-in-out">
                    <CircleUserRound className="h-4 w-4" />
                </Link>
            </main>
        </main>
    </div>
  )
}

export default Footer