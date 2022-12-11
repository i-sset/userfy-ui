import { screen, render } from "@testing-library/react"
import UserNav from "./UserNav";

describe("<UserNav />", () => {
    beforeEach(() => {
        render(<UserNav />);
    });

    it("should display the name of the application", () => {
        expect(screen.getByText(/Userfy/)).toBeInTheDocument();
    });
});