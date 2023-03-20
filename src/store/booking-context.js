import React from "react";

const BookingContext = React.createContext({
  selectedDate: "",
  selectedTime: "",
  numOfGuests: 1,
  selectedOccassion: "",
  makeBooking: (selectedDate, selectedTime, numOfGuests, selectedOccassion) => {},
  cancelBooking: (id) => {},
});

export default BookingContext;
