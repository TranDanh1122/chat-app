import React from "react";
interface LayoutContextState {
    screen: string
}
const MIN_TABLET = 768
const MIN_DESKTOP = 1024
export default function useLayout() {
    const [layout, setLayout] = React.useState<LayoutContextState>({ screen: "mobile" })
    React.useEffect(() => {
        const handleResize = () => {
            const windowW = window.innerWidth
            if (windowW >= MIN_TABLET && windowW < MIN_DESKTOP) setLayout({ screen: "tablet" })
            if (windowW >= MIN_DESKTOP) setLayout({ screen: "desktop" })
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])
    return layout
}