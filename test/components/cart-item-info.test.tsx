import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CartItemInfo from "../../app/(routes)/cart/components/cart-item-info";

describe("CartItemInfo Component", () => {
  const productMock = {
    name: "Nike Air Max Plus",
    color: "Red",
    size: "XS",
    price: "$180.00",
  };

  it("renders product information correctly", () => {
    render(<CartItemInfo product={productMock} />);
    expect(screen.getByText(productMock.name)).toBeInTheDocument();
    expect(screen.getByText(productMock.color)).toBeInTheDocument();
    expect(screen.getByText(productMock.size)).toBeInTheDocument();
    expect(screen.getByText(productMock.price)).toBeInTheDocument();
  });
});
