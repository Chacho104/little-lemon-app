import BookingContext from "./booking-context";

const defaultBookingState = {
  selectedDate: "",
  selectedTime: "",
  numOfGuests: 1,
  selectedOccassion: "",
};

function BoookingProvider(props) {
  function makeBookingHandler(
    selectedDate,
    selectedTime,
    numOfGuests,
    selectedOccassion
  ) {
    dispatchBookingAction({
      type: "BOOK",
      selectedDate: selectedDate,
      selectedTime: selectedTime,
      numOfGuests: numOfGuests,
      selectedOccassion: selectedOccassion,
    });
  }

  function cancelBookingHandler(id) {
    dispatchBookingAction({ type: "CANCEL", id: id });
  }
  const bookingContext = {
    selectedDate: selectedDate,
    selectedTime: bookingState.selectedTime,
    numOfGuests: bookingState.numOfGuests,
    selectedOccassion: bookingState.selectedOccassion,
    makeBooking: makeBookingHandler,
    cancelBooking: cancelBookingHandler,
  };
  return (
    <BookingContext.Provider value={bookingContext}>
      {props.children}
    </BookingContext.Provider>
  );
}

export default BoookingProvider;
