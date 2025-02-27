import styles from "@/app/dashboard/firstpage/firstpage.module.css";
export default function page() {
  return (
    <>
      <div className="mx-16 me-40">
        <div
          className={`${styles["home-main-cards"]} flex items-center justify-between flex-wrap`}
        >
          <div className={`${styles["card-main"]} bg-opacity-25`}>
            <span className={styles["card-sp"]}>
              Exclusive deals designed to welcome new users.
            </span>
            <div
              className={`${styles["card-charge"]} flex items-center justify-between`}
            >
              <div
                className={`${styles["org-charge"]} flex items-center flex-col justify-between`}
              >
                <h3 className={styles["charge-h"]}>
                  {" "}
                  "Dhwani Astro's fees from users"
                </h3>
                <span className={styles["char-sp-in"]}>
                  <i className="fa-solid fa-indian-rupee-sign"></i> 0/5 per min
                </span>
              </div>
              <div
                className={`${styles["astro-get"]} flex items-center flex-col justify-between`}
              >
                <h3 className={styles["charge-h"]}> "You Get"</h3>
                <span className={styles["char-sp-in"]}>
                  <i className="fa-solid fa-indian-rupee-sign"></i> 5.0 per min
                </span>
              </div>
            </div>
            <div className={styles["po-panel"]}>
              <div
                className={`${styles["po-call"]} flex items-center justify-between`}
              >
                <span className={`${styles["po-sp"]} flex items-center`}>
                  PO@0 - Free Users
                </span>
                <div
                  className={`${styles[`form-check`]} ${styles[`form-switch`]}`}
                >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                  />
                </div>
              </div>
              <div
                className={`${styles["po-chat"]} flex items-center justify-between`}
              >
                <span className={`${styles["po-sp"]} flex items-center`}>
                  PO@5 - Paid Users
                </span>
                <div
                  className={`${styles[`form-check`]} ${styles[`form-switch`]}`}
                >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                  />
                </div>
              </div>
            </div>
            <p className={`${styles["card-p"]} mb-0`}>
              PO limits get reset at 6am IST. We calculate PO sessions from 6am
              to 5:59am.
            </p>
          </div>

          <div className={`${styles["card-main"]} bg-green-500 bg-opacity-25`}>
            <span className={styles["card-sp"]}> Notice Board</span>
            <p className={`${styles["card-p"]} mb-0`}>
              Dear Respected Astrologers,
              <br /> Greetings! <br />
              Astrology is an ancient science that connects the movements of
              celestial bodies with events and experiences on Earth.
              <br />
              <b>Dhwani Astro</b>
            </p>
            <a
              href="#"
              className={`${styles["a-btn-vw"]} flex items-center justify-center text-decoration-none`}
            >
              <button className="bg-green-500 bg-opacity-50">View All</button>
            </a>
          </div>

          <div className={`${styles["card-main"]} bg-blue-500 bg-opacity-25`}>
            <span className={styles["card-sp"]}> Important Policies</span>
            <p className={`${styles["card-p"]} mb-0`}>
              Dear Astrologers,
              <br /> Please adhere to the following policies to ensure a
              seamless and professional experience for everyone:
              <br />
              - Always maintain the privacy and confidentiality of your clients'
              information and readings. <br />
              - Do not disclose personal details or insights without explicit
              consent. <br />
              - Clearly communicate your service fees upfront to avoid
              misunderstandings. <br />
              - No hidden charges or unsolicited upselling of services. <br />
              Warm regards,
              <br />
              <b>Dhwani Astro </b>
            </p>
          </div>
        </div>

        
        <div className="card-top-sm-box flex items-center justify-between flex-wrap">
          {/* First card dash */}
          <div className="card-dash flex flex-col items-center justify-between">
            <h1 className="card-h1">Training Videos</h1>
            <button className="card-btn">Click Here</button>
          </div>

          {/* Second card dash */}
          <div className="card-dash flex flex-col items-center justify-between">
            <h1 className="card-h1">Check Your Performance</h1>
            <button className="card-btn">Click Here</button>
          </div>

          {/* Third card dash */}
          <div className="card-dash flex flex-col align-center justify-between">
            <h1 className="card-h1">Ratings</h1>
            <span className="rev-sp">
              <div className="star-rating-rev">
                <input type="radio" id="star5" name="stars" value="5" />
                <label htmlFor="star5" title="5 stars">
                  &#9733;
                </label>
                <input type="radio" id="star4" name="stars" value="4" />
                <label htmlFor="star4" title="4 stars">
                  &#9733;
                </label>
                <input type="radio" id="star3" name="stars" value="3" />
                <label htmlFor="star3" title="3 stars">
                  &#9733;
                </label>
                <input type="radio" id="star2" name="stars" value="2" />
                <label htmlFor="star2" title="2 stars">
                  &#9733;
                </label>
                <input type="radio" id="star1" name="stars" value="1" />
                <label htmlFor="star1" title="1 star">
                  &#9733;
                </label>
              </div>
            </span>
          </div>

          {/* Fourth card dash */}
          <div className="card-dash flex flex-col items-center justify-between">
            <h1 className="card-h1">Recommended Products</h1>
            <button className="card-btn">Click Here</button>
          </div>
        </div>

        <div className="card-panel-permi">
          <h2 className="wallet-head text-center">Manage Services</h2>
          <div className="astro-main-ser flex items-center flex-wrap justify-between">
            {/* First Panel Card */}
            <div className="col-lg-5 panel-access-card flex items-center justify-between">
              <div className="man-top flex items-center justify-between">
                <span className="p-a-t flex items-start flex-col">
                  <span className="p-a-type">Type</span>
                  <h3 className="top-greet">PROMO (Serve/Limit)</h3>
                </span>
                <span className="p-a-t flex items-start flex-col">
                  <span className="p-a-type">Price</span>
                  <h3 className="top-greet">0/10 ($20)</h3>
                </span>
                <span className="p-a-t flex items-start flex-col">
                  <span className="p-a-type">Status</span>
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
              <span className="online-type bg-success bg-opacity-50">
                Active
              </span>
            </div>

            {/* Second Panel Card */}
            <div className="col-lg-5 panel-access-card flex items-center justify-between">
              <div className="man-top flex items-center justify-between">
                <span className="p-a-t flex items-start flex-col">
                  <span className="p-a-type">Type</span>
                  <h3 className="top-greet">PROMO (Serve/Limit)</h3>
                </span>
                <span className="p-a-t flex items-start flex-col">
                  <span className="p-a-type">Price</span>
                  <h3 className="top-greet">0/10 ($20)</h3>
                </span>
                <span className="p-a-t flex items-start flex-col">
                  <span className="p-a-type">Status</span>
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
              <span className="online-type bg-success bg-opacity-50">
                Active
              </span>
            </div>

            {/* Third Panel Card */}
            <div className="col-lg-5 panel-access-card flex items-center justify-between">
              <div className="man-top flex items-center justify-between">
                <span className="p-a-t flex items-start flex-col">
                  <span className="p-a-type">Type</span>
                  <h3 className="top-greet">PROMO (Serve/Limit)</h3>
                </span>
                <span className="p-a-t flex items-start flex-col">
                  <span className="p-a-type">Price</span>
                  <h3 className="top-greet">0/10 ($20)</h3>
                </span>
                <span className="p-a-t flex items-start flex-col">
                  <span className="p-a-type">Status</span>
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
              <span className="online-type bg-success bg-opacity-50">
                Active
              </span>
            </div>

            <div className="col-lg-5 panel-access-card flex items-center justify-between">
              <div className="man-top flex items-center justify-between">
                <span className="p-a-t flex items-start flex-col">
                  <span className="p-a-type">Type</span>
                  <h3 className="top-greet">PROMO (Serve/Limit)</h3>
                </span>
                <span className="p-a-t flex items-start flex-col">
                  <span className="p-a-type">Price</span>
                  <h3 className="top-greet">0/10 ($20)</h3>
                </span>
                <span className="p-a-t flex items-start flex-col">
                  <span className="p-a-type">Status</span>
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
              <span className="online-type bg-success bg-opacity-50">
                Active
              </span>
            </div>
          </div>
        </div>

        <div className="dash-tiles-box flex justify-between flex-col">
          <hr style={{ margin: ".2rem" }} />
          <div className="astro-report-assist flex items-center justify-between flex-wrap">
            <div className="astro-time">
              <i className="fa-solid fa-calendar-days"></i> Weekly Time Table
            </div>
            <div className="astro-time">
              <i className="fa-solid fa-comments"></i> Chat with Assistant
            </div>
            <div className="astro-time">
              <i className="fa-solid fa-circle-exclamation"></i> Report an
              Astrologer
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
