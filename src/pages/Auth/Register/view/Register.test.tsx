import { describe, test, expect } from 'vitest'
import Register from "./Register"
import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { TestWrapper } from '@/TestWrapper'


describe("Register", () => {
    test("should normal render", () => {
        render(<Register />, { wrapper: TestWrapper })
        const fullNameEl = screen.getByLabelText("Full name")
        const emailEl = screen.getByLabelText("Email")
        const passwordEl = screen.getByLabelText("Password")
        const submitBTN = screen.getByRole("button", { name: "Create your account" })

        expect(fullNameEl).toBeInTheDocument()
        expect(emailEl).toBeInTheDocument()
        expect(passwordEl).toBeInTheDocument()
        expect(submitBTN).toBeInTheDocument()
    })
    test("should validate if not input", async () => {
        render(<Register />, { wrapper: TestWrapper })
        const submitBTN = screen.getByRole("button", { name: "Create your account" })
        fireEvent.click(submitBTN)
        screen.debug()
        expect(await screen.findByText("Invalid Name")).toBeInTheDocument()
        expect(await screen.findByText("Invalid Email")).toBeInTheDocument()
        expect(await screen.findByText("Too short")).toBeInTheDocument()
    })
    test("should validate wrong input", async () => {
        render(<Register />, { wrapper: TestWrapper })
        const submitBTN = screen.getByRole("button", { name: "Create your account" })
        const fullNameEl = screen.getByLabelText("Full name")
        const emailEl = screen.getByLabelText("Email")
        const passwordEl = screen.getByLabelText("Password")
        fireEvent.change(fullNameEl, { target: { value: "a" } })
        fireEvent.change(emailEl, { target: { value: "aaaaadeewds" } })
        fireEvent.change(passwordEl, { target: { value: "abcdeds" } })
        fireEvent.click(submitBTN)
        screen.debug()
        expect(await screen.findByText("Invalid Name")).toBeInTheDocument()
        expect(await screen.findByText("Invalid Email")).toBeInTheDocument()
        expect(await screen.findByText("Password need 1 lowercase, 1 uppercase, 1 number")).toBeInTheDocument()
    })
})