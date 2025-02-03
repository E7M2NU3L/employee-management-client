import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import UpdateDepartment from "./update-department"
import DeleteDepartment from "./delete-department"
import { Badge } from "../ui/badge"

const DepartmentTable = () => {
  return (
    <Table>
    <TableCaption>A list of your Departments</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">Department</TableHead>
        <TableHead>Department Code</TableHead>
        <TableHead>Department Head</TableHead>
        <TableHead>Location</TableHead>
        <TableHead>Description</TableHead>
        <TableHead className="">Actions</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
        <TableRow>
          <TableCell className="font-medium">Development</TableCell>
          <TableCell><Badge>101234</Badge></TableCell>
          <TableCell>Anand Padmanabhan</TableCell>
          <TableCell>Bengaluru</TableCell>
          <TableCell className="">171, B, P.V Street, Ayanavaram, chennai, Tamilnadu - 600023.</TableCell>
          <TableCell className="flex flex-row gap-2 items-center">
            <UpdateDepartment />
            <DeleteDepartment />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Development</TableCell>
          <TableCell><Badge>101234</Badge></TableCell>
          <TableCell>Anand Padmanabhan</TableCell>
          <TableCell>Bengaluru</TableCell>
          <TableCell className="">171, B, P.V Street, Ayanavaram, chennai, Tamilnadu - 600023.</TableCell>
          <TableCell className="flex flex-row gap-2 items-center">
            <UpdateDepartment />
            <DeleteDepartment />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Development</TableCell>
          <TableCell><Badge>101234</Badge></TableCell>
          <TableCell>Anand Padmanabhan</TableCell>
          <TableCell>Bengaluru</TableCell>
          <TableCell className="">171, B, P.V Street, Ayanavaram, chennai, Tamilnadu - 600023.</TableCell>
          <TableCell className="flex flex-row gap-2 items-center">
            <UpdateDepartment />
            <DeleteDepartment />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Development</TableCell>
          <TableCell><Badge>101234</Badge></TableCell>
          <TableCell>Anand Padmanabhan</TableCell>
          <TableCell>Bengaluru</TableCell>
          <TableCell className="">171, B, P.V Street, Ayanavaram, chennai, Tamilnadu - 600023.</TableCell>
          <TableCell className="flex flex-row gap-2 items-center">
            <UpdateDepartment />
            <DeleteDepartment />
          </TableCell>
        </TableRow>
    </TableBody>
  </Table>
  )
}

export default DepartmentTable