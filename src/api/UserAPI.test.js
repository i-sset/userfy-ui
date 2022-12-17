import UserAPI from "./UserAPI";
import axios from 'axios';
jest.mock('axios');

const endpoint = "http://localhost:8080";
describe('UserAPI', () => {
    describe('get all users', () => {
        it('should call get endpoint', async () => {
            await UserAPI.getAll();

            let getURL = endpoint + "/users";
            expect(axios.get).toHaveBeenCalledWith(getURL);
        });
    });

    describe('update user', () => {
        it("should call update endpoint", async () => {
            let user = {
                id: 10,
                firstname: 'josset',
                lastname: 'garcia',
                email: 'isset.josset@gmail.com',
                age: 26
            };
            let updateURL = endpoint + "/user/update";

            await UserAPI.update(user);
            expect(axios.put).toHaveBeenCalledWith(updateURL, user);
        });

    });
});