import { createBrowserRouter } from "react-router-dom";
import LayoutAuth from "@/layout/Auth/Layout";
import RouterHandle from "./RouterHandle";
import { NotFound } from "@/pages/NotFound";
import AppLayout from "@/layout/App/Layout";
import React from "react";
import GlobalLoading from "@/components/app/Shared/GlobalLoading";
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
                        element: <React.Suspense fallback={<GlobalLoading/>}><LoginView /></React.Suspense>,
                        path: "login"
                    },
                    {
                        element: <React.Suspense fallback={<GlobalLoading />}><RegisterView /></React.Suspense>,
                        path: "register"
                    },
                    {
                        element: <React.Suspense fallback={<GlobalLoading />}><ResetPassView /></React.Suspense>,
                        path: "reset-password"
                    },
                    {
                        element: <React.Suspense fallback={<GlobalLoading />}><NewPassView /></React.Suspense>,
                        path: "change-password"
                    }
                ]
            },
            {
                element: <AppLayout />,
                path: "",
                children: [
                    {
                        element: <React.Suspense fallback={<GlobalLoading />}><HomeView /></React.Suspense>,
                        index: true,
                    },
                    {
                        element: <React.Suspense fallback={<GlobalLoading />}><CreatePostView /></React.Suspense>,
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