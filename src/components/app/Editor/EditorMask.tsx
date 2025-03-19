import React from "react";
import UserAvatar from "../Shared/UserAvatar";
import { useNavigate } from "react-router-dom";
const Editor = React.lazy(() => import("./Editor"))
export default function EditorMask({ redirect }: { redirect?: boolean }): React.JSX.Element {
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
    return <React.Fragment>
        {!active &&
            <div onMouseEnter={() => import("./Editor")} onClick={handleClick} className="p-3 editor-mask bg-neutral-700 flex gap-4 items-center rounded-[20px]">
                {/* <img src="" alt="size-11 object-cover" /> */}
                <UserAvatar user={{ name: "", avatar: "" }} />
                <span className="text-white/30">Start a post</span>
            </div>
        }
        {
            active &&
            <React.Suspense fallback><Editor className="h-32 editor border-[1px] border-white/20 rounded-[20px]" isComponent={true} /></React.Suspense>

        }
    </React.Fragment>
}
