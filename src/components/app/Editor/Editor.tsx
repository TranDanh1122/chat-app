import React from "react"
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import ChooseIcon from "../Emoji/ChooseIcon"
import { Button } from "@/components/ui/button"
import { AtSign, Image } from "lucide-react"
export default function Editor({ className }: { className?: string }) {
    const quillRef = React.useRef<null | ReactQuill>(null)
    const selection = React.useRef<number | null>(null)

    const handlePickIcon = React.useCallback((emoji: string) => {
        const editor = quillRef.current?.getEditor()
        if (selection.current) {
            editor?.insertText(selection.current, emoji)
            editor?.setSelection(selection.current + 2)
        }
    }, [])
    return (<>
        <ReactQuill modules={{ toolbar: [] }} className={className} ref={quillRef} onChangeSelection={(range) => {
            if (range) selection.current = range.index + range.length
        }} />
        <Plugin handlePickIcon={handlePickIcon} />
    </>)
}
const Plugin = React.memo(
    (
        { handlePickIcon }
            :
            { handlePickIcon: (emoji: string) => void }
    ): React.JSX.Element => {
        return (<div className="fixed bottom-3 w-fit h-fit max-h-fit left-1/2 -translate-x-1/2 bg-neutral-700 p-2 rounded-[20px]">
            <ChooseIcon onPick={handlePickIcon} />
            <Button className="size-11 hover:bg-neutral-600 bg-neutral-700 rounded-[12px]">
                <Image className="size-4.5 cursor-pointer" />
            </Button>
            <Button className="size-11 hover:bg-neutral-600 bg-neutral-700 rounded-[12px]">
                <img src="/assets/gif.png" alt="add gif" className="size-4.5 min-w-4.5 object-cover" />
            </Button>
            <Button className="size-11 hover:bg-neutral-600 bg-neutral-700 rounded-[12px]">
                <AtSign />
            </Button>
        </div>)
    }
)


