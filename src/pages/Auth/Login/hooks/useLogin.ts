import { zodResolver } from "@hookform/resolvers/zod";
import LoginSchema from "../schema/LoginSchema";
import { z } from "zod";
import { User } from "@/types";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../querys/LoginQuery";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
const loginDefaulrValues: z.infer<typeof LoginSchema> = {
    email: "",
    password: ""
}
export const useLogin = () => {
    const form = useForm<z.infer<typeof LoginSchema>>({
        defaultValues: loginDefaulrValues,
        resolver: zodResolver(LoginSchema)
    })
    const navigate = useNavigate()
    const { mutate, isPending } = useLoginMutation()
    const handleSubmit = (value: Pick<User, "email" | "password">) => {
        mutate(value, {
            onSuccess: (res) => {
                console.log(res);
                toast.success("Login Success", { style: { color: "green" } })
                localStorage.setItem("chat-app-auth-token", res.data)
                navigate("/", { replace: true })
            },
            onError: (error: any) => {
                toast.error(error.response?.data.message || error.message || "Internal Error", { style: { color: "red" } })
            }
        })
    }
    return { form, handleSubmit, isPending }
}