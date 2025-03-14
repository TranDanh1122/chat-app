import React from "react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button";
import { AtSign } from "lucide-react";
const UserTag = React.lazy(() => import("@/components/app/UserTag/UserTag"))
export default function UserTagAction(): React.JSX.Element {
    const [open, isOpen] = React.useState<boolean>(false)
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button onClick={(e) => { e.stopPropagation(); isOpen((prev) => !prev) }} className="size-11 hover:bg-neutral-600 bg-neutral-700 rounded-[12px]">
                    <AtSign onClick={(e) => { e.stopPropagation(); isOpen((prev) => !prev) }} />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0 border-white/20 w-full bg-neutral-800 h-[200px] rounded-4xl overflow-hidden">
                {
                    open ?
                        <React.Suspense fallback="">
                            <UserTag />
                        </React.Suspense>
                        : null
                }
            </PopoverContent>
        </Popover>
    )
}