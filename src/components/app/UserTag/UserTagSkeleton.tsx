import React from "react";
import { Skeleton } from "@/components/ui/skeleton"
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function UserTagSkeleton(): React.JSX.Element {
    return <>
        <div className="w-full max-w-md bg-neutral-800 text-white p-4">
            <div className="relative mb-4 rounded-[48px] overflow-hidden">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                    placeholder="Search User..."
                    className="pl-9 bg-neutral-900 border-neutral-800 border-0 text-white focus-visible:ring-0 focus-visible:ring-offset-0"

                />
            </div>
            <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </div>
        </div>


    </>
}