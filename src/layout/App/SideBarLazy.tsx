import { useSidebar } from "@/components/ui/sidebar";
import { LayoutContext } from "@/context/LayoutContext";
import React from "react";
const AppSidebar = React.lazy(() => import("@/components/app/Sidebar/Sidebar"))

export default React.memo(function SideBarLazy(): React.JSX.Element {
    const { open, openMobile } = useSidebar()
    const { screen } = React.useContext(LayoutContext)
    const isMobile = React.useMemo(() => screen == "mobile", [screen])
    const isOpen = React.useMemo(() => isMobile ? openMobile : open, [isMobile, open, openMobile])
    return (
        <>
            {
                isOpen ?
                    <React.Suspense fallback={<SidebarSkeleton />}>
                        <AppSidebar />
                    </React.Suspense> : null
            }

        </>
    )
})
const SidebarSkeleton = (): React.JSX.Element => {
    const { screen } = React.useContext(LayoutContext)
    if (screen != "desktop") return <></>
    return <div className="h-screen w-[16rem] relative z-10 bg-neutral-600/75"></div>
}