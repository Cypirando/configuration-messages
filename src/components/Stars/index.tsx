import React, { useState } from "react";
import { StyledStars } from "./styles";

interface StarsProps {
  children: string;
}

const Stars = (props: StarsProps) => {
  const [rating, setRating] = useState(0);

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => {
        const status = star <= rating;
        return (
          <div key={star}>
            <div
              onClick={() => setRating(star)}
              style={{
                display: "flex",
                color: status ? "#ffd000" : "#46536d",
              }}
            >
              <StyledStars>&#9733;</StyledStars>
            </div>
          </div>
        );
      })}
    </div>
  );
  //   <StyledStars>{props.children}</StyledStars>;
};

export default Stars;
