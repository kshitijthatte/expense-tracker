import React from "react";

const Transaction = () => {
  return (
    <div class="flex justify-between p-4 bg-white rounded-md shadow">
      <div>
        <h3 class="text-lg font-medium">Category Name</h3>
        <p class="text-sm">xx Mar 2021</p>
      </div>

      <div class="flex items-center">
        <h3 class="text-lg font-medium">+ ₹xx,xxx</h3>
        <button class="p-2 cursor-pointer inline-block ml-4">
          <svg viewBox="0 0 512.011 512.011" class="w-4 h-4">
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
