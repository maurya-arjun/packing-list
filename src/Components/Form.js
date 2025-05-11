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
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-4 items-center p-6 bg-white rounded-lg shadow-md w-full"
    >
      <span className="text-lg font-medium text-gray-700 sm:mr-4 flex-shrink-0">
        What do you need for your 😍 trip?
      </span>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="w-full sm:w-auto p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
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
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full sm:w-auto uppercase"
      >
        {" "}
        Add{" "}
      </button>
    </form>
  );
};

export default Form;
