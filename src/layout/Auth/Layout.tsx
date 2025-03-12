import React from "react";
import { Outlet } from 'react-router-dom'
export default function LayoutAuth(): React.JSX.Element {
    return <div className="w-full h-full min-w-screen min-h-screen bg-neutral-800 flex items-center justify-center">
        <Outlet />
    </div>

}