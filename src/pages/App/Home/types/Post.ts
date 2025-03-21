interface Post {
    id: string,
    image: string,
    name: string,
    time: string,
    content: string
}
interface PostItemState {
    isExpand: boolean,
    height: number,
    index: number,
    contentHeight : number
}
export type { Post, PostItemState }