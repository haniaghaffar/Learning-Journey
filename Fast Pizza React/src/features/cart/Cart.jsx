

import Button from "../../Button";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

function Cart() {
  return (
    <div className="px-4 py-3">
      <a href="/menu" className="text-blue-600">
        &larr; Back to menu
      </a>

      <h2 className="mt-7 text-xl font-semibold">Your cart, username</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        <CartItem />
        <CartItem />
      </ul>

      <div className="mt-6 space-x-2">
        <Button type="primary">Order pizzas</Button>

        <Button type="secondary">Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
