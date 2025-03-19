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
    const toastSuccess = vi.fn();
    const toastError = vi.fn();
    const mockUseNavigate = vi.fn();

    beforeAll(() => {
        (toast.success as Mock).mockReturnValue(toastSuccess);
        (toast.error as Mock).mockReturnValue(toastError);
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
    test("should login success", () => {
        const { result } = renderHook(() => useLogin())
        const fakeData = { email: "trandanh@gmail.com", password: "Trandanh@1212" }
        act(() => {
            result.current.handleSubmit(fakeData)
        })
        expect(mockMutate).toHaveBeenCalledOnce()
        expect(mockMutate).toHaveBeenCalledWith(fakeData, {
            onSuccess: expect.any(Function),
            onError: expect.any(Function)
        })
        vi.waitFor(() => {
            expect(mockUseNavigate).toHaveBeenCalledOnce()
            expect(mockUseNavigate).toHaveBeenCalledWith("/")
            expect(toastSuccess).toHaveBeenCalledOnce()
            expect(toastSuccess).toHaveBeenCalledWith("Login Success")
        })
    })
    test("should login fail", () => {
        const { result } = renderHook(() => useLogin())
        const fakeData = { email: "trandanh@gmail.com", password: "Trandanh@1212" }
        act(() => {
            result.current.handleSubmit(fakeData)
        })
        expect(mockMutate).toHaveBeenCalledOnce()
        expect(mockMutate).toHaveBeenCalledWith(fakeData, {
            onSuccess: expect.any(Function),
            onError: expect.any(Function)
        })
        vi.waitFor(() => {
            expect(mockUseNavigate).toHaveBeenCalledOnce()
            expect(mockUseNavigate).toHaveBeenCalledWith("/")
            expect(toastError).toHaveBeenCalledOnce()
            expect(toastError).toHaveBeenCalledWith(expect.any(String))
        })
    })
})