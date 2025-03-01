"use client";
import styles from '@/app/components/sidebar/sidebar.module.css'
import Link from "next/link";
import { useState } from "react";
import { MdHome } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaWallet } from "react-icons/fa";
import { FaStore } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaMoneyCheck } from "react-icons/fa6";
import { IoIosGift } from "react-icons/io";
import { GiRemedy } from "react-icons/gi";
import { MdHourglassTop } from "react-icons/md";
import { FaHandHoldingHeart } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { RiUserFollowLine } from "react-icons/ri";
import Image from "next/image";
export default function Sidebar() {
  const [isOrderHistoryOpen, setOrderHistoryOpen] = useState(false);

  // Function to toggle dropdown visibility
  const toggleOrderHistory = () => {
    setOrderHistoryOpen(!isOrderHistoryOpen);
  };

  return (
   
    <div className="dash-asidebar p-5 pt-5 flex flex-col sticky top-0 " id="sidebar">
      <div className="mob-res-h-l flex items-center justify-between">
        <Link href="/dashboard/firstpage/">
          <div className="astro-logo">
            <Image
              src="/logo.png"
              alt="loading..."
              className="astrodash-img"
              width="120"
              height="50"
            />
          </div>
        </Link>
        <div className="dash-header">
          <button id="hamburger-close" className="hamburger-menu">
            <i className="fa-solid fa-xmark text-white"></i>
          </button>
        </div>
      </div>
      <ul className="menu-dash flex flex-col">
        <li className="menu-dash-li">
          <Link
            href="/dashboard/firstpage/"
            className="menu-dash-links flex items-center justify-start"
          >
            <i className="fa-solid fa-house">
              <MdHome />
            </i>{" "}
            Dashboard
          </Link>
        </li>
       

        <li className="menu-dash-li">
          <button
            className=" flex items-center space-x-2 text-white w-full text-left   rounded"
            onClick={toggleOrderHistory} // Toggle dropdown on button click
          >
            <i className="">
              <CgProfile />
            </i>
            <span className="text-sm">Order History</span>
          </button>

          {/* Dropdown list */}
          {isOrderHistoryOpen && (
            <ul className="pl-6 space-y-2">
              <li className="menu-dash-l">
                <Link
                  href="/dashboard/chathistory"
                  className=" flex items-center space-x-2 text-white rounded"
                >
                  <i className="fa-solid fa-comment">
                    <IoIosChatbubbles />
                  </i>
                  <span className="text-sm">Chat History</span>
                </Link>
              </li>
              <li className="menu-dash-l">
                <Link
                  href="/dashboard/callhistory"
                  className=" flex items-center space-x-2 text-white  rounded"
                >
                  <i className="fa-solid fa-phone">
                    <IoCall />
                  </i>
                  <span className="text-sm">Call History</span>
                </Link>
              </li>
              <li className="menu-dash-l">
                <Link
                  href="/dashboard/storehistory"
                  className=" flex items-center space-x-2 text-white  rounded"
                >
                  <i className="fa-solid fa-store">
                    <FaStore />
                  </i>
                  <span className="text-sm">Store History</span>
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li className="menu-dash-li">
          <Link
            href="/dashboard/earningdash"
            className="menu-dash-links flex items-center justify-start"
          >
            <i className="fa-solid fa-briefcase">
              <FaMoneyCheck />
            </i>{" "}
            Earnings
          </Link>
        </li>
        <li className="menu-dash-li">
          <Link
            href="/dashboard/wallet"
            className="menu-dash-links flex items-center justify-start"
          >
            <i className="">
              <FaWallet />
            </i>{" "}
            Wallet
          </Link>
        </li>
        <li className="menu-dash-li">
          <Link
            href="/dashboard/offer"
            className="menu-dash-links flex items-center justify-start"
          >
            <i className="fa-solid fa-gift">
              <IoIosGift />
            </i>{" "}
            Offers
          </Link>
        </li>
        <li className="menu-dash-li">
          <Link
            href="/dashboard/remedy"
            className="menu-dash-links flex items-center justify-start"
          >
            <i className="fa-regular fa-hourglass-half">
              <GiRemedy />
            </i>{" "}
            Remedies
          </Link>
        </li>
        <li className="menu-dash-li">
          <Link
            href="/dashboard/waitlist"
            className="menu-dash-links flex items-center justify-start"
          >
            <i className="fa-regular fa-hourglass-half">
              <MdHourglassTop />
            </i>{" "}
            Wait List
          </Link>
        </li>
        <li className="menu-dash-li">
          <Link
            href="/dashboard/myreview"
            className="menu-dash-links flex items-center justify-start"
          >
            <i className="fa-regular fa-hourglass-half">
              <FaHandHoldingHeart />
            </i>{" "}
            My Review
          </Link>
        </li>
        <li className="menu-dash-li">
          <Link
            href="/dashboard/livevent"
            className="menu-dash-links flex items-center justify-start"
          >
            <i className="fa-brands fa-google-play">
              <MdLiveTv />
            </i>{" "}
            Live Events
          </Link>
        </li>
        <li className="menu-dash-li">
          <Link
            href="/dashboard/myfollower"
            className="menu-dash-links flex items-center justify-start"
          >
            <i className="">
              <RiUserFollowLine />
            </i>{" "}
            My Followers
          </Link>
        </li>
        <li className="menu-dash-li">
          <Link
            href="#contact"
            className="menu-dash-links flex items-center justify-start"
          >
            <i className="">
              <MdOutlineSupportAgent />
            </i>{" "}
            Support Chat
          </Link>
        </li>
        <li className="menu-dash-li">
          <Link
           href="/dashboard/wallet"
            className="menu-dash-links flex items-center justify-start"
          >
            <i className="">
              <IoSettingsOutline />
            </i>{" "}
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
}
