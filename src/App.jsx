import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => setPokemon(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {pokemon.map((item, index) => (
        <div key={index}>
          <h1>{item.name}</h1>
          <img style={{width:200}}
            src={`https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg`}
            alt={item.name}
          />
        </div>
      ))}
    </div>
  );
};

export default App;
