import { Loader2, PenTool } from "lucide-react"
import { Button } from "../ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { useForm } from "react-hook-form"
import { DepartmentTypes } from "@/types/department"
import { zodResolver } from "@hookform/resolvers/zod"
import { DepartmentSchema } from "@/schemas/department"
import { AppErr } from "@/utils/app-err"
import { useState } from "react"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"

const CreateDepartment = () => {
    const form = useForm<DepartmentTypes>({
        resolver : zodResolver(DepartmentSchema),
        defaultValues : {
            department : "",
            code : "",
            head : "",
            description : "",
            location : ""
        }
    });

    const [Loading, setLoading] = useState<boolean>(false);
    async function handleSubmit (values : DepartmentTypes) {
        try {
            console.log(values);
        } catch (error) {
            AppErr(error);
        } finally {
            setLoading(false);
        }
    }

  return (
    <Dialog open={Loading} onOpenChange={setLoading}>
        <DialogTrigger asChild>
            <Button variant={'default'} size={"sm"}>
                <PenTool className="mr-1 h-4 w-4" />
                Add Department
            </Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    Create Department
                </DialogTitle>
                <DialogDescription>
                    Create and manage departments in your company
                </DialogDescription>
            </DialogHeader>

            <section>
                <Form {...form}>
                    <form className="space-y-4" onSubmit={form.handleSubmit(handleSubmit)}>
                        <FormField control={form.control} name="department" render={({field}) => (
                            <FormItem>
                                <FormLabel>
                                    Department Name
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="Eg: HR" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField control={form.control} name="code" render={({field}) => (
                            <FormItem>
                                <FormLabel>
                                    Department Code
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="Eg: 101" />
                                </FormControl>
                                <FormDescription>
                                    optional, you can specify if you want to display
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField control={form.control} name="head" render={({field}) => (
                            <FormItem>
                                <FormLabel>
                                    Department Head 
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="Eg: Stephen Hawkings" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField control={form.control} name="location" render={({field}) => (
                            <FormItem>
                                <FormLabel>
                                    Location
                                </FormLabel>
                                <FormControl>
                                    <Textarea {...field} placeholder="specify dept. address" />
                                </FormControl>
                                <FormDescription>
                                    Mention the company address if your dept and company address are same
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField control={form.control} name="description" render={({field}) => (
                            <FormItem>
                                <FormLabel>
                                    Description
                                </FormLabel>
                                <FormControl>
                                    <Textarea {...field} placeholder="Eg: type something here.." />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <DialogFooter>
                            <DialogClose asChild>
                                <Button onClick={() => {form.reset()}} variant={"outline"} size={"sm"}>Close</Button>
                            </DialogClose>
                            <Button variant={"default"} size={"sm"}>{form.formState.isSubmitting ? <>
                                <Loader2 className="h-4 w-4 animate-spin mr-1" />
                                Creating..
                            </> : <>Create</>}</Button>
                        </DialogFooter>
                    </form>
                </Form>
            </section>
        </DialogContent>
    </Dialog>
  )
}

export default CreateDepartment