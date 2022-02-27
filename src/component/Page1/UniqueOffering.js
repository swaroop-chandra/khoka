import React from "react";
import "./UniqueOffering.css";

function UniqueOffering() {
  return (
    <div className="page1_row1 flex_column">
      <h4 className="page1_h4 black">Let's Explore the city with</h4>
      <h4 className="page1_h4 blue_note">Our Unique Offerings</h4>
      <div className="unique_row1 margin_top">
        <img
          src={window.location.origin + "/images/unique_offering/keyBlue.svg"}
          alt="profile"
          className="unique_images"
        />
        <div className="unique_col1">
          <h4 className="unique_p4 blue_note">Quick & Easy Pickup</h4>
          <p className="unique_p1">
            Your vehicle is always ready to go when you arrive or wherever you
            demand.
          </p>
        </div>
      </div>
      <div className="unique_row1">
        <img
          src={window.location.origin + "/images/unique_offering/honest.svg"}
          alt="profile"
          className="unique_images"
        />
        <div className="unique_col1">
          <h4 className="unique_p4 blue_note">Honest Pricing</h4>
          <p className="unique_p1">
            Upfront affordable pricing no bombshell on billing.
          </p>
        </div>
      </div>
      <div className="unique_row1">
        <img
          src={window.location.origin + "/images/unique_offering/angel.svg"}
          alt="profile"
          className="unique_images"
        />
        <div className="unique_col1">
          <h4 className="unique_p4 blue_note">Independency</h4>
          <p className="unique_p1">
            Explore as much as you can, reroute whenever you like, no time
            limit.
          </p>
        </div>
      </div>
      <div className="unique_row1">
        <img
          src={window.location.origin + "/images/unique_offering/rupees.svg"}
          alt="profile"
          className="unique_images"
        />
        <div className="unique_col1">
          <h4 className="unique_p4 blue_note">Refund on Filling Extra Fuel</h4>
          <p className="unique_p1">
            You will receive a refund if you provide the vehicle with more fuel
            than we initially provided.
          </p>
        </div>
      </div>
      <div className="unique_row1">
        <img
          src={window.location.origin + "/images/unique_offering/noLimit.svg"}
          alt="profile"
          className="unique_images"
        />
        <div className="unique_col1">
          <h4 className="unique_p4 blue_note">No kilometers Limits</h4>
          <p className="unique_p1">
            Per min/ day charges, no kilometers limit. no overtime charges.
          </p>
        </div>
      </div>
      <div className="unique_row1">
        <img
          src={window.location.origin + "/images/unique_offering/setting.svg"}
          alt="profile"
          className="unique_images"
        />
        <div className="unique_col1">
          <h4 className="unique_p4 blue_note">Price share on damage</h4>
          <p className="unique_p1">
            In case of vehicle damage, no worries, we share a price for the
            damaged part.
          </p>
        </div>
      </div>
    </div>
  );
}

export default UniqueOffering;
