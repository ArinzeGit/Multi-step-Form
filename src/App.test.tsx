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

  it("does not navigate to PlanSelectForm when PersonalInfoForm is empty and Next button is clicked and 'required' message is displayed", async () => {
    render(<App />);
    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: /next/i }));
    expect(screen.getByTestId("personalInfoFormComponent")).toBeInTheDocument();
    expect(screen.getAllByText(/required/i).length).toBe(3);
  });

  it("does not navigate from PersonalInfoForm to PlanSelectForm when email format is incorrect and Next button is clicked and 'invalid email' message is displayed", async () => {
    render(<App />);
    const user = userEvent.setup();
    await user.type(screen.getByLabelText(/name/i), "John Doe");
    await user.type(screen.getByLabelText(/email/i), "john@example.x");
    await user.type(screen.getByLabelText(/phone/i), "1234567890");
    await user.click(screen.getByRole("button", { name: /next/i }));
    expect(screen.getByTestId("personalInfoFormComponent")).toBeInTheDocument();
    expect(screen.getByText(/valid email/i)).toBeInTheDocument;
  });

  const navigateToPlanSelectForm = async () => {
    render(<App />);
    const user = userEvent.setup();
    await user.type(screen.getByLabelText(/name/i), "John Doe");
    await user.type(screen.getByLabelText(/email/i), "john@example.com");
    await user.type(screen.getByLabelText(/phone/i), "1234567890");
    await user.click(screen.getByRole("button", { name: /next/i }));
  };

  it("navigates to PlanSelectForm when PersonalInfoForm is filled correctly and Next button is clicked", async () => {
    await navigateToPlanSelectForm();
    expect(screen.getByTestId("planSelectFormComponent")).toBeInTheDocument();
  });

  it("retains PersonalInfoForm input values after navigating to PlanSelectForm and returning", async () => {
    await navigateToPlanSelectForm();
    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: /back/i }));
    expect(screen.getByLabelText(/name/i)).toHaveValue("John Doe");
    expect(screen.getByLabelText(/email/i)).toHaveValue("john@example.com");
    expect(screen.getByLabelText(/phone/i)).toHaveValue("1234567890");
  });

  it("does not navigate to AddOnsForm step when PlanSelectForm is empty and Next button is clicked and 'select a plan to proceed' message is displayed", async () => {
    await navigateToPlanSelectForm();
    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: /next/i }));
    expect(screen.getByTestId("planSelectFormComponent")).toBeInTheDocument();
    expect(screen.getByText(/select a plan to proceed/i)).toBeInTheDocument();
  });

  it("does not allow selection of multiple plans in PlanSelectForm", async () => {
    await navigateToPlanSelectForm();
    const user = userEvent.setup();
    const arcadeInput = screen.getByLabelText(/arcade/i);
    const advancedInput = screen.getByLabelText(/advanced/i);
    await user.click(arcadeInput);
    await user.click(advancedInput);
    expect(arcadeInput).not.toBeChecked();
    expect(advancedInput).toBeChecked();
  });

  it("toggles unit between '/mo' and '/yr' when billing is toggled and displays '2 months free' for yearly billing", async () => {
    await navigateToPlanSelectForm();
    const user = userEvent.setup();
    const monthlyButton = screen.getByLabelText(/monthly/i);
    expect(monthlyButton).toBeChecked();
    expect(screen.getAllByLabelText(/\/mo/i).length).toBe(3);
    const yearlyButton = screen.getByLabelText(/yearly/i);
    await user.click(yearlyButton);
    expect(yearlyButton).toBeChecked();
    expect(screen.getAllByLabelText(/\/yr/i).length).toBe(3);
    expect(screen.getAllByLabelText(/2 months free/i).length).toBe(3);
    await user.click(monthlyButton);
    expect(monthlyButton).toBeChecked();
    expect(screen.getAllByLabelText(/\/mo/i).length).toBe(3);
  });

  const navigateToAddOnsForm = async () => {
    await navigateToPlanSelectForm();
    const user = userEvent.setup();
    await user.click(screen.getByLabelText(/pro/i));
    await user.click(screen.getByLabelText(/yearly/i));
    await user.click(screen.getByRole("button", { name: /next/i }));
  };

  it("navigates to AddOnsForm when PlanSelectForm is filled correctly and Next button is clicked", async () => {
    await navigateToAddOnsForm();
    expect(screen.getByTestId("addOnsFormComponent")).toBeInTheDocument();
  });

  it("retains PlanSelectForm input values after navigating to AddOnsForm and returning", async () => {
    await navigateToAddOnsForm();
    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: /back/i }));
    expect(screen.getByLabelText(/pro/i)).toBeChecked();
    expect(screen.getByLabelText(/yearly/i)).toBeChecked();
  });

  const navigateToSummaryPage = async () => {
    await navigateToAddOnsForm();
    const user = userEvent.setup();
    await user.click(screen.getByLabelText(/larger storage/i));
    await user.click(screen.getByLabelText(/customizable profile/i));
    await user.click(screen.getByRole("button", { name: /next/i }));
  };

  it("navigates to SummaryPage when AddOnsForm is filled and Next button is clicked", async () => {
    await navigateToSummaryPage();
    expect(screen.getByTestId("summaryPageComponent")).toBeInTheDocument();
  });

  it("retains AddOnsForm input values after navigating to SummaryPage and returning", async () => {
    await navigateToSummaryPage();
    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: /back/i }));
    expect(screen.getByLabelText(/larger storage/i)).toBeChecked();
    expect(screen.getByLabelText(/customizable profile/i)).toBeChecked();
  });

  it("displays correct info in summary", async () => {
    await navigateToSummaryPage();
    expect(screen.getByText(/pro /i)).toBeInTheDocument();
    expect(screen.getByText(/yearly/i)).toBeInTheDocument();
    expect(screen.getByText(/larger storage/i)).toBeInTheDocument();
    expect(screen.getByText(/customizable profile/i)).toBeInTheDocument();
  });

  it("navigates to ThankYouPage when Confirm button is clicked", async () => {
    await navigateToSummaryPage();
    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: /confirm/i }));
    expect(screen.getByTestId("thankYouPageComponent")).toBeInTheDocument();
  });
});
