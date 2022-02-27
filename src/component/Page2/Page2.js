import React from "react";
import { Link } from "react-router-dom";
import "./Page2.css";
import moment from "moment";

import { KhokaContext } from "../../App";

function Page2() {
  const [context, setContext] = React.useContext(KhokaContext);

  console.log(context.timeDuration, "object");

  return (
    <div className="page1_container">
      <div className="page_top_balance"></div>
      <div className="page1_box_blue">
        <div className="page1_row1">
          <img
            src={window.location.origin + "/images/shield.svg"}
            alt="profile"
            className="shield_image"
          />
          <p className="page1_p1">Every Trip is Protected by KHOKA</p>
        </div>
        <div className="page1_row1">
          Pick Your <span className="yellow"> Rental Vehicle</span>
        </div>
        <div className="page1_row1 size-m">
          #Discover <span className="blue"> North-East</span>
          <img
            src={window.location.origin + "/images/shape.svg"}
            alt="profile"
            className="shape_image"
          />
        </div>
      </div>

      <div className="register_box">
        <h3 className="page2_header">Vehicle Reserve Info</h3>
        <p className="page2_lable margin_left">Location</p>
        <div
          className="page2_border_bottom margin_left"
          style={{ marginBottom: "15px" }}
        >
          <p className="page2_loc_name">IIT Guwahati, Khoka Market</p>
        </div>
        <p className="page2_lable margin_left">Pickup Date & Time </p>
        <div className="page2_border_bottom margin_left">
          <p className="page2_loc_name">
            {`${context.timeDuration.pickupTime}, ${
              context.timeDuration.pickupDate.day
            } ${moment(context.timeDuration.pickupDate.month - 1).format(
              "MMM"
            )} ${context.timeDuration.pickupDate.year}`}
          </p>
        </div>
        <div className="page2_bill_box margin_left">
          <div className="flex_bottom">
            <p className="page2_duration">Duration -4 Hour</p>
          </div>
          <div className="page2_bill">
            <p className="page2_duration">Estimate Bill </p>
            <p className="page2_amount">268.0@ 67rs/h</p>
          </div>
        </div>
        <p className="page2_note red" style={{ marginLeft: "25px" }}>
          (Excluding Fuel)
        </p>
        <p className="page2_note1 green_background">
          No Hidden Charges- Including Service Tax and Helmet
        </p>
        <div className="flex_between">
          <Link to="/home">
            <img
              src={window.location.origin + "/images/page2/back_button.svg"}
              alt="profile"
              className="back_button"
            />
          </Link>
          <Link to="/process">
            <div className="page2_reg_button blue">Register / Pay</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page2;
