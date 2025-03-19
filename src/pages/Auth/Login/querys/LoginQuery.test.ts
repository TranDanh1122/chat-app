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
    (axiosClient.post as Mock).mockImplementation(mockPost);
    test("should call api login with correct data", async () => {
        const { result } = renderHook(() => useLoginMutation(), { wrapper: TestWrapper })
        const fakeData = { email: "trandanh@gmail", password: "Trandanh@1212" }
        const reFillData = { ...fakeData, username: "trandanh@gmail", password: "Trandanh@1212" }

        await act(async () => {
            result.current.mutate(fakeData)
        })
        await vi.waitFor(() => {
            expect(mockPost).toHaveBeenCalledOnce()
            expect(mockPost).toHaveBeenCalledWith("/authenticate", reFillData)
        })
    })
})