import App from "./App";
import HomePage from "./routes/Homepage";
import ShopPage from "./routes/ShopPage";
import CartPage from "./routes/CartPage";
import { Navigate } from "react-router";

const routes = [
  {
    path: "/",
    element: <App />,
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
      },
    ],
  },
];

export default routes;
