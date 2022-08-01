import React, { useState, useEffect } from "react";
import DetailCharacter from "./DetailCharacter";

const API_URL = "https://rickandmortyapi.com/api/character/";

function App() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCharacter(data.results);
      });
  }, []);

  return (
    <>
      <h1 className="title text-center">List Character</h1>
      <div>
        {character.length > 0 ? (
          <div className="container">
            <div className="row">
              {character.map((charReq) => (
                <div className="col-md-3">
                  <DetailCharacter key={charReq.id} {...charReq} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <h2>Sorry !! No character Found</h2>
        )}
      </div>
    </>
  );
}

export default App;
