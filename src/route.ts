
export const ROUTES = [
    {
        title: "Login - Bento Chat App",
        path: "auth/login",
    },
    {
        title: "Register - Bento Chat App",
        path: "auth/register",
    },
    {
        title: "Change Password - Bento Chat App",
        path: "auth/change-password",
    },
    {
        title: "Reset Password - Bento Chat App",
        path: "auth/reset-password",
    }
]
export const getPageNameByUrl = (url: string) => {
    return ROUTES.find(el => el.path == url)?.title || "NotFound"
}