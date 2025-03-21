import EditorMask from "@/components/app/Editor/EditorMask";
import FollowForyou from "@/layout/App/Follow-Foryou";
import Header from "@/layout/App/Header";
import React from "react";
import PostItem from "../components/PostItem";
import { VariableSizeList as List } from 'react-window';
import { useLayoutItem, useLayoutList } from "../hooks/usePostList";
import { useLoaderData } from "react-router-dom";
export default function HomeView(): React.JSX.Element {
    const posts = useLoaderData()
    const { listHeight, listWidth, header, screen } = useLayoutList()
    const { listState, handleExpand, listRef } = useLayoutItem(posts)

    const renderRow = React.useCallback(({ index, style }: { index: number, style: React.CSSProperties }) => {
        const post = posts[index]
        return <div className="px-3 py-1.5" style={style}>
            <PostItem key={post.id} post={post} state={listState[index]} setState={handleExpand} />
        </div>
    }, [listState])
    return <React.Fragment>
        <div ref={header}>
            <Header />
            <div className="p-3 space-y-3">
                {screen == "mobile" && <FollowForyou />}
                <EditorMask redirect={screen == "mobile"} />
            </div>
        </div>
        <List ref={listRef}
            className={`scrollbar-thin scrollbar-track-black space-y-1 [&>div:first-child]:space-y-3`}
            height={listHeight}
            itemCount={posts.length}
            itemSize={(index) => {
                const expandHeight = 252 + (listState[index].contentHeight - 144)
                return listState[index].isExpand ? expandHeight : listState[index].height
            }}  //item height     
            width={listWidth}
        >
            {renderRow}
        </List>


    </React.Fragment>
}