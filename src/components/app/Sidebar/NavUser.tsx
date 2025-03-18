import { LogOut, Settings } from "lucide-react"

import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import UserAvatar from "../Shared/UserAvatar"
import { Button } from "@/components/ui/button"

export function NavUser({
    user,
}: {
    user: {
        name: string
        email: string
        avatar: string
    }
}) {
    return (
        <SidebarMenu>
            <SidebarMenuItem  >
                <SidebarMenuButton size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground hover:bg-inherit">
                    <UserAvatar user={user}></UserAvatar>
                    <div className="grid flex-1 text-left text-sm leading-tight ">
                        <span className="truncate font-semibold text-white/70">{user.name}</span>
                        <span className="truncate text-xs text-white/50">{user.email}</span>
                    </div>
                    <Settings className="text-white/70"></Settings>
                    <LogOut className="text-white/70"></LogOut>
                </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem className="my-3">
                <Button className="size-none w-full text-white/70 text-sm py-3 bg-neutral-800 border-[1px] border-white/20 rounded-4xl"> Post </Button>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}
