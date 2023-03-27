import { useState } from "react";

export default function ArrayStateHook() {
  const [items, setItems] = useState([]);

  function handleAddItem() {
    setItems([
      ...items,
      { id: items.length, value: Math.floor(Math.random() * 10) },
    ]);
  }

  function handlePopItem() {
    setItems(items.filter((item) => item.id !== items.length - 1));
  }

  return (
    <div>
      <button onClick={handleAddItem}>Add Item</button>
      <button onClick={handlePopItem}>Pop Item</button>
      <hr />
      <ul>
        {items.map((item) => {
          return <li key={item.id}>{item.value}</li>;
        })}
      </ul>
    </div>
  );
}
