import { Bookmark, Heart, MessageSquare, Repeat, Share2 } from "lucide-react";
import React from "react";
export default function PostAction(): React.JSX.Element {
    return <div className="flex text-white/50 text-sm w-full items-center [&__svg]:size-6 mt-3 gap-2">
        <span className="flex items-center pr-3 py-2 gap-2">
            <Heart />
            12
        </span>
        <span className="flex items-center px-3 py-2 gap-2">
            <Repeat />
            12
        </span>
        <span className="flex items-center px-3 py-2 gap-2">
            <MessageSquare />
            12
        </span>
        <Bookmark className="ml-auto"/>
        <Share2 />
    </div>
}