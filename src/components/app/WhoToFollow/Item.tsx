import React from "react";
import UserAvatar from "../Shared/UserAvatar";
import { Check, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
interface Props {
    name: string,
    email: string,
    content: string,
    state: boolean
}
export default function Item({ name, email, content, state }: Props): React.JSX.Element {
    return <div className="p-3 rounded-[20px] bg-neutral-800">
        <div className="flex items-start gap-4">
            <UserAvatar user={{ name, avatar: "" }}></UserAvatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold text-white/95">{name}</span>
                <span className="truncate text-xs text-white/50">{email}</span>
            </div>
            {state && <Button className=" size-10 rounded-full border-[1px] border-white/20"><Plus /></Button>}
            {!state && <Button className="size-10 rounded-full border-[1px] border-white/20"><Check /></Button>}
        </div>
        <p className="text-white/50 mt-3">
            {content}
        </p>
    </div>
}