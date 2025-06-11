import axios from 'axios';
import client from "@/helpers/client.js";

class UserService {

    async registerUser(userData) {
        // This correctly appends to /api/v1/auth/sign-up
        const response = await client.post('/auth/sign-up', userData);
        return response.status === 200 || response.status === 201 ? response.data : null;
    }
}

export default new UserService()