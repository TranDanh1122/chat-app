import Editor from "@/components/app/Editor/Editor";
import { Button } from "@/components/ui/button";
import { useTurnBack } from "@/hooks/useTurnBack";
import { ArrowLeft } from "lucide-react";
import React from "react";
export default function CreatePostView(): React.JSX.Element {
    const handleBack = useTurnBack()
    return <>
        <header className="bg-neutral-800 flex items-center justify-between flex-row p-3 gap-2">
            <Button onClick={handleBack} className="p-2 size-10 rounded-full border-[1px] border-white/20" >
                <ArrowLeft />
            </Button>
            <Button className="px-6 py-3 size-none  rounded-4xl border-[1px] border-white/20" >
                Post
            </Button>
        </header>
        <Editor className="bg-neutral-800 rounded-none w-full h-full text-white [&__div]:h-full" />
    </>
}

