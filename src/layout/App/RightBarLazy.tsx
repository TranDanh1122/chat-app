import { LayoutContext } from "@/context/LayoutContext";
import React from "react";
const Rightbar = React.lazy(() => import("@/components/app/Sidebar/RightBar"))
export default function RightBarLazy(): React.JSX.Element {
    const { screen } = React.useContext(LayoutContext)
    return (
        <>
            {screen !== "mobile" &&
                <Rightbar />
            }
        </>
    )
}