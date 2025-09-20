import DeleteItemButton from './DeleteItemButton';
import IncDecButtons from './IncDecButtons';

function CartItem() {
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">1× Pizza Name</p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">$00.00</p>
        <IncDecButtons />
        <DeleteItemButton />
      </div>
    </li>
  );
}

export default CartItem;
