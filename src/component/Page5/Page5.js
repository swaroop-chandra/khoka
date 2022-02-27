import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Page5.css";

function Page5() {
  const [state, setstate] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setstate(false);
    }, 2000);
  }, []);
  return (
    <div className="page1_container padding_side20">
      <div className="page_top_balance"></div>
      {state ? (
        <div className="payment">
          <h1 className="page5 blue">Payment Gatway</h1>
          <div className="page4_info grey" style={{ marginTop: "12vh" }}>
            Requesting Rs 268 Paid
          </div>
          <img
            src={window.location.origin + "/images/page2/6607-loading-drop.gif"}
            alt="profile"
            className="gif_loading"
          />
          <p className="page5_p1">Authorizing it may takes few minutes</p>
        </div>
      ) : (
        <div className="payment">
          <img
            src={window.location.origin + "/images/page2/success_pay.gif"}
            alt="profile"
            className="gif_loading"
            style={{ marginTop: "19vh" }}
          />
          <div className="page4_info grey">Rs 268 Paid</div>
          <p className="page5_p2">Reference ID xxxxxxxxxx</p>
          <br />
          {setTimeout(() => {
            window.location.href = "http://localhost:3000/profile";
          }, 2000)}
        </div>
      )}
    </div>
  );
}

export default Page5;
