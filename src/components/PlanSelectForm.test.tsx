import { render, screen } from "@testing-library/react";
import PlanSelectForm from "./PlanSelectForm";

describe("PlanSelectForm component", () => {
  it('contains texts "plan" and "billing"', () => {
    render(<PlanSelectForm />);
    const plan = screen.getAllByText(/plan/i);
    const billing = screen.getAllByText(/billing/i);
    expect(plan.length).toBeGreaterThan(0);
    expect(billing.length).toBeGreaterThan(0);
  });

  it('contains plan options: "arcade", "advanced" and "pro" as radio inputs', () => {
    render(<PlanSelectForm />);
    const arcadeInput = screen.getByRole("radio", { name: /arcade/i });
    const advancedInput = screen.getByRole("radio", { name: /advanced/i });
    const proInput = screen.getByRole("radio", { name: /pro/i });
    expect(arcadeInput).toBeInTheDocument();
    expect(advancedInput).toBeInTheDocument();
    expect(proInput).toBeInTheDocument();
  });

  it('contains billing options "monthly" and "yearly" as radio inputs', () => {
    render(<PlanSelectForm />);
    const monthlyInput = screen.getByRole("radio", { name: /monthly/i });
    const yearlyInput = screen.getByRole("radio", { name: /yearly/i });
    expect(monthlyInput).toBeInTheDocument();
    expect(yearlyInput).toBeInTheDocument();
  });
});
