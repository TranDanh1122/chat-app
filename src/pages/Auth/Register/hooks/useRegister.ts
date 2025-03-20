import { User } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import RegisterSchema from "../schema/RegisterSchema"
import { useRegisterMutation } from "../querys/RegisterQuery"
import { toast } from "sonner"
import { useNavigate } from "react-router-dom"
const regisetDefaultValues: Omit<User, "id"> = {
    name: "",
    email: "",
    password: ""
}
export const useRegister = () => {
    const form = useForm({
        defaultValues: regisetDefaultValues,
        resolver: zodResolver(RegisterSchema)
    })
    const navigate = useNavigate()
    const { mutate, isPending } = useRegisterMutation()
    const handleSubmit = (value: Omit<User, "id">) => {
        mutate(value, {
            onSuccess: (res) => {
                toast.success("Register success", { style: { color: "green" } })
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