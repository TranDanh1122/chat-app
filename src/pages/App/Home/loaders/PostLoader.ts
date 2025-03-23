import { axiosClient } from "@/axios";
import { QueryClient } from "@tanstack/react-query";
export async function PostLoader(queryClient: QueryClient) {
    const queryKey = ['posts'];
    const queryFn = async () => {
        const response = await axiosClient.get('/posts');
        const data = response.data
        return { posts: data.data, paging: data.paging, total: data.total }
    };
    const data = await queryClient.ensureQueryData({ queryKey, queryFn });
    return data
}