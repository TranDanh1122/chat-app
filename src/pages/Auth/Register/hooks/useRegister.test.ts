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


    beforeAll(() => {
        (useRegisterMutation as Mock).mockReturnValue({ mutate: mockMutate, isLoading: false });
        (useNavigate as Mock).mockReturnValue(mockUseNavigate);

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
    test("register success", async () => {
        const { result } = renderHook(() => useRegister())
        const fakeData = { name: "Danh", email: "trandanh@gmail.com", password: "Trandanh@1212" }
        mockMutate.mockImplementation((data, { onSuccess }) => {
            onSuccess(data)
        })
        await act(async () => {
            result.current.handleSubmit(fakeData)
        })
        expect(mockMutate).toHaveBeenCalledOnce()
        expect(mockMutate).toBeCalledWith(fakeData, expect.objectContaining({ onSuccess: expect.any(Function) }))
        await vi.waitFor(() => {
            expect(mockUseNavigate).toHaveBeenCalledOnce()
            expect(mockUseNavigate).toBeCalledWith("/", { replace: true })
            expect(toast.success).toHaveBeenCalledOnce()
            expect(toast.success).toHaveBeenCalledWith("Register success", { style: { color: "green" } })
        })

    })
    test("resgiter error", async () => {
        const { result } = renderHook(() => useRegister())
        const fakeData = { name: "Danh", email: "trandanh@gmail.com", password: "Trandanh@1212" }
        mockMutate.mockImplementation((data, { onError }) => {
            onError(data)
        })
        act(() => {
            result.current.handleSubmit(fakeData)
        })
        expect(mockMutate).toHaveBeenCalledOnce()
        expect(mockMutate).toHaveBeenCalledWith(fakeData, expect.objectContaining({ onError: expect.any(Function) }))

        await vi.waitFor(() => {
            expect(mockUseNavigate).not.toHaveBeenCalledOnce()
            expect(mockUseNavigate).not.toHaveBeenCalledWith("/")

            expect(toast.error).toHaveBeenCalledOnce()
            expect(toast.error).toHaveBeenCalledWith("Internal Error", { style: { color: "red" } })
        })
    })
})