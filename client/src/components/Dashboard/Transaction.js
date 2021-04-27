import React from "react";

const Transaction = ({ transaction }) => {
  const formatDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  return (
    <div className="flex justify-between p-4 bg-white rounded-md shadow">
      <div>
        <h3 className="text-lg font-medium">{transaction.description}</h3>
        <p className="text-sm">{formatDate(transaction.date)}</p>
      </div>

      <div className="flex items-center">
        <h3 className="text-lg font-medium">
          {transaction.category === "Expense" ? "-" : "+"} ₹
          {transaction.ammount}
        </h3>
        <button className="p-2 cursor-pointer inline-block ml-4">
          <svg viewBox="0 0 512.011 512.011" className="w-4 h-4">
            <path
              d="M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0
			s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667
			C514.096,145.416,514.096,131.933,505.755,123.592z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Transaction;
