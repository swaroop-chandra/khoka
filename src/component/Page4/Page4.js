import React from "react";
import { Link } from "react-router-dom";
import "./Page4.css";
import moment from "moment";
import { KhokaContext } from "../../App";

function Page4() {
  const [context, setContext] = React.useContext(KhokaContext);

  return (
    <div className="page1_container text_right">
      <div className="page_top_balance"></div>
      <h1 className="page4 blue">Terms & Conditions : Self Drive</h1>
      <input
        type="text"
        className="input_page4"
        placeholder="Type Name As Per Your ID"
      />
      <div className="flex">
        <input
          type="checkbox"
          name="condition"
          id="condition"
          className="page4_condition"
        />
        <p className="page4_p1">
          I have read all the
          <span className="blue"> Terms and Conditions </span>set forth in the
          Members Agreement and I hereby agree to all the Terms and Conditions
          put forth by <b> KHOKA SELF DRIVING PRIVATE LIMITED.</b>
        </p>
      </div>
      <div className="yellow_box" style={{ marginTop: "15px" }}>
        (Member – The rider who schedule the ride for specific duration)
      </div>
      <div className="page4_info light_grey">Vehicle Reserve Info</div>
      <p className="page2_lable margin-left10">Pickup Date & Time </p>
      <div
        className="page2_border_bottom margin-left10"
        style={{ width: "95%" }}
      >
        <p className="page2_loc_name">{`${context.timeDuration.pickupTime}, ${
          context.timeDuration.pickupDate.day
        } ${moment(context.timeDuration.pickupDate.month - 1).format("MMM")} ${
          context.timeDuration.pickupDate.year
        }`}</p>
      </div>
      <div className="page2_bill_box margin-left10" style={{ width: "95%" }}>
        <div className="flex_bottom">
          <p className="page2_duration">Duration -4 Hour</p>
        </div>
        <div className="page2_bill">
          <p className="page2_duration">Estimate Bill </p>
          <p className="page2_amount">268.0@ 67rs/h</p>
        </div>
      </div>
      <p className="page2_note red" style={{ marginLeft: "10px" }}>
        (Excluding Fuel)
      </p>
      <div className="page4_box green_background">
        No Hidden Charges- Including Service Tax and One Helmet.
        {/* <br /> */}
        for pillion rider helmet and security deposit, pay while pickup.
      </div>
      <div className="flex_between">
        <Link to="/home">
          <img
            src={window.location.origin + "/images/page2/back_button.svg"}
            alt="profile"
            className="back_button"
          />
        </Link>
        <Link to="/loading">
          <div className="page2_reg_button blue">Pay</div>
        </Link>
      </div>
    </div>
  );
}

export default Page4;
