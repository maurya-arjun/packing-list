import React from "react";

const PackingList = ({ items, onDeleteItem, onToggleItem }) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
    </div>
  );
};

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <span>
        <input
          type="checkbox"
          value={item.packed}
          onChange={() => onToggleItem(item.id)}
        />
      </span>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button
        onClick={() => onDeleteItem(item.id)}
        style={{ cursor: "pointer" }}
      >
        {" "}
        ❌{" "}
      </button>
    </li>
  );
}

export default PackingList;
