import { render, screen } from "@testing-library/react";
import SideBar from "./SideBar";

describe("SideBar component", () => {
  it("renders four number components with correct numbers", () => {
    render(<SideBar />);
    const numberComponents = screen.getAllByTestId("numberComponent");
    expect(numberComponents).toHaveLength(4);
    expect(numberComponents[0]).toHaveTextContent("1");
    expect(numberComponents[1]).toHaveTextContent("2");
    expect(numberComponents[2]).toHaveTextContent("3");
    expect(numberComponents[3]).toHaveTextContent("4");
  });
});
