import { axiosClient } from "@/axios"
import { User } from "@/types"
import { useMutation } from "@tanstack/react-query"

export const useLoginMutation = () => {
    return useMutation({
        mutationFn: async (data: Pick<User, "email" | "password">) => {
            const reFillData = {...data , username : data.email}
            const res = await axiosClient.post("/authenticate", reFillData)
            return res.data
        }
    })
}