import { render, screen } from "@testing-library/react";
import StepControls from "./StepControls";

describe("StepControls component", () => {
  it('contains button with the text "next"', () => {
    render(<StepControls />);
    const nextButton = screen.getByRole("button", { name: /next/i });
    expect(nextButton).toBeInTheDocument();
  });
});
