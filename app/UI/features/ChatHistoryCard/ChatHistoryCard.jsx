"use client"
import React, { useState } from "react";

const ChatHistoryCard = () => {
  const [chatCards, setChatCards] = useState([
    {
      orderId: "123456",
      name: "Ammy (123456)",
      gender: "Male",
      dob: "01-Jan-2000, 07:30 AM",
      rate: "04/min",
      status: "Complete",
      duration: "8 Minutes",
      review:
        "❤️✨Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio eveniet consequuntur hic cumque, itaque officia assumenda debitis corporis iusto at eaque suscipit aliquid ipsum quo quia velit ratione facere perspiciatis!",
      offer: "Repeat (Indian)",
      offerStatus: "Offer Applied",
      amount: "14.00",
      refund: false,
    },
    {
      orderId: "123457",
      name: "John (123457)",
      gender: "Male",
      dob: "02-Feb-1998, 10:00 AM",
      rate: "05/min",
      status: "Complete",
      duration: "10 Minutes",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio eveniet consequuntur hic cumque!",
      offer: "Repeat (Indian)",
      offerStatus: "Offer Applied",
      amount: "15.00",
      refund: false,
    },
    {
      orderId: "123458",
      name: "Sarah (123458)",
      gender: "Female",
      dob: "10-Mar-1995, 12:00 PM",
      rate: "06/min",
      status: "Cancelled",
      duration: "5 Minutes",
      review: "Lorem ipsum dolor sit amet!",
      offer: "Repeat (Indian)",
      offerStatus: "No Offer",
      amount: "10.00",
      refund: true,
    },
    {
        orderId: "123458",
        name: "Sarah (123458)",
        gender: "Female",
        dob: "10-Mar-1995, 12:00 PM",
        rate: "06/min",
        status: "Cancelled",
        duration: "5 Minutes",
        review: "Lorem ipsum dolor sit amet!",
        offer: "Repeat (Indian)",
        offerStatus: "No Offer",
        amount: "10.00",
        refund: true,
      },
  ]);

  return (
    <div className="calling-his flex flex-wrap items-center justify-center flex-col mx-16 me-40 ">
      <h2 className="wallet-head text-center">Chat History</h2>

      <div className="  items-center flex flex-wrap  justify-between py-5 gap-4">
        {chatCards.map((card, index) => (
          <div className="card-chat flex flex-col " key={index}>
            <div className="call-top flex items-center justify-between">
              <div className="cal-od-id flex items-center justify-between flex-col">
                <span className="odr-sp">Order ID :</span>
                <span className="id-nm">{card.orderId}</span>
              </div>
              <div className="cal-od-id flex items-center justify-between flex-col">
                <span className="odr-sp">Name:</span>
                <span className="id-nm">{card.name}</span>
              </div>
              <div className="fl-rev flex items-end justify-between flex-col">
                <a href="#" className="odr-dots">
                  <i className="fa-solid fa-ellipsis-vertical"></i>
                </a>
                <span className="top-spn">
                  <i className="fa-solid fa-indian-rupee-sign"></i> {card.amount}
                </span>
              </div>
            </div>
            <hr style={{ margin: ".1rem" }} />
            <div className="cal-mid">
              <div className="cal-mid-top flex items-center justify-between">
                <span className="new-ind">{card.offer}</span>
                <span className="new-ind-off text-danger">{card.offerStatus}</span>
              </div>
            </div>
            <div className="call-card-det flex items-center justify-between">
              <div className="cal-od-id flex items-center justify-between">
                <span className="odr-sp">Gender :</span>
                <span className="id-nm">{card.gender}</span>
              </div>
              <div className="cal-od-id flex items-center justify-between">
                <span className="odr-sp">DOB :</span>
                <span className="id-nm">{card.dob}</span>
              </div>
            </div>
            <div className="call-rate flex items- justify-between">
              <div className="cal-od-id flex items-center justify-between">
                <span className="odr-sp">Rate :</span>
                <span className="id-nm">{card.rate}</span>
              </div>
              <div className="cal-od-id flex items- justify-between">
                <span className="odr-sp">Status :</span>
                <span
                  className={`id-nm ${card.status === "Complete" ? "text-success" : "text-danger"}`}
                >
                  {card.status}
                </span>
              </div>
            </div>
            <div className="call-dr flex items-center justify-between">
              <div className="cal-od-id flex items-center justify-between">
                <span className="odr-sp">Duration :</span>
                <span className="id-nm">{card.duration}</span>
              </div>
            </div>
            <hr style={{ margin: ".1rem" }} />
            <div className="card-rev flex flex-col">
              <span className="rev-span">
                <b>Review :</b>
              </span>
              <p className="rev-astro mb-0">{card.review}</p>
            </div>
            <div className="xtra-op flex items-center justify-between flex-wrap">
              <a href="#" className="xtra-a">
                Suggest Remedy
              </a>
              <a href="#" className="xtra-a">
                Open Kundli
              </a>
              {card.refund ? (
                <a href="#" className="xtra-a bg-danger bg-opacity-75 text-white">
                  Refund Amount
                </a>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatHistoryCard;
