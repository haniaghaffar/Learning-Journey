function OrderItem() {
  return (
    <li className="py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">1×</span> Pizza Name
        </p>
        <p className="font-bold">$00.00</p>
      </div>
    </li>
  );
}

export default OrderItem;
