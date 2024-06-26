import { useState } from "react";
import "./App.css";
import ChessRow from "./components/ChessRow";
import Opening from "./components/Opening";

function App() {
  const openings = [
    {
      id: 1,
      opening_name: "French Defense - Main Line",
      images: [
        "/images/french_main_line_1.png",
        "/images/french_main_line_2.png",
        "/images/french_main_line_3.png",
      ],
    },
    {
      id: 2,
      opening_name: "Sicilian Defense - French Variation",
      images: [
        "/images/sicilian_french_variation_1.png",
        "/images/sicilian_french_variation_2.png",
        "/images/sicilian_french_variation_3.png",
      ],
    },
    {
      id: 3,
      opening_name: "Ruy Lopez - Berlin Defense",
      images: [
        "/images/ruy_lopez_berlin_1.png",
        "/images/ruy_lopez_berlin_2.png",
        "/images/ruy_lopez_berlin_3.png",
      ],
    },
    {
      id: 4,
      opening_name: "Caro-Kann Defense - Advance Variation",
      images: [
        "/images/caro_kann_advance_1.png",
        "/images/caro_kann_advance_2.png",
        "/images/caro_kann_advance_3.png",
      ],
    },
    {
      id: 5,
      opening_name: "King's Indian Defense",
      images: [
        "/images/kings_indian_1.png",
        "/images/kings_indian_2.png",
        "/images/kings_indian_3.png",
      ],
    },
    {
      id: 6,
      opening_name: "Nimzo-Indian Defense",
      images: [
        "/images/nimzo_indian_1.png",
        "/images/nimzo_indian_2.png",
        "/images/nimzo_indian_3.png",
      ],
    },
    {
      id: 7,
      opening_name: "Queen's Gambit Declined",
      images: [
        "/images/queens_gambit_declined_1.png",
        "/images/queens_gambit_declined_2.png",
        "/images/queens_gambit_declined_3.png",
      ],
    },
    {
      id: 8,
      opening_name: "Scotch Game",
      images: [
        "/images/scotch_game_1.png",
        "/images/scotch_game_2.png",
        "/images/scotch_game_3.png",
      ],
    },
    {
      id: 9,
      opening_name: "Italian Game",
      images: [
        "/images/italian_game_1.png",
        "/images/italian_game_2.png",
        "/images/italian_game_3.png",
      ],
    },
    {
      id: 10,
      opening_name: "Vienna Game",
      images: [
        "/images/vienna_game_1.png",
        "/images/vienna_game_2.png",
        "/images/vienna_game_3.png",
      ],
    },
    {
      id: 11,
      opening_name: "English Opening",
      images: [
        "/images/english_opening_1.png",
        "/images/english_opening_2.png",
        "/images/english_opening_3.png",
      ],
    },
    {
      id: 12,
      opening_name: "Catalan Opening",
      images: [
        "/images/catalan_opening_1.png",
        "/images/catalan_opening_2.png",
        "/images/catalan_opening_3.png",
      ],
    },
    {
      id: 13,
      opening_name: "Pirc Defense",
      images: [
        "/images/pirc_defense_1.png",
        "/images/pirc_defense_2.png",
        "/images/pirc_defense_3.png",
      ],
    },
    {
      id: 14,
      opening_name: "Alekhine's Defense",
      images: [
        "/images/alekhines_defense_1.png",
        "/images/alekhines_defense_2.png",
        "/images/alekhines_defense_3.png",
      ],
    },
    {
      id: 15,
      opening_name: "Grunfeld Defense",
      images: [
        "/images/grunfeld_defense_1.png",
        "/images/grunfeld_defense_2.png",
        "/images/grunfeld_defense_3.png",
      ],
    },
    {
      id: 16,
      opening_name: "Benoni Defense",
      images: [
        "/images/benoni_defense_1.png",
        "/images/benoni_defense_2.png",
        "/images/benoni_defense_3.png",
      ],
    },
    {
      id: 17,
      opening_name: "Dutch Defense",
      images: [
        "/images/dutch_defense_1.png",
        "/images/dutch_defense_2.png",
        "/images/dutch_defense_3.png",
      ],
    },
    {
      id: 18,
      opening_name: "Modern Defense",
      images: [
        "/images/modern_defense_1.png",
        "/images/modern_defense_2.png",
        "/images/modern_defense_3.png",
      ],
    },
    {
      id: 19,
      opening_name: "Bird's Opening",
      images: [
        "/images/birds_opening_1.png",
        "/images/birds_opening_2.png",
        "/images/birds_opening_3.png",
      ],
    },
    {
      id: 20,
      opening_name: "King's Gambit",
      images: [
        "/images/kings_gambit_1.png",
        "/images/kings_gambit_2.png",
        "/images/kings_gambit_3.png",
      ],
    },
    {
      id: 21,
      opening_name: "Philidor Defense",
      images: [
        "/images/philidor_defense_1.png",
        "/images/philidor_defense_2.png",
        "/images/philidor_defense_3.png",
      ],
    },
    {
      id: 22,
      opening_name: "Petrov's Defense",
      images: [
        "/images/petrovs_defense_1.png",
        "/images/petrovs_defense_2.png",
        "/images/petrovs_defense_3.png",
      ],
    },
    {
      id: 23,
      opening_name: "Scandinavian Defense",
      images: [
        "/images/scandinavian_defense_1.png",
        "/images/scandinavian_defense_2.png",
        "/images/scandinavian_defense_3.png",
      ],
    },
    {
      id: 24,
      opening_name: "Evans Gambit",
      images: [
        "/images/evans_gambit_1.png",
        "/images/evans_gambit_2.png",
        "/images/evans_gambit_3.png",
      ],
    },
    {
      id: 25,
      opening_name: "Four Knights Game",
      images: [
        "/images/four_knights_game_1.png",
        "/images/four_knights_game_2.png",
        "/images/four_knights_game_3.png",
      ],
    },
    {
      id: 26,
      opening_name: "Sicilian Defense - Najdorf Variation",
      images: [
        "/images/sicilian_najdorf_1.png",
        "/images/sicilian_najdorf_2.png",
        "/images/sicilian_najdorf_3.png",
      ],
    },
    {
      id: 27,
      opening_name: "Sicilian Defense - Dragon Variation",
      images: [
        "/images/sicilian_dragon_1.png",
        "/images/sicilian_dragon_2.png",
        "/images/sicilian_dragon_3.png",
      ],
    },
    {
      id: 28,
      opening_name: "French Defense - Winawer Variation",
      images: [
        "/images/french_winawer_1.png",
        "/images/french_winawer_2.png",
        "/images/french_winawer_3.png",
      ],
    },
    {
      id: 29,
      opening_name: "Queen's Gambit Accepted",
      images: [
        "/images/queens_gambit_accepted_1.png",
        "/images/queens_gambit_accepted_2.png",
        "/images/queens_gambit_accepted_3.png",
      ],
    },
    {
      id: 30,
      opening_name: "Benko Gambit",
      images: [
        "/images/benko_gambit_1.png",
        "/images/benko_gambit_2.png",
        "/images/benko_gambit_3.png",
      ],
    },
    {
      id: 31,
      opening_name: "King's Indian Attack",
      images: [
        "/images/kings_indian_attack_1.png",
        "/images/kings_indian_attack_2.png",
        "/images/kings_indian_attack_3.png",
      ],
    },
    {
      id: 32,
      opening_name: "Caro-Kann Defense - Classical Variation",
      images: [
        "/images/caro_kann_classical_1.png",
        "/images/caro_kann_classical_2.png",
        "/images/caro_kann_classical_3.png",
      ],
    },
    {
      id: 33,
      opening_name: "Nimzowitsch Defense",
      images: [
        "/images/nimzowitsch_defense_1.png",
        "/images/nimzowitsch_defense_2.png",
        "/images/nimzowitsch_defense_3.png",
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

      <div className="flex max-w-screen-lg flex-wrap mt-12 bg-slate-600 gap-4 p-4">
        {openings.map((opening) => (
          <Opening
            key={opening.id}
            name={opening.opening_name}
            onClick={() => clickHandler(opening.id)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
