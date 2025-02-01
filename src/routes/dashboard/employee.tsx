import CreateEmployee from "@/components/dashboard/create-employee"
import EmployeeCard from "@/components/dashboard/employee-card"

const Employee = () => {
  return (
    <div className="p-4">
      <main className="min-h-[10vh] flex justify-between items-center flex-wrap gap-4">
        <main className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold">
            Employees
          </h1>
          <p className="text-sm font-light text-muted-foreground tracking-tight">
            Create and manage your Employee database securely with <span className="text-primary">ETrack</span>
          </p>
        </main>

        <CreateEmployee />
      </main>

      <main className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-3">
        {[0,1,2,3,4,5,6].map((_, index) => (
          <EmployeeCard key={index} />
        ))}
      </main>
    </div>
  )
}

export default Employee