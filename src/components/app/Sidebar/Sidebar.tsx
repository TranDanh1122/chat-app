import * as React from "react"
import {
    Bookmark,
    BookOpen,
    Bot,
    Heart,
    Home,
    MessageSquareText,
    Settings2,
    SquareTerminal,
    UserRoundPen,
} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { NavMain } from "./NavBar"
import { NavUser } from "./NavUser"

// This is sample data.
const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
        {
            title: "Home",
            url: "/",
            icon: Home,
            isActive: true,
        },
        {
            title: "Notifications",
            url: "/notification",
            icon: Heart,
        },
        {
            title: "Messages",
            url: "/message",
            icon: MessageSquareText,

        },
        {
            title: "Bookmarks",
            url: "/bookmark",
            icon: Bookmark,
        },
        {
            title: "Profile",
            url: "/profile",
            icon: UserRoundPen,
        },
        {
            title: "Explore",
            url: "/explore",
            icon: Settings2,
        },
    ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader className="flex flex-row justify-between shrink-1 bg-neutral-800">
                <img src="/assets/logo.png" alt="Logo" className="size-11 object-cover" />
                <SidebarTrigger className="-ml-1" />
            </SidebarHeader> 
            <SidebarContent className="bg-neutral-800">
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarFooter className="bg-neutral-800">
                <NavUser user={data.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
