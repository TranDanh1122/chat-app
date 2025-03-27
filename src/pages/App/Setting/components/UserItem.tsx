import UserAvatar from "@/components/app/Shared/UserAvatar";
import React from "react";
import Direct from "./Direct";
import { NavLink } from "react-router-dom";
export default function UserItem(): React.JSX.Element {
    return <NavLink
        to={"/setting"}
        className={({isActive}) => `flex p-3.5 rounded-[20px] ${isActive ? "bg-neutral-700" : "bg-neutral-800"}`}
        children={({ isActive }) => (
            <>
                <UserAvatar user={{ name: "", avatar: "" }}></UserAvatar>
                <div className="grid flex-1 text-left text-sm leading-tight ">
                    <span className="truncate font-semibold text-white/70">Moyo</span>
                    <span className="truncate text-xs text-white/50">@moyoshiro</span>
                </div>
                <Direct active={isActive} />
            </>
        )}
    />
}