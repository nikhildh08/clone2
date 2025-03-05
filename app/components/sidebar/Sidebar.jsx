"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { 
  MdHome, MdHourglassTop, MdLiveTv, MdOutlineSupportAgent 
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaWallet, FaStore, FaMoneyCheck, FaHandHoldingHeart } from "react-icons/fa";
import { IoIosChatbubbles, IoIosGift } from "react-icons/io";
import { IoCall, IoSettingsOutline } from "react-icons/io5";
import { GiRemedy } from "react-icons/gi";
import { RiUserFollowLine } from "react-icons/ri";

const menuItems = [
  { href: "/dashboard/firstpage", label: "Dashboard", icon: <MdHome /> },
  { 
    label: "Order History", 
    icon: <CgProfile />, 
    subItems: [
      { href: "/dashboard/chathistory", label: "Chat History", icon: <IoIosChatbubbles /> },
      { href: "/dashboard/callhistory", label: "Call History", icon: <IoCall /> },
      { href: "/dashboard/storehistory", label: "Store History", icon: <FaStore /> },
    ]
  },
  { href: "/dashboard/earningdash", label: "Earnings", icon: <FaMoneyCheck /> },
  { href: "/dashboard/wallet", label: "Wallet", icon: <FaWallet /> },
  { href: "/dashboard/offer", label: "Offers", icon: <IoIosGift /> },
  { href: "/dashboard/remedy", label: "Remedies", icon: <GiRemedy /> },
  { href: "/dashboard/waitlist", label: "Wait List", icon: <MdHourglassTop /> },
  { href: "/dashboard/myreview", label: "My Review", icon: <FaHandHoldingHeart /> },
  { href: "/dashboard/liveevent", label: "Live Events", icon: <MdLiveTv /> },
  { href: "/dashboard/myfollower", label: "My Followers", icon: <RiUserFollowLine /> },
  { href: "#contact", label: "Support Chat", icon: <MdOutlineSupportAgent /> },
  { href: "/dashboard/setting", label: "Settings", icon: <IoSettingsOutline /> }
];

export default function Sidebar() {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <aside className="w-52 sticky top-1 rounded-e-xl mt-5 mb-2 pt-3 flex flex-col bg-[#2f1254] text-white space-x-2">
      {/* Logo */}
      <div className="flex items-center justify-between px-4 mb-4 ">
        <Link href="/dashboard/firstpage">
          <Image src="/logo.png" alt="Logo" width={120} height={50} priority />
        </Link>
      </div>

      {/* Menu */}
      <ul className="space-y-2 py-2 px-2">
        {menuItems.map((item, index) => (
          <li key={index} className="relative">
            {item.subItems ? (
              <div 
                className="relative"
                onMouseEnter={() => setOpenDropdown(false)}
                onMouseLeave={() => setOpenDropdown(false)}
              >
                <button 
                  className="flex items-center w-full px-4 py-2 text-left rounded-xl hover:bg-[#7E60BF] border-b border-[#77777742]"
                  onClick={() => setOpenDropdown(!openDropdown)}
                >
                  <span className="text-lg mr-2">{item.icon}</span>
                  {item.label}
                </button>
                {openDropdown && (
                  <ul className="pl-8 space-y-1">
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link href={subItem.href} className="flex items-center px-4 py-1 text-sm rounded-md hover:bg-[#7E60BF] border-b border-[#77777742]">
                          <span className="text-base mr-2">{subItem.icon}</span>
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link href={item.href} className="flex items-center px-4 py-2 rounded-xl hover:bg-[#7E60BF] border-b border-[#77777742]">
                <span className="text-lg mr-2">{item.icon}</span>
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}
