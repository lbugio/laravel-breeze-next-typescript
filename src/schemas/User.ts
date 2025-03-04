import { z } from "zod"

export const UserSchema = z.object({
    _id: z.string(),
    name: z.string().min(2, { message: "Must be 2 or more characters long" }),
    email: z.string().email({ message: "Invalid email address" }),
})

export type User = z.infer<typeof UserSchema>