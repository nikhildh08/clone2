

const EarningDashCard = () => {
    return (
      <div className="dash-earn-box mx-16 me-12 ">
        <div className="e-card playing flex items-center justify-center">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="infotop">
            <span className="total-earn flex items-center justify-between">
              Life Time Earnings : <span className="tot-amt">₹ 50826.60</span>
            </span>
            <button className="earn-button bg-warning">Show Wallet History</button>
          </div>
        </div>
  
        <div className="earn-cards-bx flex items-center justify-between flex-wrap">
          <div className="earn-card flex items-center justify-between">
            <span className="flex items-start flex-col justify-between sp-ic-amt">
              <i className="fa-solid fa-comments"></i>
              <h2 className="top-greet-h3 mb-0">Chat</h2>
            </span>
            <span className="earn-amt">₹ 42</span>
          </div>
          <div className="earn-card flex items-center justify-between">
            <span className="flex items-start flex-col justify-between sp-ic-amt">
              <i className="fa-solid fa-phone-volume"></i>
              <h2 className="top-greet-h3 mb-0">Call</h2>
            </span>
            <span className="earn-amt">₹ 42</span>
          </div>
          <div className="earn-card flex items-center justify-between">
            <span className="flex items-start flex-col justify-between sp-ic-amt">
              <i className="fa-solid fa-cart-arrow-down"></i>
              <h2 className="top-greet-h3 mb-0">Dhwani Shop</h2>
            </span>
            <span className="earn-amt">₹ 42</span>
          </div>
          <div className="earn-card flex items-center justify-between">
            <span className="flex items-start flex-col justify-between sp-ic-amt">
              <i className="fa-brands fa-google-play"></i>
              <h2 className="top-greet-h3 mb-0">Live Event</h2>
            </span>
            <span className="earn-amt">₹ 42</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default EarningDashCard;
  