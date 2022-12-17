import { screen, render } from '@testing-library/react'
import UserTable from "./UserTable";

describe("<UserTable />", () => {
    const users = [
        {
            id: 1,
            name: 'Josset',
            email: 'isset.josset@gmail.com',
            age: 26
        },
        {
            id: 10,
            name: 'Joseto',
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
        let nameColumn = columnHeaders[1];
        let emailColumn = columnHeaders[2];
        let ageColumn = columnHeaders[3];
        let actionsColumn = columnHeaders[4];

        expect(idColumn.textContent).toEqual("ID");
        expect(nameColumn.textContent).toEqual("Name");
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