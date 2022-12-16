import { render, screen } from '@testing-library/react'
import UserForm from './UserForm';

describe('<UserForm />', () => {

    describe("when the form is shown in add mode", () => {
        beforeEach(() => {
            render(<UserForm />)
        });

        it("should display correct page title", () => {
            expect(
                screen.getByText("Add New User")
            ).toBeInTheDocument();
        });

        it("should display fields for names, email and age", () => {
            expect(
                screen.getByRole('textbox', { name: "First Name" })
            ).toBeInTheDocument();

            expect(
                screen.getByRole('textbox', { name: "Last Name" })
            ).toBeInTheDocument();

            expect(
                screen.getByRole('textbox', { name: "Email" })
            ).toBeInTheDocument();

            expect(
                screen.getByRole('spinbutton', { name: "Age" })
            ).toBeInTheDocument();
        });

        it("should display button to submit form", () => {
            expect(
                screen.getByRole("button", { name: "Submit" })
            ).toBeInTheDocument();
        });
    });

    describe('when the form is shown in update mode', () => {
        let id = 10;
        let firstname = 'Josset Leonel';
        let lastname = 'Garcia Flores';
        let email = 'isset.josset@gmail.com';
        let age = 26;
        let user = {id, firstname, lastname, email, age};

        beforeEach(() => {
            render(<UserForm user={user}/>)
        });

        it("should display correct page title", () => {
            expect(
                screen.getByText("Update Existent User")
            ).toBeInTheDocument();
        });

        it("should display fields with values", () => {
            expect(
                screen.getByRole('textbox', { name: 'First Name' }).value
            ).toBe(firstname)

            expect(
                screen.getByRole('textbox', { name: 'Last Name' }).value
            ).toBe(lastname)

            expect(
                screen.getByRole('textbox', { name: 'Email' }).value
            ).toBe(email)

            expect(
                screen.getByRole('spinbutton', { name: 'Age' }).value
            ).toBe(age.toString())
        });
    });
});