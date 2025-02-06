import { EmployeeTypes, UpdateEmployeeTypes } from "@/types/employee";
import { AppErrServer } from "@/utils/app-err";

export async function CreateEmployee(values : EmployeeTypes) {
    try {
        console.log("Server side: ")
        console.log(values);
    } catch (error) {
        AppErrServer(error);
    }
};

export async function UpdateEmployee(values : {
    id : string,
    values : UpdateEmployeeTypes
}) {
    try {
        console.log("Updating employee: ");
        console.log(values);
    } catch (error) {
        AppErrServer(error);
    }
};

export async function DeleteEmployee(id : string) {
    try {
        console.log("Deleting employee: ");
        console.log(id);
    } catch (error) {
        AppErrServer(error);
    }
};

export async function FetchAllEmployees() {
    try {
        console.log("Fetching all employees");
    } catch (error) {
        AppErrServer(error);
    }
};

export async function FetchEmployeeById(id : string) {
    try {
        console.log("Fetching employee by id: ");
        console.log(id);
    } catch (error) {
        AppErrServer(error);
    }
};