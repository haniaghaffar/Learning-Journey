import { useState } from "react";

export function Form({ addNew }) {
  const [quantity, setQuant] = useState(1);
  const [description, setDescrip] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // if(!description) return;

    const newItem = { quantity, description, isPacked: false, id: Date.now() };

    setDescrip("");
    addNew(newItem);
    setQuant(1);
  }

  function handleDescrip(e) {
    setDescrip(e.target.value);
  }
  function handleQuant(e) {
    setQuant(e.target.value);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your🏔️trip?</h3>
      <select onChange={handleQuant} value={quantity}>
        {Array.from({ length: 20 }, (_, index) => index + 1).map((n) => (
          <option value={n} key={n}>
            {n}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        onChange={handleDescrip}
        required
        value={description}
      />
      <button>Add</button>
    </form>
  );
}
