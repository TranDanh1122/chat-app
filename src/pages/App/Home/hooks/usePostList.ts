import { useSidebar } from "@/components/ui/sidebar"
import { LayoutContext } from "@/context/LayoutContext"
import React from "react"
import { Post, PostItemState } from "../types/Post"
import { VariableSizeList as List } from 'react-window';

export const useLayoutList = (headerRef: React.RefObject<HTMLDivElement | null>) => {
    const { open } = useSidebar()
    const { screen } = React.useContext(LayoutContext)
    const [listHeight, setListHeight] = React.useState<number>(0)
    React.useLayoutEffect(() => {
        if (headerRef.current)
            setListHeight((prev) => {
                const newHeight = window.innerHeight - (headerRef.current?.getBoundingClientRect().height || 0)
                if (newHeight == prev) return prev
                return newHeight
            })
    }, [headerRef])
    const listWidth: number = React.useMemo(() => {
        return window.innerWidth - (screen != "mobile" && open ? 256 : 0)
    }, [open, screen])
    return { listHeight, listWidth }
}
export const useLayoutItem = (posts: Post[]) => {
    const [listState, setListState] = React.useState<PostItemState[]>(() => {
        return posts.map((_, index: number) => ({ isExpand: false, height: 252, index, contentHeight: 144 }))
    })
    const listRef = React.useRef<List>(null);

    const handleExpand = React.useCallback((params: PostItemState) => {
        console.log(params.contentHeight);

        setListState((prev) => {
            const newHeightList = [...prev];
            newHeightList[params.index] = params;
            return newHeightList;
        });
        listRef.current?.resetAfterIndex(params.index);
    }, [])
    return { listState, handleExpand, listRef }
}