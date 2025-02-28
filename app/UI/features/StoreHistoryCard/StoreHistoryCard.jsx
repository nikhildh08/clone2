"use client";
import React, { useState } from "react";

const StoreHistoryCard = () => {
  const [storeCards, setStoreCards] = useState([
    {
      orderId: "123456",
      name: "Ammy (123456)",
      product: "Relationship Healing",
      quantity: 1,
      status: "Closed",
      date: "01-Jan-2000, 07:30 AM",
    },
    {
      orderId: "123457",
      name: "John (123457)",
      product: "Tarot Reading",
      quantity: 2,
      status: "Closed",
      date: "02-Feb-1998, 10:00 AM",
    },
    {
      orderId: "123457",
      name: "John (123457)",
      product: "Tarot Reading",
      quantity: 2,
      status: "Closed",
      date: "02-Feb-1998, 10:00 AM",
    },
    {
      orderId: "123457",
      name: "John (123457)",
      product: "Tarot Reading",
      quantity: 2,
      status: "Closed",
      date: "02-Feb-1998, 10:00 AM",
    },
    {
      orderId: "123457",
      name: "John (123457)",
      product: "Tarot Reading",
      quantity: 2,
      status: "Closed",
      date: "02-Feb-1998, 10:00 AM",
    },
    {
      orderId: "123457",
      name: "John (123457)",
      product: "Tarot Reading",
      quantity: 2,
      status: "Closed",
      date: "02-Feb-1998, 10:00 AM",
    },
    {
      orderId: "123457",
      name: "John (123457)",
      product: "Tarot Reading",
      quantity: 2,
      status: "Closed",
      date: "02-Feb-1998, 10:00 AM",
    },
  ]);

  return (
    <div className="calling-his flex items-center justify-between flex-col mx-16 ">
      <h2 className="wallet-head text-center">Dhwani Astro Store</h2>

      <div className="store-his-box flex items-center flex-wrap py-5">
        {storeCards.map((card, index) => (
          <div className="card-store flex flex-col" key={index}>
            <div className="call-top flex items-start justify-between">
              <div className="cal-od-str flex items-start justify-between flex-col">
                <span className="store-top flex items-center">
                  <span className="odr-sp flex">Order ID :</span>
                  <span className="id-nm">{card.orderId}</span>
                </span>
                <span className="store-top flex items-center">
                  <span className="odr-sp flex">Name:</span>
                  <span className="id-nm">{card.name}</span>
                </span>
              </div>
              <div className="cal-od-det st-detail flex items-end justify-between flex-col">
                <a href="#" className="str-det">
                  Details
                </a>
              </div>
            </div>
            <hr style={{ margin: ".1rem" }} />

            <div className="call-card-det flex items-center justify-between">
              <div className="cal-od-id flex items-center justify-between">
                <span className="odr-sp">Product :</span>
                <span className="id-nm">{card.product}</span>
              </div>
              <div className="cal-od-id flex items-center justify-between">
                <span className="odr-sp">Quantity :</span>
                <span className="id-nm">{card.quantity}</span>
              </div>
            </div>
            <div className="call-rate flex items- justify-between">
              <div className="cal-od-id flex items- justify-between">
                <span className="odr-sp">Status :</span>
                <span className="id-nm text-danger">{card.status}</span>
              </div>
            </div>
            <div className="call-dr flex items-center justify-between">
              <div className="cal-od-id flex items-center justify-between">
                <span className="odr-sp">{card.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreHistoryCard;
