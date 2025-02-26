"use client";
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
export default function Sidebar() {
  const [isOrderHistoryOpen, setOrderHistoryOpen] = useState(false);

  // Function to toggle dropdown visibility
  const toggleOrderHistory = () => {
    setOrderHistoryOpen(!isOrderHistoryOpen);
  };

  return (
    <div
      className="dash-asidebar  flex flex-col w-52 bg-[#2f1254] text-white rounded-xl mr-5 mt-5"
      id="sidebar"
    >
      <div className="flex items-center justify-between p-4">
        <Link href="/dashboard/">
          <div className="">
            <img src="/logo.png" alt="loading..." className="w-[120] h-[50]" />
          </div>
        </Link>
        <button id="hamburger-close" className="text-white">
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>

      <ul className="space-y-4 p-4">
        {/* Dashboard */}
        <li className="menu-dash-li">
          <Link
            href="/dashboard/"
            className=" flex items-center space-x-2 text-white p-2 rounded"
          >
            <i className=""><MdHome /></i>
            <span>Dashboard</span>
          </Link>
        </li>

        {/* Order History */}
        <li className="menu-dash-li">
          <button
            className=" flex items-center space-x-2 text-white w-full text-left  p-2 rounded"
            onClick={toggleOrderHistory} // Toggle dropdown on button click
          >
            <i className=""><CgProfile /></i>
            <span>Order History</span>
          </button>

          {/* Dropdown list */}
          {isOrderHistoryOpen && (
            <ul className="pl-6 space-y-2">
              <li className="menu-dash-li">
                <Link
                  href="/dashboard/chathistory"
                  className=" flex items-center space-x-2 text-white p-2 rounded"
                >
                  <i className="fa-solid fa-comment"><IoIosChatbubbles/></i>
                  <span>Chat History</span>
                </Link>
              </li>
              <li className="menu-dash-li">
                <Link
                  href="/dashboard/callhist"
                  className=" flex items-center space-x-2 text-white  p-2 rounded"
                >
                  <i className="fa-solid fa-phone"><IoCall/></i>
                  <span>Call History</span>
                </Link>
              </li>
              <li className="menu-dash-li">
                <Link
                  href="/dashboard/storehis"
                  className=" flex items-center space-x-2 text-white  p-2 rounded"
                >
                  <i className="fa-solid fa-store"><FaStore/></i>
                  <span>Store History</span>
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Earnings */}
        <li className="menu-dash-li">
          <Link
            href="/dashboard/earnings"
            className=" flex items-center space-x-2 text-white p-2 rounded"
          >
            <i className="fa-solid fa-briefcase"><FaMoneyCheck/></i>
            <span>Earnings</span>
          </Link>
        </li>

        {/* Wallet */}
        <li className="menu-dash-li">
          <Link
            href="/dashboard/wallet"
            className=" flex items-center space-x-2 text-white p-2 rounded"
          >
            <i className=""><FaWallet /></i>
            <span>Wallet</span>
          </Link>
        </li>

        {/* Offers */}
        <li className="menu-dash-li">
          <Link
            href="/dashboard/offer"
            className="flex items-center space-x-2 text-white p-2 rounded"
          >
            <i className="fa-solid fa-gift"><IoIosGift/></i>
            <span>Offers</span>
          </Link>
        </li>

        {/* Remedies */}
        <li className="menu-dash-li">
          <Link
            href="/dashboard/remedy"
            className="flex items-center space-x-2 text-white  p-2 rounded"
          >
            <i className="fa-regular fa-hourglass-half"><GiRemedy/></i>
            <span>Remedies</span>
          </Link>
        </li>

        {/* Wait List */}
        <li className="menu-dash-li">
          <Link
            href="/dashboard/waitlist"
            className=" flex items-center space-x-2 text-white p-2 rounded"
          >
            <i className="fa-regular fa-hourglass-half"><MdHourglassTop/></i>
            <span>Wait List</span>
          </Link>
        </li>

        {/* My Review */}
        <li className="menu-dash-li">
          <Link
            href="/dashboard/myreview"
            className="flex items-center space-x-2 text-white  p-2 rounded"
          >
            <i className="fa-solid fa-hand-holding-heart">< FaHandHoldingHeart/></i>
            <span>My Review</span>
          </Link>
        </li>

        {/* Live Events */}
        <li className="menu-dash-li">
          <Link
            href="/dashboard/livent"
            className="flex items-center space-x-2 text-white  p-2 rounded"
          >
            <i className="fa-brands fa-google-play"><MdLiveTv/></i>
            <span>Live Events</span>
          </Link>
        </li>

        {/* My Followers */}
        <li className="menu-dash-li">
          <Link
            href="/dashboard/myfollow"
            className=" flex items-center space-x-2 text-white p-2 rounded"
          >
            <i className="fa-solid fa-users-line"></i>
            <span>My Followers</span>
          </Link>
        </li>

        {/* Support Chat */}
        <li className="menu-dash-li">
          <Link
            href="/dashboard/suppo"
            className=" flex items-center space-x-2 text-white p-2 rounded"
          >
            <i className="fa-solid fa-headset"><MdOutlineSupportAgent/></i>
            <span>Support Chat</span>
          </Link>
        </li>

        {/* Settings */}
        <li className="menu-dash-li">
          <Link
            href="/dashboard/setting"
            className=" flex items-center space-x-2 text-white  p-2 rounded"
          >
            <i className="fa-solid fa-sliders"><IoSettingsOutline/></i>
            <span>Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
