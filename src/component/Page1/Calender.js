import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

const Calender = () => {
  const defaultValue = {
    year: 2019,
    month: 3,
    day: 1,
  };
  const [selectedDay, setSelectedDay] = useState(defaultValue);

  return (
    <Calendar
      value={selectedDay}
      onChange={setSelectedDay}
      shouldHighlightWeekends
      customDaysClassName={[
        // here we add some CSS classes
        { year: 2019, month: 3, day: 4, className: "purpleDay" },
        { year: 2019, month: 3, day: 12, className: "orangeDay" },
        { year: 2019, month: 3, day: 18, className: "yellowDay" },
        { year: 2019, month: 3, day: 26, className: "navyBlueDay" },
      ]}
    />
  );
};

export default Calender;
