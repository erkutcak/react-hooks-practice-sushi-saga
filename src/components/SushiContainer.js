import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, sushiEaten}) {

  const [sushiIndex, setSushiIndex] = useState(0)

  const cutSushi = sushis.slice(sushiIndex, sushiIndex + 4)

  const changeSushiIndex = () => {
    setSushiIndex((sushiIndex + 4) % sushis.length)
  }

  const displaySushis = cutSushi.map((sushi) => {
    return <Sushi key={sushi.id} sushi={sushi} sushiEaten={sushiEaten} />
  })

  return (
    <div className="belt">
      {displaySushis}
      <MoreButton changeSushiIndex={changeSushiIndex}/>
    </div>
  );
}

export default SushiContainer;
