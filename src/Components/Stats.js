import React from "react";

const Stats = ({ items }) => {
  if (!items.length)
    return <p>Start adding some items into your packing list 🚀</p>;

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer>
      <em>
        {percentage === 100
          ? "You got everything, ready to go 🛫"
          : `You have ${numItems} items in your list, and you already packed 
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
};

export default Stats;
