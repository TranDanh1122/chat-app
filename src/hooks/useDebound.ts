import React from "react";
export const useDebound = (callback: (...args: any) => void, timeout: number) => {
    const deboundRef = React.useRef<null | any>(null)
    const handler = (...args: any) => {
        if (deboundRef.current) clearTimeout(deboundRef.current)
            deboundRef.current  = setTimeout(() => callback(...args), timeout)
    }
    return handler
}