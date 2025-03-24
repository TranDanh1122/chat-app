import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import { Outlet } from "react-router-dom";
import SideBarLazy from "./SideBarLazy";

export default function AppLayout(): React.JSX.Element {
    return <SidebarProvider>
        <SideBarLazy />
        <SidebarInset className="bg-neutral-800 w-3/5">
            <Outlet />
        </SidebarInset>
    </SidebarProvider>
}
