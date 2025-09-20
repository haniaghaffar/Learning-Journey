export function Stats({ items }) {
  const NumItems = items.length;
  if (!NumItems) {
    return <p className="stats">📝Start Adding Items in the List!</p>;
  }

  const Packed = items.filter((item) => item.isPacked === true).length;
  const percentage = Math.round((Packed / NumItems) * 100);

  return (
    <footer className="stats">
      {percentage === 100
        ? "You have all the items packed.Ready to go!"
        : `💼 You have ${NumItems} items on your list, and you already packed 
        ${Packed} (${percentage}%)`}
    </footer>
  );
}