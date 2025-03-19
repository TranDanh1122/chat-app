import { act, renderHook } from "@testing-library/react"
import { describe, test, expect, vi, beforeAll, Mock, beforeEach } from "vitest"
import { useRegister } from "./useRegister"
import { useRegisterMutation } from "../querys/RegisterQuery"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
//mock dependencies
vi.mock("react-router-dom", () => {
    return { useNavigate: vi.fn() }
})
vi.mock("sonner", () => {
    return {
        toast: {
            success: vi.fn(),
            error: vi.fn()
        }
    }
})
vi.mock("../querys/RegisterQuery", () => {
    return {
        useRegisterMutation: vi.fn()
    }
})
describe("useRegister", () => {
    const mockUseNavigate = vi.fn()
    const mockMutate = vi.fn()
    const mockToastSuccess = vi.fn()
    const mockToastError = vi.fn()

    beforeAll(() => {
        (useRegisterMutation as Mock).mockReturnValue({ mutate: mockMutate, isLoading: false });
        (useNavigate as Mock).mockReturnValue(mockUseNavigate);
        (toast.success as Mock).mockReturnValue(mockToastSuccess);
        (toast.error as Mock).mockReturnValue(mockToastError);

    })
    beforeEach(() => {
        vi.clearAllMocks();
    })
    test("should init data", () => {
        const { result } = renderHook(() => useRegister())
        expect(result.current.form.getValues()).toEqual({
            name: "",
            email: "",
            password: ""
        })
    })
    test("register success", () => {
        const { result } = renderHook(() => useRegister())
        const fakeData = { name: "Danh", email: "trandanh@gmail.com", password: "Trandanh@1212" }
        act(() => {
            result.current.handleSubmit(fakeData)
        })
        expect(mockMutate).toHaveBeenCalledOnce()
        expect(mockMutate).toBeCalledWith(fakeData, expect.objectContaining({ onSuccess: expect.any(Function) }))
        vi.waitFor(() => {
            expect(mockUseNavigate).toHaveBeenCalledOnce()
            expect(mockUseNavigate).toBeCalledWith("/")
            expect(mockToastError).toHaveBeenCalledOnce()
            expect(mockToastSuccess).toHaveBeenCalledOnce()
            expect(mockToastSuccess).toHaveBeenCalledWith("Register success")
        })

    })
    test("resgiter error", () => {
        const { result } = renderHook(() => useRegister())
        const fakeData = { name: "Danh", email: "trandanh@gmail.com", password: "Trandanh@1212" }
        act(() => {
            result.current.handleSubmit(fakeData)
        })
        expect(mockMutate).toHaveBeenCalledOnce()
        expect(mockMutate).toHaveBeenCalledWith(fakeData, expect.objectContaining({ onError: expect.any(Function) }))

        vi.waitFor(() => {
            expect(mockUseNavigate).toHaveBeenCalledOnce()
            expect(mockUseNavigate).toHaveBeenCalledWith("/")

            expect(mockToastError).toHaveBeenCalledOnce()
            expect(mockToastError).toHaveBeenCalledWith(expect.any(String))
        })
    })
})