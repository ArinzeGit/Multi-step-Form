import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App component", () => {
  it("renders all expected components", () => {
    render(<App />);
    expect(screen.getByTestId("sideBarComponent")).toBeInTheDocument;
    expect(screen.getByTestId("stepControlsComponent")).toBeInTheDocument;
    expect(screen.getByTestId("personalInfoFormComponent")).toBeInTheDocument;
  });

  it("does not move to the next step when form is empty and Next button is clicked and 'required' message is displayed", async () => {
    render(<App />);
    const user = userEvent;
    await user.click(screen.getByRole("button", { name: /next/i }));
    expect(screen.getByTestId("personalInfoFormComponent")).toBeInTheDocument();
    expect(screen.getAllByText(/required/i).length).toBe(3);
  });

  it("does not move to the next step when email format is incorrect and Next button is clicked and 'invalid email' message is displayed", async () => {
    render(<App />);
    const user = userEvent;
    await user.type(screen.getByLabelText(/name/i), "John Doe");
    await user.type(screen.getByLabelText(/email/i), "john@example.x");
    await user.type(screen.getByLabelText(/phone/i), "1234567890");
    await user.click(screen.getByRole("button", { name: /next/i }));
    expect(screen.getByTestId("personalInfoFormComponent")).toBeInTheDocument();
    expect(screen.getByText(/valid email/i)).toBeInTheDocument;
  });

  it("navigates to the next step when form is filled correctly and Next button is clicked", async () => {
    render(<App />);
    const user = userEvent;
    await user.type(screen.getByLabelText(/name/i), "John Doe");
    await user.type(screen.getByLabelText(/email/i), "john@example.com");
    await user.type(screen.getByLabelText(/phone/i), "1234567890");
    await user.click(screen.getByRole("button", { name: /next/i }));
    expect(screen.getByTestId("planSelectFormComponent")).toBeInTheDocument();
  });

  it("retains input values after going to next step and returning", async () => {
    render(<App />);
    const user = userEvent;
    await user.type(screen.getByLabelText(/name/i), "John Doe");
    await user.type(screen.getByLabelText(/email/i), "john@example.com");
    await user.type(screen.getByLabelText(/phone/i), "1234567890");
    await user.click(screen.getByRole("button", { name: /next/i }));
    expect(screen.getByTestId("planSelectFormComponent")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: /back/i }));
    expect(screen.getByLabelText(/name/i)).toHaveValue("John Doe");
    expect(screen.getByLabelText(/email/i)).toHaveValue("john@example.com");
    expect(screen.getByLabelText(/phone/i)).toHaveValue("1234567890");
  });
});
