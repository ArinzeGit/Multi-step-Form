import { render, screen } from "@testing-library/react";
import PersonalInfoForm from "./PersonalInfoForm";

describe("PersonalInfoForm component", () => {
  it('contains "name" input field', () => {
    render(<PersonalInfoForm />);
    const nameInput = screen.getByRole("textbox", { name: /name/i });
    expect(nameInput).toBeInTheDocument();
  });

  it('contains "email" input field', () => {
    render(<PersonalInfoForm />);
    const emailInput = screen.getByRole("textbox", { name: /email/i });
    expect(emailInput).toBeInTheDocument();
  });

  it('contains "phone" input field', () => {
    render(<PersonalInfoForm />);
    const phoneInput = screen.getByRole("textbox", { name: /phone/i });
    expect(phoneInput).toBeInTheDocument();
  });
});
