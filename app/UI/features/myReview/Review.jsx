"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

// Dummy data for reviews
const reviews = [
  {
    id: 1,
    name: "Ammy",
    orderId: "123456",
    service: "Chat",
    date: "01-Jan-2000, 07:30 AM",
    description: "❤️✨Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: 2,
    name: "John",
    orderId: "789101",
    service: "Call",
    date: "05-Feb-2023, 03:45 PM",
    description: "Great support and fast response! 🎉",
  },
  {
    id: 3,
    name: "John",
    orderId: "789101",
    service: "Call",
    date: "05-Feb-2023, 03:45 PM",
    description: "Great support and fast response! 🎉",
  },
  {
    id: 4,
    name: "John",
    orderId: "789101",
    service: "Call",
    date: "05-Feb-2023, 03:45 PM",
    description: "Great support and fast response! 🎉",
  },
];

export default function Review() {
  const [filter, setFilter] = useState("all");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Prevents hydration error

  // Filter reviews based on selected service type
  const filteredReviews = filter === "all" ? reviews : reviews.filter((r) => r.service === filter);

  return (
    <div className="my-review-main flex flex-col items-center justify-center mx-16">
      <h2 className="wallet-head text-center">My Reviews</h2>

      {/* Select Filters */}
      <div>
      <div className="top-down flex items-center flex-col">
        <div className="review-select flex items-start justify-between py-3">
          <select className="custom-select"  value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">Show All Reviews</option>
            <option value="Chat">Chat</option>
            <option value="Call">Call</option>
          </select>

          <select className="custom-select" defaultValue="all"> 
            <option >My Reviews</option>
            <option value="Positive">Positive</option>
            <option value="Negative">Negative</option>
          </select>
        </div>
      </div>

      <div className="review-cond">
          <span className="flex items-center justify-between">
            <span className="fl-spn">Flagged Review</span>
            <span className="fl-spn">Excluded PO & SO</span>
            <span className="fl-spn">3</span>
          </span>
          <span className="flex items-center justify-between">
            <span className="fl-spn">Missed Call & Chat Review</span>
            <span className="fl-spn">13</span>
          </span>
          <span className="flex items-center justify-between">
            <span className="fl-spn"><b>Used Balance</b></span>
            <span className="fl-spn"><b>15/16</b></span>
          </span>
          <span className="flex items-center justify-between">
            <span className="fl-spn">
              <b>Note:</b> System gives you a maximum of 90 flags. Inclusive of missed call and chat.
            </span>
          </span>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="store-his-box rev-his-box flex items-start flex-wrap py-3 gap-10">
        {filteredReviews.map((review) => (
          <div key={review.id} className="card-review flex flex-col">
            <div className="call-top flex items-center justify-between">
              <div className="rev-user-img">
                <Image src="/user2.png" alt="User" width={50} height={50} className="user-img-rev" />
              </div>
              <div className="cal-od-revi flex items-start justify-between flex-col">
                <span className="store-top flex items-center">
                  <span className="odr-sp flex">Name:</span> <span className="id-nm">{review.name}</span>
                </span>
                <span className="store-top flex items-center">
                  <span className="odr-sp flex">Order ID :</span> <span className="id-nm">{review.orderId}</span>
                </span>
              </div>
              <div className="cal-od-id flex items-end justify-between flex-col">
                <Link href="#" className="rev-det"><i className="fa-solid fa-flag"></i></Link>
                <Link href="#" className="rev-det"><i className="fa-solid fa-thumbtack"></i></Link>
              </div>
            </div>
            <hr style={{ margin: ".1rem" }} />

            <div className="call-card-det flex items-start justify-between flex-col">
              <div className="cal-od-rev flex items-center justify-between">
                <span className="rev-line">
                  <span className="odr-sp">Service :</span> <span className="id-nm">{review.service}</span>
                </span>
              </div>
              <div className="cal-od-id flex items-center justify-between">
                <span className="odr-sp">{review.date}</span>
              </div>
              <div className="card-rev flex flex-col">
                <span className="rev-span"><b>Description :</b></span>
                <p className="rev-astro mb-0">{review.description}</p>
              </div>
            </div>
            <div className="xtra-rem flex items-center justify-between flex-wrap">
              <Link href="#" className="xtra-rev text-success">Reply <i className="fa-solid fa-reply"></i></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
