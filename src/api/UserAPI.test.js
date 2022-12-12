import UserAPI from "./UserAPI";
import axios from 'axios';
jest.mock('axios');

describe('UserAPI', () => {
    describe('get all users', () => {
        it('should call get endpoint', async () => {
            await UserAPI.getAll();

            let url = "http://localhost:8080/users";
            expect(axios.get).toHaveBeenCalledWith(url);
        });
    });
});