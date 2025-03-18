import React from "react"
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import ChooseIcon from "../Emoji/ChooseIcon"
import { Button } from "@/components/ui/button"
import { Image } from "lucide-react"
import UserTagAction from "../UserTag/UserTagAction";
import EditorContextProvider, { EditorContext } from "@/context/EditorContext";

export default React.memo(function Editor({ className }: { className?: string }) {
    console.log("re-render editor");
    
    return (
        <EditorContextProvider>
            <EditorProvider className={className} />
        </EditorContextProvider>
    )
})

const EditorProvider = ({ className }: { className?: string }): React.JSX.Element => {
    const { quillRef, selection } = React.useContext(EditorContext)
    return <div className={className}>
        <ReactQuill modules={{ toolbar: [] }} className={className} ref={quillRef} onChangeSelection={(range) => {
            if (range) selection.current = range.index + range.length
        }} />
        <Plugin />
    </div>
}
const Plugin = React.memo((): React.JSX.Element => {
    return (<div className="absolute bottom-3 md:w-fit w-2/3 flex justify-center h-fit max-h-fit left-1/2 -translate-x-1/2 bg-neutral-700 p-2 rounded-[20px]">
        <ChooseIcon />
        <Button className="size-11 hover:bg-neutral-600 bg-neutral-700 rounded-[12px]">
            <Image className="size-4.5 cursor-pointer" />
        </Button>
        <Button className="size-11 hover:bg-neutral-600 bg-neutral-700 rounded-[12px]">
            <img src="/assets/gif.png" alt="add gif" className="size-4.5 min-w-4.5 object-cover" />
        </Button>
        <UserTagAction />
    </div>)
}
)


