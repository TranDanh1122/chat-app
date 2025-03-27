import { axiosClient } from "@/axios";
import { QueryClient, useQuery } from "@tanstack/react-query";
export default function useFollower() {
    const queryClient = new QueryClient()
    const user = queryClient.getQueryData(['user']) as { id: string }
    return useQuery({
        queryKey: ["followers"],
        queryFn: async () => {
            const response = await axiosClient.get(`users/${user.id}/has-follower`)
            return response.data
        },
        enabled: !!user?.id
    })
}