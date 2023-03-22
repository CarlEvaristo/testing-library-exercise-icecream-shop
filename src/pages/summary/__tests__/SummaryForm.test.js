import SummaryForm from "../SummaryForm";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"

describe("SummaryForm", () => {
    it("has an unchecked checkbox, and a disabled and grey button", () => {
        render(<SummaryForm />)
        const button = screen.getByRole("button", { name: "Confirm order"})
        const checkbox = screen.getByLabelText("I agree to terms and conditions")
        expect(checkbox).not.toBeChecked()
        expect(button).toBeDisabled()
        expect(button).toHaveStyle({backgroundColor: "grey"})
    })
    it("enables and 'un-greys' the button when the checkbox is clicked, and vice versa when clicked again", async () => {
        const user = userEvent.setup()
        render(<SummaryForm />)
        const button = screen.getByRole("button", { name: "Confirm order"})
        const checkbox = screen.getByLabelText("I agree to terms and conditions")
        await user.click(checkbox)
        expect(button).toBeEnabled()
        expect(button).toHaveStyle({backgroundColor: "blue"})
        await user.click(checkbox)
        expect(button).toBeDisabled()
        expect(button).toHaveStyle({backgroundColor: "grey"})
    })
    it("on mouse-over checkbox label a popup appears", async () => {
        const user = userEvent.setup()
        const checkboxLabel = screen.getByLabelText("I agree to terms and conditions")
        await user.hover(checkboxLabel)

    })
})