import { useSelector } from "react-redux";

export default function OrdersPage() {
  const { lastOrder } = useSelector((state) => state.orders || {});

  if (!lastOrder) {
    return (
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">My Orders</h1>
        <p className="text-gray-600">No orders yet.</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">My Orders</h1>

      <div className="p-5 bg-white rounded-lg shadow space-y-3">
        <div className="flex justify-between text-sm text-gray-600">
          <span>
            Order ID: <strong>{lastOrder.id}</strong>
          </span>
          <span>{new Date(lastOrder.date).toLocaleString()}</span>
        </div>

        <p className="text-lg font-semibold text-indigo-600">
          Total: ${lastOrder.total.toFixed(2)}
        </p>

        <p className="text-sm text-gray-700">
          Payment: <strong>{lastOrder.paymentMethod}</strong>
        </p>

        <div className="text-sm text-gray-700 space-y-1">
          <p>
            <strong>Name:</strong> {lastOrder.customer.name}
          </p>
          <p>
            <strong>Address:</strong> {lastOrder.customer.address}
          </p>
        </div>

        <ul className="space-y-3">
          {(lastOrder.items || []).map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center bg-gray-50 p-3 rounded-md shadow-sm"
            >
              <span>
                {item.title} × {item.quantity}
              </span>
              <span className="font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
