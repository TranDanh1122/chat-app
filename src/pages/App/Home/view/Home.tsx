import EditorMask from "@/components/app/Editor/EditorMask";
import { LayoutContext } from "@/context/LayoutContext";
import FollowForyou from "@/layout/App/Follow-Foryou";
import Header from "@/layout/App/Header";
import React from "react";
import { PostList } from "../components/PostList";
import { useCreatePostMutation } from "../querys/usePost";
import RightBarLazy from "@/layout/App/RightBarLazy";

export default function HomeView(): React.JSX.Element {
    const { screen } = React.useContext(LayoutContext)
    const header = React.useRef<HTMLDivElement>(null)
    const createPostMutation = useCreatePostMutation()
    const handleSubmit = (content?: string) => {
        console.log(content);
        createPostMutation.mutate({ content }, {
            onSuccess: (data: any) => {
                console.log(data);
            },
            onError: (error: any) => {
                console.log(error);
            }
        })

    }
    return <div className="flex w-full">

        <div className="w-4/5">
            <div ref={header}>
                <Header />
                <div className="p-3 space-y-3">
                    {screen == "mobile" && <FollowForyou />}
                    <EditorMask handleSubmit={handleSubmit} redirect={screen == "mobile"} />
                </div>
            </div>
            <PostList headerRef={header} />
        </div>

        <RightBarLazy />

    </div>
}