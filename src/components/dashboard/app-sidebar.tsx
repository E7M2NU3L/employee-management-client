import { Group, LogOut, PersonStanding} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link } from "react-router-dom"
import LogoutUser from "../navbar/logout-drawer"
import { Button } from "../ui/button"
import ProfileDialog from "./profile-dialog"
import { ModeToggle } from "./theme-toggle"

// Menu items.
const items = [
  {
    title: "Employees",
    url: "/employees",
    icon: PersonStanding,
  },
  {
    title: "Departments",
    url: "/departments",
    icon: Group,
  },
]

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
         <Link to={"/"} className="flex flex-row gap-2 items-center">
          <img src="/logo.png" alt="logo" className="w-12 h-12 object-contain" />
          <h1 className="text-xl font-semibold">ETracks</h1>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="flex items-center gap-2 flex-row">
        <LogoutUser>
          <Button variant={"destructive"} size={"sm"}>
            <LogOut />
          </Button>
        </LogoutUser>
        <ProfileDialog />
        <ModeToggle />
      </SidebarFooter>
    </Sidebar>
  )
}
