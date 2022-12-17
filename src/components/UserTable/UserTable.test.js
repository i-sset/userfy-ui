import { screen, render } from '@testing-library/react'
import UserTable from "./UserTable";

describe("<UserTable />", () => {
    const users = [
        {
            id: 1,
            firstname: 'Josset',
            lastname: 'Garcia',
            email: 'isset.josset@gmail.com',
            age: 26
        },
        {
            id: 10,
            firstname: 'Joseto',
            lastname: 'Master',
            email: 'josetomaster@gmail.com',
            age: 30
        }
    ]
    beforeEach(() => {
        render(<UserTable data={users} />);
    });

    it("should display table headers with correct text", () => {
        let columnHeaders = screen.getAllByRole('columnheader');
        let idColumn = columnHeaders[0];
        let firstnameColumn = columnHeaders[1];
        let lastnameColumn = columnHeaders[2];
        let emailColumn = columnHeaders[3];
        let ageColumn = columnHeaders[4];
        let actionsColumn = columnHeaders[5];

        expect(idColumn.textContent).toEqual("ID");
        expect(firstnameColumn.textContent).toEqual("First Name");
        expect(lastnameColumn.textContent).toEqual("Last Name");
        expect(emailColumn.textContent).toEqual("Email");
        expect(ageColumn.textContent).toEqual("Age");
        expect(actionsColumn.textContent).toEqual("Actions");

    });

    it("should display actions button to delete and edit in every row shown", () => {
        let totalRows = users.length;
        let totalButtons = totalRows * 2;
        expect(
            screen.getAllByRole('button')
        ).toHaveLength(totalButtons);
    });
});