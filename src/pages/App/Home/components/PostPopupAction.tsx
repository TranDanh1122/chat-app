import { Link, Star, Trash } from "lucide-react";
import React from "react";
export default function PostPopupAction(): React.JSX.Element {
    return <>
        <span className="flex gap-4">
            <Trash className="size-4.5" />
            Delete
        </span>
        <span className="flex gap-4">
            <Link className="size-4.5" />
            Copy link
        </span>
        <span className="flex gap-4">
            <Star className="size-4.5" />
            Feature post
        </span>
    </>
}