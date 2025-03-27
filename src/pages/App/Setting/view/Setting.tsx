import React from "react";
import SettingList from "./SettingList";
import { Outlet } from "react-router-dom";
export default function Setting(): React.JSX.Element {
    return <div className="flex w-full">
        <div className="w-1/3">
            <SettingList />
        </div>
        <div className="w-2/3">
            <Outlet />
        </div>
    </div>
}