import { Edit } from "lucide-react"
import { Button } from "../ui/button"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import { UpdateEmployeeTypes } from "@/types/employee";
import { UpdateEmployeeSchema } from "@/schemas/employee";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { AppErr } from "@/utils/app-err";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Textarea } from "../ui/textarea"

const UpdateEmployee = () => {
    const form = useForm<UpdateEmployeeTypes>({
        mode : "onChange",
        resolver : zodResolver(UpdateEmployeeSchema),
        defaultValues : {
            firstname : "",
            lastname : "",
            dob : "",
            address : "",
            gender : "",
            email : "",
            phone : "",
            position : "",
            department : "",
            salary : 0,
            dateofjoin : "",
            isactive : true,
            employementType : "other",
            emergencyContact : ""
        }
    });

    const [open, setOpen] = useState<boolean>(false);

    async function handleSubmit(values : UpdateEmployeeTypes) {
        try {   
            console.log(values);
        } catch (error) {
            AppErr(error);
        } finally {
            form.reset();
            setOpen(false);
        }
    };
  return (
    <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
            <Button variant={"default"} size={"sm"}>
                <Edit className="h-4 w-4" />
            </Button>
        </SheetTrigger>
        <SheetContent className="overflow-y-scroll scroll-smooth scrollbar-hide">
            <SheetHeader>
                <SheetTitle>
                    Update Employee
                </SheetTitle>
                <SheetDescription>
                    Edit your employee info. in your dashboard
                </SheetDescription>
            </SheetHeader>

            <section className="">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4 my-6">
                        <FormField control={form.control} name="firstname" render={({field}) => (
                            <FormItem>
                                <FormLabel>
                                    Firstname
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="John" />
                                </FormControl>
                                <FormMessage />
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
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField control={form.control} name="email" render={({field}) => (
                            <FormItem>
                                <FormLabel>
                                    Email
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="Eg: johndoe@example.com" />
                                </FormControl>
                                <FormMessage />
                                <FormDescription>
                                    valid email must be entered, this can be used for email automations
                                </FormDescription>
                            </FormItem>
                        )} />

                        <FormField control={form.control} name="position" render={({field}) => (
                            <FormItem>
                                <FormLabel>
                                    Position
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="Eg: Junior Web Developer" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField control={form.control} name="phone" render={({field}) => (
                            <FormItem>
                                <FormLabel>
                                    Phone
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder="your phone no." />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField control={form.control} name="department" render={({field}) => (
                            <FormItem>
                                <FormLabel>
                                    Department
                                </FormLabel>
                                <Select onValueChange={field.onChange}>
                                    <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a Department" />
                                    </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                    <SelectItem value="HR">HR</SelectItem>
                                    <SelectItem value="Marketing">Marketing</SelectItem>
                                    <SelectItem value="Development">Development</SelectItem>
                                    <SelectItem value="Testing">Testing</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField control={form.control} name="salary" render={({field}) => (
                            <FormItem>
                                <FormLabel>
                                    Salary in CTC
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} type="number" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField control={form.control} name="address" render={({field}) => (
                            <FormItem>
                                <FormLabel>
                                    Address
                                </FormLabel>
                                <FormControl>
                                    <Textarea value={field.value} onChange={field.onChange} placeholder="enter employee address" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />


                        <FormField control={form.control} name="dob" render={({field}) => (
                            <FormItem>
                                <FormLabel>
                                    Date of Birth
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} type="date" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField control={form.control} name="gender" render={({field}) => (
                            <FormItem>
                                <FormLabel>
                                    Gender
                                </FormLabel>
                                <Select onValueChange={field.onChange}>
                                    <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a gender" />
                                    </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                    <SelectItem value="Male">Male</SelectItem>
                                    <SelectItem value="Female">Female</SelectItem>
                                    <SelectItem value="Transgender">Transgender</SelectItem>
                                    <SelectItem value="Others">Others</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField control={form.control} name="dateofjoin" render={({field}) => (
                            <FormItem>
                                <FormLabel>
                                    Date of Joining
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} type="date" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                        <FormField  control={form.control} name="employementType" render={({field}) => (
                            <FormItem>
                                <FormLabel>
                                    Employment Type
                                </FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select the type of employment" />
                                    </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                    <SelectItem value="part-time">part-time</SelectItem>
                                    <SelectItem value="full-time">full-time</SelectItem>
                                    <SelectItem value="trainee">trainee</SelectItem>
                                    <SelectItem value="internship">internship</SelectItem>
                                    <SelectItem value="hybrid">hybrid</SelectItem>
                                    <SelectItem value="other">others</SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormItem>
                        )} />

                        <SheetFooter>
                            <SheetClose asChild>
                                <Button onClick={() => {form.reset()}} variant={"outline"} size={"sm"}>
                                    Cancel
                                </Button>
                            </SheetClose>
                            <Button type="submit">
                                Update
                            </Button>
                        </SheetFooter>
                    </form>
                </Form>
                </section>
        </SheetContent>
    </Sheet>
  )
}

export default UpdateEmployee