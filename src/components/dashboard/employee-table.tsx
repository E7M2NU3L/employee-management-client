import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Badge } from "../ui/badge"
import SingleEmployee from "./single-employee"
import UpdateEmployee from "./update-employee"
import DeleteEmployee from "./delete-employee"

const EmployeeTable = () => {
  return (
    <Table>
    <TableCaption>A list of your Employees Data</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">Employee</TableHead>
        <TableHead>Department</TableHead>
        <TableHead>Email</TableHead>
        <TableHead className="">Actions</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
        <TableRow>
          <TableCell className="font-medium">Emmanuel A</TableCell>
          <TableCell><Badge>HR</Badge></TableCell>
          <TableCell>aemmanuel.codes@gmail.com</TableCell>
          <TableCell className="flex flex-row gap-2 items-center">
            <SingleEmployee />
            <UpdateEmployee />
            <DeleteEmployee />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Emmanuel A</TableCell>
          <TableCell><Badge>HR</Badge></TableCell>
          <TableCell>aemmanuel.codes@gmail.com</TableCell>
          <TableCell className="flex flex-row gap-2 items-center">
            <SingleEmployee />
            <UpdateEmployee />
            <DeleteEmployee />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Emmanuel A</TableCell>
          <TableCell><Badge>HR</Badge></TableCell>
          <TableCell>aemmanuel.codes@gmail.com</TableCell>
          <TableCell className="flex flex-row gap-2 items-center">
            <SingleEmployee />
            <UpdateEmployee />
            <DeleteEmployee />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Emmanuel A</TableCell>
          <TableCell><Badge>HR</Badge></TableCell>
          <TableCell>aemmanuel.codes@gmail.com</TableCell>
          <TableCell className="flex flex-row gap-2 items-center">
            <SingleEmployee />
            <UpdateEmployee />
            <DeleteEmployee />
          </TableCell>
        </TableRow>
    </TableBody>
    <TableFooter>
      <TableRow>
        <TableCell colSpan={3}>Total</TableCell>
        <TableCell className="text-right">52</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
)}

export default EmployeeTable