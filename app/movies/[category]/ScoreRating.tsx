import React from "react";
import { BsFillStarFill } from "react-icons/bs";

type Props = {
  rating: number;
};

const ScoreRating = ({ rating }: Props) => {
  const convertedRating = rating / 2; //Convert max rate from 10 to be 5

  const fillStarColor = (star: number) => {
    if (convertedRating >= star) {
      return "text-yellow-400";
    }
    return "text-gray-300";
  };
  return (
    <div className="flex items-center gap-1 justify-center">
      {/* Max score is 5 */}
      {[...Array(5)].map((item, index) => (
        <BsFillStarFill key={index} className={fillStarColor(index + 1)} />
      ))}
    </div>
  );
};

export default ScoreRating;
