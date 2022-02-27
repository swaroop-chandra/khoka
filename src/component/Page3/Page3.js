import React, { useState } from "react";
import "./Page3.css";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
import { configure } from "@testing-library/react";

function Page3() {
  const [otp, setOtp] = useState("");
  const [number, setNumber] = useState("");
  const [openOtp, setOpenOtp] = useState(false);
  const [verify, setVerify] = useState(true);
  const [formData, setFormData] = useState({});
  const [saveChangeBtn, setSaveChangeBtn] = useState(false);
  const [frontCam, setFrontCam] = useState({});
  const [drivingL, setDrivingL] = useState({});

  const handleNumber = (e) => {
    setNumber(e.target.value);
  };

  const handleOpenOtp = () => {
    setOpenOtp(true);
  };
  const handleOtpInput = (e) => {
    // let data = "";
    // const otpLeng = otp.length;

    // if (e === "") {
    //   console.log(otpLeng, "onject");
    //   data = otp.slice(0, otpLeng - 1);
    // } else {
    //   if (otp.length < 4) {
    //     data = otp + e;
    //   } else {
    //     const data1 = otp.slice(0, otpLeng - 1);
    //     data = data1 + e;
    //   }
    // }

    setOtp(e);
  };

  const handleVerifyOtp = () => {
    setVerify(false);
    setOpenOtp(false);
  };

  const handleFrontImage = (e) => {
    const fileSelect = document.getElementById("fileSelect"),
      fileElem = document.getElementById("fileElem3");
    fileSelect.addEventListener(
      "click",
      function(e) {
        if (fileElem) {
          fileElem.click();
        }
      },
      false
    );
  };
  const handleDrivingLicence = (e) => {
    const fileSelect = document.getElementById("fileSelect1"),
      fileElem = document.getElementById("fileElem31");
    fileSelect.addEventListener(
      "click",
      function(e) {
        if (fileElem) {
          fileElem.click();
        }
      },
      false
    );
  };
  const uploadImage = (e) => {
    const axiosData = new FormData();
    axiosData.append("resume", e.target.files[0]);
    // axios
    //   .post("https://isp.taskmo.in/recruitment/upload_resume", axiosData)
    //   .then((res) => {
    //     setResume(res.data.path);
    //     setLoading(false);
    //   })
    //   .catch((e) => {
    console.log(e);
    setFrontCam(e);
    //   });
  };
  const uploadImage1 = (e) => {
    const axiosData = new FormData();
    axiosData.append("resume", e.target.files[0]);
    // axios
    //   .post("https://isp.taskmo.in/recruitment/upload_resume", axiosData)
    //   .then((res) => {
    //     setResume(res.data.path);
    //     setLoading(false);
    //   })
    //   .catch((e) => {
    console.log(e);
    setDrivingL(e);
    //   });
  };

  console.log(otp, "otp");
  return (
    <div className="page1_container">
      <div className="page_top_balance"></div>
      <div className="box_left">
        <h2 className="page3_h2 blue">Registration Process</h2>
        <p className="page3_p1 grey">Create your Profile</p>
        <h2 className="page3_h21">Step 1- Contact Number*</h2>
        {!openOtp ? (
          <div className="number_input">
            {verify ? (
              <>
                <input
                  type="text"
                  name="number"
                  className={
                    number.length != 10
                      ? "page3_number grey1"
                      : "page3_number black"
                  }
                  onChange={handleNumber}
                  maxLength={10}
                />
                <p
                  className="page3_p2"
                  style={
                    number.length != "10"
                      ? { pointerEvents: "none" }
                      : { color: "#00adef" }
                  }
                  onClick={handleOpenOtp}
                >
                  Click to Generate OTP
                </p>
              </>
            ) : (
              <>
                {/* <input
                  type="text"
                  name="number"
                  className={
                    number.length == 10
                      ? "page3_number2 green"
                      : "page3_number2 red1"
                  }
                  onChange={handleNumber}
                  placeholder={number}
                  maxLength={10}
                /> */}
                <p
                  className={
                    number.length == 10
                      ? "page3_number2 green"
                      : "page3_number2 red1"
                  }
                >
                  {number}
                </p>
                <p className="page3_p2" style={{ color: "#8adb89" }}>
                  verify
                </p>
              </>
            )}
          </div>
        ) : (
          <></>
        )}
        {openOtp ? (
          <div className="opt_input">
            <OtpInput
              numInputs={4}
              value={otp}
              className="otp_small_boxes"
              onChange={handleOtpInput}
              separator={
                <span>
                  <strong>.</strong>
                </span>
              }
              inputStyle={{
                width: "2rem",
                height: "2rem",
                margin: "0 5px",
                fontSize: "16px",
                color: "black",
                borderRadius: 4,
                border: "1px solid rgba(0,0,0,0.3)",
              }}
            />
            <p
              className="page3_p2"
              style={
                number.length != "10"
                  ? { pointerEvents: "none" }
                  : { color: "#00adef" }
              }
              onClick={handleVerifyOtp}
            >
              Enter OTP
            </p>
          </div>
        ) : (
          <></>
        )}
        <h3 className="page3_h3">Step 2- Verify yourself using front*</h3>
        {Object.keys(frontCam).length == 0 ? (
          <div className="page3_frontcam">
            <input
              type="file"
              id="fileElem3"
              accept="image/*"
              style={{ display: "none" }}
              name="dl_back_image"
              // value={formData.dlBackImage}
              onChange={(value) => {
                uploadImage(value);
              }}
            />
            <img
              src={window.location.origin + "/images/page3/camera.svg"}
              alt="profile"
              className="camera_image"
              id="fileSelect"
              onClick={handleFrontImage}
            />
            <p className="page3_capsh3">
              CLICK TO SCAN YOUR FACE
              <span className="red margin_top_red">*</span>
            </p>
          </div>
        ) : (
          <div className="page3_frontcam1">
            <img
              src={window.location.origin + "/images/sliders/cardFace.svg"}
              alt="profile"
              className="camera_image1"
            />
            <p className="page3_capsh3">Uploaded</p>
            <img
              src={window.location.origin + "/images/page3/white_click.svg"}
              alt="profile"
              className="click"
            />
          </div>
        )}
        <h3 className="page3_h3">Step 3- Upload DL*</h3>
        {Object.keys(drivingL).length == 0 ? (
          <div className="page3_frontcam">
            <input
              type="file"
              id="fileElem31"
              accept="image/*"
              style={{ display: "none" }}
              name="dl_back_image"
              // value={formData.dlBackImage}
              onChange={(value) => {
                uploadImage1(value);
              }}
            />
            <img
              src={window.location.origin + "/images/page3/camera1.svg"}
              alt="profile"
              className="camera1_image"
              id="fileSelect1"
              onClick={handleDrivingLicence}
            />
            <p className="page3_capsh31">
              Upload Driving Licence Document
              <span className="red margin_top_red">*</span>
            </p>
          </div>
        ) : (
          <div className="page3_frontcam1">
            <img
              src={window.location.origin + "/images/sliders/cardFace.svg"}
              alt="profile"
              className="camera_image1"
            />
            <p className="page3_capsh3">Uploaded</p>
            <img
              src={window.location.origin + "/images/page3/white_click.svg"}
              alt="profile"
              className="click"
            />
          </div>
        )}
        <p className="page3_underline blue">or Apply For DL</p>
        <div className="flex_between">
          <Link to="/home">
            <img
              src={window.location.origin + "/images/page2/back_button.svg"}
              alt="profile"
              className="back_button"
            />
          </Link>
          <Link to="/terms_condition">
            {Object.keys(drivingL).length == 0 ? (
              <img
                src={window.location.origin + "/images/page3/next_disable.svg"}
                alt="profile"
                className="next_button"
              />
            ) : (
              <img
                src={window.location.origin + "/images/page3/next_active.svg"}
                alt="profile"
                className="next_button"
              />
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page3;
