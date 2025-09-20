export function Item({ item, handleDel, handleChecked }) {
  const { quantity, description, id, isPacked } = item;
  return (
    <li>
      <input
        type="checkbox"
        // required
        onChange={() => handleChecked(id)}
        checked={isPacked}
      />
      <span style={{ textDecoration: isPacked ? "line-through" : "none" }}>
        {quantity} {description}
      </span>
      <button onClick={() => handleDel(id)}>❌</button>
    </li>
  );
}