import { getPageNameByUrl } from "@/route";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet"
export default function RouterHandle(): React.JSX.Element {
    const currentPath = useLocation()
    const [title, setTitle] = React.useState<string>(getPageNameByUrl(currentPath.pathname))
    React.useEffect(() => {
        console.log(currentPath.pathname , getPageNameByUrl(currentPath.pathname))
        setTitle(getPageNameByUrl(currentPath.pathname))
    }, [currentPath.pathname])
    return <>
        <Helmet> <title>{title}</title></Helmet>
        <Outlet />
    </>
}