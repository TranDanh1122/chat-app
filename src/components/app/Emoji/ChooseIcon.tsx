import { Button } from "@/components/ui/button";
import { SmilePlus } from "lucide-react";
import React from "react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
const IconPicker = React.lazy(() => import("@/components/app/Emoji/IconPicker"))
function ChooseIcon() {

    const [open, isOpen] = React.useState<boolean>(false)
    console.log("re-render icon", open);
    return <>
        <Popover onOpenChange={(open) => isOpen(open)}>
            <PopoverTrigger asChild>
                <Button onClick={(e) => { e.stopPropagation(); isOpen((prev) => !prev) }} className="size-11 hover:bg-neutral-600 bg-neutral-700 rounded-[12px]">
                    <SmilePlus onClick={(e) => { e.stopPropagation(); isOpen((prev) => !prev) }} className="size-4.5 cursor-pointer" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0 border-white/20 w-full bg-neutral-800 h-[200px] rounded-4xl overflow-hidden">
                {
                    open &&
                    <React.Suspense fallback={<IconPickerSkeleton />}>
                        {IconPicker && <IconPicker />}
                    </React.Suspense>

                }
            </PopoverContent>
        </Popover>
    </>
}
export default React.memo(ChooseIcon)
export const IconPickerSkeleton = () => {
    return <div className="size-48 bg-black flex items-center justify-center">
        <div className="size-5 animate-spin border-r-2 border-t-2 border-white/50 rounded-full"></div>
    </div>
}
