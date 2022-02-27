import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Page6.css";
import LinearProgress from "@mui/material/LinearProgress";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Page6() {
  const [progress, setProgress] = useState(40);
  return (
    <div className="page1_container padding_side20">
      <div className="page_top_balance"></div>
      <h1 className="page5 blue">Your Profile</h1>
      <div className="page6 flex">
        <div className="profile_left">
          <img
            src={window.location.origin + "/images/page6/profile.jpg"}
            alt="profile"
            className="profile_image"
          />
          <p className="page6_p1">Shobhit Thakur</p>
          <div className="flex_center">
            <img
              src={window.location.origin + "/images/page6/edit.svg"}
              alt="profile"
              className="edit"
            />
            <p className="page6_p4">+918770024956</p>
          </div>
        </div>
        <div className="profile_right">
          <div className="yellow_box" style={{ marginTop: "0" }}>
            <div className="flex_between" style={{ margin: "0" }}>
              <h3 className="page6_fuel">Fuel Credits</h3>
              <h3 className="page6_fuel">0.0 Points</h3>
            </div>
            <div className="width50 flex">
              <div className="fuel_box_fill"></div>
              <div className="fuel_boxes"></div>
              <div className="fuel_boxes"></div>
              <div className="fuel_boxes"></div>
              <div className="fuel_boxes"></div>
            </div>
            <div
              className="width50 flex_between"
              style={{ margin: "0 10px", width: "53%" }}
            >
              <p className="page6_p2 red">L</p>
              <p className="page6_p2">M</p>
              <p className="page6_p2 green">F</p>
            </div>
          </div>
          <div className="page6_progressbar">
            <div className="flex_between" style={{ marginTop: "10px" }}>
              <p className="page6_p3 grey">LR</p>
              <p className="page6_p3 grey">HR</p>
            </div>
            <LinearProgress variant="determinate" value={progress} />
            <div className="flex_right" style={{ height: "30px" }}>
              <p className="page6_p3 grey"> Reliability Score </p>
            </div>
          </div>
        </div>
      </div>
      <div className="page6_box">
        <h2 className="page6_h2">Your Trips</h2>
        <div className="page6_cards">
          <Card sx={{ maxWidth: "100%" }}>
            <CardContent className="page6_card">
              <div className="green_tag"></div>

              <h3 className="page6_h3">
                Ticket Confirmed- Self Drive
                <span className="span_bold">| moped</span>
              </h3>
              <div className="flex_between" style={{ marginTop: "0" }}>
                <div className="card_box">
                  <p className="page6_p5">Booking ID </p>
                  <p className="page6_p5">Reference ID</p>
                </div>
                <div className="card_box">
                  <p className="page6_p6">XXXXMA0380100220</p>
                  <p className="page6_p6">879WAS999098987</p>
                </div>
                <div className="card_box">
                  <p className="page6_p7">10AM-02PM</p>
                  <p className="page6_p7"> 15 Oct 21</p>
                  <p className="page6_p8">Pickup Time and Date</p>
                </div>
              </div>
              <div className="flex_between" style={{ alignItems: "center" }}>
                <p className="page6_p9 blue">
                  Pickup Location -Khoka Market, IIT Guwahati
                </p>
                <img
                  src={window.location.origin + "/images/page6/nav_blue.svg"}
                  alt="profile"
                  className="nav_blue"
                />
              </div>
              <div className="flex_between">
                <div className="page6_contactus">Contact us</div>
                <p className="page6_p7">12 hours | PAID</p>
              </div>
            </CardContent>
          </Card>
          {/* <div className="page6_card">
            <h3 className="page6_h3">
              Ticket Confirmed- Self Drive <span>| moped</span>
            </h3>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Page6;
