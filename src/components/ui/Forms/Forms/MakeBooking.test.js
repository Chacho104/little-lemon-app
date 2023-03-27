import { render, screen } from "@testing-library/react";
import MakeBooking from "./MakeBooking";

describe("Make booking component", () => {
  test("renders the booking form header", () => {
    render(<MakeBooking />);
    const headerElement = screen.getByText(/reserve a table/i);
    expect(headerElement).toBeInTheDocument();
  });
  test("renders the form introduction", () => {
    render(<MakeBooking />);
    const introElement = screen.getByText(
      /you can now find a table for any occassion!/i
    );
    expect(introElement).toBeInTheDocument();
  });
  test("renders the booking form", () => {
    render(<MakeBooking />);
    const formElement = screen.getByText(/available time slots/i);
    expect(formElement).toBeInTheDocument;
  });
});
