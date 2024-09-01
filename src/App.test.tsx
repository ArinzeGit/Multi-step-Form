import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it('contains button with the text "next"', () => {
    render(<App />);
    const nextButton = screen.getByRole("button", { name: /next/i });
    expect(nextButton).toBeInTheDocument();
  });
});
