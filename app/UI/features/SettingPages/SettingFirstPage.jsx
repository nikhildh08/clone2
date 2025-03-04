"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBuilding, FaAddressBook, FaUser, FaLock } from "react-icons/fa";

export default function Settings() {
  const [showUpdatePopup, setShowUpdatePopup] = useState(false);
  const [showImpPopup, setShowImpPopup] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <>
    <div className="dash-setting flex items-center justify-center flex-col mx-16">
      <h2 className="wallet-head text-center">Settings</h2>
      <div className="card-box flex items-start flex-wrap px-1 justify-center">
        <a href="#" className="set-a">
          <div className="set-card-dash bg-green-500 bg-opacity-75 flex flex-col items-center justify-between">
            <h1 className="card-h1">Bank Details</h1>
            <span className="set-img">
              <FaBuilding className="text-warning" />
            </span>
          </div>
        </a>

        <a href="#" className="set-a" onClick={() => setShowUpdatePopup(true)}>
          <div className="set-card-dash bg-blue-500 bg-opacity-75 flex flex-col items-center justify-between">
            <h1 className="card-h1">Update Number</h1>
            <span className="set-img">
              <FaAddressBook className="text-warning" />
            </span>
          </div>
        </a>

        <a href="#" className="set-a" onClick={() => setShowImpPopup(true)}>
          <div className="set-card-dash bg-yellow-400 bg-opacity-75 flex flex-col items-center justify-between">
            <h1 className="card-h1">Important Numbers</h1>
            <span className="set-img">
              <FaAddressBook className="text-warning" />
            </span>
          </div>
        </a>

        <Link href="setting/profilesetting" className="set-a">
          <div className="set-card-dash bg-red-500 bg-opacity-75 flex flex-col items-center justify-between">
            <h1 className="card-h1">My Profile</h1>
            <span className="set-img">
              <FaUser className="text-warning" />
            </span>
          </div>
        </Link>

        <a href="#" className="set-a">
          <div className="set-card-dash bg-orange-500 bg-opacity-75 flex flex-col items-center justify-between">
            <h1 className="card-h1">Terms & Conditions</h1>
            <span className="set-img">
              <FaUser className="text-warning" />
            </span>
          </div>
        </a>

        <a href="./trainvid.html" className="set-a">
          <div className="set-card-dash bg-green-400 bg-opacity-75 flex flex-col items-center justify-between">
            <h1 className="card-h1">Training Videos</h1>
            <span className="set-img">
              <FaUser className="text-warning" />
            </span>
          </div>
        </a>

        <a href="./pricechn.html" className="set-a">
          <div className="set-card-dash bg-gray-400 bg-opacity-75 flex flex-col items-center justify-between">
            <h1 className="card-h1">Price Request</h1>
            <span className="set-img">
              <FaUser className="text-warning" />
            </span>
          </div>
        </a>

        <a href="#" className="set-a">
          <div className="set-card-dash bg-indigo-400 bg-opacity-75 flex flex-col items-center justify-between">
            <h1 className="card-h1">Passwords</h1>
            <span className="set-img">
              <FaLock className="text-warning" />
            </span>
          </div>
        </a>
      </div>

      {/* Update Number Popup */}
      {showUpdatePopup && (
        <div className="update-popup">
          <form className="update-container">
            <div className="update-top">
              <div className="h1-x flex items-center justify-between">
                <h1 className="up-phone mb-0">Update Phone Number</h1>
                <i className="fa-solid fa-xmark pe-auto" onClick={() => setShowUpdatePopup(false)}></i>
              </div>
              <p className="not-cc mb-0">
                Call and chat notifications will be sent to these numbers.
              </p>
            </div>

            {/* Primary Number */}
            <div className="up-pri flex items-start flex-col">
              <label className="pri-lab">Enter Primary Number</label>
              <div className="pri-input flex items-center justify-between">
                <select className="form-select up-sel">
                  <option className="up-op" >+91 India</option>
                </select>
                <input type="tel" className="form-control up-sel" />
                <button type="submit" className="btn btn-primary up-sel">Submit</button>
              </div>
            </div>

            {/* Secondary Number */}
            <div className="up-pri flex items-start flex-col">
              <label className="pri-lab">Enter Secondary Number</label>
              <div className="pri-input flex items-center justify-between">
                <select className="form-select up-sel">
                  <option className="up-op" >+91 India</option>
                </select>
                <input type="tel" className="form-control up-sel" />
                <button type="submit" className="btn btn-primary up-sel">Submit</button>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* Important Numbers Popup */}
      {showImpPopup && (
        <div className="impnum-popup">
          <form className="impnum-container">
            <div className="update-top">
              <div className="h1-x flex items-center justify-between">
                <h1 className="up-phone mb-0">Important Phone Number</h1>
                <i className="fa-solid fa-xmark pe-auto" onClick={() => setShowImpPopup(false)}></i>
              </div>
              <p className="not-cc mb-0">
                You will be receiving call and chat alerts from these numbers. Save these numbers to avoid any confusion.
              </p>
            </div>
          </form>
        </div>
      )}

      {/* Logout Options */}
      
    </div>
    <div className="sch-live-eve flex items-center justify-center py-5">
    <div className="l-set-button flex items-center justify-between">
      <a href="#" className="sch-eve">Remove Data and Logout</a>
      <a href="#" className="live-eve">Remove Data and Logout from all devices</a>
    </div>
  </div>
  </>
  );
}
