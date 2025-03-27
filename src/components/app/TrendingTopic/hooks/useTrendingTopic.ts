import { axiosClient } from "@/axios";
import { useQuery } from "@tanstack/react-query";

export default function useTrendingTopic() {
    return useQuery({
        queryKey: ["topics"],
        queryFn: async () => {
            const response = await axiosClient.get("topics")
            return response.data
        },
        enabled: !!localStorage.getItem("chat-app-auth-token")
    })
}