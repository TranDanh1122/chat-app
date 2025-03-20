import { beforeAll, beforeEach, describe, expect, Mock, test, vi } from "vitest";
import { useLoginMutation } from "../querys/LoginQuery";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useLogin } from "./useLogin";
import { act, renderHook } from "@testing-library/react";
//mock dependencies
vi.mock("react-router-dom", () => {
    return { useNavigate: vi.fn() }
});
vi.mock("sonner", () => {
    return {
        toast: {
            success: vi.fn(),
            error: vi.fn()
        }
    }
});
vi.mock("../querys/LoginQuery", () => {
    return {
        useLoginMutation: vi.fn()
    }
})
describe("useLogin", () => {
    const mockMutate = vi.fn();
    const mockUseNavigate = vi.fn();

    beforeAll(() => {
        (useNavigate as Mock).mockReturnValue(mockUseNavigate);
        (useLoginMutation as Mock).mockReturnValue({ mutate: mockMutate, isPending: false });

    })
    beforeEach(() => {
        vi.clearAllMocks()
    })
    test("should init form with default value", () => {
        const { result } = renderHook(() => useLogin())
        expect(result.current.form.getValues()).toEqual({
            email: "",
            password: ""
        })
    })
    test("should login success", async () => {
        const { result } = renderHook(() => useLogin())
        const fakeData = { email: "trandanh@gmail.com", password: "Trandanh@1212" }
        mockMutate.mockImplementation((data, { onSuccess }) => {
            onSuccess(data)
        })
        await act(async () => {
            result.current.handleSubmit(fakeData)
        })
        expect(mockMutate).toHaveBeenCalledOnce()
        expect(mockMutate).toHaveBeenCalledWith(fakeData, expect.objectContaining({ onSuccess: expect.any(Function) }))
        await vi.waitFor(() => {
            expect(mockUseNavigate).toHaveBeenCalledOnce()
            expect(mockUseNavigate).toHaveBeenCalledWith("/", { replace: true })
            expect(toast.success).toHaveBeenCalledOnce()
            expect(toast.success).toHaveBeenCalledWith("Login Success", { style: { color: "green" } })
        })
    })
    test("should login fail", async () => {
        const { result } = renderHook(() => useLogin())
        const fakeData = { email: "trandanh@gmail.com", password: "Trandanh@1212" }
        mockMutate.mockImplementation((data, { onError }) => {
            onError(data)
        })
        await act(async () => {
            result.current.handleSubmit(fakeData)
        })
        expect(mockMutate).toHaveBeenCalledOnce()
        expect(mockMutate).toHaveBeenCalledWith(fakeData, expect.objectContaining({ onError: expect.any(Function) }))
        await vi.waitFor(() => {
            expect(mockUseNavigate).not.toHaveBeenCalledOnce()
            expect(mockUseNavigate).not.toHaveBeenCalledWith("/")
            expect(toast.error).toHaveBeenCalledOnce()
            expect(toast.error).toHaveBeenCalledWith(expect.any(String), { style: { color: "red" } })
        })
    })
})