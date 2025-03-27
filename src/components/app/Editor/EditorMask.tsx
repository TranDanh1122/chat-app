import React from "react";
import UserAvatar from "../Shared/UserAvatar";
import { useEditorMask } from "./hooks/useEditorMak";
import { EditorContentContext, EditorContentContextProvider } from "@/context/EditorContext";
const Editor = React.lazy(() => import("./Editor"))
interface Props {
    handleSubmit: (content?: string) => void,
    redirect?: boolean
}
export default function EditorMask(props: Props): React.JSX.Element {
    return <EditorContentContextProvider>
        <EditorContainer {...props} />
    </EditorContentContextProvider>
}

function EditorContainer({
    handleSubmit,
    redirect
}: Props): React.JSX.Element {
    const { active, handleClick } = useEditorMask(redirect)
    const { currentContent } = React.useContext(EditorContentContext)
    return (
        <React.Fragment>
            {!active &&
                <div onMouseEnter={() => import("./Editor")} onClick={(e) => { e.stopPropagation(); handleClick() }} className="p-3 editor-mask bg-neutral-700 flex gap-4 items-center rounded-[20px]">
                    {/* <img src="" alt="size-11 object-cover" /> */}
                    <UserAvatar user={{ name: "", avatar: "" }} />
                    <span onClick={(e) => { e.stopPropagation(); handleClick() }} className="text-white/30 h-16 overflow-hidden" dangerouslySetInnerHTML={{ __html: currentContent ? currentContent : "Start a post" }} />
                </div>
            }
            {
                active &&
                <React.Suspense fallback><Editor handleSubmit={handleSubmit} className="h-32 editor border-[1px] border-white/20 rounded-[20px]" isComponent={true} /></React.Suspense>
            }
        </React.Fragment>
    )


}
