import { useSidebar } from "@/components/ui/sidebar"
import { LayoutContext } from "@/context/LayoutContext"
import React from "react"
export const useLayoutList = () => {
    const { open } = useSidebar()
    const { screen } = React.useContext(LayoutContext)
    const header = React.useRef<HTMLDivElement>(null)
    const [listHeight, setListHeight] = React.useState<number>(0)
    React.useLayoutEffect(() => {
        if (header.current)
            setListHeight((prev) => {
                const newHeight = window.innerHeight - (header.current?.getBoundingClientRect().height || 0)
                if (newHeight == prev) return prev
                return newHeight
            })
    }, [header])
    const listWidth: number = React.useMemo(() => {
        return window.innerWidth - (screen != "mobile" && open ? 256 : 0)
    }, [open, screen])
    return { listHeight, listWidth, header, screen }
}