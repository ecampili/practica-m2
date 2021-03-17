import React from "react";
import { render, screen } from "@testing-library/react";
import ProductDetail from './index'

test("Debe tener un label Nombre", async () => {
    render(<ProductDetail />);
    // Wait for page to update with query text
    const items = await screen.findAllByText('Nombre')
    expect(items).toHaveLength(1);
});
test("Debe tener un label Descripcion", async () => {
    render(<ProductDetail />);
    // Wait for page to update with query text
    const items = await screen.findAllByText('Descripcion')
    expect(items).toHaveLength(1);
});
test("Debe tener un label Precio", async () => {
    render(<ProductDetail />);
    // Wait for page to update with query text
    const items = await screen.findAllByText('Precio')
    expect(items).toHaveLength(1);
});
test("Debe tener un label Categoria", async () => {
    render(<ProductDetail />);
    // Wait for page to update with query text
    const items = await screen.findAllByText('Categoria')
    expect(items).toHaveLength(1);
});