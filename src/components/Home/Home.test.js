import React from "react";
import { render, screen } from "@testing-library/react";
import Home from './index'

test("Debe tener un título o label llamado Home", async () => {
    render(<Home />);
    // Wait for page to update with query text
    const items = await screen.findAllByText('Home', { exact: false })
    expect(items).toHaveLength(1);
});
test("Debe tener un título o label llamado Productos", async () => {
    render(<Home />);
    // Wait for page to update with query text
    const items = await screen.findAllByText('Productos', { exact: false })
    expect(items).toHaveLength(1);
});