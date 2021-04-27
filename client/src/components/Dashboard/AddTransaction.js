import React, { useState } from "react";
import { isAuthenticated } from "../../helpers/authHelpers";
import { addTransaction } from "../../helpers/transactionHelpers";

const getToday = () => {
  const d = new Date();
  let day = d.getDate();
  let month = d.getMonth() + 1;
  let year = d.getFullYear();

  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;

  const today = year + "-" + month + "-" + day;
  return today;
};

const AddTransaction = ({ closeWindow, updateTransactions }) => {
  const [values, setValues] = useState({
    ammount: "",
    category: "",
    description: "",
    date: getToday(),
    error: "",
  });
  const { ammount, category, description, date, error } = values;

  const user = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: "", [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTransaction(user.id, user.token, {
      ammount,
      category,
      description,
      date,
    })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error });
        } else {
          // console.log(data);
          setValues({
            ammount: "",
            category: "",
            description: "",
            date: "",
            error: "",
          });
          closeWindow();
          updateTransactions();
        }
      })
      .catch((err) => {
        console.log("Error while adding the transaction", err);
      });
  };

  const errorMessage = () => {
    return (
      <p
        className="mb-4 text-center font-normal text-lg text-red-500"
        style={{ display: error ? "" : "none" }}
      >
        Error : {error}
      </p>
    );
  };

  return (
    <>
      <div
        onClick={closeWindow}
        className="fixed inset-0 z-10 bg-green-800"
        style={{ opacity: 0.5 }}
      ></div>
      <div className="fixed z-10 transform transition-all top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="flex justify-between px-4 py-3 bg-gray-50 sm:px-6">
            <h2 className="py-2 text-xl font-semibold">Add Transacation</h2>
            <button
              type="submit"
              onClick={closeWindow}
              className="py-2 px-4 border border-transparent text-xl font-semibold bg-none text-red-500 focus:outline-none"
            >
              X
            </button>
          </div>
          <div className="px-4 py-2 bg-white sm:px-6 sm:py-4 sm:pb-6">
            {errorMessage()}
            <div className="grid grid-cols-6 gap-4">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium text-gray-700"
                >
                  Amount
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">₹</span>
                  </div>
                  <input
                    type="text"
                    name="amount"
                    id="amount"
                    className="focus:ring-green-500 border border-gray-300 py-2 px-4 focus:border-green-500 block w-full pl-7 pr-12 sm:text-sm rounded-md outline-none"
                    placeholder="0.00"
                    onChange={handleChange("ammount")}
                    value={ammount}
                    required
                  />
                </div>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="category"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  onChange={handleChange("category")}
                  value={category}
                  required
                >
                  <option>Select Category</option>
                  <option value="Income">Income</option>
                  <option value="Expense">Expense</option>
                </select>
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm py-2 px-3 border border-gray-300 rounded-md outline-none"
                  onChange={handleChange("description")}
                  value={description}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full shadow-sm sm:text-sm py-2 px-3 border border-gray-300 rounded-md outline-none"
                  onChange={handleChange("date")}
                  value={date}
                />
              </div>

              <div className="col-span-6 sm:col-span-3 place-self-end">
                <button
                  onClick={onSubmit}
                  className="justify-items-end py-2 px-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTransaction;
