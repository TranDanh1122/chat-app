import React from "react"
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import EditorContextProvider, { EditorContentContext, EditorContentContextProvider, EditorContext } from "@/context/EditorContext";
import UserAvatar from "../Shared/UserAvatar";
import { Plugin } from "./Plugin";
interface Props {
    handleSubmit: (content?: string) => void,
    isComponent?: boolean,
    className?: string
}
export default React.memo(function Editor({ handleSubmit, isComponent, className }: Props) {
    return (
        <EditorContextProvider handleSubmit={handleSubmit} isComponent={isComponent}>
            <EditorProvider className={className} />
        </EditorContextProvider>
    )
})

const EditorProvider = ({ className }: Pick<Props, "className">): React.JSX.Element => {
    const { quillRef, selection, isComponent } = React.useContext(EditorContext)
    const { setCurrentContent, currentContent } = React.useContext(EditorContentContext)
    return <div className={`${className} ${isComponent ? "flex items-start p-3 gap-4 relative" : ""}`}>
        {
            isComponent && <div className="size-11">
                <UserAvatar user={{ name: "", avatar: "" }} />
            </div>
        }
        <ReactQuill
            value={currentContent}
            defaultValue={"Write some thing..."}
            modules={{ toolbar: [] }}
            className={`max-w-full max-h-full ${isComponent ? "w-full text-white/95 h-16" : className}`}
            ref={quillRef}
            onChange={(value: any) => {
                setCurrentContent((prev) => {
                    if (prev != value) return value
                    return prev
                })
            }}
            onChangeSelection={(range) => {
                if (range) selection.current = range.index + range.length
            }} />
        <Plugin />
    </div>
}



