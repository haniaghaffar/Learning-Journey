import { useState } from "react";
import { Form } from "./components/form";
import { Logo } from "./components/logo";
import { PackingList } from "./components/packing list";
import { Stats } from "./components/stats";

function App() {
  const [items, setItems] = useState([]);

  function handleItems(newItem) {
    setItems((items) => [...items, newItem]);
  }

  function handleDel(id) {
    setItems((item) => item.filter((item) => item.id !== id));
  }

  function handleChecked(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isPacked: !item.isPacked } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form addNew={handleItems} />
      <PackingList
        items={items}
        handleDel={handleDel}
        handleChecked={handleChecked}
        setItems={setItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
