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
    (axiosClient.post as Mock).mockImplementation(mockPost);
    test("shoud call api register with correct data", async () => {
        const { result } = renderHook(() => useRegisterMutation(), { wrapper: TestWrapper })
        const fakeData = { name: "Tran Danh", email: "trandanh@gmail.com", password: "Trandanh@1212" }
        const reFillData = { ...fakeData, username: "trandanh@gmail.com", firstName: "Tran", lastName: "Danh" }
        await act(async () => {
            result.current.mutate(fakeData)
        })
        await vi.waitFor(async () => {
            expect(mockPost).toHaveBeenCalledOnce()
            expect(mockPost).toBeCalledWith("/register", reFillData)
        })
    })
})