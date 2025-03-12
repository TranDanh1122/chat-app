import { z } from "zod"
const RegisterSchema = z.object({
    name : z.coerce.string().min(2, {message : "Invalid Name"}),
    email: z.coerce.string().min(2, { message: "Invalid Email" }).email({ message: "Invalid Email" }),
    password: z.coerce.string().min(6, { message: "Too short" }).refine((value) => (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/).test(value), { message: "Password need 1 lowercase, 1 uppercase, 1 number" })
})
export default RegisterSchema