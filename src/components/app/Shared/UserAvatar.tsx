import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
const UserAvatar = React.memo(({ user }: { user: { avatar: string, name: string } }) => {
    return <div className="size-10 relative overflow-hidden">
        <Avatar className="size-10 rounded-full">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback className="rounded-full ">CN</AvatarFallback>
        </Avatar>
        <span className="size-2.5 rounded-full bg-green-500 absolute top-0 left-0 z-10"></span>
    </div>
})
export default UserAvatar