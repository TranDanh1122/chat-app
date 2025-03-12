import { z } from "zod"
const ResetPassSchema = z.object({
    email: z.coerce.string().min(2, { message: "Invalid Email" }).email({ message: "Invalid Email" })
})
export default ResetPassSchema