import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushis, setSushis] = useState([])
  const [money, setMoney] = useState(300)

  useEffect(() => {
    fetch (API)
    .then((response) => response.json())
    .then ((sushiList) => {
      const newSushiArray = sushiList.map((sushiPlate) => {
        return { ...sushiPlate, isEaten: false}
      })
      setSushis(newSushiArray)
    })
  }, [])

  function sushiEaten(clickSushi) {
    if(money >= clickSushi.price) {
        const sushiUpdate = sushis.map((sushi) => {
        if (clickSushi.id === sushi.id) {
          setMoney(money - sushi.price)
        return {...sushi, isEaten: true};
      } else {
        return sushi
      }
    });
    setSushis(sushiUpdate);
    } else {
      alert('You are broke!!!!')
    }
  };

  const filteredSuhsi = sushis.filter(sushi => sushi.isEaten)
  
return (
    <div className="app">
      <SushiContainer sushis={sushis} sushiEaten={sushiEaten}/>
      <Table money={money} plates={filteredSuhsi}/>
    </div>
  );
}

export default App;
