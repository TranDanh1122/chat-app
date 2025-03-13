import { createBrowserRouter } from "react-router-dom";
import LayoutAuth from "@/layout/Auth/Layout";
import RouterHandle from "./RouterHandle";
import { NotFound } from "@/pages/NotFound";
import AppLayout from "@/layout/App/Layout";
import React, { Suspense } from "react";
const LoginView = React.lazy(() => import("@/pages/Auth/Login/view/Login"));
const NewPassView = React.lazy(() => import("@/pages/Auth/NewPass/view/NewPass"));
const RegisterView = React.lazy(() => import("@/pages/Auth/Register/view/Register"));
const ResetPassView = React.lazy(() => import("@/pages/Auth/ResetPass/view/ResetPass"));
const HomeView = React.lazy(() => import("@/pages/App/Home/view/Home"));
const CreatePostView = React.lazy(() => import("@/pages/App/Post/view/CreatePost"));

export const Router = createBrowserRouter([
    {
        element: <RouterHandle />,
        path: "/",
        children: [
            {
                element: <LayoutAuth />,
                path: "auth",
                children: [
                    {
                        element: <Suspense fallback="Loading.."><LoginView /></Suspense>,
                        path: "login"
                    },
                    {
                        element: <Suspense fallback="Loading.."><RegisterView /></Suspense>,
                        path: "register"
                    },
                    {
                        element: <Suspense fallback="Loading.."><ResetPassView /></Suspense>,
                        path: "reset-password"
                    },
                    {
                        element: <Suspense fallback="Loading.."><NewPassView /></Suspense>,
                        path: "change-password"
                    }
                ]
            },
            {
                element: <AppLayout />,
                path: "",
                children: [
                    {
                        element: <Suspense fallback="Loading.."><HomeView /></Suspense>,
                        index: true,
                    },
                    {
                        element: <Suspense fallback="Loading.."><CreatePostView /></Suspense>,
                        path: "create-post"
                    },
                    {
                        element: <></>,
                        path: "notification"
                    },
                ]
            },
            {
                element: <NotFound />,
                path: "*"
            }
        ]
    }
]);