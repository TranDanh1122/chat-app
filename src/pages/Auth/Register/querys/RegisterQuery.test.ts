import { axiosClient } from "@/axios";
import { describe, expect, Mock, test, vi } from "vitest";
import { useRegisterMutation } from "./RegisterQuery";
import { act, renderHook } from "@testing-library/react";
import { TestWrapper } from "@/TestWrapper";
vi.mock("@/axios", () => {
    return {
        axiosClient: {
            post: vi.fn()
        }
    }
})
describe("Register Query", () => {
    const mockPost = vi.fn();
    const mockRespose = { data: "abc" };
    (axiosClient.post as Mock).mockImplementation(mockPost).mockResolvedValue(mockRespose)
    test("shoud call api register with correct data", () => {
        const { result } = renderHook(() => useRegisterMutation(), { wrapper: TestWrapper })
        const fakeData = { name: "Danh", email: "trandanh@gmail.com", password: "Trandanh@1212" }
        act(() => {
            result.current.mutate(fakeData)
        })
        vi.waitFor(() => {
            expect(mockPost).toHaveBeenCalledOnce()
            expect(mockPost).toBeCalledWith("/register", fakeData)
            expect(mockPost).resolves.toEqual(mockRespose)
        })
    })
})