import { useState } from "react";
import "./App.css";
import ChessRow from "./components/ChessRow";
import Opening from "./components/Opening";

function App() {
  const openings = [
    {
      id: 1,
      opening_name: "French Defense",
      images: [
        "/images/french_defense_1.png",
        "/images/french_defense_2.png",
        "/images/french_defense_3.png",
      ],
    },
    {
      id: 2,
      opening_name: "Sicilian Defense",
      images: [
        "images/sicilian_defense_1.png",
        "images/sicilian_defense_2.png",
        "images/sicilian_defense_3.png",
      ],
    },
  ];

  const [randomOpeningIndex, setRandomOpeningIndex] = useState(
    Math.floor(Math.random() * openings.length)
  );

  const randomOpening = openings[randomOpeningIndex];

  const clickHandler = (id: number) => {
    if (randomOpening.id === id) {
      alert("Correct!");
      setRandomOpeningIndex(Math.floor(Math.random() * openings.length));
    }
  };

  return (
    <>
      <ChessRow
        opening_name={randomOpening.opening_name}
        images={randomOpening.images}
      />

      {openings.map((opening) => (
        <Opening
          key={opening.id}
          name={opening.opening_name}
          onClick={() => clickHandler(opening.id)}
        />
      ))}
    </>
  );
}

export default App;
