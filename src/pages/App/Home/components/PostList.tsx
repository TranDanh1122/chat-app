import React from "react";
import { useLoaderData } from "react-router-dom";
import { useLayoutItem, useLayoutList } from "../hooks/usePostList";
import PostItem from "./PostItem";
import { VariableSizeList as List } from 'react-window';

export const PostList = React.memo(({ headerRef }: { headerRef: React.RefObject<HTMLDivElement | null> }): React.JSX.Element => {
    const { posts, total } = useLoaderData()
    const { listHeight, listWidth } = useLayoutList(headerRef)
    const { listState, handleExpand, listRef } = useLayoutItem(posts)

    const renderRow = React.useCallback(({ index, style }: { index: number, style: React.CSSProperties }) => {
        const post = posts[index]
        return <div className="px-3 py-1.5" style={style}>
            <PostItem key={post.id} post={post} state={listState[index]} setState={handleExpand} />
        </div>
    }, [listState, handleExpand, posts])
    return (
        <List ref={listRef}
            className={`scrollbar-thin scrollbar-track-black space-y-1 [&>div:first-child]:space-y-3`}
            height={listHeight}
            itemCount={total}
            itemSize={(index: number) => {
                const expandHeight = 252 + (listState[index].contentHeight - 144)
                return listState[index].isExpand ? expandHeight : listState[index].height
            }}  //item height     
            width={listWidth}
        >
            {renderRow}
        </List>
    )
})