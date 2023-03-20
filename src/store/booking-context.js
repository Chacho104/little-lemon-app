import React from "react";

const BookingContext = React.createContext({
  selectedDate: "",
  selectedTime: "",
  numOfGuests: 1,
  selectedOccassion: "",
  makeBooking: (selectedTime, numOfGuests, selectedOccassion) => {},
  cancelBooking: (id) => {},
});

export default BookingContext;
