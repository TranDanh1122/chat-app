import { SidebarInset, SidebarProvider, useSidebar } from "@/components/ui/sidebar";
import useLayout from "@/hooks/useScreen";
import React from "react";
import { Outlet } from "react-router-dom";
const AppSidebar = React.lazy(() => import("@/components/app/Sidebar/Sidebar"))

export default function AppLayout(): React.JSX.Element {
    return <SidebarProvider>
        <SideBarLazy />
        <SidebarInset className="bg-neutral-800">
            <Outlet />
        </SidebarInset>
    </SidebarProvider>
}
const SideBarLazy = (): React.JSX.Element => {
    const { open, openMobile } = useSidebar()
    const { screen } = useLayout()
    const [isOpen, setOpen] = React.useState<boolean>(false)
    React.useEffect(() => {
        if (screen == "mobile") {
            setOpen(openMobile)
        } else {
            setOpen(open)
        }
    }, [open, openMobile, screen])
    return (
        <>
            {
                isOpen ?
                    <React.Suspense fallback="">
                        <AppSidebar />
                    </React.Suspense> : null
            }

        </>

    )
}