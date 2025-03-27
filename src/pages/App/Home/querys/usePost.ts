import { axiosClient } from '@/axios'
import { useMutation, useQuery } from '@tanstack/react-query'
import { Post } from '../types/Post';

export const useGetPostQuery = () => {
    return useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const response = await axiosClient.get('/posts');
            const data = response.data
            return { posts: data.data, paging: data.paging, total: data.total }
        }
    })
}
export const useCreatePostMutation = () => {
    return useMutation({
        mutationFn: async (data: Partial<Post>) => {
            const response = await axiosClient.post("/posts", data)
            return response.data
        }
    })
}
