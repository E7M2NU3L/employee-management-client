import { z } from "zod";

export const DepartmentSchema = z.object({
    department : z.string(),
    code : z.string().optional(),
    head : z.string(),
    location : z.string().optional(),
    description : z.string().optional(),
});

export const UpdateDepartmentSchema = DepartmentSchema.partial();