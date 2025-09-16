import React from "react";

const SeatBookings = ({
  layput = {
    rows: 8,
    seatsRow: 12,
    aislePosition: 5,
  },
  seatTypes = {
    regular: { name: "Regular", price: 150, rows: [0, 1, 2] },
    premium: { name: "Premium", price: 250, rows: [3, 4, 5] },
    executive: { name: "Executive", price: 350, rows: [6, 7] },
  },

  bookedSeats = [],
  currency = "$",
  onBookingComplete = () => {},
  title = "Inox Cinema",
  subtitle = "Book Your Seats",
}) => {
  return (
    <div className="w-full min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6 ">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default SeatBookings;
