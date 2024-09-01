import { render, screen } from "@testing-library/react";
import AddOnsForm from "./AddOnsForm";

describe("AddOnsForm component", () => {
  it('contains text "add-ons"', () => {
    render(<AddOnsForm />);
    const addOns = screen.getAllByText(/add-ons/i);
    expect(addOns.length).toBeGreaterThan(0);
  });

  it('contains add-ons options: "online service", "larger storage" and "customizable profile" as radio inputs', () => {
    render(<AddOnsForm />);
    const onlineServiceInput = screen.getByRole("checkbox", {
      name: /online service/i,
    });
    const largerStorageInput = screen.getByRole("checkbox", {
      name: /larger storage/i,
    });
    const customizableProfileInput = screen.getByRole("checkbox", {
      name: /customizable profile/i,
    });
    expect(onlineServiceInput).toBeInTheDocument();
    expect(largerStorageInput).toBeInTheDocument();
    expect(customizableProfileInput).toBeInTheDocument();
  });
});
