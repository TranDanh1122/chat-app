import React from "react";
import UserAvatar from "../Shared/UserAvatar";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useDebound } from "@/hooks/useDebound";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { EditorContext } from "@/context/EditorContext";

export default function UserTag(): React.JSX.Element {
    const [user, _] = React.useState({ name: "", avatar: "", email: "" })
    const debound = useDebound(() => { }, 500)
    React.useEffect(() => {
        console.log("mount");
        return () => console.log("unmount");
    })
    const { handleTagUser } = React.useContext(EditorContext)
    return (
        <div className="w-full max-w-md md:min-w-md min-w-screen bg-neutral-800 text-white p-4 relative editor userTag">
            <div className="relative mb-4 rounded-[48px] overflow-hidden">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                    placeholder="Search User..."
                    className="pl-9 bg-neutral-900 border-neutral-800 border-0 text-white focus-visible:ring-0 focus-visible:ring-offset-0"
                    onChange={(e) => debound(e.target.value)}
                />
            </div>
            <ScrollArea className="h-[370px] flex flex-col gap-2">
                <div onClick={() => handleTagUser("@jame")} className="flex items-center justify-start gap-4 p-3 bg-neutral-700 rounded-xl">
                    <UserAvatar user={user}></UserAvatar>
                    <div className="grid flex-1 text-left text-sm leading-tight ">
                        <span className="truncate font-semibold text-white/70">{user.name || "Jame"}</span>
                        <span className="truncate text-xs text-white/50">{user.email || "@jame"}</span>
                    </div>
                </div>
                <div className="flex items-center justify-start gap-4 p-3 bg-neutral-700 rounded-xl">
                    <UserAvatar user={user}></UserAvatar>
                    <div className="grid flex-1 text-left text-sm leading-tight ">
                        <span className="truncate font-semibold text-white/70">{user.name || "Jame"}</span>
                        <span className="truncate text-xs text-white/50">{user.email || "@jame"}</span>
                    </div>
                </div>
                <div className="flex items-center justify-start gap-4 p-3 bg-neutral-700 rounded-xl">
                    <UserAvatar user={user}></UserAvatar>
                    <div className="grid flex-1 text-left text-sm leading-tight ">
                        <span className="truncate font-semibold text-white/70">{user.name || "Jame"}</span>
                        <span className="truncate text-xs text-white/50">{user.email || "@jame"}</span>
                    </div>
                </div>
                <div className="flex items-center justify-start gap-4 p-3 bg-neutral-700 rounded-xl">
                    <UserAvatar user={user}></UserAvatar>
                    <div className="grid flex-1 text-left text-sm leading-tight ">
                        <span className="truncate font-semibold text-white/70">{user.name || "Jame"}</span>
                        <span className="truncate text-xs text-white/50">{user.email || "@jame"}</span>
                    </div>
                </div>
                <div className="flex items-center justify-start gap-4 p-3 bg-neutral-700 rounded-xl">
                    <UserAvatar user={user}></UserAvatar>
                    <div className="grid flex-1 text-left text-sm leading-tight ">
                        <span className="truncate font-semibold text-white/70">{user.name || "Jame"}</span>
                        <span className="truncate text-xs text-white/50">{user.email || "@jame"}</span>
                    </div>
                </div>
            </ScrollArea>
            <div className="absolute bottom-0 left-0 bg-gradient-to-b from-black/50 to-black opacity-50 w-full h-24 blur-md "></div>
        </div>

    )
}