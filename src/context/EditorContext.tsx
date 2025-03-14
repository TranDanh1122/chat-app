import React from "react";
import ReactQuill from "react-quill-new";
interface ContextType {
    handlePickIcon: (emoji: string) => void,
    quillRef: any,
    selection: any

}
export const EditorContext = React.createContext<ContextType>({
    handlePickIcon: (emoji: string) => console.log(emoji),
    quillRef: {},
    selection: {}
})
export default function EditorContextProvider({ children }: { children: React.ReactNode }): React.JSX.Element {
    const quillRef = React.useRef<null | ReactQuill>(null)
    const selection = React.useRef<number | null>(null)
    const handlePickIcon = React.useCallback((emoji: string) => {
        const editor = quillRef.current?.getEditor()
        if (selection.current) {
            editor?.insertText(selection.current, emoji)
            editor?.setSelection(selection.current + 2)
        }
    }, [])
    return <EditorContext.Provider value={{ handlePickIcon, quillRef, selection }} >
        {children}
    </EditorContext.Provider>
}