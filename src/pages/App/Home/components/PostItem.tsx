import UserAvatar from "@/components/app/Shared/UserAvatar";
import React from "react";
import { Post } from "../types/Post";
import { Ellipsis } from "lucide-react";

export default React.memo(function PostItem({ post }: { post: Post }): React.JSX.Element {

    return <div className="p-3 flex items-start gap-5">
        <UserAvatar user={{ name: post.name, avatar: post.image }} />
        <div>
            <div className="flex items-center">
                <h2 className="text-sm font-semibold text-white">{post.name}</h2>
                <span className="text-xs text-white/50">{post.time}</span>
                <Ellipsis className="ml-auto text-white" />
            </div>
            
        </div>
    </div>
})