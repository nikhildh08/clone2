"use client";

import Image from "next/image";

const followers = [
  { id: "123456", name: "AMMY Singh", date: "Feb 16, 2023", image: "/membership.png" },
  { id: "789012", name: "John Doe", date: "Mar 10, 2023", image: "/membership.png" },
  { id: "345678", name: "Jane Smith", date: "Apr 25, 2023", image: "/membership.png" },
  { id: "901234", name: "Michael Johnson", date: "May 08, 2023", image: "/membership.png" },
];

export default function Followers() {
  return (
    <div className="astro-follower flex flex-col items-center justify-center mx-16">
      <h2 className="wallet-head text-center">My Followers</h2>

      <div className="follower-box flex flex-wrap items-center justify-between">
        {followers.map((follower) => (
          <div key={follower.id} className="follow-card">
            <div className="card-content flex flex-col items-center justify-between">
              <Image src={follower.image} alt={follower.name} width={50} height={50} className="f-img" />
              <div className="f-card-con flex flex-col items-start justify-between">
                <h3 className="top-fll-h3 text-black mb-0">{follower.name}</h3>
                <small className="f-id text-black">ID: {follower.id}</small>
                <small className="f-sm text-black">{follower.date}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
