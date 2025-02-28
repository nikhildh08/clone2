"use client"
import { useState } from "react";
const FeedbackBoost = () => {
  // State to manage the feedback text and switch states
  const [feedback, setFeedback] = useState("");
  const [boostSettings, setBoostSettings] = useState({
    call: false,
    chat: false,
    live: false
  });

  // Handle feedback change
  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  // Handle boost toggle changes
  const handleBoostToggle = (type) => {
    setBoostSettings((prevState) => ({
      ...prevState,
      [type]: !prevState[type]
    }));
  };

  return (
    <div className="feedback-boost flex justify-between gap-2">
      {/* Feedback section */}
      <div className="astro-feed flex flex-col w-full lg:w-2/3">
        <div className="feed-top flex-col flex">
          <h3 className="feed-h3">Feedback to the Dhwani Astro!</h3>
          <span className="feed-sp">
            "Kindly share your feedback to help us enhance our services."
          </span>
        </div>
        <div className="feed-text">
          <textarea
            name="textarea"
            className="feed-area"
            placeholder="Type your review here..."
            value={feedback}
            onChange={handleFeedbackChange}
          />
        </div>
        <div className="feed-btn flex self-center">
          <button className="f-btn">Submit</button>
        </div>
      </div>

      {/* Boost options section */}
      <div className="astro-boost w-full lg:w-1/4">
        <div className="boost-top">
          <i className="fa-solid fa-rocket"></i> Autoboost your profile
        </div>
        <div className="boost-panel">
          {/* Boost settings options */}
          {["call", "chat", "live"].map((type) => (
            <div
              key={type}
              className={`boost-${type} flex items-center justify-between`}
            >
              <span className="flex items-center boost-sp">
                <svg
                  className="svgIcon-boost"
                  viewBox="0 0 512 512"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z" />
                </svg>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </span>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id={`boostSwitch${type}`}
                  checked={boostSettings[type]}
                  onChange={() => handleBoostToggle(type)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedbackBoost;
