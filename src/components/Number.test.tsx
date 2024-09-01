import { render, screen } from "@testing-library/react";
import Number from "./Number";

describe("Number component", () => {
  it("displays correct number", () => {
    render(<Number number="8" />);
    const number = screen.getByText("8");
    expect(number).toBeInTheDocument;
  });
});
