import App from "./App";
import HomePage from "./routes/Homepage";
import ShopPage from "./routes/ShopPage";
import CartPage, { action as unpurchaseAction } from "./routes/CartPage";
import { Navigate } from "react-router";
import { PurchasePage } from "./routes/PurchasePage";

import ErrorPage from "./routes/ErrorPage";
const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Navigate to={"home"} />,
          },
          {
            path: "home",
            element: <HomePage />,
          },
          {
            path: "shop",
            element: <ShopPage />,
          },
          {
            path: "cart",
            element: <CartPage />,

            action: unpurchaseAction,
          },
          {
            path: "product/:id",
            element: <PurchasePage />,
          },
        ],
      },
    ],
  },
];

export default routes;
