import { useState } from "react";
import { Item } from "./items";

export function PackingList({ items, handleDel, handleChecked, setItems }) {
  const [sortItems, setSorted] = useState("input");
  let sortedItems;

  if (sortItems === "input") {
    sortedItems = items;
  }

  if (sortItems === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortItems === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.isPacked) - Number(b.isPacked));
  }

  // fallback to avoid undefined
  // if (!sortedItems) sortedItems = items;

  function handleSort(e) {
    setSorted(e.target.value);
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            handleDel={handleDel}
            handleChecked={handleChecked}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortItems} onChange={handleSort}>
          <option value="input">Sort Input</option>
          <option value="description">Sort Description</option>
          <option value="packed">Sort Packed</option>
        </select>
        <button onClick={() => setItems([])}>Clear List</button>
      </div>
    </div>
  );
}
