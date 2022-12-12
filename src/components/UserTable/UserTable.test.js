import { screen, render} from '@testing-library/react'
import UserTable from "./UserTable";

describe("<UserTable />", () => {
    const users = [
            {
                id: 1,
                name: 'Josset',
                email: 'isset.josset@gmail.com',
                age: 26
            }
        ]
    beforeEach(() => {
        render(<UserTable data={users}/>);
    });

    it ("should display table headers with correct text", () => {
        let columnHeaders = screen.getAllByRole('columnheader');
        let idColumn = columnHeaders[0];
        let nameColumn = columnHeaders[1];
        let emailColumn = columnHeaders[2];
        let ageColumn = columnHeaders[3];
        
        expect(idColumn.textContent).toEqual("ID");
        expect(nameColumn.textContent).toEqual("Name");
        expect(emailColumn.textContent).toEqual("Email");
        expect(ageColumn.textContent).toEqual("Age");

    });
});