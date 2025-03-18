import UserAvatar from "@/components/app/Shared/UserAvatar";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Plus, Search } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import FollowForyou from "./Follow-Foryou";
import { LayoutContext } from "@/context/LayoutContext";

// const FollowForyou = React.lazy(() => import("./Follow-Foryou"))
const Header = React.memo(() => {
    const { screen } = React.useContext(LayoutContext)
    return (<>
        <header className="bg-neutral-800 flex items-center flex-row p-3 gap-2">
            <img src="/assets/logo.png" alt="logo" className="size-10 object-cover" />
            {screen != "mobile" && <FollowForyou />}
            <Link to={"/create-post"} className="p-2 size-10 rounded-full border-[1px] border-white/20 ml-auto" >
                <Plus className="text-white" />
            </Link>
            <Button className="p-2 size-10 rounded-full border-[1px] border-white/20" >
                <Search className="text-white" />
            </Button>
            <SidebarTrigger className="size-10 hover:bg-inherit">
                <UserAvatar user={{ name: "", avatar: "" }} />
            </SidebarTrigger>
        </header>
    </>

    )
})
export default Header