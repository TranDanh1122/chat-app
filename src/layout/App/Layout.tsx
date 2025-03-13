import { SidebarInset, SidebarProvider, useSidebar } from "@/components/ui/sidebar";
import useLayout from "@/hooks/useScreen";
import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
const AppSidebar = React.lazy(() => import("@/components/app/Sidebar/Sidebar"))

export default function AppLayout(): React.JSX.Element {
    return <SidebarProvider>
        <SideBarLazy />
        <SidebarInset>
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
                    <Suspense fallback="">
                        <AppSidebar />
                    </Suspense> : null
            }

        </>

    )
}