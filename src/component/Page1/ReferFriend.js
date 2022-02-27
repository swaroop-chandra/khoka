import React from "react";
import "./ReferFriend.css";

function ReferFriend() {
  return (
    <div className="page1_row1 flex_column margin_top">
      <h4 className="page1_h4 blue_note_1">Beginning of Sharing Community</h4>
      <h4 className="page1_h4 black_1">Refer With Friends</h4>
      <img
        src={window.location.origin + "/images/friends.jpg"}
        alt="profile"
        className="refer_image"
        className="margin_20"
      />
      <h3 className="refer_h3">
        Let's work together to establish a vehicle-sharing community.
      </h3>
      <div className="refer_box">Refer with Friends</div>
    </div>
  );
}

export default ReferFriend;
