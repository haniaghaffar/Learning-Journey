import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  removeFromCart,
  clearCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/slices/cartSlice";

export default function CartPage() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleBuyNow = () => navigate("/checkout", { state: { items } });

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold mb-6">Your Cart 🛒</h2>

      {items.length === 0 ? (
        <p className="text-gray-500 text-center py-10">Your cart is empty 🛍️</p>
      ) : (
        <>
          <ul className="space-y-4">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center bg-white p-4 rounded-lg shadow"
              >
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-500">
                    ${item.price.toFixed(2)} × {item.quantity} = $
                    {(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => dispatch(decrementQuantity(item.id))}
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="font-medium">{item.quantity}</span>
                  <button
                    onClick={() => dispatch(incrementQuantity(item.id))}
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex justify-between items-center mt-8">
            <h3 className="text-lg font-semibold">
              Total: ${total.toFixed(2)}
            </h3>
            <div className="space-x-3">
              <button
                onClick={handleBuyNow}
                className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
              >
                Buy Now
              </button>
              <button
                onClick={() => dispatch(clearCart())}
                className="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600 transition"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
