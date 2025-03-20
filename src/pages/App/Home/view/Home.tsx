import EditorMask from "@/components/app/Editor/EditorMask";
import { LayoutContext } from "@/context/LayoutContext";
import FollowForyou from "@/layout/App/Follow-Foryou";
import Header from "@/layout/App/Header";
import React from "react";

export default function HomeView(): React.JSX.Element {
    const { screen } = React.useContext(LayoutContext)
    return <React.Fragment>
        <Header />
        <div className="p-3 space-y-3">
            {screen == "mobile" && <FollowForyou />}
            <EditorMask redirect={screen == "mobile"} />
        </div>
        
    </React.Fragment>
}