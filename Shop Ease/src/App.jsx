import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import OrdersPage from "./pages/OrdersPage";
import ProductDetail from "./components/ProductDetail";
import Navbar from "./components/Navbar";
import Checkout from "./pages/checkout";

function AppLayout() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
       <Outlet /> 
    </div>
  );
}

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "cart", element: <CartPage /> },
        { path: "checkout", element: < Checkout/> },
        { path: "orders", element: <OrdersPage /> },
        { path: "product/:id", element: <ProductDetail /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
