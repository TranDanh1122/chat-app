import React from "react";
import ReactQuill from "react-quill-new";
interface ContextType {
    handlePickIcon: (emoji: string) => void,
    handleTagUser: (name: string) => void,
    quillRef: any,
    selection: any,
    isComponent?: boolean
}
export const EditorContext = React.createContext<ContextType>({
    handlePickIcon: (emoji: string) => console.log(emoji),
    handleTagUser: (name: string) => console.log(name),
    quillRef: {},
    selection: {},
})
export default function EditorContextProvider({ children, isComponent }: { children: React.ReactNode, isComponent?: boolean }): React.JSX.Element {
    const quillRef = React.useRef<null | ReactQuill>(null)
    const selection = React.useRef<number | null>(null)
    const handlePickIcon = React.useCallback((emoji: string) => {
        const editor = quillRef.current?.getEditor()
        editor?.insertText(selection.current || 0, emoji)
        editor?.setSelection((selection.current || 0))

    }, [])
    const handleTagUser = React.useCallback((userName: string) => {
        const editor = quillRef.current?.getEditor()
        editor?.insertText(selection.current || 0, `${userName}`, {
            bold: true,
            color: "white",
            underline: true
        })
        editor?.setSelection((selection.current || 0) + userName.length + 1)

    }, [])
    return <EditorContext.Provider value={{ handlePickIcon, quillRef, selection, handleTagUser, isComponent }} >
        {children}
    </EditorContext.Provider>
}
