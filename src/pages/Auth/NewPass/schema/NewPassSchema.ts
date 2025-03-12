import { z } from 'zod'
const NewPassSchema = z.object({
    password: z.coerce.string().min(2, { message: "Too short" }).refine((value) => (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/).test(value), { message: "Password need 1 lowercase, 1 uppercase, 1 number" }),
    confirmPass: z.coerce.string().min(2, { message: "Too short" }).refine((value) => (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/).test(value), { message: "Password need 1 lowercase, 1 uppercase, 1 number" }),
}).refine((data) => data.password != data.confirmPass, { message: "Confirm pass not equal Password", path: ['confirmPass'] })
export default NewPassSchema