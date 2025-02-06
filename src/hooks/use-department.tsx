/*
import { CreateDepartment, DeleteDepartment, FetchAllDepartments, UpdateDepartment } from "@/api/department";
import { DepartmentTypes, UpdateDepartmentTypes } from "@/types/department";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
*/

export const useDepartment = () => {
    /* 
    const queryClient = useQueryClient();
    
    const {data, isPending, isError} = useQuery({
        queryFn : FetchAllDepartments,
        queryKey : ['fetch-all-departments'],
    });

    const CreateDepartmentMutation = useMutation({
        mutationFn : (values : DepartmentTypes) => CreateDepartment(values),
        mutationKey : ['create-department'],
        onSuccess : () => {
            // Refetch the data after successful creation
            queryClient.invalidateQueries({
                queryKey : ['fetch-all-departments']
            });
        },
    });

    const UpdateDepartmentMutation = useMutation({
        mutationFn : (values : {
            id : string,
            values : UpdateDepartmentTypes
        }) => UpdateDepartment(values),
        mutationKey : ['update-department'],
        onSuccess : () => {
            // Refetch the data after successful update
            queryClient.invalidateQueries({
                queryKey : ['fetch-all-departments']
            });
        }
    });

    const DeleteDepartmentMutation = useMutation({
        mutationFn : (id : string) => DeleteDepartment(id),
        mutationKey : ['delete-department'],
        onSuccess : () => {
            // Refetch the data after successful deletion
            queryClient.invalidateQueries({
                queryKey : ['fetch-all-departments']
            });
        }
    });

    return {
        data,
        isLoading : isPending,
        isError,
        createDepartment : CreateDepartmentMutation,
        updateDepartment : UpdateDepartmentMutation,
        deleteDepartment : DeleteDepartmentMutation,
    };
    */
};