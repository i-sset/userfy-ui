import { screen, render} from '@testing-library/react'
import UserTable from "./UserTable";
describe("<UserTable />", () => {
    beforeEach(() => {
        render(<UserTable />);
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