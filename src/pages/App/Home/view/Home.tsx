import EditorMask from "@/components/app/Editor/EditorMask";
import { LayoutContext } from "@/context/LayoutContext";
import FollowForyou from "@/layout/App/Follow-Foryou";
import Header from "@/layout/App/Header";
import React from "react";
import { PostList } from "../components/PostList";
import { useCreatePostMutation } from "../querys/usePost";
import RightBarLazy from "@/layout/App/RightBarLazy";
import clsx from "clsx";
import { useCreatePost } from "../hooks/usePostList";

export default function HomeView(): React.JSX.Element {
    const { screen } = React.useContext(LayoutContext)
    const header = React.useRef<HTMLDivElement>(null)
    const { handleSubmit } = useCreatePost()
    return <div className="flex flex-1">
        <div className={clsx(``, {
            "w-full": screen == "mobile",
            "w-4/5 flex-1": screen == "desktop",
            "w-3/5 flex-1": screen == "tablet",
        })}>
            <div ref={header}>
                <Header />
                <div className="p-3 space-y-3">
                    {screen == "mobile" && <FollowForyou />}
                    <EditorMask handleSubmit={handleSubmit} redirect={screen == "mobile"} />
                </div>
            </div>
            <PostList headerRef={header} />
        </div>
        <div className={clsx(``, {
            "w-1/5": screen == "desktop",
            "w-2/5": screen == "tablet",
        })}>
            <RightBarLazy />
        </div>

    </div>
}