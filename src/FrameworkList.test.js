import React from "React";
import { render, cleanup, screen } from "@testing-library/react";
import FrameworkList from "./FrameworkList";

afterEach(() => cleanup());

describe("Rendering the list with props", () => {
  test("Should render No data when no data propped", () => {
    render(<FrameworkList />);
    expect(screen.getByText("no data")).toBeInTheDocument();
  });
  test("Should render list items correctly", () => {
    const dummyData = [
      { id: 1, item: "React dummy" },
      { id: 2, item: "Angular dummy" },
      { id: 3, item: "Vuw dummy" },
    ];
    render(<FrameworkList frameworks={dummyData} />);
    const frameworkItems = screen
      .getAllByRole("listitem")
      .map((ele) => ele.textContent);
    const dummyItems = dummyData.map((dummy) => dummy.item);
    expect(frameworkItems).toEqual(dummyItems);
    expect(screen.queryByText("no data")).toBeNull();
  });
});
