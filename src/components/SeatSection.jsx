import React from "react";


export const SeatSection = ({
  seatRow,
  startIndex,
  endIndex,
  handleSeatClick,
  getSeatType,
  getSeatClassName
}) => {
  return (
    <div className="flex">
      {seatRow.slice(startIndex, endIndex).map((seat, i) => (
        <div
          key={seat.id}
          className={getSeatClassName(seat)}
          onClick={() => handleSeatClick(seat.row, startIndex + i)}
        >
          {startIndex + i + 1}
        </div>
      ))}
    </div>
  );
};

export default SeatSection;
