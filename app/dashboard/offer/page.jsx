"use client"
import { useState } from 'react';
import Image from 'next/image';

const Offers = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState('all'); // 'all' corresponds to "Call & Chats" tab

  // Function to handle tab switching
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="card-panel-permi flex items-center justify-center flex-col mx-10 ">
      <h2 className="wallet-head text-center m-2">Offers</h2>

      <div className="card-body product-hr ">
        <form action="" method="post" id="assign_call_charges" name="assign_call_charges">
          <ul className="nav nav-pills pr-list flex items-center justify-center" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className={`nav-link p-r-a flex items-center ${activeTab === 'all' ? 'active' : ''}`}
                id="call-tab-charges"
                onClick={() => handleTabClick('all')}
              >
                <span className="pr-txt ">Call & Chats</span>
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className={`nav-link p-r-a flex items-center ${activeTab === 'status' ? 'active' : ''}`}
                id="video-call-tab-charges"
                onClick={() => handleTabClick('status')}
              >
                <span className="pr-txt">Others</span>
              </a>
            </li>
          </ul>
        </form>

        <hr />
        <div className="tab-content b-feed-user" id="pills-tabContent">
          {/* Tab for "Call & Chats" */}
          {activeTab === 'all' && (
            <div className="tab-pane fade show active h-screen" id="all">
              <div className="astro-main-ser flex flex-wrap justify-between">
                {/* Content for "Call & Chats" */}
                <div className="lg:w-5/12 panel-access-box flex items-center justify-between flex-col">
                  <div className="bg-glass flex items-center justify-between flex-col">
                    <div className="sp-off flex flex-wrap justify-between">
                      <div className="sp-fl flex items-center justify-between">
                        <span className="p-a-t flex items-center">
                          <span className="p-a-type">Offer Name : </span>
                          <h3 className="top-greet mb-0">75%</h3>
                        </span>
                        <span className="p-a-t flex items-center">
                          <span className="p-a-type">Display Name :</span>
                          <h3 className="top-greet mb-0">75%</h3>
                        </span>
                      </div>
                      <div className="sp-fl flex items-center justify-between">
                        <span className="p-a-t flex items-center">
                          <span className="p-a-type">User Type : </span>
                          <h3 className="top-greet mb-0">All User</h3>
                        </span>
                        <span className="p-a-t flex items-center">
                          <span className="p-a-type">India : My Share :</span>
                          <h3 className="top-greet mb-0">$ 2.00</h3>
                        </span>
                      </div>
                      <div className="sp-fl flex items-center justify-between">
                        <span className="p-a-t flex items-center">
                          <span className="p-a-type">At Share : </span>
                          <h3 className="top-greet mb-0">$ 2.00</h3>
                        </span>
                        <span className="p-a-t flex items-center">
                          <span className="p-a-type">Customer Pays :</span>
                          <h3 className="top-greet mb-0">$ 2.00</h3>
                        </span>
                      </div>
                    </div>
                    <span className="p-a-t flex items-center">
                      <span className="p-a-type">Status : </span>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckDefault"
                        />
                      </div>
                    </span>
                  </div>
                </div>
                {/* Repeat for other panels as needed */}

                <div className="lg:w-5/12 panel-access-box flex items-center justify-between flex-col">
                  <div className="bg-glass flex items-center justify-between flex-col">
                    <div className="sp-off flex flex-wrap justify-between">
                      <div className="sp-fl flex items-center justify-between">
                        <span className="p-a-t flex items-center">
                          <span className="p-a-type">Offer Name : </span>
                          <h3 className="top-greet mb-0">75%</h3>
                        </span>
                        <span className="p-a-t flex items-center">
                          <span className="p-a-type">Display Name :</span>
                          <h3 className="top-greet mb-0">75%</h3>
                        </span>
                      </div>
                      <div className="sp-fl flex items-center justify-between">
                        <span className="p-a-t flex items-center">
                          <span className="p-a-type">User Type : </span>
                          <h3 className="top-greet mb-0">All User</h3>
                        </span>
                        <span className="p-a-t flex items-center">
                          <span className="p-a-type">India : My Share :</span>
                          <h3 className="top-greet mb-0">$ 2.00</h3>
                        </span>
                      </div>
                      <div className="sp-fl flex items-center justify-between">
                        <span className="p-a-t flex items-center">
                          <span className="p-a-type">At Share : </span>
                          <h3 className="top-greet mb-0">$ 2.00</h3>
                        </span>
                        <span className="p-a-t flex items-center">
                          <span className="p-a-type">Customer Pays :</span>
                          <h3 className="top-greet mb-0">$ 2.00</h3>
                        </span>
                      </div>
                    </div>
                    <span className="p-a-t flex items-center">
                      <span className="p-a-type">Status : </span>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckDefault"
                        />
                      </div>
                    </span>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="lg:w-5/12 panel-access-box flex items-center justify-between flex-col">
                  <div className="bg-glass flex items-center justify-between flex-col">
                    <div className="sp-off flex flex-wrap justify-between">
                      <div className="sp-fl flex items-center justify-between">
                        <span className="p-a-t flex items-center">
                          <span className="p-a-type">Offer Name : </span>
                          <h3 className="top-greet mb-0">75%</h3>
                        </span>
                        <span className="p-a-t flex items-center">
                          <span className="p-a-type">Display Name :</span>
                          <h3 className="top-greet mb-0">75%</h3>
                        </span>
                      </div>
                      <div className="sp-fl flex items-center justify-between">
                        <span className="p-a-t flex items-center">
                          <span className="p-a-type">User Type : </span>
                          <h3 className="top-greet mb-0">All User</h3>
                        </span>
                        <span className="p-a-t flex items-center">
                          <span className="p-a-type">India : My Share :</span>
                          <h3 className="top-greet mb-0">$ 2.00</h3>
                        </span>
                      </div>
                      <div className="sp-fl flex items-center justify-between">
                        <span className="p-a-t flex items-center">
                          <span className="p-a-type">At Share : </span>
                          <h3 className="top-greet mb-0">$ 2.00</h3>
                        </span>
                        <span className="p-a-t flex items-center">
                          <span className="p-a-type">Customer Pays :</span>
                          <h3 className="top-greet mb-0">$ 2.00</h3>
                        </span>
                      </div>
                    </div>
                    <span className="p-a-t flex items-center">
                      <span className="p-a-type">Status : </span>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckDefault"
                        />
                      </div>
                    </span>
                  </div>
                </div>

                {/* card 4 */}
                <div className="lg:w-5/12 panel-access-box flex items-center justify-between flex-col">
                  <div className="bg-glass flex items-center justify-between flex-col">
                    <div className="sp-off flex flex-wrap justify-between">
                      <div className="sp-fl flex items-center justify-between">
                        <span className="p-a-t flex items-center">
                          <span className="p-a-type">Offer Name : </span>
                          <h3 className="top-greet mb-0">75%</h3>
                        </span>
                        <span className="p-a-t flex items-center">
                          <span className="p-a-type">Display Name :</span>
                          <h3 className="top-greet mb-0">75%</h3>
                        </span>
                      </div>
                      <div className="sp-fl flex items-center justify-between">
                        <span className="p-a-t flex items-center">
                          <span className="p-a-type">User Type : </span>
                          <h3 className="top-greet mb-0">All User</h3>
                        </span>
                        <span className="p-a-t flex items-center">
                          <span className="p-a-type">India : My Share :</span>
                          <h3 className="top-greet mb-0">$ 2.00</h3>
                        </span>
                      </div>
                      <div className="sp-fl flex items-center justify-between">
                        <span className="p-a-t flex items-center">
                          <span className="p-a-type">At Share : </span>
                          <h3 className="top-greet mb-0">$ 2.00</h3>
                        </span>
                        <span className="p-a-t flex items-center">
                          <span className="p-a-type">Customer Pays :</span>
                          <h3 className="top-greet mb-0">$ 2.00</h3>
                        </span>
                      </div>
                    </div>
                    <span className="p-a-t flex items-center">
                      <span className="p-a-type">Status : </span>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckDefault"
                        />
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab for "Others" */}
          {activeTab === 'status' && (
            <div className="tab-pane fade show active  flex justify-center place-items-center  " id="status">
              <div className="bpr-sec-in">
                <div className="ann-content flex items-center justify-center flex-col">
                 
                  <span className="ann-sp">No Announcement Yet</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Offers;
