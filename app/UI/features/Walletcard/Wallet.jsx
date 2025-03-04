"use client";
import { IoIosArrowDropdown } from "react-icons/io";
import React, { useState } from "react";

const TransactionTable = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("Today");

  const transactions = [
    {
      id: "#25418",
      description: "Rak (12345) / 6 mins",
      category: "Chat",
      amount: "$22.05",
      dateTime: "27 Feb, 2023 06:15 PM",
    },
    {
      id: "#25418",
      description: "Rak (12345) / 6 mins",
      category: "Chat",
      amount: "$22.05",
      dateTime: "27 Feb, 2023 06:15 PM",
    },
    {
      id: "#25418",
      description: "Rak (12345) / 6 mins",
      category: "Chat",
      amount: "$22.05",
      dateTime: "27 Feb, 2023 06:15 PM",
    },
  ];

  return (
    <div className="dash-wallet-cont flex items-center flex-col mx-16 me-12">
      <h2 className="wallet-head text-center ">Wallet Transactions</h2>
      <div className="wallet-list flex flex-col">
        <div className="wallet-top-line items-center justify-between flex">
          <ul className="wallet-ul flex mb-0 mt-2">
            <li>
              <a href="#" className="dash-f-li">
                Available Balance : <span>₹ 500</span>
              </a>
            </li>
            <li>
              <a href="#" className="dash-f-li">
                PG Charge : <span>₹ 500</span>
              </a>
            </li>
            <li>
              <a href="#" className="dash-f-li">
                Sub Total : <span>₹ 500</span>
              </a>
            </li>
            <li>
              <a href="#" className="dash-f-li">
                TDS : <span>₹ 500</span>
              </a>
            </li>
            <li>
              <a href="#" className="dash-f-li">
                GST : <span>₹ 500</span>
              </a>
            </li>
            <li>
              <a href="#" className="dash-f-li">
                Payable Amount :<span>₹ 500</span>
              </a>
            </li>
          </ul>
          <div className=" wallet-select  form-select wallet-select appearance-none pr-8">
          {/* <span className="absolute right-24 mt-3 transform -translate-y-1/2 pointer-events-none">
              <IoIosArrowDropdown />
            </span> */}
            <select
              className="p-1.5 rounded-md w-full"
              aria-label="Default select example"
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
            >
             
              <option value="Today">Today</option>
              <option value="Last Week">Last Week</option>
              <option value="Last Month">Last Month</option>
              <option value="All">All</option>
            </select>
            
            </div>
        </div>
      </div>
      <div className="p-6 bg-gray-200 rounded-xl w-full mt-4">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-md rounded-xl">
            <thead>
              <tr className="bg-gray-100 text-left text-gray-700 uppercase text-sm">
                <th className="px-4 py-3"># ID</th>
                <th className="px-4 py-3">Description</th>
                <th className="px-4 py-3">Category</th>
                <th className="px-4 py-3">Transaction Amount</th>
                <th className="px-4 py-3">Date Time</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index} className="border-t text-gray-700">
                  <td className="px-4 py-3 font-semibold">{transaction.id}</td>
                  <td className="px-4 py-3">{transaction.description}</td>
                  <td className="px-4 py-3">{transaction.category}</td>
                  <td className="px-4 py-3">{transaction.amount}</td>
                  <td className="px-4 py-3">{transaction.dateTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionTable;
