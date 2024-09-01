import { render, screen } from "@testing-library/react";
import ThankYouPage from "./ThankYouPage";

describe("ThankYouPage component", () => {
  it('contains text "thank you"', () => {
    render(<ThankYouPage />);
    const thankYou = screen.getAllByText(/thank you/i);
    expect(thankYou.length).toBeGreaterThan(0);
  });

  it('contains company email address: "support@loremgaming.com"', () => {
    render(<ThankYouPage />);
    const companyEmailAddress = screen.getByText(/support@loremgaming.com/);
    expect(companyEmailAddress).toBeInTheDocument;
  });
});
