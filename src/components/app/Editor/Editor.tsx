import { useState } from "react"
import { ParagraphNode, TextNode } from "lexical"
import { HeadingNode, QuoteNode } from "@lexical/rich-text"
import { InitialConfigType, LexicalComposer } from "@lexical/react/LexicalComposer"
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary"
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin"
import { TooltipProvider } from "@/components/ui/tooltip"
import { editorTheme } from "@/components/editor/themes/editor-theme"
import { ContentEditable } from "@/components/editor/editor-ui/content-editable"
import ChooseIcon from "../Emoji/ChooseIcon"


const editorConfig: InitialConfigType = {
    namespace: 'Editor',
    theme: editorTheme,
    nodes: [
        HeadingNode,
        ParagraphNode,
        TextNode,
        QuoteNode,
    ],
    onError: (error: Error) => {
        console.error(error)
    },
}

export default function Editor({ className }: { className?: string }) {
    return (
        <div className={`w-full overflow-hidden rounded-lg bg-background ${className}`}>
            <LexicalComposer
                initialConfig={{
                    ...editorConfig,
                }}
            >
                <TooltipProvider>
                    <Plugins />
                </TooltipProvider>
            </LexicalComposer>
        </div>
    )
}

const placeholder = 'Start typing...'

export function Plugins() {
    const [_, setFloatingAnchorElem] =
        useState<HTMLDivElement | null>(null)

    const onRef = (_floatingAnchorElem: HTMLDivElement) => {
        if (_floatingAnchorElem !== null) {
            setFloatingAnchorElem(_floatingAnchorElem)
        }
    }
    return (
        <div className="relative ">
            {/* toolbar plugins */}
            <div className="relative">
                <RichTextPlugin
                    contentEditable={
                        <div className="border-0">
                            <div className="border-0" ref={onRef}>
                                <ContentEditable placeholder={placeholder} className="ContentEditable__root relative block overflow-auto min-h-full px-8 focus:outline-none h-72" />
                            </div>
                        </div>
                    }
                    ErrorBoundary={LexicalErrorBoundary}
                />
                <div className="fixed bottom-3 w-fit h-fit max-h-fit left-1/2 -translate-x-1/2 bg-neutral-700 p-2 rounded-[20px]">
                    <ChooseIcon />
                </div>
            </div>
        </div>
    )
}
