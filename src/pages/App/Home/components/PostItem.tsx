import UserAvatar from "@/components/app/Shared/UserAvatar";
import React from "react";
import { Post, PostItemState } from "../types/Post";
import { Ellipsis } from "lucide-react";
import DOMPurify from "DOMPurify"
import { usePostItem } from "../hooks/usePostItem";
interface PostItemProps {
    post: Post,
    state: PostItemState,
    setState: (params: PostItemState) => void
}
const PostItem = ({ post, state, setState }: PostItemProps,): React.JSX.Element => {
    const { contentRef, handleExpand } = usePostItem(state, setState)

    return <div className="py-3 px-6 flex h-full items-start gap-5 bg-neutral-700 rounded-xl">
        <div className="shrink-0">
            <UserAvatar user={{ name: post.name, avatar: post.image }} />
        </div>
        <div className="flex-1 relative">

            <div className="flex items-center gap-3">
                <h2 className="text-sm font-semibold text-white">{post.name}</h2>
                <span className="text-xs text-white/50">{post.time}</span>
                <Ellipsis className="ml-auto text-white block" />
            </div>

            <div ref={contentRef} className="text-white h-full overflow-hidden mt-2"
                dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}></div>

            {!state.isExpand &&
                <div className="absolute left-0 bottom-0 bg-gradient-to-b from-black/40 to-black/80 backdrop-blur-3xl w-full flex justify-end items-center p-3">
                    <span onClick={handleExpand} className="text-white underline cursor-pointer">  Expand</span>
                </div>
            }
            {state.isExpand &&
                <div className="absolute left-0 -bottom-5 w-full  flex justify-center items-center">
                    <span onClick={handleExpand} className="text-white underline cursor-pointer"> Unexpand</span>
                </div>
            }

        </div>
    </div>
}
export default PostItem