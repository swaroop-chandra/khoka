import React, { useState } from "react";
import "./Page1.css";
import Carousel from "../carousel/Carousel";
import UniqueOffering from "./UniqueOffering";
import ReferFriend from "./ReferFriend";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
// import { Slider } from "rsuite";
import { Slider } from "@mui/material";
import moment from "moment";

import { Link } from "react-router-dom";

import { KhokaContext } from "../../App";

import "rsuite/dist/rsuite.min.css";

const PrettoSlider = styled(Slider)({
  color: "#122A44",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#48C6EE",
    border: "2px solid #fff",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "true",
    padding: 0,
    width: 60,
    height: 24,
    borderRadius: "4% 4% 4% 4%",
    backgroundColor: "#122A44",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(0%, -100%) rotate(0deg) scale(1)",
    },
    "& > *": {
      transform: "rotate(0deg)",
    },
  },
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function Page1() {
  const [context, setContext] = React.useContext(KhokaContext);

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  //slider
  const [value, setValue] = React.useState(10);
  const [value1, setValue1] = React.useState(10);
  const [endHour, setEndHour] = useState(0);
  const [time2, setTime2] = useState("");
  const [pick, setPick] = useState(true);
  const [return1, setReturn1] = useState(true);
  const [sliderValue, setSliderValue] = useState(true);
  const [changeDate, SetChangeDate] = useState(false);

  const [time3, setTime3] = useState("");
  const [time4, setTime4] = useState("");

  const [plan, setPlan] = useState("");
  const [amount, setAmount] = useState("");

  const defaultValue = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  };
  // const moment1 = moment(new Date().getMonth()).format("LLLL");
  // console.log(moment1, "somewrhting");
  const [selectedDay, setSelectedDay] = useState(defaultValue);
  const [selectedDay1, setSelectedDay1] = useState(selectedDay);
  const [loc, setLoc] = useState("");

  const handleLocation = () => {
    setOpen(true);
  };

  const handleLocationSelect = () => {
    setLoc("IIT Guwahati");
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
    setPick(false);
  };

  const handlePlan = () => {
    setOpen2(false);
    setPick(false);
  };
  const handleClose3 = () => {
    setOpen3(false);
    setReturn1(false);
    context.timeDuration.pickupDate = selectedDay;
    context.timeDuration.returnDate = selectedDay1;
    context.timeDuration.pickupTime = time3;
    context.timeDuration.returnTime = time4;
    setContext({ ...context });
  };
  const handleClose4 = () => {
    setOpen4(false);
  };

  const handleCalender = () => {
    setOpen1(true);
  };
  const handleCalender1 = () => {
    setOpen4(true);
  };
  const handleTimeStart = () => {
    setOpen1(false);
    setOpen2(true);
  };

  const handleTimeEnd = () => {
    setOpen4(false);
    setOpen3(true);
  };

  //slider
  function calculateValue(value) {
    return value;
  }
  function calculateValue1(value1) {
    return value1;
  }
  function valueLabelFormat(value) {
    const units = ["AM", "PM"];

    let unitIndex = 0;
    let scaledValue = value;
    let hour = scaledValue / 60;

    if (hour > 12) {
      hour -= 12;
      unitIndex = 1;
      scaledValue = hour;
      console.log(hour);
    } else {
      scaledValue /= 60;
    }
    const t = scaledValue + " " + units[unitIndex];
    setTime2(t);
    setEndHour(scaledValue);
    const timeUnit = units[unitIndex].toLowerCase();
    setTime3(`${scaledValue} ${timeUnit}`);
    return `${scaledValue} ${units[unitIndex]}`;
  }
  function valueLabelFormat1(value1) {
    const units = ["AM", "PM"];

    let unitIndex = 0;
    let scaledValue = value1;
    let hour = scaledValue / 60;

    if (hour > 12) {
      hour -= 12;
      unitIndex = 1;
      scaledValue = hour;
      console.log(hour);
    } else {
      scaledValue /= 60;
    }
    const t = scaledValue + " " + units[unitIndex];
    setTime2(t);
    setEndHour(scaledValue);
    const timeUnit = units[unitIndex].toLowerCase();
    setTime4(`${scaledValue} ${timeUnit}`);
    return `${scaledValue} ${units[unitIndex]}`;
  }
  const handleChange = (event, newValue) => {
    if (typeof newValue === "number") {
      setValue(newValue);
      // console.log(newValue, "object");
    }
  };
  const handleChange1 = (event, newValue) => {
    setSliderValue(false);

    if (typeof newValue === "number") {
      setValue1(newValue);
      // console.log(newValue, "object");
    }
  };

  console.log(selectedDay1, "object");

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
      <div className="grey_box">
        <div className="grey_small_box">
          <div className="page1_row1 flex_start">
            <img
              src={window.location.origin + "/images/location.svg"}
              alt="profile"
              className="location_image"
            />
            {loc.length === 0 ? (
              <p className="page1_p2">Location</p>
            ) : (
              <p className="page1_p2">{loc}</p>
            )}
          </div>
          <p className="page1_p3" onClick={handleLocation}>
            Your Pick Location
          </p>
          <div className="page1_row1 flex_start">
            <img
              src={window.location.origin + "/images/time.svg"}
              alt="profile"
              className="location_image"
            />
            {pick ? (
              <p className="page1_p2">Pick up</p>
            ) : (
              <p className="page1_p2">{`${selectedDay.day} ${moment(
                selectedDay.month - 1
              ).format("MMM")}, ${time3}`}</p>
            )}
          </div>
          <p className="page1_p3" onClick={handleCalender}>
            Your Pick Date and Time
          </p>
          <div className="page1_row1 flex_start">
            <img
              src={window.location.origin + "/images/time.svg"}
              alt="profile"
              className="location_image"
            />
            {return1 ? (
              <p className="page1_p2">Return</p>
            ) : (
              <p className="page1_p2">{`${selectedDay1.day} ${moment(
                selectedDay1.month - 1
              ).format("MMM")}, ${time4}`}</p>
            )}
          </div>
          <p className="page1_p3" onClick={handleCalender1}>
            Your Return Date and Time
          </p>
        </div>
      </div>
      <div className="yellow_note">
        <p className="page1_p4">Safe & Sanitized Every Trip</p>
        <p className="page1_p5">
          To help prevent the spread of COVID-19, every vehicle goes through a
          sanitization process before and after each trip.
        </p>
      </div>
      <h4 className="blue_note">How It Works</h4>
      <Carousel />
      <UniqueOffering />
      <ReferFriend />
      <Modal
        // hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="child-modal-title">Pickup Location</h2>
          {/* <select
            className="select_download"
            name="project_id"
            // value={project_id}
            // onChange={handleChange}
            required
          >
            <option value="" disabled selected>
              Select your nearest pickup Station
            </option>
            
            <option className="location_status" value="1">
              bangalore
            </option>
            <option className="location_status" value="2">
              mangalore
            </option>
          </select> */}
          <input
            type="search"
            name="search"
            placeholder="Search your nearest pickup Station"
          />
          <div className="location_status" onClick={handleClose}>
            <div
              className="location_distance"
              style={{ flexDirection: "column" }}
            >
              <img
                src={window.location.origin + "/images/page1/location_on.svg"}
                alt="profile"
                className="location_small"
              />
              <p className="location_distance_text">700</p>
            </div>
            <div className="location_distance_1" onClick={handleLocationSelect}>
              <div
                className="location_distance"
                style={{ justifyContent: "flex-start" }}
              >
                <img
                  src={
                    window.location.origin + "/images/page1/loaction_logo.svg"
                  }
                  alt="profile"
                  className="location_small"
                />
                <p className="location_distance_text1">IIT GUWAHATI</p>
              </div>
              <p className="location_name">
                Chandrama Sweet, DTDC, Khoka Market
              </p>
            </div>
          </div>

          {/* <Button onClick={handleClose}>Close Child Modal</Button> */}
        </Box>
      </Modal>
      <Modal
        // hideBackdrop
        open={open1}
        onClose={handleClose1}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <div>
          <Calendar
            value={selectedDay}
            onChange={setSelectedDay}
            shouldHighlightWeekends
            customDaysClassName={[
              // here we add some CSS classes
              { year: 2022, month: 1, day: 1, className: "navyBlueDay" },
              { year: 2022, month: 1, day: 5, className: "navyBlueDay" },
              { year: 2022, month: 1, day: 18, className: "navyBlueDay" },
              { year: 2022, month: 1, day: 26, className: "navyBlueDay" },
            ]}
            className="calender_model"
            renderFooter={() => (
              <div className="calender_fotter">
                <div className="booked_color_box">
                  <p className="booked_color"></p>
                  <p className="booked_text">Booked</p>
                  <p className="font_right">{`${moment(
                    `${selectedDay.year}-${selectedDay.month}-${selectedDay.day}`
                  ).format("ddd")}, ${selectedDay.day} ${moment(
                    selectedDay.month - 1
                  ).format("MMM")}`}</p>
                </div>
                <div className="calender_flex_right">
                  <input
                    type="button"
                    value="Cancle"
                    className="cancle_button"
                    onClick={handleClose1}
                  />
                  <div className="time_click" onClick={handleTimeStart}>
                    <img
                      src={window.location.origin + "/images/page1/time.svg"}
                      alt="profile"
                      className="time"
                    />
                  </div>
                </div>
              </div>
            )}
          />
          {/* <div className="Calendar__footer">something</div> */}
        </div>
      </Modal>
      <Modal
        // hideBackdrop
        open={open2}
        onClose={handleClose2}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <div className="time_picker_modal">
          <div className="yellow_box">
            Hey! Pick a morning time slot for a good chance of getting a
            confirmed booking.
          </div>
          <h2 className="time_header">Pickup time</h2>
          <div
            className="time_progress_bard"
            style={{ width: "75%", margin: "auto" }}
          >
            {/* <Slider
              defaultValue={10}
              step={1}
              graduated
              progress
              min={10}
              max={20}
              renderMark={(mark) => {
                if ([10, 11].includes(mark)) {
                  return <span className="font_12">{mark}:00</span>;
                } else {
                  return <span className="font_12">{mark}:00</span>;
                }
                return null;
              }}
            /> */}
            <PrettoSlider
              value={value}
              min={420}
              step={60}
              max={1140}
              scale={calculateValue}
              getAriaValueText={valueLabelFormat}
              valueLabelFormat={valueLabelFormat}
              onChange={handleChange}
              valueLabelDisplay="on"
            />
          </div>
          <div className="slop_options">
            <div className="morning_slot">
              <img
                src={window.location.origin + "/images/png/line2.svg"}
                alt="profile"
                className="location_small"
              />
              <h3 className="blue">Morning slot</h3>
              <img
                src={window.location.origin + "/images/png/line2.svg"}
                alt="profile"
                className="location_small"
              />
            </div>
            <div className="morning_slot">
              <h3 className="grey">12:00 pm</h3>
            </div>
            <div className="morning_slot">
              <img
                src={window.location.origin + "/images/png/line1.svg"}
                alt="profile"
                className="location_small"
              />
              <h3 className="yellow">Afternoon Slot</h3>
              <img
                src={window.location.origin + "/images/png/line1.svg"}
                alt="profile"
                className="location_small"
              />
            </div>
          </div>
          <div className="slot_7">
            <h3 className="dark_grey">7:00 am</h3>
            <h3 className="dark_grey">7:00 pm</h3>
          </div>
          <div className="add_promotion">
            <div className="flex">
              <div className="plan_12h" onClick={handlePlan}>
                12h plan
              </div>
              <div className="cost_12h">@545</div>
            </div>
            <div className="add_box_2">
              <p className="font_right">{`${moment(
                `${selectedDay.year}-${selectedDay.month}-${selectedDay.day}`
              ).format("ddd")}, ${selectedDay.day} ${moment(
                selectedDay.month - 1
              ).format("MMM")}`}</p>
            </div>
          </div>
          <div
            className="flex_right"
            style={{ marginTop: "10px", marginBottom: "15px" }}
          >
            <h3 className="simple_text">{time3}</h3>
            <h2 className="ok_button" onClick={handleClose2}>
              OK
            </h2>
          </div>
        </div>
      </Modal>
      <Modal
        // hideBackdrop
        open={open3}
        onClose={handleClose3}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <div className="time_picker_modal">
          <div className="yellow_box">The Return Time is upto 10 PM</div>
          <h2 className="time_header">Return time</h2>
          <div
            className="time_progress_bard"
            style={{ width: "75%", margin: "auto" }}
          >
            {/* <Slider
              defaultValue={10}
              step={1}
              graduated
              progress
              min={10}
              max={20}
              renderMark={(mark) => {
                if ([10, 11].includes(mark)) {
                  return <span className="font_12">{mark}:00</span>;
                } else {
                  return <span className="font_12">{mark}:00</span>;
                }
                return null;
              }}
            /> */}
            <PrettoSlider
              value={sliderValue ? value : value1}
              min={420}
              step={60}
              max={1140}
              scale={calculateValue1}
              getAriaValueText={valueLabelFormat1}
              valueLabelFormat={valueLabelFormat1}
              onChange={handleChange1}
              valueLabelDisplay="on"
            />
          </div>
          <div className="slop_options">
            <div className="morning_slot">
              <img
                src={window.location.origin + "/images/png/line2.svg"}
                alt="profile"
                className="location_small"
              />
              <h3 className="blue">Morning slot</h3>
              <img
                src={window.location.origin + "/images/png/line2.svg"}
                alt="profile"
                className="location_small"
              />
            </div>
            <div className="morning_slot">
              <h3 className="grey">12:00 pm</h3>
            </div>
            <div className="morning_slot">
              <img
                src={window.location.origin + "/images/png/line1.svg"}
                alt="profile"
                className="location_small"
              />
              <h3 className="yellow">Afternoon Slot</h3>
              <img
                src={window.location.origin + "/images/png/line1.svg"}
                alt="profile"
                className="location_small"
              />
            </div>
          </div>
          <div className="slot_7">
            <h3 className="dark_grey">7:00 am</h3>
            <h3 className="dark_grey">7:00 pm</h3>
          </div>
          <div className="add_promotion">
            <div className="flex">
              <Link to="/register">
                <div className="plan_12h">12h plan</div>
              </Link>
              <div className="cost_12h">@545</div>
            </div>
            <div className="add_box_2">
              <p className="font_right">{`${moment(
                `${selectedDay1.year}-${selectedDay1.month}-${selectedDay1.day}`
              ).format("ddd")}, ${selectedDay1.day} ${moment(
                selectedDay1.month - 1
              ).format("MMM")}`}</p>
            </div>
          </div>
          <div
            className="flex_right"
            style={{ marginTop: "10px", marginBottom: "15px" }}
          >
            <h3 className="simple_text">{time4}</h3>
            <Link to="/register">
              <h2 className="ok_button" onClick={handleClose3}>
                OK
              </h2>
            </Link>
          </div>
        </div>
      </Modal>
      <Modal
        // hideBackdrop
        open={open4}
        onClose={handleClose4}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <div>
          <Calendar
            value={changeDate ? selectedDay1 : selectedDay}
            onChange={(TValue) => {
              setSelectedDay1(TValue);
              SetChangeDate(true);
            }}
            // defaultPlaceholder={selectedDay1}
            shouldHighlightWeekends
            customDaysClassName={[
              // here we add some CSS classes
              { year: 2022, month: 1, day: 1, className: "navyBlueDay" },
              { year: 2022, month: 1, day: 5, className: "navyBlueDay" },
              { year: 2022, month: 1, day: 18, className: "navyBlueDay" },
              { year: 2022, month: 1, day: 26, className: "navyBlueDay" },
            ]}
            // disabledDays={[
            //   // here we add some CSS classes
            //   { year: 2022, month: 1, day: 1, className: "navyBlueDay" },
            //   { year: 2022, month: 1, day: 5, className: "navyBlueDay" },
            //   { year: 2022, month: 1, day: 18, className: "navyBlueDay" },
            //   { year: 2022, month: 1, day: 26, className: "navyBlueDay" },
            // ]}
            className="calender_model"
            renderFooter={() => (
              <div className="calender_fotter">
                <div className="booked_color_box">
                  <p className="booked_color"></p>
                  <p className="booked_text">Booked</p>
                  <p className="font_right">{`${moment(
                    `${selectedDay1.year}-${selectedDay1.month}-${selectedDay1.day}`
                  ).format("ddd")}, ${selectedDay1.day} ${moment(
                    selectedDay1.month - 1
                  ).format("MMM")}`}</p>
                </div>
                <div className="calender_flex_right">
                  <input
                    type="button"
                    value="Cancle"
                    className="cancle_button"
                    onClick={handleClose4}
                  />
                  <div className="time_click" onClick={handleTimeEnd}>
                    <img
                      src={window.location.origin + "/images/page1/time.svg"}
                      alt="profile"
                      className="time"
                    />
                  </div>
                </div>
              </div>
            )}
          />
        </div>
      </Modal>
    </div>
  );
}

export default Page1;
