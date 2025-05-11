import React from "react";

const Stats = ({ items }) => {
  if (!items.length)
    return (
      <footer className="py-4 text-center bg-blue-50 rounded-md">
        <p className="text-base sm:text-lg font-medium">
          <em>Start adding some items into your packing list 🚀</em>
        </p>
      </footer>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="py-4 text-center bg-blue-50 rounded-md">
      <p
        className={`text-base sm:text-lg font-medium ${
          percentage === 100 ? "text-blue-600 font-bold" : "text-gray-700"
        }`}
      >
        {percentage === 100 ? (
          <>
            You got everything, ready to go
            <span className="text-2xl">🛫</span>
          </>
        ) : (
          `You have ${numItems} item${
            numItems !== 1 ? "s" : ""
          } in your list, and you already packed ${numPacked} (${percentage}%)`
        )}
      </p>
    </footer>
  );
};

export default Stats;
