import { ChevronRight, Minus } from "lucide-react";
import React from "react";
export default function Direct({ active }: { active: boolean }): React.JSX.Element {
    return <span className={`size-8 flex items-center justify-center rounded-full ${active ? "bg-neutral-700" : "bg-neutral-800"}`}>
        {active && <ChevronRight className="text-white size-3" />}
        {!active && <Minus className="text-white size-3" />}
    </span>
}