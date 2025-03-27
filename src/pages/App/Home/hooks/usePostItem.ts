import { PostItemState } from "../types/Post"
import React from "react"
export const usePostItem = ( state : PostItemState , setState : (params: PostItemState) => void) => {
    const contentRef = React.useRef<HTMLDivElement>(null)
    const height = React.useRef<number>(0)
    React.useEffect(() => {
        if (!contentRef.current) return
        height.current = contentRef.current?.getBoundingClientRect().height || 0
        if (state.isExpand) {
            contentRef.current.style.maxHeight = "none"
        } else {
            contentRef.current.style.maxHeight = "144px"
        }
        return () => console.log("unmount");

    }, [])
    const handleExpand = () => {

        setState({ ...state, isExpand: !state.isExpand, contentHeight: height.current })
    }
    return {
        contentRef,
        handleExpand
    }
}