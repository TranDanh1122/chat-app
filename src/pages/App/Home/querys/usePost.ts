import { axiosClient } from '@/axios'
import { useQuery } from '@tanstack/react-query'

export const useGetPostQuery = () => {
    return useQuery({
        queryKey: ['posts'],
        queryFn: async () => {
            const response = await axiosClient.get('/posts');
            return response.data
        }
    })
}