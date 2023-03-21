import { render, screen } from '@testing-library/react';
import BookingPage from './pages/Booking';

test('Renders the booking form header', () => {
  render(<BookingPage />);
  const linkElement = screen.getByText(/reserve a table/i);
  expect(linkElement).toBeInTheDocument();
});
