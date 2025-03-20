import { describe, expect, test, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import { TestWrapper } from "@/TestWrapper";
import LoginView from "./Login";
describe("Login", () => {
    test("should normal render", () => {
        render(<LoginView />, { wrapper: TestWrapper })
        const emailEl = screen.getByLabelText("Email")
        const passwordEl = screen.getByLabelText("Password")
        const submitBtn = screen.getByRole("button", { name: "Sign in" })
        expect(emailEl).toBeInTheDocument()
        expect(passwordEl).toBeInTheDocument()
        expect(submitBtn).toBeInTheDocument()
    })
    test("should validate if not input", () => {
        render(<LoginView />, { wrapper: TestWrapper })
        const submitBtn = screen.getByRole("button", { name: "Sign in" })
        fireEvent.click(submitBtn)

        vi.waitFor(() => {
            expect(screen.getByText("Invalid Email")).toBeInTheDocument()
            expect(screen.getByText("Too short")).toBeInTheDocument()
        })
    })
    test("should validate if input invalid data", () => {
        render(<LoginView />, { wrapper: TestWrapper })
        const emailEl = screen.getByLabelText("Email")
        const passwordEl = screen.getByLabelText("Password")

        fireEvent.change(emailEl, { target: { value: "abc12" } })
        fireEvent.change(passwordEl, { target: { value: "1234rd" } })

        vi.waitFor(() => {
            expect(screen.getByText("Invalid Email")).toBeInTheDocument()
            expect(screen.getByText("Password need 1 lowercase, 1 uppercase, 1 number")).toBeInTheDocument()
        })
    })
    
})