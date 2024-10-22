import axios from 'axios';
import { z } from 'zod';
import { UserSchema } from "@/schemas/User";

export async function getUsers() {
    try {
        const response = await axios.get('/api/users');
        console.log("🚀 ~ getUsers ~ response:", response)

        const users = z.array(UserSchema).parse(response.data);

        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}
