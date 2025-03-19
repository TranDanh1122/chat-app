import { Button } from "@/components/ui/button";
import React from "react";

export default React.memo(function FollowForyou(): React.JSX.Element {
    const [active, setActive] = React.useState<string>("foryou")
    return <div className="bg-neutral-800 p-0.5 w-full md:max-w-md flex items-center justify-between relative border-white/20 border-[1px] rounded-full">
        <div className={`absolute rounded-full bg-neutral-600 w-1/2 h-full top-0 ${active == "foryou" ? "left-0" : "left-1/2"} transition-all ease-linear duration-150`}></div>
        <Button onClick={() => { if (active != "foryou") setActive("foryou") }} className="text-white size-none w-1/2 bg-transparent relative z-10 py-0.5 hover:bg-transparent">For you</Button>
        <Button onClick={() => { if (active != "following") setActive("following") }} className="w-1/2 size-none text-white bg-transparent relative z-10 py-0.5 hover:bg-transparent">Following</Button>
    </div>
})