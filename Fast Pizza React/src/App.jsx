import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


import Menu from "./features/menu/menu/Menu";
import CreateOrder from "./features/order/order/CreateOrder";
import Order from "./features/order/order/Order";
import Cart from "./features/cart/Cart";
import AppLayout from "./AppLayout";
import Home from "./ui/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryclient = new QueryClient();
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/menu", element: <Menu /> },
        { path: "/order/new", element: <CreateOrder /> },
        { path: "/oder/:orderId", element: <Order /> },
        { path: "/cart", element: <Cart /> },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryclient}>
      <RouterProvider router={router} />;
    </QueryClientProvider>
  )

}
