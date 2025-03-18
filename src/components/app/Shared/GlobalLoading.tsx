import React from "react";
export default function GlobalLoading(): React.JSX.Element {
    return <div className="fixed w-screen h-screen bg-neutral-300/50 flex items-center justify-center">
        <div className="size-10 animate-spin">
            <img src="/assets/logo.png" alt="size-10 object-cover" />
        </div>
    </div>
}