import * as React from "react";
import { useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import MobileStepper from "@mui/material/MobileStepper";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
// import SwipeableViews from "react-swipeable-views";
// import { autoPlay } from "react-swipeable-views-utils";
import "../Page1/Page1.css";

import Carousel from "react-bootstrap/Carousel";

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// const images = [
//   {
//     label: "San Francisco – Oakland Bay Bridge, United States",
//     imgPath:
//       "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
//   },
//   {
//     label: "Bird",
//     imgPath:
//       "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
//   },
//   {
//     label: "Bali, Indonesia",
//     imgPath:
//       "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
//   },
//   {
//     label: "Goč, Serbia",
//     imgPath:
//       "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
//   },
// ];

function SwipeableTextMobileStepper() {
  //   const theme = useTheme();
  //   const [activeStep, setActiveStep] = React.useState(0);
  //   const maxSteps = images.length;

  //   const handleNext = () => {
  //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   };

  //   const handleBack = () => {
  //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
  //   };

  //   const handleStepChange = (step) => {
  //     setActiveStep(step);
  //   };

  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="carousel_images"
          src={window.location.origin + "/images/sliders/scooter.svg"}
          alt="First slide"
        />
        <Carousel.Caption>
          <img
            className="number_p1"
            src={window.location.origin + "/images/sliders/no1.svg"}
            alt="Third slide"
          />
          <h3 className="carousel_h3">Reserve Your Scooter</h3>
          <p className="carousel_p1">
            Choose your pick-up location and times, then pay to reserve your
            vehicle for the time you want.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel_images"
          src={window.location.origin + "/images/sliders/cardFace.svg"}
          alt="Second slide"
        />

        <Carousel.Caption>
          <img
            className="number_p1"
            src={window.location.origin + "/images/sliders/no2.svg"}
            alt="Third slide"
          />
          <h3 className="carousel_h3">
            Verify Your DL & Submit One Of Your ID
          </h3>
          <p className="carousel_p1">
            Reach Pick-up Location and Show booking ID, then our coworker will
            verify your Documents & collect one of your government authorise ID
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel_images"
          src={window.location.origin + "/images/sliders/noAlcohol.svg"}
          alt="Third slide"
        />

        <Carousel.Caption>
          <img
            className="number_p1"
            src={window.location.origin + "/images/sliders/no3.svg"}
            alt="Third slide"
          />
          <h3 className="carousel_h3">
            Wear Helmets and Please No Law Violations
          </h3>
          <p className="carousel_p1">
            While using our service, the rider is solely responsible for any law
            violations, illegal acts, rough driving and accidents.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel_images"
          src={window.location.origin + "/images/sliders/keyTaker.svg"}
          alt="Third slide"
        />

        <Carousel.Caption>
          <img
            className="number_p1"
            src={window.location.origin + "/images/sliders/no4.svg"}
            alt="Third slide"
          />
          <h3 className="carousel_h3">
            Collect The Vehicle Key Of Your Preference
          </h3>
          <p className="carousel_p1">
            Choose your pick-up location and times, then pay to reserve your
            vehicle for the time you want.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SwipeableTextMobileStepper;
