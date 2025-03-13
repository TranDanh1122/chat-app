import { type LucideIcon } from "lucide-react"

import {
    SidebarGroup,
    SidebarMenu,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { NavLink } from "react-router-dom"

export function NavMain({
    items,
}: {
    items: {
        title: string
        url: string
        icon?: LucideIcon
        isActive?: boolean
        items?: {
            title: string
            url: string
        }[]
    }[]
}) {
    return (
        <SidebarGroup className="p-0 px-3 ">
            <SidebarMenu>
                {items.map((item) => (
                    <SidebarMenuItem>
                        <NavLink to={item.url} className={({ isActive }) => `hover:bg-neutral-700 rounded-lg size-full flex gap-4  p-2 justify-start font-semibold text-sm text-[#F8F8F8] hover:opacity-100 ${isActive ? "opacity-100 bg-neutral-700" : "opacity-50"} `}>
                            {item.icon && <item.icon className="size-6" />}
                            <span>{item.title}</span>
                        </NavLink>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    )
}
