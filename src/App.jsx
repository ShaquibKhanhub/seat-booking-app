import { useState } from "react";

// import "./App.css";
import SeatBookings from "./components/seat-bookings";

function App() {


  return (
    <div>
      <SeatBookings
        layout={{
          rows: 8,
          seatsRow: 12,
          aislePosition: 5,
        }}
        seatTypes={{
          regular: { name: "Regular", price: 150, rows: [0, 1, 2] },
          premium: { name: "Premium", price: 250, rows: [3, 4, 5] },
          executive: { name: "Executive", price: 350, rows: [6, 7] },
        }}
        bookedSeats={["C2", "C4"]}
        onBookingComplete={(booking) => console.log(booking)}
      />
    </div>
  );
}

export default App;
