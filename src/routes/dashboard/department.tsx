import CreateDepartment from "@/components/dashboard/create-department"
import DepartmentCard from "@/components/dashboard/department-card"
import { Input } from "@/components/ui/input"
import { useState } from "react";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import DepartmentTable from "@/components/dashboard/department-table";

const Department = () => {
    const [layout, setLayout] = useState<string>("grid");
    const [search, setSearch] = useState<string>("");
  return (
    <div className="p-0 md:p-4">
    <main className="min-h-[10vh] p-4 md:p-0 flex justify-between items-center flex-wrap gap-4">
      <main className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold">
          Departments
        </h1>
        <p className="text-sm font-light text-muted-foreground tracking-tight break-words whitespace-normal">
        Create and manage departments in your company database securely with <span className="text-primary">ETrack</span>
        </p>
      </main>

      <main className="flex flex-row items-center gap-3 flex-wrap">
            <Select onValueChange={setLayout} defaultValue={layout}>
                <SelectTrigger className="w-[20vh]">
                <SelectValue placeholder="choose layout" />
                </SelectTrigger>
                <SelectContent>
                <SelectItem value="grid">grid</SelectItem>
                <SelectItem value="table">table</SelectItem>
                </SelectContent>
            </Select>
          <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search Departments" className="placeholder:text-sm w-[20vh]" />
          <CreateDepartment />
        </main>
    </main>

    <section>
        {layout === "grid" && (
            <>
                <main className="my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-3">
                    {[0,1,2,3,4,5,6].map((_, index) => (
                        <DepartmentCard key={index} />
                    ))}
                </main>

                <main className="h-full w-full">
                <Pagination>
                    <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">4</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>
                    </PaginationContent>
                </Pagination>
                </main>
            </>
        )}
    </section>

    <section>
        {layout === "table" && (
            <>
                <main className="my-6">
                    <DepartmentTable />
                </main>

                <main className="h-full w-full">
                    <Pagination>
                        <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">2</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">4</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </main>
            </>
        )}
    </section>
  </div>
  )
}

export default Department