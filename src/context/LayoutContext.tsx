import React from "react";
interface LayoutContextState {
    screen: string
}
const MIN_TABLET = 640
const MIN_DESKTOP = 1024
export const LayoutContext = React.createContext<LayoutContextState>({ screen: "mobile" })
export default function LayoutContextProvider({ children }: { children: React.ReactNode }) {
    const [layout, setLayout] = React.useState<LayoutContextState>({ screen: "mobile" })
    React.useEffect(() => {
        const handleResize = () => {
            const windowW = window.innerWidth
            if (windowW < MIN_TABLET)
                setLayout((prev) => {
                    if (prev.screen != "mobile") return { screen: "mobile" }
                    return prev
                })
            if (windowW >= MIN_TABLET && windowW < MIN_DESKTOP)
                setLayout((prev) => {
                    if (prev.screen != "tablet") return { screen: "tablet" }
                    return prev
                })
            if (windowW >= MIN_DESKTOP)
                setLayout((prev) => {
                    if (prev.screen != "desktop") return { screen: "desktop" }
                    return prev
                })
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])
    React.useEffect(() => {
        console.log(layout.screen);
    }, [layout])
    return <LayoutContext.Provider value={layout}>{children}</LayoutContext.Provider>
}