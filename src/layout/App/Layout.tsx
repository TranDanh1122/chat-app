import { AppSidebar } from "@/components/app/Sidebar/Sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import { Outlet } from "react-router-dom";
export default function AppLayout(): React.JSX.Element {
    return <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
            <Outlet />
        </SidebarInset>
    </SidebarProvider>
}