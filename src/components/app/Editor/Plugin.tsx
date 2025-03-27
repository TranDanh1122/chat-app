import { EditorContext } from "@/context/EditorContext"
import React from "react"
import ChooseIcon from "../Emoji/ChooseIcon"
import { Button } from "@/components/ui/button"
import UserTagAction from "../UserTag/UserTagAction"
import { Image } from "lucide-react"

export const Plugin = React.memo((): React.JSX.Element => {
    const { isComponent, onSubmit } = React.useContext(EditorContext)
    console.log("re-render plugin");

    return (<div className={`absolute bottom-3  flex items-center h-fit max-h-fit rounded-[20px] 
    ${isComponent
            ? "bg-none left-0 px-2 w-full justify-start"
            : "bg-neutral-700 left-1/2 -translate-x-1/2 p-2 w-2/3 md:w-fit justify-center"}
    `}>
        <ChooseIcon />
        <Button className={`size-11 hover:bg-neutral-600 rounded-[12px] ${isComponent ? "bg-transparent" : "bg-neutral-700"}`}>
            <Image className="size-4.5 cursor-pointer" />
        </Button>
        <Button className={`size-11 hover:bg-neutral-600 rounded-[12px] ${isComponent ? "bg-transparent" : "bg-neutral-700"}`}>
            <img src="/assets/gif.png" alt="add gif" className="size-4.5 min-w-4.5 object-cover" />
        </Button>
        <UserTagAction />
        {
            isComponent &&
            <Button onClick={onSubmit} className="size-none px-3 border-[1px] border-white/20 hover:bg-neutral-600 rounded-[12px] bg-transparent ml-auto">Post</Button>
        }
    </div>)
})