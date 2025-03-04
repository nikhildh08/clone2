"use client";

import styles from "@/app/components/sidebar/sidebar.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MdHome, MdHourglassTop, MdLiveTv, MdOutlineSupportAgent } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaWallet, FaStore, FaMoneyCheck, FaHandHoldingHeart } from "react-icons/fa";
import { IoIosChatbubbles, IoIosGift } from "react-icons/io";
import { IoCall, IoSettingsOutline } from "react-icons/io5";
import { GiRemedy } from "react-icons/gi";
import { RiUserFollowLine } from "react-icons/ri";
import Image from "next/image";

export default function Sidebar() {
  const [isOrderHistoryOpen, setOrderHistoryOpen] = useState(false);
  const [isClient, setIsClient] = useState(false); // Prevent SSR mismatch

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  // if (!isClient) return null; // Avoid hydration errors by waiting for client render

  return (
    <div className="dash-asidebar mt-5 w-52 pt-3 flex flex-col sticky top-0" id="sidebar">
      <div className="mob-res-h-l flex items-center justify-between">
        <Link href="/dashboard/firstpage/">
          <div className="astro-logo">
            <Image src="/logo.png" alt="loading..." width={120} height={50} className="astrodash-img" priority />
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
          <Link href="/dashboard/firstpage/" className="menu-dash-links flex items-center">
            <MdHome className="w-5 h-5" />
            Dashboard
          </Link>
        </li>

        {/* Order History Dropdown */}
        <li className="menu-dash-li">
          <button className="menu-dash-links flex items-center w-full text-left" onClick={() => setOrderHistoryOpen(!isOrderHistoryOpen)}>
            <CgProfile className="w-5 h-5" />
            <span>Order History</span>
          </button>
          {isOrderHistoryOpen && (
            <ul className="pl-10 ">
              <li className="menu-dash-l">
                <Link href="/dashboard/chathistory" className="flex items-center space-x-2 space-y-2">
                  <IoIosChatbubbles className="text-white w-5 h-5" />
                  <span className="text-sm text-white">Chat History</span>
                </Link>
              </li>
              <li className="menu-dash-l">
                <Link href="/dashboard/callhistory" className="flex items-center space-x-2 space-y-2">
                <IoCall className="text-white w-5 h-5"/>
                  <span className="text-sm text-white">Call History</span>
                </Link>
              </li>
              <li className="menu-dash-l">
                <Link href="/dashboard/storehistory" className="flex items-center space-x-2 space-y-2">
                  <FaStore className="text-white w-5 h-5"/>
                  <span className="text-sm text-white">Store History</span>
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Other Sidebar Links */}
        <li className="menu-dash-li">
          <Link href="/dashboard/earningdash" className="menu-dash-links flex items-center">
            <FaMoneyCheck className="w-5 h-5" />
            Earnings
          </Link>
        </li>
        <li className="menu-dash-li">
          <Link href="/dashboard/wallet" className="menu-dash-links flex items-center">
            <FaWallet className="w-5 h-5" />
            Wallet
          </Link>
        </li>
        <li className="menu-dash-li">
          <Link href="/dashboard/offer" className="menu-dash-links flex items-center">
            <IoIosGift className="w-5 h-5" />
            Offers
          </Link>
        </li>
        <li className="menu-dash-li">
          <Link href="/dashboard/remedy" className="menu-dash-links flex items-center">
            <GiRemedy className="w-5 h-5" />
            Remedies
          </Link>
        </li>
        <li className="menu-dash-li">
          <Link href="/dashboard/waitlist" className="menu-dash-links flex items-center">
            <MdHourglassTop className="w-5 h-5" />
            Wait List
          </Link>
        </li>
        <li className="menu-dash-li">
          <Link href="/dashboard/myreview" className="menu-dash-links flex items-center">
            <FaHandHoldingHeart className="w-5 h-5" />
            My Review
          </Link>
        </li>
        <li className="menu-dash-li">
          <Link href="/dashboard/liveevent" className="menu-dash-links flex items-center">
            <MdLiveTv className="w-5 h-5" />
            Live Events
          </Link>
        </li>
        <li className="menu-dash-li">
          <Link href="/dashboard/myfollower" className="menu-dash-links flex items-center">
            <RiUserFollowLine className="w-5 h-5" />
            My Followers
          </Link>
        </li>
        <li className="menu-dash-li">
          <Link href="#contact" className="menu-dash-links flex items-center">
            <MdOutlineSupportAgent className="w-5 h-5" />
            Support Chat
          </Link>
        </li>
        <li className="menu-dash-li">
          <Link href="/dashboard/setting" className="menu-dash-links flex items-center">
            <IoSettingsOutline className="w-5 h-5" />
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
}
