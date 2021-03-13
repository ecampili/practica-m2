import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import "@testing-library/jest-dom/extend-expect";

import { App, LocationDisplay } from "./app";

test("renders Navbar", () => {
  render(<App />);
  const linkElement = screen.ByTestId("nav");
  expect(linkElement).toBeInTheDocument();
});

test("renders home in main route", () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  // verify page content for expected route
  // often you'd use a data-testid or role query, but this is also possible
  expect(screen.getByTestId("home")).toBeInTheDocument();
});
