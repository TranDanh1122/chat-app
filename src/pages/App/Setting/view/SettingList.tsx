import React from "react";
import UserItem from "../components/UserItem";
import Item from "../components/Item";
export default function SettingList(): React.JSX.Element {
    return <div className="h-full min-h-screen bg-neutral-900">
        <UserItem />
        <Item />
    </div>
}