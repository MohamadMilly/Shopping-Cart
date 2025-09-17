import { createMemoryRouter, MemoryRouter, RouterProvider } from "react-router";
import App from "../src/App";
import { it, describe, expect } from "vitest";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import { ProductsDataProviver } from "../src/contexts/ProductsContext";
import { QueryClientProvider } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";
import routes from "../src/routes";
import userEvent from "@testing-library/user-event";
describe("testing only the navigation between routes", () => {
  it("The default navigation route is home , so it should be rendered once i start the App", async () => {
    const client = new QueryClient();
    const router = createMemoryRouter(routes, { initialEntries: ["/"] });
    render(
      <QueryClientProvider client={client}>
        <ProductsDataProviver>
          <RouterProvider router={router} />
        </ProductsDataProviver>
      </QueryClientProvider>
    );

    const heading = await screen.findByRole(
      "heading",
      { name: "Discover Everything You Imagine" },
      { timeout: 2000 }
    );
    expect(heading).toBeInTheDocument();
  });
  it("When I click On the Shop or Cart i should navigate", async () => {
    const client = new QueryClient();
    const router = createMemoryRouter(routes, { initialEntries: ["/"] });
    const user = userEvent.setup();
    render(
      <QueryClientProvider client={client}>
        <ProductsDataProviver>
          <RouterProvider router={router} />
        </ProductsDataProviver>
      </QueryClientProvider>
    );
    const shopLink = await screen.findByRole("link", { name: "Shop" });
    await user.click(shopLink);
    expect(
      await screen.findByRole("heading", {
        name: "Discover Brand New Products",
      })
    ).toBeInTheDocument();
  });
});
