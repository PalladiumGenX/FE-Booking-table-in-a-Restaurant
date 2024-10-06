import React from "react";
import Bookingform from "./Bookingform";

const Booking = (props) => {
  return (
    <Bookingform
      availableTimes={props.availableTimes}
      dispatch={props.dispatch}
      SubmitForm={props.SubmitForm}
    />
  );
};

export default Booking;