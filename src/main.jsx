import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import routes from "./routes.jsx";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router";
import { ProductsDataProviver } from "./contexts/ProductsContext.jsx";
import { PurchaseProvider } from "./contexts/PurchasedContext.jsx";
const router = createBrowserRouter(routes);
const client = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <ProductsDataProviver>
        <PurchaseProvider>
          <RouterProvider router={router} />
        </PurchaseProvider>
      </ProductsDataProviver>
    </QueryClientProvider>
  </StrictMode>
);
