import MainApp from ".";
import React from "react";
import { render, screen } from "../../../test-utils";

describe("mainApp", function () {
  beforeEach(() => {});
  it("render and tests", function () {
    const initialState = {
      locationState: {
        selectedLocation: 624,
      },
    };
    render(<MainApp />, {
      initialState: initialState,
    });
    const element = screen.getByTestId("app-container-test-id");
    expect(element).toBeTruthy();
  });
});
