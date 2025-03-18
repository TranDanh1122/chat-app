import React from "react"
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import ChooseIcon from "../Emoji/ChooseIcon"
import { Button } from "@/components/ui/button"
import { Image } from "lucide-react"
import UserTagAction from "../UserTag/UserTagAction";
import EditorContextProvider, { EditorContext } from "@/context/EditorContext";
import UserAvatar from "../Shared/UserAvatar";

export default React.memo(function Editor({ isComponent, className }: { isComponent?: boolean, className?: string }) {
    return (
        <EditorContextProvider isComponent={isComponent}>
            <EditorProvider className={className} />
        </EditorContextProvider>
    )
})

const EditorProvider = ({ className }: { className?: string }): React.JSX.Element => {
    const { quillRef, selection, isComponent } = React.useContext(EditorContext)
    return <div className={`${className} ${isComponent ? "flex items-start p-3 gap-4 relative" : ""}`}>
        {
            isComponent && <div className="size-11">
                <UserAvatar user={{ name: "", avatar: "" }} />
            </div>
        }
        <ReactQuill defaultValue={"Write some thing..."} modules={{ toolbar: [] }} className={`max-w-full max-h-full ${isComponent ? "w-full text-white/95 h-full" : className}`} ref={quillRef} onChangeSelection={(range) => {
            if (range) selection.current = range.index + range.length
        }} />
        <Plugin />
    </div>
}
const Plugin = React.memo((): React.JSX.Element => {
    const { isComponent } = React.useContext(EditorContext)
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
            <Button className="size-none px-3 border-[1px] border-white/20 hover:bg-neutral-600 rounded-[12px] bg-transparent ml-auto">Post</Button>
        }
    </div>)
})


