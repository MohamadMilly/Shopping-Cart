import App from "./App";
import HomePage from "./routes/Homepage";
import ShopPage from "./routes/ShopPage";
import CartPage, { action as unpurchaseAction } from "./routes/CartPage";
import { Navigate } from "react-router";
import { action as purchaseAction, PurchasePage } from "./routes/PurchasePage";
import { loader as cartLoader } from "./routes/CartPage";
import { loader as notificationLoader } from "./components/Navbar";
import ErrorPage from "./routes/ErrorPage";
const routes = [
  {
    path: "/",
    element: <App />,
    loader: notificationLoader,
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
            loader: cartLoader,
            action: unpurchaseAction,
          },
          {
            path: "product/:id",
            element: <PurchasePage />,
            action: purchaseAction,
          },
        ],
      },
    ],
  },
];

export default routes;
