import { render, screen } from "@testing-library/react";
import SummaryPage from "./SummaryPage";

describe("SummaryPage component", () => {
  it('contains button with text "change"', () => {
    render(<SummaryPage />);
    const changeButton = screen.getByRole("button", { name: /change/i });
    expect(changeButton).toBeInTheDocument;
  });

  it('contains text "total"', () => {
    render(<SummaryPage />);
    const total = screen.getAllByText(/total/i);
    expect(total.length).toBeGreaterThan(0);
  });
});
