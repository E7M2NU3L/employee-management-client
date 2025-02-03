import { DepartmentSchema, UpdateDepartmentSchema } from "@/schemas/department";
import { z } from "zod";

export type DepartmentTypes = z.infer<typeof DepartmentSchema>;
export type UpdateDepartmentTypes = z.infer<typeof UpdateDepartmentSchema>;