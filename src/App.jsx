import { useState } from "react";

import "./App.css";
import SeatBookings from "./components/seat-bookings";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <SeatBookings />
      </div>
    </>
  );
}

export default App;
