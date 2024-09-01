import { render, screen } from "@testing-library/react";
import PersonalInfoForm from "./PersonalInfoForm";

describe("PersonalInfoForm component", () => {
  it('contains "name", "email" and "phone" input fields', () => {
    render(<PersonalInfoForm />);
    const nameInput = screen.getByRole("textbox", { name: /name/i });
    const emailInput = screen.getByRole("textbox", { name: /email/i });
    const phoneInput = screen.getByRole("textbox", { name: /phone/i });
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(phoneInput).toBeInTheDocument();
  });
});
