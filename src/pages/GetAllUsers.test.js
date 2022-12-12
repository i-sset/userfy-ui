import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import UserAPI from "../api/userAPI";
import GetAllUsers from "./GetAllUsers";

jest.mock('../api/UserAPI');


describe('<GetAllUsers />', () => {
    describe("render list of users", () => {
        const usersList = {
            users: [
                {
                    id: 1,
                    name: 'Josset',
                    email: 'isset.josset@gmail.com',
                    age: 26
                }
            ]
        }
        beforeEach(async () => {
            UserAPI.getAll.mockResolvedValue({data: usersList});
            await act(async () => {
                render(<GetAllUsers />);
            });
        });

        it('call get endpoint with the events list information', () => {
            expect(UserAPI.getAll).toHaveBeenCalledTimes(1);
        });
    });
});