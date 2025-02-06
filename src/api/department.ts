import { DepartmentTypes, UpdateDepartmentTypes } from "@/types/department";
import { AppErrServer } from "@/utils/app-err";

export async function CreateDepartment(values : DepartmentTypes) {
    try {
        console.log("Server side: ")
        console.log(values);
    } catch (error) {
        AppErrServer(error);
    }
};

export async function UpdateDepartment(values : {
    id : string,
    values : UpdateDepartmentTypes
}) {
    try {
        console.log("Updating Department: ");
        console.log(values);
    } catch (error) {
        AppErrServer(error);
    }
};

export async function DeleteDepartment(id : string) {
    try {
        console.log("Deleting Department: ");
        console.log(id);
    } catch (error) {
        AppErrServer(error);
    }
};

export async function FetchAllDepartments() {
    try {
        console.log("Fetching all Departments");
    } catch (error) {
        AppErrServer(error);
    }
};

export async function FetchDepartmentById(id : string) {
    try {
        console.log("Fetching Department by id: ");
        console.log(id);
    } catch (error) {
        AppErrServer(error);
    }
};