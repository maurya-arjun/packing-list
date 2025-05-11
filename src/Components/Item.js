import React from "react";

export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="flex items-center gap-4 p-3 border-b">
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
        className="h-5 w-5 text-blue-500 focus:ring-blue-500 cursor-pointer"
      />
      <span className="text-gray-600">{item.quantity}</span>
      <span
        className={`flex-grow text-gray-800 ${
          item.packed ? "line-through text-gray-400" : {}
        }`}
      >
        {item.description}
      </span>
      <button
        onClick={() => onDeleteItem(item.id)}
        className="text-red-500 hover:text-red-600"
        aria-label={`Delete ${item.description}`}
      >
        &times;
      </button>
    </li>
  );
}
