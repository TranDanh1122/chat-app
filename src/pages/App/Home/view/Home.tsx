import EditorMask from "@/components/app/Editor/EditorMask";
import FollowForyou from "@/layout/App/Follow-Foryou";
import Header from "@/layout/App/Header";
import React from "react";
import PostItem from "../components/PostItem";
import { FixedSizeList as List } from 'react-window';
import { useLayoutList } from "../hooks/useLayoutList";
import { useLoaderData } from "react-router-dom";
const OuterElement = (props: any) => (
    <div className="scrollbar-none " {...props} />
)

export default function HomeView(): React.JSX.Element {
    const posts = useLoaderData()
    const { listHeight, listWidth, header, screen } = useLayoutList()
    const renderRow = ({ index, style }: { index: number, style: React.CSSProperties }) => {
        const post = posts[index]
        return <div style={style}>
            <PostItem key={post.id} post={post} />
        </div>
    }
    return <React.Fragment>
        <div ref={header}>
            <Header />
            <div className="p-3 space-y-3">
                {screen == "mobile" && <FollowForyou />}
                <EditorMask redirect={screen == "mobile"} />
            </div>
        </div>
        <List
            height={listHeight}
            itemCount={posts.length}
            itemSize={300}  //item height     
            outerElementType={OuterElement}
            width={listWidth}
        >
            {renderRow}
        </List>


    </React.Fragment>
}