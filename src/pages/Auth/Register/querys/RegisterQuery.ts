import { useMutation } from "@tanstack/react-query";
import { User } from "@/types";
import { axiosClient } from "@/axios";
export const useRegisterMutation = () => {
    return useMutation({
        mutationFn: async (data: Omit<User, "id">) => {
            const [first, last] = data.name.split(" ")
            const reFillData = { ...data, username: data.email, firstName: first, lastName: last || "Khong co lastname" }
            const res = await axiosClient.post("/register", reFillData)
            return res.data
        }
    })
}