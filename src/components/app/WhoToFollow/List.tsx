import React from "react"
import Item from "./Item"
import useFollower from "./hooks/useFollower"
const FAKE_DATA = [
    {
        name: "Kohaku",
        email: "Lolita52",
        content: "I design digital products and ventures.",
        state: true
    },
    {
        name: "Kohaku",
        email: "Lolita52",
        content: "I design digital products and ventures.",
        state: true
    },
    {
        name: "Nettie Schuster",
        email: "Precious3",
        content: "I design digital products and ventures.",
        state: false
    },
    {
        name: "Mrs. Lola Rohan",
        email: "Collin.Marks",
        content: "I design digital products and ventures.",
        state: false
    },
    {
        name: "Kohaku",
        email: "Susana_Dickens",
        content: "I design digital products and ventures.",
        state: false
    }
    ,
    {
        name: "Brandi Padberg",
        email: "Abbie_Pollich34",
        content: "I design digital products and ventures.",
        state: true
    }

]
export default function List() {
    const { data: followers, isLoading } = useFollower()
    if (isLoading) return <div className="mx-auto size-5 border-s-2 border-white rounded-full animate-spin"></div>
    return <div className="flex flex-col gap-2">
        {
            (followers ?? FAKE_DATA).map(el => <Item {...el} />)
        }
    </div>
}
