import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Search, XIcon } from "lucide-react";
import React from "react";
export default function HomeView(): React.JSX.Element {
    return <>
        <header className="bg-neutral-800 flex items-center flex-row p-3 gap-2">
            <img src="/assets/logo.png" alt="logo" className="size-10 object-cover" />
            <Button className="p-2 size-10 rounded-full border-[1px] border-white/20 ml-auto" >
                <XIcon className="text-white" />
            </Button>
            <Button className="p-2 size-10 rounded-full border-[1px] border-white/20" >
                <Search className="text-white" />
            </Button>
            <SidebarTrigger className="size-10">
                <Avatar className="size-10 rounded-full">
                    <AvatarImage src="" alt="avatar" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </SidebarTrigger>
        </header>
    </>
}