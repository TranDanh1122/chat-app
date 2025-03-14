
import React, { useState } from "react"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import * as LucideIcons from "lucide-react"
import { emojiData } from "./emoji-data"
import { Button } from "@/components/ui/button"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { useDebound } from "@/hooks/useDebound"
import { EditorContext } from "@/context/EditorContext"



export default function IconPicker() {

    const [filteredEmojis, setFilteredEmojis] = useState(emojiData)

    const searchHandler = (e: string) => {
        if (e) {
            const filter = emojiData.filter((emoji) => emoji.name.toLowerCase().includes(e.toLowerCase()))
            setFilteredEmojis(filter)
        } else {
            setFilteredEmojis(emojiData)
        }
    }
    const { handlePickIcon: onSelectEmoji } = React.useContext(EditorContext)
    const debound = useDebound((e: string) => searchHandler(e), 500)

    React.useEffect(() => {
        console.log("icon pick mount");
        return () => console.log("icon pick unmount")
    })
    return (
        <div className="w-full max-w-md bg-neutral-800 text-white ">
            <div className="p-4">
                <div className="relative mb-4 rounded-[48px] overflow-hidden">
                    <LucideIcons.Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                        placeholder="Search Emojis..."
                        className="pl-9 bg-neutral-900 border-neutral-800 border-0 text-white focus-visible:ring-0 focus-visible:ring-offset-0"
                        onChange={(e) => debound(e.target.value)}
                    />
                </div>
                <ScrollArea className="h-[132px]">
                    <div className="grid grid-cols-7">
                        {filteredEmojis.map((emoji) => (
                            <TooltipProvider key={emoji.id}>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button className="size-11 rounded-md hover:bg-neutral-700 bg-neutral-800  flex items-center justify-center text-xl"
                                            onClick={() => onSelectEmoji && onSelectEmoji(emoji.emoji)} >
                                            {emoji.emoji}
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{emoji.name}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>

                        ))}
                    </div>
                </ScrollArea>
            </div>
        </div>
    )
}

