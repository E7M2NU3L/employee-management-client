import { Badge } from "../ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import DeleteDepartment from "./delete-department"
import UpdateDepartment from "./update-department"

const DepartmentCard = () => {
  return (
    <Card>
        <CardHeader>
            <CardTitle className="flex flex-row gap-2 items-center">
                Testing Department <Badge>10232</Badge>
            </CardTitle>
            <CardDescription>
                this is a sample department description about the department
            </CardDescription>
        </CardHeader>

        <CardContent>
            <CardDescription>
                171, B, P.V Street, Ayanavaram, chennai, Tamilnadu - 600023.
            </CardDescription>
        </CardContent>

        <CardFooter className="flex justify-between items-center flex-wrap">
            <p className="text-xs font-medium tracking-tight leading-tight">Created on 21 Jun 2023</p>

            <main className="flex flex-row gap-2">
                <UpdateDepartment />
                <DeleteDepartment />
            </main>
        </CardFooter>
    </Card>
  )
}

export default DepartmentCard