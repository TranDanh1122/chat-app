import * as React from "react"
import {
    Bookmark,
    Heart,
    Home,
    MessageSquareText,
    Settings2,
    UserRoundPen,
    XIcon,
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
import { LayoutContext } from "@/context/LayoutContext"

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

export default function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const { screen } = React.useContext(LayoutContext)
    console.log("🔹 Sidebar component loaded!");

    return (
        <Sidebar className={screen == "mobile" ? "w-full" : ""} collapsible="icon" {...props}>
            <SidebarHeader className="flex items-center flex-row justify-between shrink-1 bg-neutral-800">
                <img src="/assets/logo.png" alt="Logo" className="size-11 object-cover" />
                <SidebarTrigger className="p-2 rounded-full border-[1px] border-white/20" >
                    <XIcon className="text-white" />
                </SidebarTrigger>
            </SidebarHeader>
            <SidebarContent className="bg-neutral-800 pt-2">
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarFooter className="bg-neutral-800">
                <NavUser user={data.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
