import { z } from "zod";

export const EmployeeSchema = z.object({
    firstname : z.string(),
    lastname : z.string(),
    email : z.string().email({
        message : "Enter a valid email address"
    }),
    phone : z.string(),
    position : z.string(),

    department : z.string(),

    salary : z.any(),
    dateofjoin : z.string().date(),
    isactive : z.boolean(),

    address : z.string(),
    dob : z.string().date(),
    gender : z.string(),
    employementType : z.enum(
        ['part-time', 'full-time', 'trainee', 'internship', 'hybrid', 'other']
    ),
    emergencyContact : z.string()
});

export const UpdateEmployeeSchema = EmployeeSchema.partial();