import "./App.css";
import Board from "../board/index";
import Square from "../squares/index";
import { useState } from "react";

const defaultSquares = () => new Array(9).fill(null);

const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function App() {
  const [squares, setSquares] = useState(defaultSquares());

  function handleSquareClick(index) {
    const isPlayerTurn =
      squares.filter((square) => square !== null).length % 2 === 0;
    if (isPlayerTurn) {
      let newSquares = squares;
      newSquares[index] = "x";
      setSquares([...newSquares]);
    }
  }

  return (
    <main>
      <div className="App">
        <h1>Noughts and Crosses</h1>
        <Board>
          {squares.map((square, index) => (
            <Square
              x={square === "x" ? 1 : 0}
              o={square === "o" ? 1 : 0}
              onClick={() => handleSquareClick(index)}
            />
          ))}
        </Board>
      </div>
    </main>
  );
}

export default App;
