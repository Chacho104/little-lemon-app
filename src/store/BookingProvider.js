import BookingContext from "./booking-context";

const defaultBookingState = {
  selectedTime: [],
  numOfGuests: 1,
  selectedOccassion: [],
};

function BoookingProvider(props) {
  function makeBookingHandler(selectedTime, numOfGuests, selectedOccassion) {
    dispatchBookingAction({
      type: "BOOK",
      selectedTime: selectedTime,
      numOfGuests: numOfGuests,
      selectedOccassion: selectedOccassion,
    });
  }

  function cancelBookingHandler(id) {
    dispatchBookingAction({ type: "CANCEL", id: id });
  }
  const bookingContext = {
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
