import React from "react";
import { useNavigate } from "react-router-dom";
export const useEditorMask = (redirect?: boolean) => {
    const navigate = useNavigate()
    const [active, setActive] = React.useState<boolean>(false)
    const handleClick = () => {
        if (redirect) {
            navigate("/create-post")
        } else {
            setActive((prev) => { if (!prev) return true; return prev })
        }
    }
    React.useEffect(() => {
        const handleOutSideClick = (e: MouseEvent) => {
            if ((e.target as HTMLElement).closest(".editor")) return
            if ((e.target as HTMLElement).classList.contains("editor-mask")) return
            setActive((prev) => { if (prev) return false; return prev })
        }
        document.addEventListener("click", handleOutSideClick)
        return () => document.removeEventListener("click", handleOutSideClick)
    }, [])
    return { handleClick, active }
}