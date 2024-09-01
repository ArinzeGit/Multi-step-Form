import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("renders all expected components", () => {
    render(<App />);
    expect(screen.getByTestId("sideBarComponent")).toBeInTheDocument;
    expect(screen.getByTestId("stepControlsComponent")).toBeInTheDocument;
    expect(screen.getByTestId("personalInfoFormComponent")).toBeInTheDocument;
  });
});
