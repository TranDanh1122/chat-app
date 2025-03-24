import React from "react";
import useTrendingTopic from "./hooks/useTrendingTopic";
import Item from "./Item";
const FAKE_DATA = [
    {
        title: "Apple Releases iOS 17.6.1 with Advanced Data Protection Fix",
        time: "4 hours ago"
    },
    {
        title: "Global climate summit 2024",
        time: "4 hours ago"
    },
    {
        title: "Revolutionary Cancer Treatment Shows Promise",
        time: "2 hours ago"
    },
    {
        title: "Viral TikTok Challenge Raises Safety Concerns",
        time: "1 hour ago"
    },
    {
        title: "Viral TikTok Challenge Raises Safety Concerns",
        time: "10 hours ago"
    }
]
export default function List() {
    const { data: topics, isLoading } = useTrendingTopic()
    if (isLoading) return <div className="border-s-2 border-white "></div>
    return <div className="flex flex-col">
        {
            (topics ?? FAKE_DATA).map(el => <Item {...el} />)
        }
    </div>
}