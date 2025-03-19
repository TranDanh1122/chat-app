import { axiosClient } from "@/axios";
import { act, renderHook } from "@testing-library/react";
import { describe, expect, Mock, test, vi } from "vitest";
import { useLoginMutation } from "./LoginQuery";
import { TestWrapper } from "@/TestWrapper";
vi.mock("@/axios", () => {
    return {
        axiosClient: {
            post: vi.fn()
        }
    }
})
describe("LoginQuery", () => {
    const mockPost = vi.fn();
    const mockResponse = { data: "abc" };
    (axiosClient.post as Mock).mockImplementation(mockPost).mockResolvedValue(mockResponse)
    test("should call api login with correct data", () => {
        const { result } = renderHook(() => useLoginMutation(), { wrapper: TestWrapper })
        const fakeData = { email: "trandanh@gmail", password: "Trandanh@1212" }
        act(() => {
            result.current.mutate(fakeData)
        })
        vi.waitFor(() => {
            expect(mockPost).toHaveBeenCalledOnce()
            expect(mockPost).toHaveBeenCalledWith("/register", fakeData)
            expect(mockPost).resolves.toBe(mockResponse)
        })
    })
})