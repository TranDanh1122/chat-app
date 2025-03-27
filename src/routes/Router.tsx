import { createBrowserRouter } from "react-router-dom";
import RouterHandle from "./RouterHandle";
import React from "react";
import GlobalLoading from "@/components/app/Shared/GlobalLoading";
import { PostLoader } from "@/pages/App/Home/loaders/PostLoader";
import { QueryClient } from "@tanstack/react-query";
const LayoutAuth = React.lazy(() => import("@/layout/Auth/Layout"));
const AppLayout = React.lazy(() => import("@/layout/App/Layout"))
const LoginView = React.lazy(() => import("@/pages/Auth/Login/view/Login"));
const NewPassView = React.lazy(() => import("@/pages/Auth/NewPass/view/NewPass"));
const RegisterView = React.lazy(() => import("@/pages/Auth/Register/view/Register"));
const ResetPassView = React.lazy(() => import("@/pages/Auth/ResetPass/view/ResetPass"));
const HomeView = React.lazy(() => import("@/pages/App/Home/view/Home"));
const CreatePostView = React.lazy(() => import("@/pages/App/Post/view/CreatePost"));
const NotFound = React.lazy(() => import("@/pages/NotFound/view/NotFound"));
const queryClient = new QueryClient()
export const Router = createBrowserRouter([
    {
        element: <RouterHandle />,
        path: "/",
        children: [
            {
                element: <React.Suspense fallback={<GlobalLoading />}><LayoutAuth /></React.Suspense>,
                path: "auth",
                children: [
                    {
                        element: <LoginView />,
                        path: "login"
                    },
                    {
                        element: <RegisterView />,
                        path: "register"
                    },
                    {
                        element: <ResetPassView />,
                        path: "reset-password"
                    },
                    {
                        element: <NewPassView />,
                        path: "change-password"
                    }
                ]
            },
            {
                element: <React.Suspense fallback={<GlobalLoading />}> <AppLayout /> </React.Suspense>,
                path: "",
                children: [
                    {
                        element: <HomeView />,
                        index: true,
                        loader: async () => {
                            const data =  await PostLoader(queryClient)
                            return data
                        }
                    },
                    {
                        element: <CreatePostView />,
                        path: "create-post"
                    },
                    {
                        element: <></>,
                        path: "notification"
                    },
                ]
            },
            {
                element: <React.Suspense fallback={<GlobalLoading />}><NotFound /></React.Suspense>,
                path: "*"
            }
        ]
    }
]);