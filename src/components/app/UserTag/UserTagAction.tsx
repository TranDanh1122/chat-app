import React from "react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button";
import { AtSign } from "lucide-react";
import UserTagSkeleton from "./UserTagSkeleton";
import { EditorContext } from "@/context/EditorContext";
const UserTag = React.lazy(() => import("@/components/app/UserTag/UserTag"))
export default function UserTagAction(): React.JSX.Element {
    const [open, isOpen] = React.useState<boolean>(false)
        const { isComponent } =  React.useContext(EditorContext)
    
    return (
        <Popover onOpenChange={(open) => isOpen(open)}>
            <PopoverTrigger asChild>
                <Button onClick={(e) => { e.stopPropagation(); isOpen((prev) => !prev) }} className={`size-11 hover:bg-neutral-600 ${isComponent ? "bg-transparent" : "bg-neutral-700"} rounded-[12px]`}>
                    <AtSign onClick={(e) => { e.stopPropagation(); isOpen((prev) => !prev) }} />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0 border-white/20 w-full bg-neutral-800 h-[450px] rounded-4xl overflow-hidden">
                {
                    open ?
                        <React.Suspense fallback={<UserTagSkeleton />}>
                            <UserTag />
                        </React.Suspense>
                        : null
                }
            </PopoverContent>
        </Popover>
    )
}