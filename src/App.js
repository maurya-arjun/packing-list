import React, { useState } from "react";
import Logo from "./Components/Logo";
import PackingList from "./Components/PackingList";
import Stats from "./Components/Stats";
import Form from "./Components/Form";

const App = () => {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      <div className="max-w-3xl mx-auto flex flex-col gap-6">
        <Logo />
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Form onAddItems={handleAddItems} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <PackingList
            items={items}
            onDeleteItem={handleDeleteItem}
            onToggleItem={handleToggleItem}
            onClearList={handleClearList}
          />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Stats items={items} />
        </div>
      </div>
    </div>
  );
};

export default App;
