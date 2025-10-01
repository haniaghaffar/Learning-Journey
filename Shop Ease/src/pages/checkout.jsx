import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { getAddress } from "../services/productsApi";
import { clearCart } from "../redux/slices/cartSlice";
import { addOrder } from "../redux/slices/ordersSlice";

export default function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const items = useSelector((state) => state.cart.items) || [];
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const [user, setUser] = useState({ name: "", email: "", address: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");
  const [position, setPosition] = useState("");

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const { mutate: fetchAddress, isPending } = useMutation({
    mutationFn: getAddress,
    onSuccess: (data) => {
      setUser((prev) => ({
        ...prev,
        address: data.city || data.locality || "Address found",
      }));
      setPosition(
        data.latitude && data.longitude
          ? `Lat: ${data.latitude}, Long: ${data.longitude}`
          : ""
      );
    },
  });

  const handleGetLocation = () => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      ({ coords }) =>
        fetchAddress({ latitude: coords.latitude, longitude: coords.longitude }),
      (error) => console.log(error)
    );
  };

  const handleConfirmPurchase = () => {
    setSubmitted(true);
    const isValid = Object.values(user).every((v) => v.trim() !== "");
    if (!isValid) return;

    const order = {
      id: Date.now(),
      date: new Date().toISOString(),
      items,
      total,
      customer: { ...user, location: position },
      paymentMethod,
      status: "Pending",
    };

    dispatch(addOrder(order));
    dispatch(clearCart());
    navigate("/orders");
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 space-y-8">
      <h2 className="text-2xl font-bold">Checkout</h2>

      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex justify-between bg-white p-3 rounded-md shadow-sm"
          >
            <span>
              {item.title} × {item.quantity}
            </span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>

      <h3 className="text-lg font-semibold">Total: ${total.toFixed(2)}</h3>

      <div className="bg-white p-5 rounded-md shadow space-y-4">
        <h3 className="text-lg font-bold">Your Details</h3>

        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Full Name"
          className={`w-full p-3 border rounded-md ${
            submitted && user.name.trim() === "" ? "border-red-400" : ""
          }`}
        />
        {submitted && user.name.trim() === "" && (
          <p className="text-red-500 text-sm">Full name is required</p>
        )}

        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email Address"
          className={`w-full p-3 border rounded-md ${
            submitted && user.email.trim() === "" ? "border-red-400" : ""
          }`}
        />
        {submitted && user.email.trim() === "" && (
          <p className="text-red-500 text-sm">Email is required</p>
        )}

        <div className="relative">
          <input
            type="text"
            name="address"
            value={user.address}
            onChange={handleChange}
            placeholder="Shipping Address"
            className={`w-full p-3 border rounded-md pr-28 ${
              submitted && user.address.trim() === "" ? "border-red-400" : ""
            }`}
          />
          <button
            type="button"
            onClick={handleGetLocation}
            className="absolute right-2 top-[5px] px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm"
          >
            {isPending ? "Locating..." : "Get Location"}
          </button>
        </div>
        {submitted && user.address.trim() === "" && (
          <p className="text-red-500 text-sm">Address is required</p>
        )}

        <input
          type="tel"
          name="phone"
          value={user.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className={`w-full p-3 border rounded-md ${
            submitted && user.phone.trim() === "" ? "border-red-400" : ""
          }`}
        />
        {submitted && user.phone.trim() === "" && (
          <p className="text-red-500 text-sm">Phone number is required</p>
        )}
      </div>

      <div className="bg-white p-5 rounded-md shadow space-y-3">
        <h3 className="text-lg font-bold">Payment Method</h3>
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="w-full p-3 border rounded-md"
        >
          <option value="Cash on Delivery">Cash on Delivery</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Debit Card">Debit Card</option>
          <option value="PayPal">PayPal</option>
        </select>
      </div>

      <button
        onClick={handleConfirmPurchase}
        className="w-full px-6 py-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition"
      >
        Confirm Purchase
      </button>
    </div>
  );
}
