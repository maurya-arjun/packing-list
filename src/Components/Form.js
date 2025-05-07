import React, { useState } from "react";

const Form = ({ onAddItems }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItems = { quantity, description, packed: false, id: Date.now() };

    onAddItems(newItems);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form onSubmit={handleSubmit}>
      What do you need for your 😍 trip?
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {" "}
            {num}{" "}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button> Add </button>
    </form>
  );
};

export default Form;
