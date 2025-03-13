import { createBrowserRouter } from "react-router-dom";
import LayoutAuth from "@/layout/Auth/Layout";
import RouterHandle from "./RouterHandle";
import { NotFound } from "@/pages/NotFound";
import { LoginView, NewPassView, RegisterView, ResetPassView } from "@/pages/Auth";
import AppLayout from "@/layout/App/Layout";
import { HomeView } from "@/pages/App";

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
                element: <AppLayout />,
                path: "",
                children: [
                    {
                        element: <HomeView />,
                        index: true,
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