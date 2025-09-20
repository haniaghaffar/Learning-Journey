import Button from "../../../ui/Button";
import OrderItem from "./OrderItem";

export default function Order() {
  return (
    <div className="space-y-8 px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">Order #123 status</h2>

        <div className="space-x-2">
          <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-red-50">
            Priority
          </span>
          <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-green-50">
            preparing order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-5">
        <p className="font-medium">Only 20 minutes left 😃</p>
        <p className="text-xs text-stone-500">(Estimated delivery: 12:30 PM)</p>
      </div>

      <ul className="dive-stone-200 divide-y border-b border-t">
        <OrderItem />
        <OrderItem />
      </ul>

      <div className="space-y-2 bg-stone-200 px-6 py-5">
        <p className="text-sm font-medium text-stone-600">
          Price pizza: $40.00
        </p>
        <p className="text-sm font-medium text-stone-600">
          Price priority: $5.00
        </p>
        <p className="font-bold">To pay on delivery: $45.00</p>
      </div>

      <Button type="small">Make this priority</Button>
    </div>
  );
}
