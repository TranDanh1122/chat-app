import React from "react";
interface LayoutContextState {
    screen: string
}
const MIN_TABLET = 640
const MIN_DESKTOP = 1024
export const LayoutContext = React.createContext<LayoutContextState>({ screen: "mobile" })
export default function LayoutContextProvider({ children }: { children: React.ReactNode }) {

    const [layout, setLayout] = React.useState<LayoutContextState>(() => {
        const windowW = window.innerWidth
        if (windowW < MIN_TABLET) return { screen: "mobile" }
        if (windowW >= MIN_TABLET && windowW < MIN_DESKTOP) return { screen: "tablet" }
        if (windowW >= MIN_DESKTOP) return { screen: "desktop" }
        return { screen: "mobile" }
    })
    const handleResize = React.useCallback(() => {
        const windowW = window.innerWidth
        setLayout((prev) => {
            if (windowW < MIN_TABLET && prev.screen != "mobile") return { screen: "mobile" }
            if (windowW >= MIN_TABLET && windowW < MIN_DESKTOP && prev.screen != "tablet") return { screen: "tablet" }
            if (windowW >= MIN_DESKTOP && prev.screen != "desktop") return { screen: "desktop" }
            return prev
        })

    }, [])
    React.useEffect(() => {
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [handleResize])
    React.useEffect(() => {
        console.log(layout.screen);
    }, [layout])
    return <LayoutContext.Provider value={layout}>{children}</LayoutContext.Provider>
}