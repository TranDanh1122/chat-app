import React from "react";
import ReactQuill from "react-quill-new";
interface ContextType {
    onSubmit: () => void,
    handlePickIcon: (emoji: string) => void,
    handleTagUser: (name: string) => void,
    quillRef: any,
    selection: any,
    isComponent?: boolean
}
export const EditorContext = React.createContext<ContextType>({
    onSubmit: () => console.log("submit"),
    handlePickIcon: (emoji: string) => console.log(emoji),
    handleTagUser: (name: string) => console.log(name),
    quillRef: {},
    selection: {},
})

export const EditorContentContext = React.createContext<{
    currentContent: string,
    setCurrentContent: React.Dispatch<React.SetStateAction<string>>
}>({
    currentContent: "",
    setCurrentContent: () => { },
})
interface Props {
    handleSubmit: (content?: string) => void,
    children: React.ReactNode,
    isComponent?: boolean,
}
export default function EditorContextProvider({ handleSubmit, children, isComponent }: Props): React.JSX.Element {
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
    const onSubmit = React.useCallback(() => {
        const editor = quillRef.current?.getEditor()
        const content = editor?.getSemanticHTML()
        handleSubmit(content)
    }, [handleSubmit])
    return <EditorContext.Provider value={{ onSubmit, handlePickIcon, quillRef, selection, handleTagUser, isComponent }} >
        {children}
    </EditorContext.Provider>
}
export function EditorContentContextProvider({ children }: { children: React.ReactNode }): React.JSX.Element {
    const [currentContent, setCurrentContent] = React.useState<string>("")
    return <EditorContentContext.Provider value={{ currentContent, setCurrentContent }}>
        {children}
    </EditorContentContext.Provider>
}