import { EmployeeSchema, UpdateEmployeeSchema } from "@/schemas/employee";
import { z } from "zod";

export type EmployeeTypes = z.infer<typeof EmployeeSchema>;
export type UpdateEmployeeTypes = z.infer<typeof UpdateEmployeeSchema>;