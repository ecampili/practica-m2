import React from "react";
import { render, screen } from "@testing-library/react";
import Nav from "../Nav";

test("loads items eventually", async () => {
  render(<Nav />);

  // Wait for page to update with query text
  const items = await screen.findAllByText("Componente Nav");
  expect(items).toHaveLength(1);
});
