import React from "react";
import { render, screen } from "@testing-library/react";
import Render from "./Render";
import { expect } from "@jest/globals";

describe("Rendering", () => {
  test("Should render all the elements correctly", () => {
    render(<Render />);
    // screen.debug();
    // screen.debug(screen.getByRole("heading"));
    expect(screen.getByRole("heading")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
    // 複数ある場合はscreen.getAllByRole()に配列がかえってくる．
    expect(screen.getAllByRole("button")[0]).toBeTruthy();
    expect(screen.getAllByRole("button")[1]).toBeTruthy();
    expect(screen.getByText("Test")).toBeTruthy();
    expect(screen.queryByText("Tefdfafst")).toBeNull();
    expect(screen.getByTestId("reactId")).toBeTruthy();
  });
});
