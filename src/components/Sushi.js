import React from "react";

function Sushi({sushi, sushiEaten}) {
   
  const {name, img_url, price, isEaten} = sushi

  return (
    <div className="sushi">
      <div className="plate" onClick={() => sushiEaten(sushi)}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
